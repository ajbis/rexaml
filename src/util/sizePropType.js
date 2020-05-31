const isProportionalValue = value => value instanceof String && /^(\*|\d+\*|\d+\.\d+\*)$/.test(value);

const sizePropTypeTest = (props, propName, componentName) => {
  const value = props[propName];

  if (isNaN(value) || value === 'Auto' || isProportionalValue(value) ) {
    return null;
  }

  return new TypeError(`Invalid Size Value: ${value} for ${propName} in ${componentName}`);
};

const sizePropType = (props, propName, componentName) => {
  const value = props[propName];

  if (value === null || value === undefined) {
    return null;
  }

  return sizePropTypeTest;
};

sizePropType.isRequired = sizePropTypeTest;

export default {
  sizePropType,
};
