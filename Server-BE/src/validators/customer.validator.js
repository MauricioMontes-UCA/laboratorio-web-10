import { query } from "express-validator";
import handleValidationErrors from "../middlewares/validator.middlewares.js";

class CustomerValidator {
    validateSearchQuery() {
        return [
            query('code')
                .exists().withMessage('Se requiere el query ?code=')
                .bail()
                .isString().withMessage('El parámetro code debe ser un string')
                .bail()
                .notEmpty().withMessage('El parámetro code no puede ser vacío')
                .trim(),
            
            handleValidationErrors
        ]
    }
}

const customerValidator = new CustomerValidator();

export default customerValidator;