const exec = require('child_process').exec;
var fs = require('fs');
var yargs = require('yargs').argv;
const path = require('path');
const spawn = require('child_process').spawn;

console.log(yargs.modulePath);


// compileProgram();


function compileProgram() {
    const options = {
        cwd: path.join(__dirname, '../')
    };
    exec("tsc", options, (err, stdo, stdi) => {
        if (err) {
            console.error(err);
        } else {
            updateVersion(path.join(__dirname, '../', 'package.json'), 'minor','../dist/jett-modules/');
        }
    });
}

/**
 * 
 * @param {*} jsonFilePath : package.json file path
 * @param {*} updateType : type of update i.e major, minor, rev
 */
function updateVersion(jsonFilePath, updateType,copyTo) {
    const text = fs.readFileSync(jsonFilePath, 'utf8');
    const json = JSON.parse(text);
    const version = json['version'].split('.');
    let major = parseInt(version[0]);
    let minor = parseInt(version[1]);
    let rev = parseInt(version[2]);
    updateType = updateType ? updateType.toLowerCase() : 'rev';
    if (updateType === 'major') {
        major++;
    } else if (updateType === 'minor') {
        minor++;
    } else {
        rev++;
    }
    const versionString = `${major}.${minor}.${rev}`;
    const options = {
        cwd: path.join(__dirname, '../')
    };
    exec("npm version " + versionString, options, (err, stdo, stdi) => {
        if (err) {
            console.error(err);
        } else {
            fs.copyFileSync(jsonFilePath,path.join(__dirname, copyTo,'package.json'));
            const options = {
                cwd: path.join(__dirname, '../dist/jett-modules')
            };
            exec("npm pack", options, (err, stdo, stdi) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log('Finished Successfully');
                }
            });
        }
    });

}



