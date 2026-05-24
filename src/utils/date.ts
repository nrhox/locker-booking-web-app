export function formatDateTime(value: string) {
  return new Intl.DateTimeFormat(undefined, {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(value));
}

export function toUtcISOStringFromLocal(value: string) {
  return new Date(value).toISOString();
}

