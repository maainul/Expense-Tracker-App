
const findOne = async (model, name) => {
    try {
        const dTyp = await model.findOne({ name: name });
        console.log(`${model.modelName} found:`, dTyp);

        if (dTyp) {
            return { exists: true, message: `${model.modelName} with this ${name} already exists` };
        } else {
            console.log(`${model.modelName} with name ${name} not Found`);
            return { exists: false, message: null };
        }
    } catch (error) {
        console.error(`Error finding ${model.modelName} name: ${error}`);
        throw error;
    }
};

module.exports = findOne
