import { useState } from 'react';
import { useNavigate } from 'react-router';
import styled from '@emotion/styled';

import { infinityCircle } from '../../../../assets/images';
import { FontWeights, Icon, Typography } from '../../../../components';
import { routes } from '../../../../containers';
import { useStore } from '../../../../hooks';
import { COLOR_DISABLED_BG, RADIUS_S, RADIUS_XL, TRANSITION_DEFAULT } from '../../../../styles';
import { flexHelper } from '../../../../utils';
import { PaymentModal } from '../PaymentModal';

import { lessons } from './LessonsList.mock';

const LessonsListWrapper = styled.div({
  marginTop: 52,
  ...flexHelper('center', 'flex-start'),
  gap: 32,
});

const LessonBlock = styled.div({
  ...flexHelper('flex-start', 'center', 'column'),
  gap: 16,
});

const LessonCard = styled.div<{ bgImage: string; isAvailable: boolean }>(
  {
    position: 'relative',
    ...flexHelper('center', 'center'),
    width: 256,
    height: 150,
    borderRadius: 16,
    overflow: 'hidden',
    transition: TRANSITION_DEFAULT,
  },
  ({ bgImage, isAvailable }) => ({
    cursor: isAvailable ? 'pointer' : 'initial',
    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.20), rgba(0, 0, 0, 0.20)), url(${bgImage}) no-repeat center / cover`,
    '&:hover': isAvailable
      ? {
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${bgImage}) 50% / cover no-repeat`,
        }
      : '',
  }),
);

const PriceBox = styled.div({
  position: 'absolute',
  top: 10,
  right: 10,
  padding: '8px 16px 8px 8px',
  ...flexHelper('flex-start', 'center'),
  gap: 16,
  background: COLOR_DISABLED_BG,
  borderRadius: RADIUS_S,
});

const TokenLogo = styled.img({
  width: 24,
  height: 24,
});

const ComingSoonBox = styled.div({
  padding: 16,
  background: COLOR_DISABLED_BG,
  borderRadius: RADIUS_XL,
});

export const LessonsList = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [activeLessonForPay, setActiveLessonForPay] = useState(0);
  const { paidLessons } = useStore();
  const navigate = useNavigate();

  const handleChooseLesson = (id: number) => {
    if (paidLessons.includes(id)) navigate(routes.lesson.getPath(id));
    else {
      setActiveLessonForPay(id);
      setIsOpenModal(true);
    }
  };

  return (
    <>
      <LessonsListWrapper>
        {lessons.map(({ id, image, title, isAvailable }) => (
          <LessonBlock key={id}>
            <LessonCard bgImage={image} isAvailable={isAvailable} onClick={() => isAvailable && handleChooseLesson(id)}>
              {isAvailable ? (
                <>
                  <PriceBox>
                    <TokenLogo src={infinityCircle} alt="token logo" />
                    <Typography variant="label" color="white" weight={FontWeights.Bold}>
                      1
                    </Typography>
                  </PriceBox>
                  <Icon type="play" width={43} height={49} />
                </>
              ) : (
                <ComingSoonBox>
                  <Typography variant="label" color="white">
                    Coming soon
                  </Typography>
                </ComingSoonBox>
              )}
            </LessonCard>
            <Typography variant="label" color="gray">
              {title}
            </Typography>
          </LessonBlock>
        ))}
      </LessonsListWrapper>
      <PaymentModal visible={isOpenModal} onClose={() => setIsOpenModal(false)} lessonId={activeLessonForPay} />
    </>
  );
};
