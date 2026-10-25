export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Service', href: '/service' },
  { label: 'Product', href: '/product' },
  { label: 'About', href: '/about' },
  { label: 'Book Call', href: '/book-call' },
];
