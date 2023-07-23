import { ReactNode } from 'react';
import {
  TYPOGRAPHY_VARIANTS,
  TYPOGRAPHY_COLOR_VARIANTS,
} from '@src/app/components/Typography/config';

interface TypographyProps {
  children: ReactNode;
  variant?: keyof typeof TYPOGRAPHY_VARIANTS;
  color?: keyof typeof TYPOGRAPHY_COLOR_VARIANTS;
  className?: string;
}

const Typography = ({
  variant = 'body1',
  color = 'primary',
  className,
  children,
}: TypographyProps) => {
  const SemanticComponent =
    variant === 'body1' || variant === 'body2' || variant === 'caption' || variant==='subtitle1' || variant === 'subtitle2'
      ? 'p'
      : variant;

  return (
    <SemanticComponent
      className={`${TYPOGRAPHY_VARIANTS[variant]} ${
        TYPOGRAPHY_COLOR_VARIANTS[color]
      } ${className || ''}`}
    >
      {children}
    </SemanticComponent>
  );
};

export default Typography;
