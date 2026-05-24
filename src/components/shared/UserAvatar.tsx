import type { User } from '@/types/auth';
import { cn } from '@/utils/cn';

function getInitials(name?: string) {
  if (!name) return 'U';
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('');
}

export function UserAvatar({ user, className }: { user: User | null; className?: string }) {
  if (user?.avatarUrl) {
    return (
      <img
        src={user.avatarUrl}
        alt={user.displayName}
        className={cn('h-10 w-10 rounded-full border border-slate-200 object-cover', className)}
      />
    );
  }

  return (
    <span
      className={cn(
        'inline-flex h-10 w-10 items-center justify-center rounded-full border border-teal-100 bg-teal-50 text-sm font-semibold text-teal-800',
        className,
      )}
      aria-label={user?.displayName ?? 'User profile'}
    >
      {getInitials(user?.displayName)}
    </span>
  );
}

