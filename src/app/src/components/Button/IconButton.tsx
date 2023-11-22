import { FC, ReactElement } from 'react';
import { Theme } from '@emotion/react';

import { Button, ButtonProps } from './Button';

export interface IconButtonProps extends Pick<ButtonProps, 'onClick' | 'disabled'> {
  iconImg: ReactElement;
  sx?: Theme;
}

export const IconButton: FC<IconButtonProps> = ({ iconImg, onClick, disabled = false, sx }) => {
  return <Button variant="icon" iconImg={iconImg} onClick={onClick} disabled={disabled} sx={{ ...sx }} />;
};
