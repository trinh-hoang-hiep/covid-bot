const fs = require("fs")
const fsp = require('fs').promises;
const path = require("path")


module.exports = main

async function main(target) {
    // get local site path
    let projectRoot = __dirname.replace(/(cli|util)$/, "")
    let sitePath = `${projectRoot}_site\\`

    // overwrite files in target path
    copyDir(sitePath, target)
}


// https://stackoverflow.com/a/52562541/1366033
async function copyDir(src, dest) {
    const entries = await fsp.readdir(src, { withFileTypes: true });

    try {
        await fsp.mkdir(dest);
    } catch (error) {
        if (error.code != 'EEXIST') console.log(error)
    }

    for (let entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        if (entry.isDirectory()) {
            await copyDir(srcPath, destPath);
        } else {
            await fsp.copyFile(srcPath, destPath);
        }
    }
}