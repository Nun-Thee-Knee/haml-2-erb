const fs = require('fs');
const { run } = require('./test');

//Provide test.haml here
fs.readFile('test.haml', 'utf8', async (err, haml_data) => {
    if (err) throw err;

    try {
        const erb_data = await run(haml_data);

        fs.writeFile('test.erb', erb_data.split("erb")[1].split("```")[0], (err) => {
            if (err) throw err;
            console.log('File saved successfully.');
        });
    } catch (err) {
        console.error('Error generating erb data:', err);
    }
});
