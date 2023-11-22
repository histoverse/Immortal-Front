import { PropsWithChildren } from 'react';
import { Theme } from '@emotion/react';

import { styles } from './Typography.styled';
import { FontFamily, FontWeights, TypographyColors, TypographyVariants } from './Typography.types';

interface TypographyProps {
  variant?: TypographyVariants;
  color?: TypographyColors;
  weight?: FontWeights;
  fontFamily?: FontFamily;
  style?: Theme;
  align?: 'auto' | 'left' | 'right' | 'center';
}

export const Typography = ({
  variant = 'label',
  color = 'black',
  fontFamily = FontFamily.Inter,
  weight,
  children,
  style,
  align,
  ...textProps
}: PropsWithChildren<TypographyProps>) => {
  return (
    <p
      {...textProps}
      css={{
        ...styles.font[fontFamily],
        ...styles[color],
        ...styles[variant],
        ...(align && { textAlign: align }),
        ...(weight && { fontWeight: weight }),
        ...style,
      }}
    >
      {children}
    </p>
  );
};
