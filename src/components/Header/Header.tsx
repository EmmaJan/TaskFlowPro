import { type ComponentPropsWithoutRef } from "react";
import { Navigation, NavigationPill } from "../Navigation";
import { Button, ButtonGroup } from "../Button/Button";
import "./header.css";

// Logo SVG inline
function Logo() {
  return (
    <svg
      width="40"
      height="35"
      viewBox="0 0 40 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="logo"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20H15V25C15 30.523 19.477 35 25 35C30.523 35 35 30.523 35 25C35 19.477 30.523 15 25 15H20V10C20 4.477 15.523 0 10 0ZM15 15V10C15 7.239 12.761 5 10 5C7.239 5 5 7.239 5 10C5 12.761 7.239 15 10 15H15ZM20 20H25C27.761 20 30 22.239 30 25C30 27.761 27.761 30 25 30C22.239 30 20 27.761 20 25V20Z"
        fill="currentColor"
      />
    </svg>
  );
}

const NAV_ITEMS = [
  "Products",
  "Solutions",
  "Community",
  "Resources",
  "Pricing",
  "Contact",
  "Link",
];

export type HeaderProps = ComponentPropsWithoutRef<"header">;

export function Header({ className, ...props }: HeaderProps) {
  return (
    <header className="header" {...props}>
      <div className="header-content">
        <div className="header-logo">
          <Logo />
        </div>
        <Navigation className="header-nav">
          {NAV_ITEMS.map((item, index) => (
            <NavigationPill key={item} isSelected={index === 0}>
              {item}
            </NavigationPill>
          ))}
        </Navigation>
        <ButtonGroup className="header-auth">
          <Button variant="neutral" size="small">
            Sign in
          </Button>
          <Button variant="primary" size="small">
            Register
          </Button>
        </ButtonGroup>
      </div>
    </header>
  );
}
