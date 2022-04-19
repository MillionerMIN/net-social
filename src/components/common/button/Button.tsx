import './button.scss';

import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type ButtonPropsType = DefaultButtonPropsType & {
  variant?: 'primary' | 'secondary' | 'error';
};

const Button = (props: ButtonPropsType) => {
  const { className = null, variant = 'primary', ...restProps } = props;

  let finelyClassName = `button button-pd ${className}`;
  switch (variant) {
    case 'primary':
      break;
    case 'secondary':
      finelyClassName = `button button-pd button-bgNone ${className}`;
      break;
    case 'error':
      finelyClassName = `button button-pd button-red ${className}`;
      break;
    default:
      finelyClassName = `button button-pd ${className}`;
  }

  return <button className={finelyClassName} {...restProps} />;
};

export default Button;
