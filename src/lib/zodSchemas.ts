import z from "zod";
import { patterns } from "./constants";

const regexSchema = (pattern: RegExp) => z.coerce.string().regex(pattern);

const requiredStringSchema = z.string().min(1).max(255).trim();

const passwordSchema = z
  .string()
  .max(255)

  .refine((str) => patterns.minimumOneUpperCaseLetter.test(str), {
    message: "Must contain at least one upper-case letter",
  })

  .refine((str) => patterns.minimumOneLowerCaseLetter.test(str), {
    message: "Must contain at least one lower-case letter",
  })

  .refine((str) => patterns.minimumOneDigit.test(str), {
    message: "Must contain at least one digit",
  })

  .refine((str) => patterns.minimumOneSpecialCharacter.test(str), {
    message: "Must contain at least one special character",
  })

  .refine((str) => patterns.minEightCharacters.test(str), {
    message: "Password must be at least 8 characters long",
  });

export { requiredStringSchema, passwordSchema, regexSchema };
