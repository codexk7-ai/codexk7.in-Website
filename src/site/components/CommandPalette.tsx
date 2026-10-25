import { useEffect, useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { NAV_ITEMS } from '@/site/lib/navigation';
import { trackEvent } from '@/site/lib/analytics';

const SECTIONS = [
  { label: 'Lifecycle & process', href: '/#process' },
  { label: 'Technology stack', href: '/#technology' },
  { label: 'Agentic execution', href: '/#agentic' },
  { label: 'Case studies', href: '/#projects' },
  { label: 'Products', href: '/#products' },
  { label: 'Live agent walkthrough', href: '/#agent-demo' },
  { label: 'Engineering standards', href: '/#engineering' },
];

/** ⌘K / Ctrl+K command palette for jumping to any page or section. */
export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener('keydown', onKey);
    window.addEventListener('codexk7:open-palette', onOpen);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('codexk7:open-palette', onOpen);
    };
  }, []);

  const go = (href: string) => {
    setOpen(false);
    trackEvent('command_palette_select', { href });
    const [path, hash] = href.split('#');
    navigate({ to: (path || '/') as '/', hash: hash || undefined });
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Jump to a page or section…" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Pages">
          {NAV_ITEMS.map((item) => (
            <CommandItem key={item.href} value={item.label} onSelect={() => go(item.href)}>
              {item.label}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Sections on home">
          {SECTIONS.map((item) => (
            <CommandItem key={item.href} value={item.label} onSelect={() => go(item.href)}>
              {item.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
