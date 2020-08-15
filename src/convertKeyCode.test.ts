import convertKeyCode from "./convertKeyCode";

describe("convertKeyCode", () => {
  it("should return an object containing if the key is actually pressed", () => {
    const event = new Object({ keyCode: 37 });

    const expected = {
      char: "%",
      isCtrl: undefined,
      isDir: true,
      isDown: false,
      isDownDir: false,
      isEnd: false,
      isEnter: false,
      isEsc: false,
      isHome: false,
      isLeftDir: true,
      isPageDown: false,
      isPageUp: false,
      isRightDir: false,
      isShift: undefined,
      isSpace: false,
      isTab: false,
      isUp: true,
      isUpDir: false,
      keyCode: 37,
    };

    expect(convertKeyCode(event)).toEqual(expected);
  });
});
