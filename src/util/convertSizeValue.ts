export default (value?: string | number): string => {
    // console.log('value...', value);

    if (typeof value === 'number') {
        // TODO: return in rems after getting the current CSS :root value

        return `${value}px`;
    } else if (value?.endsWith('*')) {
        // TODO: v1 * values are simplified. We’ll read from parent and distribute weight later.

        const number = parseFloat(value)

        if (isNaN(number) || number === 1) {
            return '100%';
        }

        return `${number * 100}%`;
    }

    return 'auto';
};