import styled from '@emotion/styled';

import { infinityCircle } from '../../assets/images';
import { Icon, IconButton, Typography } from '../../components';
import { useStore } from '../../hooks';
import { COLOR_BORDER_GRAY, RADIUS_XL } from '../../styles';
import { flexHelper } from '../../utils';

const HeaderWrapper = styled.div({
  position: 'absolute',
  top: 0,
  right: 0,
  padding: 32,
  ...flexHelper('flex-end', 'center'),
  gap: 8,
  width: '100%',
});

const BalanceBox = styled.div({
  padding: 8,
  ...flexHelper('flex-start', 'center'),
  gap: 16,
  border: `2px solid ${COLOR_BORDER_GRAY}`,
  borderRadius: RADIUS_XL,
});

const TokenLogo = styled.img({
  width: 40,
  height: 40,
});

export const Header = () => {
  const { logout } = useStore();

  return (
    <HeaderWrapper>
      <BalanceBox>
        <TokenLogo src={infinityCircle} alt="token logo" />
        <Typography variant="subtitle" color="white" css={{ marginRight: 16 }}>
          10 000.00
        </Typography>
      </BalanceBox>
      <IconButton iconImg={<Icon type="logout" width={24} height={24} />} onClick={logout} sx={{ width: 56 }} />
    </HeaderWrapper>
  );
};
