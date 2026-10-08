import React from "react";
import { Link as RouterLink } from "react-router";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export default function Link({ href, children, ...props }: LinkProps) {
  return (
    <RouterLink to={href} {...props}>
      {children}
    </RouterLink>
  );
}
