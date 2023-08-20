import React from 'react';
import CustomLink from '@src/app/components/CustomLink';
import { ICONS } from '@src/app/components/SocialIcon/config';
import Image from 'next/image';
import classNames from 'classnames';

interface SocialIconProps {
  icon: ReactNode;
  href: string;
  className?: string;
}

const SocialIcon = ({ icon, href, className }: SocialIconProps) => {
  const defaultStyle =
    'h-6 w-6 text-catskill-white-300 hover:text-catskill-white-50';
  const combinedClassNames = classNames(defaultStyle, className);

  const iconWithClass = React.cloneElement(icon, {
    className: combinedClassNames,
  });

  return (
    <CustomLink href={href} className={combinedClassNames}>
      {iconWithClass}
    </CustomLink>
  );
};

export default SocialIcon;
