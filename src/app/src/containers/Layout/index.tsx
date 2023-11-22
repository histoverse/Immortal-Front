import { FC, PropsWithChildren } from 'react';
import { useMatch } from 'react-router';
import styled from '@emotion/styled';

import { startBg } from '../../assets/images';
import { useStore } from '../../hooks';
import { COLOR_CONTAINER_BG, RADIUS_M } from '../../styles';
import { flexHelper } from '../../utils';
import { Footer, Header, routes } from '..';

const Container = styled.div<{ isAuth: boolean; isLessonPage: boolean }>(
  {
    position: 'relative',
    margin: '24px',
    ...flexHelper(),
    width: 'calc(100vw - 48px)',
    borderRadius: RADIUS_M,
    overflow: 'hidden',
  },
  ({ isAuth, isLessonPage }) => ({
    height: isLessonPage ? '100%' : 'calc(100vh - 48px)',
    minHeight: 'calc(100vh - 48px)',
    overflowY: isLessonPage ? 'scroll' : 'hidden',
    background: isAuth ? COLOR_CONTAINER_BG : `center / cover no-repeat url(${startBg})`,
  }),
);

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { isAuthenticated } = useStore();
  const isLessonPage = useMatch(routes.lesson.root);

  return (
    <Container isAuth={isAuthenticated || false} isLessonPage={!!isLessonPage}>
      {isAuthenticated && <Header />}
      {children}
      <Footer />
    </Container>
  );
};
