import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import styled from '@emotion/styled';

import { Button, FontWeights, Icon, Modal, ModalProps, Typography } from '../../../../components';
import { routes } from '../../../../containers';
import { useStore } from '../../../../hooks';
import { flexHelper } from '../../../../utils';

const PaymentModalContent = styled.div({
  ...flexHelper('center', 'center', 'column'),
});

const ButtonsRow = styled.div({
  marginTop: 32,
  ...flexHelper('center', 'center'),
  gap: 15,
});

type PaymentModalProps = ModalProps & {
  lessonId: number;
};

export const PaymentModal = ({ visible, lessonId, onClose }: PaymentModalProps) => {
  const [isPaid, setIsPaid] = useState(false);
  const { payForLesson, paidLessons } = useStore();
  const navigate = useNavigate();

  const handlePay = () => {
    payForLesson(lessonId);
  };

  const handleNavigate = () => {
    navigate(routes.lesson.getPath(lessonId));
  };

  useEffect(() => {
    if (paidLessons.includes(lessonId)) {
      setIsPaid(true);
    }
  }, [paidLessons, lessonId]);

  return (
    <Modal visible={visible} onClose={onClose}>
      <PaymentModalContent>
        {isPaid ? (
          <>
            <Icon type="check-mark-circle" width={80} height={82} />
            <Typography variant="body" align="center" css={{ marginTop: 12 }}>
              Success! You can now proceed to taking this lesson
            </Typography>
            <Button text="next" onClick={handleNavigate} sx={{ marginTop: 27, width: 117 }} />
          </>
        ) : (
          <>
            <Typography variant="body" align="center" css={{ marginTop: 26, maxWidth: 320 }}>
              To access this lesson, you need to make a payment of{' '}
              <span css={{ fontWeight: FontWeights.Bold }}>1 ICP</span>.<br />
              Do you wish to proceed?
            </Typography>
            <ButtonsRow>
              <Button variant="primary" text="yes" onClick={handlePay} sx={{ width: 117 }} />
              <Button variant="secondary" text="no" onClick={onClose} sx={{ width: 117 }} />
            </ButtonsRow>
          </>
        )}
      </PaymentModalContent>
    </Modal>
  );
};
