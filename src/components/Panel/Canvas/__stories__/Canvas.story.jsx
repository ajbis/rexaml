import React from 'react';
import styled from 'styled-components';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, number, select } from '@storybook/addon-knobs';
import Page from '../../../Page/Page';
import Canvas from '../index';

export default {
  title: 'Panel',
  component: Canvas,
  decorators: [ withA11y, withKnobs ],
};

const Content = styled.div(({ background }) => ({
  background,
  height: '100%',
  width: '100&',
}));

export const canvas = () => {
  const heightType = select('Height type', ['Auto', '*', 'Number'], 'Auto');
  const heightValue = heightType !== 'Auto' ?
      number(
          heightType === '*' ?
              'Proportional height (0 to 1)' :
              'Height in pixels',
          heightType === '*' ? 1 : 100
      ) : 'Auto';

  const widthType = select('Width type', ['Auto', '*', 'Number'], 'Auto');
  const widthValue = widthType !== 'Auto' ?
    number(
    widthType === '*' ?
          'Proportional width (0 to 1)' :
          'Width in pixels',
        widthType === '*' ? 1 : 100
    ) : 'Auto';

  console.log('height?', heightType === '*' ? `${heightValue}*` : heightValue);
  console.log('width?', widthType === '*' ? `${widthValue}*` : widthValue);

  return (
      <Page>
        <Canvas
          Height={heightType === '*' ? `${heightValue}*` : heightValue}
          Width={widthType === '*' ? `${widthValue}*` : widthValue}
        >
          <Content background="red">Canvas 1</Content>
        </Canvas>
        <Canvas
          Height={heightType === '*' ? `${heightValue}*` : heightValue}
          Width={widthType === '*' ? `${widthValue}*` : widthValue}
        >
          <Content background="green">Canvas 2</Content>
        </Canvas>
      </Page>
  );
};

