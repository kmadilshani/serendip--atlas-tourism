"use client";
import React from "react";
import Link from "next/link";

interface CustomLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  to?: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function CustomLink({ href, to, children, ...props }: CustomLinkProps) {
  const target = href || to || "/";
  return (
    <Link href={target} {...props}>
      {children}
    </Link>
  );
}
