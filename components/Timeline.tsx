interface TimelineItem {
  date: string;
  input: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="bg-surface border border-border p-8 mb-12 overflow-x-auto">
      <h2 className="font-serif-display text-2xl text-heading mb-6">Timeline</h2>

      <div className="relative flex gap-12 py-8 min-w-min">
        {/* Horizontal line connecting dots */}
        <div className="absolute left-0 right-0 top-[30px] h-[2px] bg-border z-0" />

        {items.map((item, index) => (
          <div key={index} className="relative flex flex-col items-center min-w-[180px] z-10">
            {/* Dot */}
            <div className="w-3 h-3 rounded-full bg-accent border-[3px] border-surface mb-3 flex-shrink-0" />

            {/* Content */}
            <div className="text-center">
              <div className="text-accent text-[0.85rem] mb-1.5">{item.date}</div>
              <div className="text-heading text-[0.95rem] leading-snug">{item.input}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
