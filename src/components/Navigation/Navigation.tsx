import clsx from "clsx";
import { type ComponentPropsWithoutRef } from "react";
import { Button as RACButton, type ButtonProps as RACButtonProps } from "react-aria-components";
import "./navigation.css";

export type NavigationProps = ComponentPropsWithoutRef<"nav"> & {
  direction?: "column" | "row";
};

export function Navigation({
  className,
  direction = "row",
  ...props
}: NavigationProps) {
  const classNames = clsx(
    className,
    "navigation",
    `navigation-direction-${direction}`,
  );
  return <nav className={classNames} {...props} />;
}

export type NavigationPillProps = RACButtonProps & {
  isSelected?: boolean;
};

export function NavigationPill({
  className,
  isSelected,
  ...props
}: NavigationPillProps) {
  const classNames = clsx(className, "navigation-pill");
  return (
    <RACButton
      data-selected={isSelected || undefined}
      className={classNames}
      {...props}
    />
  );
}
