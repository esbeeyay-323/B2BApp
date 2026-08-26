const reviewTimeline = [
  {
    label: "Cycle opened",
    date: "Jul 1",
    dateClassName: "bg-emerald-50 text-emerald-600",
  },
  {
    label: "Self-evaluation due",
    date: "Aug 25",
    dateClassName: "bg-amber-50 text-amber-600",
    highlighted: true,
  },
  {
    label: "Manager review",
    date: "Sep 5",
    dateClassName: "bg-slate-50 text-slate-400",
  },
  {
    label: "Calibration",
    date: "Sep 15",
    dateClassName: "bg-slate-50 text-slate-400",
  },
  {
    label: "Results released",
    date: "Sep 30",
    dateClassName: "bg-slate-50 text-slate-400",
  },
];

const RreveiwTimeline = () => {
  return (
    <section className="rounded-panel border border-border bg-white p-4 shadow-panel">
      <div>
        <h2 className="text-[16px] font-bold text-text">Review Timeline</h2>
        <p className="mt-0.5 text-[13px] text-text-muted">Where this cycle stands</p>
      </div>

      <div className="mt-3">
        {reviewTimeline.map((item, index) => (
          <div
            className={`flex items-center justify-between gap-3 py-3 ${
              index < reviewTimeline.length - 1 ? "border-b border-border" : ""
            }`}
            key={item.label}
          >
            <span
              className={`text-[14px] text-text ${
                item.highlighted ? "font-bold" : "font-normal"
              }`}
            >
              {item.label}
            </span>

            <span
              className={`shrink-0 rounded-full px-2 py-1 text-[12px] font-semibold ${item.dateClassName}`}
            >
              {item.date}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RreveiwTimeline;
