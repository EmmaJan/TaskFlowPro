import { clsx } from "clsx";
import React, { type ComponentPropsWithoutRef } from "react";
import { Button as RACButton, Link as RACLink, type ButtonProps as RACButtonProps } from "react-aria-components";
import "./button.css";

// Type AnchorOrButtonProps (copié depuis utils)
export type AnchorOrButtonSharedProps = {
  children?: React.ReactNode;
  href?: string;
};

export type AnchorOrButtonProps = (
  | RACButtonProps
  | ComponentPropsWithoutRef<typeof RACLink>
) &
  AnchorOrButtonSharedProps;

export type ButtonProps = {
  type?: ComponentPropsWithoutRef<"button">["type"];
  size?: "small" | "medium";
  variant?: "primary" | "neutral" | "subtle";
} & AnchorOrButtonProps;

function isAnchorProps(
  props: ButtonProps,
): props is ButtonProps & ComponentPropsWithoutRef<typeof RACLink> {
  return "href" in props;
}

export const Button = React.forwardRef(function Button(
  { className, size = "medium", variant = "primary", ...props }: ButtonProps,
  ref: React.ForwardedRef<HTMLElement>,
) {
  const classNames = clsx(
    className,
    "button",
    `button-size-${size}`,
    `button-variant-${variant}`,
  );

  return isAnchorProps(props) ? (
    <RACLink
      {...(props as ComponentPropsWithoutRef<typeof RACLink>)}
      className={classNames}
      ref={ref as React.ForwardedRef<HTMLAnchorElement>}
    >
      {props.children}
    </RACLink>
  ) : (
    <RACButton
      {...(props as RACButtonProps)}
      className={classNames}
      ref={ref as React.ForwardedRef<HTMLButtonElement>}
    >
      {props.children}
    </RACButton>
  );
});

