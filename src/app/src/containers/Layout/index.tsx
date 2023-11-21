import { FC, PropsWithChildren } from 'react';
import styled from '@emotion/styled';

import { Footer, Index } from '..';

const LayoutBox = styled.div({});

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <LayoutBox>
      <Index />
      {children}
      <Footer />
    </LayoutBox>
  );
};
