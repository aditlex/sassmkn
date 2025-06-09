import { Link, usePage } from '@inertiajs/react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { type NavItem } from '@/types';

type NavMainProps = {
  items: NavItem[];
};

export function NavMain({ items }: NavMainProps) {
  return (
    <nav className="space-y-2">
      {items.map((item, idx) =>
        item.children ? (
          <CollapsibleItem key={idx} item={item} />
        ) : (
          <Link
            key={idx}
            href={item.href ?? '#'}
            className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-muted rounded-md"
          >
            {item.icon && <item.icon size={18} />}
            {item.title}
          </Link>
        )
      )}
    </nav>
  );
}

function CollapsibleItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Parent button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
      >
        <div className="flex items-center gap-3">
          {item.icon && <item.icon size={18} />}
          {item.title}
        </div>
        {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {/* Child links */}
      {open && (
        <div className="ml-8 mt-1 flex flex-col gap-1 border-l border-muted pl-4">
          {item.children?.map((child, index) => (
            <Link
              key={index}
              href={child.href ?? '#'}
              className="text-sm text-muted-foreground hover:text-primary transition-colors py-1 px-2 rounded-md hover:bg-muted"
            >
              {child.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
