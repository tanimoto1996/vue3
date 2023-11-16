export const getSessionStorage = (key: string): string | null => {
    return window.sessionStorage.getItem(key);
}

export const setSessionStorage = (key: string, value: string): void => {
    return window.sessionStorage.setItem(key, value);
}

export const deleteSessionStorage = (key: string): void => {
    window.sessionStorage.removeItem(key);
}