import Theme from "../../src/utils/Theme";

describe("Constants File", () => {
  it("should have the correct values for COLORS", () => {
    expect(Theme.COLORS).toEqual({
      TEXT_BLACK: "#1C1C1E",
      TEXT_GREY: "#7D7D7D",
      BACKGROUND_YELLOW: "#FFCC00",
      BACKGROUND_WHITE: "#FFFFFF",
      ERROR: "#F44336",
      SUCCESS: "#4CAF50",
      WARNING: "#FF9800",
      BORDER_COLOR: "#D8D8DD",
    });
  });

  it("should have the correct values for TYPOGRAPHY", () => {
    expect(Theme.TYPOGRAPHY).toEqual({
      FONT_FAMILY: {
        DEFAULT: "Roboto",
        HEADING: "Roboto-Bold",
      },
      FONT_SIZE: {
        SMALL: 12,
        MEDIUM: 16,
        MED_LARGE: 20,
        LARGE: 24,
        XLARGE: 32,
      },
      LINE_HEIGHT: {
        SMALL: 18,
        MEDIUM: 22,
        LARGE: 30,
      },
      FONT_WEIGHT: {
        LIGHT: "300",
        REGULAR: "400",
        BOLD: "700",
      },
    });
  });

  it("should have the correct values for SPACING", () => {
    expect(Theme.SPACING).toEqual({
      SMALL: 8,
      MEDIUM: 16,
      MED_LARGE: 20,
      LARGE: 32,
      XLARGE: 48,
    });
  });

  it("should have the correct values for RADIUS", () => {
    expect(Theme.RADIUS).toEqual({
      DEFAULT: 4,
      REPORT_CARD: 12,
      BUTTON: 8,
      IMAGE: 20,
    });
  });

  it("should have the correct values for SHADOW", () => {
    expect(Theme.SHADOW).toEqual({
      DEFAULT: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    });
  });

  it("should have the correct values for BUTTON_PADDING", () => {
    expect(Theme.BUTTON_PADDING).toEqual({
      HORIZONTAL: 20,
      VERTICAL: 12,
    });
  });

  it("should have the correct values for ICON_SIZE", () => {
    expect(Theme.ICON_SIZE).toEqual({
      SMALL: 16,
      MEDIUM: 24,
      LARGE: 32,
      XLARGE: 48,
    });
  });

  it("should have the correct values for ICON_COLOR", () => {
    expect(Theme.ICON_COLOR).toEqual({
      BLACK: "#1C1C1E",
      FIRE: "#FF0000",
      EARTHQUAKE: "#964B00",
    });
  });
});
