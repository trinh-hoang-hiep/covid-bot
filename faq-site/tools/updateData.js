const { promises: fs } = require("fs");
const qnaMakerApi = require('@ads-vdh/qnamaker-api');
const GENERATED_FILE_WARNING = "// GENERATED FILE - only update by re-running updateData.js - local changes will be wiped out\r\n"

let filePath = process.env.AZURE_ENVIRONMENT ? `.env.${process.env.AZURE_ENVIRONMENT}` : ".env"
require('dotenv').config({ path: filePath })


module.exports = updateData();

async function updateData() {

    let client = qnaMakerApi({
        endpoint: process.env.Endpoint,
        apiKey: process.env.OcpApimSubscriptionKey,
        kbId: process.env.kbId
    })

    await archiveFaqs()
    await updateKnowledgeBase(client)
    await updateAlterations(client)

}

async function archiveFaqs() {
    const { readJsonc } = require('./utilities')

    let faqs = await readJsonc("_data/faqs.jsonc")

    let contents = JSON.stringify(faqs, null, 4);

    await writeFile("_data/faqs-prev.jsonc", contents)
}

async function updateKnowledgeBase(client) {
    let knowledgeBase = await client.knowledgeBase.download()

    let contents = JSON.stringify(knowledgeBase, null, 4);

    await writeFile("_data/faqs.jsonc", contents)
}

async function updateAlterations(client) {

    let alterations = await client.alterations.get();

    // etl mapping
    let allEntries = alterations.wordAlterations.map(alts => {
        let altWords = alts.alterations
        let entries = altWords.map((el, i) => {
            let nextIndex = i === altWords.length - 1 ? 0 : i + 1
            let next = altWords[nextIndex]
            let cur = altWords[i]

            return [cur, next]
        })

        return entries
    })
    let flatEntries = [].concat(...allEntries)
    let synonyms = Object.fromEntries(flatEntries)

    let contents = "var synonyms = " + JSON.stringify(synonyms, null, 4);

    await writeFile("assets/synonyms.js", contents)
}

async function writeFile(path, contents) {

    let projectRoot = __dirname.replace(/tools$/, "");
    let fullPath = `${projectRoot}/${path}`;

    try {
        await fs.writeFile(fullPath, GENERATED_FILE_WARNING + contents)

        console.log(`Data has been written to ${path}`);

    } catch (error) {
        console.error(error)
    }
}