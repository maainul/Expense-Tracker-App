const validationLog = (validationResult) => {
    const isValid = validationResult.isValid;
    const errors = validationResult.errors;
    if (isValid) {
        console.log('Validation Successful'.bgGreen);
    } else {
        console.log('Validation Failed in these fields'.bgRed);
        if (isValid != undefined && !errors != undefined) {
            for (const error of errors) {
                console.log(`Field : ${error.field} Error: ${error.error}`.bgRed);
            }
        }
    }
};

export default validationLog;
