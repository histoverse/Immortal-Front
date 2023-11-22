import { Theme } from '@emotion/react';

import { RADIAL_GRADIENT } from '../../styles';

type EllipseProps = {
  isLarge?: boolean;
  sx?: Theme;
};

export const Ellipse = ({ isLarge = false, sx }: EllipseProps) => (
  <div
    css={{
      position: isLarge ? 'absolute' : 'relative',
      left: isLarge ? 'calc(50% - 361.5px)' : 0,
      zIndex: 0,
      bottom: isLarge ? 30.5 : 0,
      width: isLarge ? 723 : 528,
      height: isLarge ? 161 : 45,
      background: RADIAL_GRADIENT,
      opacity: 0.67,
      ...sx,
    }}
  />
);
