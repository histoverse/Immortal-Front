import styled from '@emotion/styled';

import { Button } from '../../components';
import { flexHelper } from '../../utils';

import { socialLinks } from './Footer.helper';

const FooterWrapper = styled.div({
  position: 'absolute',
  left: 0,
  bottom: 0,
  padding: 30,
  width: '100%',
});

const SocialLinks = styled.div({
  ...flexHelper('flex-start', 'center'),
  gap: 16,
});

export const Footer = () => {
  return (
    <FooterWrapper>
      <SocialLinks>
        {socialLinks.map(({ logo, url }) => (
          <Button key={url} href={url} iconImg={logo} />
        ))}
      </SocialLinks>
    </FooterWrapper>
  );
};
