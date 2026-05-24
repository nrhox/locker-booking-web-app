export function FormError({
  touched,
  error,
}: {
  touched?: boolean;
  error?: string;
}) {
  if (!touched || !error) return null;
  return <p className="mt-1 text-sm text-rose-600">{error}</p>;
}
