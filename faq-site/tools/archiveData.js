module.exports = updateData();

async function updateData() {

    await archiveFaqs()

}

async function archiveFaqs() {
    const { readJsonc, writeFile } = require('./utilities')

    let faqs = await readJsonc("_data/faqs.jsonc")

    let contents = JSON.stringify(faqs, null, 4);

    await writeFile("_data/faqs-prev.jsonc", contents)
}