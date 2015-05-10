var fs = require('fs');

function getNumNewlines() {
    fs.readFile(process.argv[2], 'utf8', function (err, str) {
        if (err) throw err;
        
        var numNewlines = 0;
        for (var i = 0; i < str.length; i++) {
            if (str[i] === '\n') {
                numNewlines += 1;
            } 
        } 

        console.log(numNewlines);
    });
}

getNumNewlines();
