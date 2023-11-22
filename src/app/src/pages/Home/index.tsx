import styled from '@emotion/styled';

import { Button, Ellipse, Typography } from '../../components';
import { useStore } from '../../hooks';
import { flexHelper } from '../../utils';

import { LessonsList } from './sections';

const HomeWrapper = styled.div({
  position: 'relative',
  ...flexHelper('flex-start', 'center', 'column'),
  minWidth: '100%',
  height: '100%',
});

export const Home = () => {
  const { login, isAuthenticated } = useStore();

  return (
    <HomeWrapper>
      {isAuthenticated ? (
        <>
          <Typography variant="h1" color="white" align="center" css={{ marginTop: 43, width: 463 }}>
            gamified history lessons
          </Typography>
          <Ellipse sx={{ marginTop: 12 }} />
          <LessonsList />
        </>
      ) : (
        <>
          <Ellipse isLarge />
          <Button
            variant="primary"
            text="log in and start"
            onClick={login}
            sx={{ margin: 'auto auto 55px', width: 205 }}
          />
        </>
      )}
    </HomeWrapper>
  );
};
