import React from "react";

interface ButtonProps {
  onClick: () => void;
  text: string;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  text,
  disabled,
  className,
}) => {
  return (
    <button onClick={onClick} disabled={disabled} className={className}>
      {text}
    </button>
  );
};

export default Button;
