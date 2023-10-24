const { check } = require("express-validator");
const { validateResult } = require("../helpers/validateHelper");

const validateCreate = [
  check("text")
    .exists()
    .not()
    .isEmpty()
    .custom((value) => {
      if (value.length > 50) {
        throw new Error("El texto no puede tener mas de 50 caracteres");
      }
      return true;
    })
    .custom((value) => {
      if (value.length < 3) {
        throw new Error("El texto no puede tener menos de 3 caracteres");
      }
      return true;
    }),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];
module.exports = { validateCreate };
