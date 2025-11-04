const { celsiusToFahrenheit, fahrenheitToCelsius } = require("./temperature");

describe("Temperature Converter - TDD Challenge", () => {
  describe("Step 1: celsiusToFahrenheit - Basic Conversions", () => {
    test("converts 0°C to 32°F (freezing point)", () => {
      expect(celsiusToFahrenheit(0)).toBe(32);
    });

    test("converts 100°C to 212°F (boiling point)", () => {
      expect(celsiusToFahrenheit(100)).toBe(212);
    });

    test("converts 25°C to 77°F (room temperature)", () => {
      expect(celsiusToFahrenheit(25)).toBe(77);
    });
  });

  describe.skip("Step 2: celsiusToFahrenheit - Edge Cases", () => {
    test("converts -40°C to -40°F (same temperature)", () => {
      expect(celsiusToFahrenheit(-40)).toBe(-40);
    });

    test("converts 37°C to 98.6°F (body temperature)", () => {
      expect(celsiusToFahrenheit(37)).toBeCloseTo(98.6, 1);
    });

    test("handles negative temperatures", () => {
      expect(celsiusToFahrenheit(-10)).toBe(14);
    });
  });

  describe.skip("Step 3: fahrenheitToCelsius - Basic Conversions", () => {
    test("converts 32°F to 0°C (freezing point)", () => {
      expect(fahrenheitToCelsius(32)).toBe(0);
    });

    test("converts 212°F to 100°C (boiling point)", () => {
      expect(fahrenheitToCelsius(212)).toBe(100);
    });

    test("converts 77°F to 25°C (room temperature)", () => {
      expect(fahrenheitToCelsius(77)).toBe(25);
    });
  });

  describe.skip("Step 4: fahrenheitToCelsius - Edge Cases", () => {
    test("converts -40°F to -40°C (same temperature)", () => {
      expect(fahrenheitToCelsius(-40)).toBe(-40);
    });

    test("converts 98.6°F to 37°C (body temperature)", () => {
      expect(fahrenheitToCelsius(98.6)).toBeCloseTo(37, 1);
    });

    test("handles negative temperatures", () => {
      expect(fahrenheitToCelsius(14)).toBe(-10);
    });
  });

  describe.skip("Challenge: Round-trip Conversions", () => {
    test("round-trip conversion maintains precision", () => {
      const originalCelsius = 25;
      const fahrenheit = celsiusToFahrenheit(originalCelsius);
      const backToCelsius = fahrenheitToCelsius(fahrenheit);
      expect(backToCelsius).toBeCloseTo(originalCelsius, 1);
    });

    test("round-trip with negative temperature", () => {
      const originalCelsius = -15;
      const fahrenheit = celsiusToFahrenheit(originalCelsius);
      const backToCelsius = fahrenheitToCelsius(fahrenheit);
      expect(backToCelsius).toBeCloseTo(originalCelsius, 1);
    });
  });

  describe.skip("Bonus: Extreme Temperatures", () => {
    test("handles very high temperatures", () => {
      expect(celsiusToFahrenheit(1000)).toBe(1832);
      expect(fahrenheitToCelsius(1832)).toBeCloseTo(1000, 1);
    });

    test("handles very low temperatures", () => {
      expect(celsiusToFahrenheit(-273)).toBeCloseTo(-459.4, 1);
      expect(fahrenheitToCelsius(-459.4)).toBeCloseTo(-273, 1);
    });
  });
});
