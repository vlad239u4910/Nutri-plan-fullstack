import { z } from "zod";

const customErrorMap: z.ZodErrorMap = (issue, ctx) => {
  switch (issue.code) {
    case z.ZodIssueCode.invalid_type:
      return {
        message: `Expected type ${issue.expected}, but received ${issue.received}`,
      };

    case z.ZodIssueCode.too_small:
      return {
        message: `Value is too small. Minimum allowed is ${issue.minimum}`,
      };

    case z.ZodIssueCode.too_big:
      return {
        message: `Value is too big. Maximum allowed is ${issue.maximum}`,
      };

    case z.ZodIssueCode.invalid_string:
      if (issue.validation === "email") {
        return { message: "Invalid email format" };
      }
      if (issue.validation === "uuid") {
        return { message: "Invalid UUID format" };
      }
      return { message: "Invalid string value" };

    case z.ZodIssueCode.custom:
      return {
        message: issue.message || "Invalid value",
      };

    default:
      return { message: ctx.defaultError };
  }
};

export { customErrorMap };
