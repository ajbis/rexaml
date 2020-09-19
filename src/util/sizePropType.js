const isProportionalValue = value => typeof value === 'string' && /^(\*|\d+\*|\d+\.\d+\*)$/.test(value);

const sizePropTypeTest = (props, propName, componentName) => {
  const value = props[propName];

  console.log(propName, value, !isNaN(value), value === 'Auto', isProportionalValue(value));
  console.log('...', typeof value, typeof value === 'string', /^(\*|\d+\*|\d+\.\d+\*)$/.test(value));

  if (!isNaN(value) || value === 'Auto' || isProportionalValue(value)) {
    return null;
  }

  return new TypeError(`Invalid Size Value: ${value} for ${propName} in ${componentName}`);
};

const sizePropType = (props, propName, componentName) => {
  const value = props[propName];

  if (value === null || value === undefined) {
    return null;
  }

  return sizePropTypeTest(props, propName, componentName);
};

sizePropType.isRequired = sizePropTypeTest;

export default sizePropType;
