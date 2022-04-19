import './textareaText.scss';

import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';

type DefaultTextareaPropsType = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

type TextareaTextPropsType = DefaultTextareaPropsType & {
  border?: boolean;
};

function TextareaText(props: TextareaTextPropsType) {
  const { border = false, className, ...restProps } = props;

  const finelyClassName = border
    ? `textarea textarea-notBorder ${className}`
    : `textarea ${className}`;

  return <textarea className={finelyClassName} {...restProps} />;
}

export default TextareaText;
