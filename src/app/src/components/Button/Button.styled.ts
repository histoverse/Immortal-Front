import styled from '@emotion/styled';

import {
  COLOR_BLACK,
  COLOR_BORDER_GRAY,
  COLOR_BORDER_PRIMARY,
  COLOR_BUTTON_PRIMARY_BG,
  COLOR_BUTTON_PRIMARY_BG_HOVER,
  COLOR_BUTTON_SECONDARY_BG,
  COLOR_BUTTON_SECONDARY_BG_HOVER,
  COLOR_LINK_BG,
  COLOR_LINK_BG_HOVER,
  RADIUS_FULL,
  RADIUS_XL,
  TRANSITION_DEFAULT,
} from '../../styles';
import { flexHelper } from '../../utils';

import { ButtonProps } from './Button';

export const ButtonStyled = styled('button')<{
  variant: ButtonProps['variant'];
  size?: ButtonProps['size'];
  disabled?: boolean;
}>(
  {
    position: 'relative',
    zIndex: 1,
    ...flexHelper('center', 'center'),
    borderRadius: RADIUS_XL,
    transition: TRANSITION_DEFAULT,
    p: {
      textTransform: 'uppercase',
      color: COLOR_BLACK,
      width: '100%',
    },
  },
  ({ variant, size = 'md' }) => {
    const styleObject = () => {
      if (variant !== 'icon')
        return {
          background: variant === 'primary' ? COLOR_BUTTON_PRIMARY_BG : COLOR_BUTTON_SECONDARY_BG,
          border: variant === 'primary' ? `2px solid ${COLOR_BORDER_PRIMARY}` : 'none',
          '&:hover': {
            background: variant === 'primary' ? COLOR_BUTTON_PRIMARY_BG_HOVER : COLOR_BUTTON_SECONDARY_BG_HOVER,
          },
        };
      return {
        background: 'transparent',
        border: `2px solid ${COLOR_BORDER_GRAY}`,
        '&:hover': {
          background: COLOR_BORDER_GRAY,
        },
      };
    };

    if (size === 'sm') {
      return {
        ...styleObject(),
        height: 32,
        padding: 8,
        p: {
          fontSize: '14px',
          lineHeight: '16px',
        },
      };
    }

    if (size === 'lg') {
      return {
        ...styleObject(),
        height: 80,
        padding: '30px 83px',
      };
    }

    return {
      ...styleObject(),
      height: 56,
      minWidth: 56,
      padding: '16px',
    };
  },
);

export const LinkButton = styled.a({
  ...flexHelper('center', 'center'),
  width: 56,
  height: 56,
  background: COLOR_LINK_BG,
  border: 'none',
  padding: 16,
  borderRadius: RADIUS_FULL,
  transition: TRANSITION_DEFAULT,
  '&:hover': {
    background: COLOR_LINK_BG_HOVER,
  },
});
