const { body, validationResult } = require("express-validator");

exports.ipValidator = [

    body("ip")
        .notEmpty()
        .withMessage("IP-Address is required")
        .isIP()
        .withMessage("Invalid IP address")

];

exports.validate = (req, res, next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {

        return res.status(400).json({
            status: false,
            errors: errors.array().map(err => err.msg)
        });

    }

    next();

}