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
export const isEscapekey = (event: KeyboardEvent): boolean => {
    return event.keyCode == Key.Escape;
}
export const isTabOrEscapekey = (event: KeyboardEvent): boolean => {
    return event.keyCode == Key.Escape || event.keyCode == Key.Tab;
}
export const isEnterkey = (event: KeyboardEvent): boolean => {
    return event.keyCode == Key.Enter;
}
export const isNavigationkey = (event: KeyboardEvent): boolean => {
    return event.keyCode == Key.ArrowUp || event.keyCode === Key.ArrowDown;
}