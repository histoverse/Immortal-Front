import { useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router';
import styled from '@emotion/styled';

import { Ellipse, Icon, IconButton, Typography } from '../../components';
import { routes } from '../../containers';
import { useStore } from '../../hooks';
import { COLOR_WHITE } from '../../styles';
import { flexHelper } from '../../utils';
import { lessons } from '../Home/sections';

const LessonWrapper = styled.div({
  ...flexHelper('flex-start', 'center', 'column'),
  width: '100%',
});

const LessonBlock = styled.div({
  position: 'relative',
  marginTop: 17,
  marginBottom: 110,
  width: 960,
  height: 582,
  ...flexHelper('center', 'center'),
  background: COLOR_WHITE,
});

const LessonFrame = styled.iframe({
  width: '100%',
  height: '100%',
});

export const Lesson = () => {
  const { id: lessonId } = useParams();
  const { isAuthenticated, paidLessons } = useStore();
  const navigate = useNavigate();
  const currentLessonInfo = useMemo(() => lessons.find(({ id }) => id === +(lessonId || 0)), [lessonId]);

  useEffect(() => {
    if (!currentLessonInfo || !isAuthenticated || !paidLessons.includes(+(lessonId || 0))) {
      navigate(routes.home.root);
    }
  }, [currentLessonInfo, isAuthenticated, lessonId, navigate, paidLessons]);

  return (
    <LessonWrapper>
      <Typography variant="h1" color="white" align="center" css={{ marginTop: 37 }}>
        {currentLessonInfo?.title}
      </Typography>
      <Ellipse sx={{ marginTop: 17 }} />
      <LessonBlock>
        <IconButton
          iconImg={<Icon type="close" width={24} height={25} />}
          onClick={() => navigate(routes.home.root)}
          sx={{ position: 'absolute', left: -76, top: 0, width: 56 }}
        />
        <LessonFrame src={currentLessonInfo?.url} title={currentLessonInfo?.title} />
      </LessonBlock>
    </LessonWrapper>
  );
};
