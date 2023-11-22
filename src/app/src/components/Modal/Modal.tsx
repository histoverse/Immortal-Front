import { FC, PropsWithChildren } from 'react';
import Dialog from 'rc-dialog';

import { COLOR_WHITE, RADIUS_L } from '../../styles';

import s from './Modal.scss';

export interface ModalProps {
  visible: boolean;
  onClose: () => void;
}
export const Modal: FC<PropsWithChildren<ModalProps>> = ({ visible, onClose, children }) => {
  return (
    <Dialog
      prefixCls="modal"
      zIndex={1000}
      destroyOnClose
      closable={false}
      visible={visible}
      maskClosable
      onClose={onClose}
      classNames={{ wrapper: s }}
      style={{
        position: 'relative',
        borderRadius: RADIUS_L,
        width: 408,
        padding: '20px 28px 39px',
        background: COLOR_WHITE,
      }}
    >
      {children}
    </Dialog>
  );
};
