import { ReactElement } from 'react';

import { Icon } from '../../components';

type SocialLink = {
  logo: ReactElement;
  url: string;
};

export const socialLinks: SocialLink[] = [
  {
    logo: <Icon type="twitter" width={26} height={26} />,
    url: 'https://twitter.com',
  },
  {
    logo: <Icon type="youtube" width={30} height={30} />,
    url: 'https://youtube.com',
  },
  {
    logo: <Icon type="facebook" width={32} height={32} />,
    url: 'https://facebook.com',
  },
  {
    logo: <Icon type="instagram" width={32} height={32} />,
    url: 'https://instagram.com',
  },
];
