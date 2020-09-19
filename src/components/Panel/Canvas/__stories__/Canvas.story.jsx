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
  const heightTitle = heightType === 'Number' ?
    'Height in pixels' :
    'Height is proportional (0 to 1)';

  const widthType = select('Width type', ['Auto', '*', 'Number'], 'Auto');
  const widthTitle = widthType === 'Number' ?
    'Width in pixels' :
    'Width is proportional (0 to 1)';

  const heightValue = number(
    heightType === 'Auto' ? 'Height value ignored' : heightTitle,
    heightType === 'Number' ? 100 : 1
  );

  const widthValue = number(
    widthType === 'Auto' ? 'Width value ignored' : widthTitle,
    widthType === 'Number' ? 100 : 1
  );

  const height = heightType === '*' ? `${!heightValue || heightValue === 1 ? '' : heightValue}*` : heightValue;
  const width = widthType === '*' ? `${!widthValue || widthValue === 1 ? '' : widthValue}*` : widthValue;

  return (
    <Page>
      <Canvas
        Height={height}
        Width={width}
      >
        <Content background="red">Canvas 1</Content>
      </Canvas>
      <Canvas
        Height={height}
        Width={width}
      >
        <Content background="green">Canvas 2</Content>
      </Canvas>
    </Page>
  );
};

