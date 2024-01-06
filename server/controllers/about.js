import AboutUsModel from "../models/AboutUs.js";
import save from "../utils/saveUtils.js";
import MValidator from "../validator/MValidator.js";
import { logger } from '../middleware/logMiddleware.js'

// Validation Rules
const validationRules = {
    title: {
        type: 'string',
        required: true,
        max: 50,
        min: 3,
    },
    subtitle: {
        type: 'string',
        required: true,
        min: 1
    },
    description: {
        type: 'string',
        required: true,
        min: 1
    },
}

const createAboutUs = async (req, res) => {
    try {
        const { title, subtitle, description, image } = req.body
        logger.info(`Request data ===>\n name : ${req.body}`.bgBlue);
        // Validation
        const validationResult = await MValidator(req, validationRules, AboutUsModel);

        if (!validationResult.isValid) {
            return res.status(400).send({
                success: false,
                message: 'Validation Failed',
                errors: validationResult.errors
            });
        }

        const saveData = await save(AboutUsModel, { title, subtitle, description, image })
        logger.info(`About Us Added Successfully :\n ${saveData}`);

        return res.status(201).send({
            success: true,
            message: 'Data added successfully',
            data: saveData,
        });

    } catch (error) {
        console.error('Error In About Page', error)

        const status = error.status || 500
        return res.status(status).send({
            success: false,
            message: 'Error In About Page',
            error: error.message || error,
        });
    }
};



const updateaboutUs = async (req, res) => {
    try {
        const { id } = req.params.id
        const { title, subtitle, description, image } = req.body
        logger.info(`Request data ===>\n name : ${req.body}`.bgBlue);

        // Get Data By Id
        const aboutUsData = await AboutUsModel.findById({ _id: id })
        const updatedAboutUs = await AboutUsModel.findByIdAndUpdate({ id }, {
            title: title || aboutUsData?.title,
            subtitle: subtitle || aboutUsData?.subtitle,
            description: description || aboutUsData?.description,
            image: image || aboutUsData?.image
        }, { new: true })
        logger.info(`About Us Added Successfully :\n ${updatedAboutUs}`);
        return res.status(201).send({
            success: true,
            message: 'Data Updated successfully',
            data: saveData,
        });

    } catch (error) {
        console.error('Error In About Page', error)

        const status = error.status || 500
        return res.status(status).send({
            success: false,
            message: 'Error In About Page',
            error: error.message || error,
        });
    }
};

export default { createAboutUs, updateaboutUs };
