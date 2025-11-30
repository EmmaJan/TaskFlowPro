import { clsx } from "clsx";
import { Description, FieldError, Label, type SharedFieldProps } from "./Fieldset";
import React from "react";
import {
  Input as RACInput,
  TextField as RACTextField,
  type InputProps as RACInputProps,
  type TextFieldProps as RACTextFieldProps,
} from "react-aria-components";
import "./input.css";

export type InputFieldProps = SharedFieldProps & RACTextFieldProps & {
  type?: string;
  rightElement?: React.ReactNode;
};
export function InputField({
  className,
  placeholder,
  label,
  description,
  errorMessage,
  type,
  rightElement,
  ...props
}: InputFieldProps) {
  const classNames = clsx(className, "field");
  return (
    <RACTextField className={classNames} {...props}>
      {label && <Label>{label}</Label>}
      <Input type={type} placeholder={placeholder} rightElement={rightElement} />
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </RACTextField>
  );
}

export type InputProps = RACInputProps & {
  rightElement?: React.ReactNode;
};
export const Input = React.forwardRef(function Input(
  { className, rightElement, ...props }: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  const classNames = clsx(className, "input");
  
  if (rightElement) {
    return (
      <div className="input-wrapper">
        <RACInput className={classNames} ref={ref} {...props} />
        <div className="input-right-element">
          {rightElement}
        </div>
      </div>
    );
  }
  
  return <RACInput className={classNames} ref={ref} {...props} />;
});
