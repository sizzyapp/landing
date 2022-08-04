import styled from '@emotion/styled';
import { autoGrid } from 'styled-mixins';
import { smaller } from 'styles/responsive';

import * as A from 'styles/shared-components';

export const Logos = styled.div({
  width: '100%',
  ...autoGrid(150, 30),
  overflow: 'hidden',
  ...smaller(700, {
    ...autoGrid(130, 30),
  }),
  alignItems: 'center',
  justifyItems: 'center',
});

export const DesktopSpace = styled(A.Space)({
  ...smaller(800, {
    display: 'none',
  }),
});

export const Logo = styled.img<{ width?: number }>(
  {
    width: '100%',
    margin: 'auto',
  },
  ({ width = 170 }) => ({
    maxWidth: width,
  })
);
