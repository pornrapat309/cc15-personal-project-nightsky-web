import Joi from "joi";

export const registerSchema = Joi.object({
  fullName: Joi.string().trim().empty(""),
  username: Joi.string().trim().required(),
  emailOrMobile: Joi.alternatives([
    Joi.string().email({ tlds: false }),
    Joi.string().pattern(/^[0-9]{10}$/),
  ]).required(),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,30}$/)
    .trim()
    .required(),
  confirmPassword: Joi.string().valid(Joi.ref("password")).trim().required(),
});

export const loginSchema = Joi.object({
  emailOrMobileOrUsername: Joi.string().required(),
  password: Joi.string().required(),
});
