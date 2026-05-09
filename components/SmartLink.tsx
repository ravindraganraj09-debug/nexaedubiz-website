import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type SmartLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

export default function SmartLink({
  href,
  children,
  className,
  ...rest
}: SmartLinkProps) {
  const isExternal = /^https?:\/\//i.test(href);

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} {...rest}>
      {children}
    </Link>
  );
}
