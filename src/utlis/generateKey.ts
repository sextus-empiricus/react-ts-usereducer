export const generateKey = (name: string): string => {
    return name + Math.floor(Math.random() * (100 - 1 + 1)) + 1;
};