export const generateKey = (name: string): string => {
    return name + Math.floor(Math.random() * (99999 - 1 + 1)) + 1;
};