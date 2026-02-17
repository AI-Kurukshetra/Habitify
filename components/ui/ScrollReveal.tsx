'use client';

import { motion, type Variants } from 'framer-motion';

const easeOut = [0.25, 0.46, 0.45, 0.94] as const;
const duration = 0.55;

type Variant = 'fadeUp' | 'fromLeft' | 'fromRight';

function getVariants(variant: Variant, delay: number): Variants {
  const transition = { duration, ease: easeOut, delay };
  switch (variant) {
    case 'fromLeft':
      return { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition } };
    case 'fromRight':
      return { hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0, transition } };
    default:
      return { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition } };
  }
}

type ScrollRevealProps = {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  as?: keyof typeof motion;
  delay?: number;
  once?: boolean;
  amount?: number;
  id?: string;
};

export function ScrollReveal({
  children,
  variant = 'fadeUp',
  className,
  as = 'div',
  delay = 0,
  once = true,
  amount = 0.15,
  id,
}: ScrollRevealProps) {
  const Component = motion[as] as typeof motion.div;

  return (
    <Component
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={getVariants(variant, delay)}
      className={className}
    >
      {children}
    </Component>
  );
}

type StaggerContainerProps = {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
  amount?: number;
};

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.12,
  once = true,
  amount = 0.1,
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: staggerDelay, delayChildren: 0.05 },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = {
  children: React.ReactNode;
  className?: string;
};

export function StaggerItem({ children, className }: StaggerItemProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
