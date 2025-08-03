"use client";

import Link from "next/link";
import React from "react";

type CustomLinkButtonProps = {
  href: string;
  text: string;
  bgcolor?: string; // e.g. 'bg-primary hover:bg-primary-dark' or any Tailwind class
  textColor?: string; // e.g. 'text-white'
  icon?: React.ReactNode;
  className?: string;
  target?: string; // optional, e.g., '_blank'
  rel?: string; // optional, for security with target='_blank'
};

const CustomLinkButton: React.FC<CustomLinkButtonProps> = ({
  href,
  text,
  bgcolor = "bg-primary hover:bg-primary-dark",
  textColor = "text-white",
  icon,
  className = "",
  target,
  rel,
}) => (
  <Link
    href={href}
    passHref
    target={target}
    rel={rel}
    className={`flex items-center justify-center gap-2 px-8 py-3 font-heading font-semibold transition rounded-full ${bgcolor} ${textColor} ${className}`}>
    <span>{text}</span>
    {icon && <span>{icon}</span>}
  </Link>
);

export default CustomLinkButton;
