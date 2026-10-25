import { Link as RLink } from '@tanstack/react-router';
import type { AnchorHTMLAttributes, ReactNode } from 'react';

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; children?: ReactNode };

export default function Link({ href, children, ...rest }: Props) {
  if (/^(https?:|mailto:|tel:|#)/.test(href)) {
    return <a href={href} {...rest}>{children}</a>;
  }
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <RLink to={href as any} {...(rest as any)}>{children}</RLink>
  );
}
