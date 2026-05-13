interface TopOfMindProps {
  items: string[];
}

export default function TopOfMind({ items }: TopOfMindProps) {
  return (
    <div className="bg-background border border-border p-10 mb-12">
      <h2 className="font-serif-display text-2xl text-heading mb-6">Top of mind</h2>

      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="relative pl-6">
            <span className="absolute left-0 text-accent">—</span>
            <span className="text-body">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
