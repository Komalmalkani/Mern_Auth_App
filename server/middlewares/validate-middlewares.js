

const validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (err) {
        const status = 422;  // Status should be a number, not a string
        const message = "Fill the input properly";
        const extraDetails = err.errors[0].message;

        const error = {
            status,
            message,
            extraDetails,
        }; 
        next(error);  // Pass the error to the next middleware
    }
};

module.exports = validate;
