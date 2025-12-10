import { ZodError } from "zod";
import { AuthError } from "next-auth";
import { Prisma } from "../../generated/prisma";
import { fromError } from "zod-validation-error";

const PRISMA_ERROR_CODES = new Map<string, string>([
  [
    "P2000",
    "The provided value for the column is too long for the column's type",
  ],
  ["P2001", "The record searched for in the where condition does not exist"],
  ["P2002", "Unique constraint failed"],
  ["P2003", "Foreign key constraint failed"],
  ["P2004", "A constraint failed on the database"],
  [
    "P2005",
    "The value stored in the database for the field is invalid for the field's type",
  ],
  ["P2006", "The provided value for the field is not valid"],
  ["P2007", "Data validation error"],
  ["P2008", "Failed to parse the query. Check the query syntax."],
  ["P2009", "Failed to validate the query. The query cannot be executed."],
  ["P2010", "Raw query failed. Check database logs for details."],
  ["P2011", "Null constraint violation. A required field cannot be null."],
  ["P2012", "Missing a required value"],
  ["P2013", "Missing the required argument for the field"],
  ["P2014", "Relation violation between records"],
  ["P2015", "A related record could not be found"],
  ["P2016", "Query interpretation error"],
  ["P2017", "Relation does not exist"],
  ["P2018", "Required connected records not found"],
  ["P2019", "Input error: invalid value provided"],
  ["P2020", "Value out of range for field type"],
  ["P2021", "The table does not exist in the database"],
  ["P2022", "The column does not exist in the database"],
  ["P2023", "Inconsistent column data"],
  ["P2024", "Timed out waiting for the database to respond"],
  ["P2025", "Operation failed because a required record was not found"],
  ["P2026", "The operation is not supported by the current database provider"],
  ["P2027", "Multiple errors occured on the database during query execution"],
]);

export function getErrorMessage(error: unknown): string {
  // Prisma known errors
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    const msg = PRISMA_ERROR_CODES.get(error.code);
    if (msg) return msg;

    return "A database error occurred";
  }

  // Prisma validation errors
  if (error instanceof Prisma.PrismaClientValidationError) {
    return "Invalid data format for database operation";
  }

  // Zod validation errors
  if (error instanceof ZodError) {
    const message = fromError(error);
    if (message) {
      return message.toString();
    }
  }

  // Auth errors
  if (error instanceof AuthError) {
    return "Authentication failed";
  }

  if (error instanceof Error) {
    return error.message;
  }

  // Fallback
  return "An unexpected error occurred";
}
