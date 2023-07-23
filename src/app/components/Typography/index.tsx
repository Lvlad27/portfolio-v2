import { ElementType, ReactNode } from 'react';
import {
  TYPOGRAPHY_VARIANTS,
  TYPOGRAPHY_COLOR_VARIANTS,
} from '@src/app/components/Typography/config';

interface TypographyProps {
  children: ReactNode;
  variant?: keyof typeof TYPOGRAPHY_VARIANTS;
  color?: keyof typeof TYPOGRAPHY_COLOR_VARIANTS;
  className?: string;
  as?: ElementType;
}

const Typography = ({
  variant = 'body1',
  color = 'primary',
  className,
  children,
  as: Component = 'p',
}: TypographyProps) => {
  return (
    <Component
      className={`${TYPOGRAPHY_VARIANTS[variant]} ${
        TYPOGRAPHY_COLOR_VARIANTS[color]
      } ${className || ''}`}
    >
      {children}
    </Component>
  );
};

export default Typography;
