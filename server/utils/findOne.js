
const findOne = async (model, field, value) => {
    try {
        const query = { [field]: value };
        const dTyp = await model.findOne(query);
        console.log(`${model.modelName} found:`, dTyp);

        if (dTyp) {
            return { exists: true, message: `${model.modelName} with ${value} already exists` };
        } else {
            console.log(`${model.modelName} with name ${value} not Found`);
            return { exists: false, message: null };
        }
    } catch (error) {
        console.error(`Error finding ${model.modelName} name: ${error}`);
        throw error;
    }
};

export default findOne
