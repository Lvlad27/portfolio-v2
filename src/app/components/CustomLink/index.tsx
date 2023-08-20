import Link from 'next/link';
import type { LinkProps } from 'next/link';
import { AnchorHTMLAttributes } from 'react';
import classNames from 'classnames';

const CustomLink = ({
  href,
  className,
  ...rest
}: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const isInternalLink = href && href.startsWith('/');
  const isAnchorLink = href && href.startsWith('#');

  const combinedClassName = classNames(
    'atlantis-300 hover:underline',
    className
  );

  if (isInternalLink) {
    return <Link href={href} {...rest} />;
  }

  if (isAnchorLink) {
    return <a href={href} className={combinedClassName} {...rest} />;
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className={combinedClassName}
      {...rest}
    />
  );
};

export default CustomLink;
