import { validateEmail, validateRedirect } from "./utils";

test("validateEmail returns false for non-emails", () => {
  expect(validateEmail(undefined)).toBe(false);
  expect(validateEmail(null)).toBe(false);
  expect(validateEmail("")).toBe(false);
  expect(validateEmail("not-an-email")).toBe(false);
  expect(validateEmail("n@")).toBe(false);
});

test("validateEmail returns true for emails", () => {
  expect(validateEmail("kody@example.com")).toBe(true);
});

test("validateRedirect returns false for non relative paths", () => {
  expect(validateRedirect("https://www.foo.com")).toBe(false);
  expect(validateRedirect("www.foo.com")).toBe(false);
  expect(validateRedirect("foo.com")).toBe(false);
});

test("validateRedirect returns true for relative paths", () => {
  expect(validateRedirect("/login")).toBe(true);
});