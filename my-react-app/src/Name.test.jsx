import { fullName } from "./Name";

describe("fullName", () => {
  test("should return the full name when given first and last names", () => {
    expect(fullName("Quang", "Luan")).toBe("Quang Luan");
  });

  test("should handle empty first name", () => {
    expect(fullName("", "Luan")).toBe(" Luan");
  });

  test("should handle empty last name", () => {
    expect(fullName("Quang", "")).toBe("Quang ");
  });

  test("should handle both empty names", () => {
    expect(fullName("", "")).toBe(" ");
  });
});
