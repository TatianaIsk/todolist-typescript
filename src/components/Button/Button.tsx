import clsx from 'clsx';
import React, { ComponentPropsWithoutRef, PropsWithChildren, FC } from 'react';

export type ButtonProps = PropsWithChildren<ComponentPropsWithoutRef<'button'>>;

const Button: FC<ButtonProps> = ({ className, children, ...props }) => (
  <button className={clsx(className, 'button')} {...props}>
    {children}
  </button>
);

export default Button;
