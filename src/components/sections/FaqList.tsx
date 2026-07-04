export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  if (!items.length) return null;
  return (
    <dl className="divide-y divide-ink/10 border-t border-ink/10">
      {items.map((f, i) => (
        <div key={i} className="py-5">
          <dt className="text-base font-semibold text-ink">{f.q}</dt>
          <dd className="mt-2 text-ink/75">{f.a}</dd>
        </div>
      ))}
    </dl>
  );
}
