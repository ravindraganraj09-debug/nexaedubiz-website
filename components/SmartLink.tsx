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
  const isMailto = /^mailto:/i.test(href);
  const isHttp = /^https?:\/\//i.test(href);

  if (isMailto || isHttp) {
    return (
      <a
        href={href}
        {...(isHttp
          ? { target: "_blank", rel: "noopener noreferrer" as const }
          : { rel: "noopener noreferrer" as const })}
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
