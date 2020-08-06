function convertKeyCode(event: KeyboardEvent) {
    const keyCode = event.keyCode || event.which;
    if (keyCode) {
        const isLeftDir = keyCode === 37;
        const isUpDir = keyCode === 38;
        const isRightDir = keyCode === 39;
        const isDownDir = keyCode === 40;
        const isPageUp = keyCode === 33;
        const isPageDown = keyCode === 34;
        const isDown = isRightDir || isDownDir || isPageDown;
        const isUp = isLeftDir || isUpDir || isPageUp;

        return {
            char: String.fromCharCode(keyCode),
            isCtrl: event.ctrlKey,
            isDir: isDown || isUp,
            isDown,
            isDownDir,
            isEnd: keyCode === 35,
            isEnter: keyCode === 13,
            isEsc: keyCode === 27,
            isHome: keyCode === 36,
            isLeftDir,
            isPageDown,
            isPageUp,
            isRightDir,
            isShift: event.shiftKey,
            isSpace: keyCode === 32,
            isTab: keyCode === 9,
            isUp,
            isUpDir,
            keyCode
        };
    }

    return {};

}

export default convertKeyCode;
