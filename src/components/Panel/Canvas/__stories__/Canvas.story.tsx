import React, {CSSProperties} from 'react';
import styled from 'styled-components';
import { withA11y } from '@storybook/addon-a11y';
import Page from '../../../Page/Page';
import Canvas from '../index';

type ContentProps = {
  background?: CSSProperties['background'];
};

export default {
  title: 'Panel/Canvas',
  component: Canvas,
  decorators: [ withA11y ],
};

const Content = styled.div<ContentProps>(({ background }) => ({
  background,
  height: '100%',
  width: '100&',
}));

export const canvas = () => {
  const heightType = 'Number'; // select('Height type', ['Auto', '*', 'Number'], 'Auto');
  const heightTitle = heightType === 'Number' ?
    'Height in pixels' :
    'Height is proportional';

  const widthType = 'Number'; // select('Width type', ['Auto', '*', 'Number'], 'Auto');
  const widthTitle = widthType === 'Number' ?
    'Width in pixels' :
    'Width is proportional';

  const heightValue = 1;
  const widthValue = 1;

  // const heightValue = number(
  //   heightType === 'Auto' ? 'Height value ignored' : heightTitle,
  //   heightType === 'Number' ? 100 : 1
  // );
  //
  // const widthValue = number(
  //   widthType === 'Auto' ? 'Width value ignored' : widthTitle,
  //   widthType === 'Number' ? 100 : 1
  // );

  const height = heightType !== 'Number' ? `${!heightValue || heightValue === 1 ? '' : heightValue}*` : heightValue;
  const width = widthType !== 'Number' ? `${!widthValue || widthValue === 1 ? '' : widthValue}*` : widthValue;

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
