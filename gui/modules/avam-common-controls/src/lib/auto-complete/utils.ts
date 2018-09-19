import { Key } from "./models";

export const validateNonCharKeyCode = (keyCode: number) => {
    return [
        Key.Enter,
        Key.Tab,
        Key.Shift,
        Key.ArrowLeft,
        Key.ArrowUp,
        Key.ArrowRight,
        Key.ArrowDown
    ].every(codeKey => codeKey !== keyCode);
}