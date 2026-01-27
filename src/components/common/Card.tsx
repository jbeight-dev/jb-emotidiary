import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  padding?: 'sm' | 'md' | 'lg';
  hoverable?: boolean;
  className?: string;
  onClick?: () => void;
}

export function Card({
  children,
  padding = 'md',
  hoverable = false,
  className = '',
  onClick,
}: CardProps) {
  const paddings = {
    sm: 'p-3',
    md: 'p-5',
    lg: 'p-8',
  };

  return (
    <motion.div
      whileHover={hoverable ? { scale: 1.02, y: -2 } : undefined}
      className={`bg-[var(--color-bg-card)] rounded-3xl shadow-lg border border-[var(--color-border)] backdrop-blur-sm ${paddings[padding]} ${hoverable ? 'cursor-pointer' : ''} transition-all ${className}`}
      style={{ boxShadow: '0 4px 20px var(--color-shadow)' }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
