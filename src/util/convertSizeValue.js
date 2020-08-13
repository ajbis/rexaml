/**
 * @param value if propType sizePropType
 * @returns {string} CSS value
 */
export default value => {
  console.log('value...', value);

  if (value instanceof Number) {
    // TODO: return in rems after getting the current CSS :root value

    return `${value}px`;
  }

  if (value instanceof String && value.endsWith('*')) {
    // TODO: v1 * values are simplified. We’ll read from parent and distribute weight later.

    const number = parseFloat(value)

    if (isNaN(number) || number === 1) {
      return '100%';
    }

    return `${number * 100}%`;
  }

  return 'auto';
};
