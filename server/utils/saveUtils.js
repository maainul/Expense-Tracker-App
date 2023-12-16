
const save = async (model, fields) => {
    const data = await model(fields).save()
    return data
}

module.exports = save