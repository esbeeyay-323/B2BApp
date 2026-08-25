type Status = "complete" | "comment-pending" | "not-started" |string;;

const statusConfig: Record<
  Status,
  { label: string; className: string; dotClassName: string }
> = {
  complete: {
    label: "Complete",
    className: "bg-emerald-50 text-emerald-600",
    dotClassName: "bg-emerald-500",
  },
  "comment-pending": {
    label: "Comment pending",
    className: "bg-amber-50 text-amber-600",
    dotClassName: "bg-amber-500",
  },
  "not-started": {
    label: "Not started",
    className: "bg-slate-100 text-slate-500",
    dotClassName: "bg-slate-400",
  },
};

interface StatusTagProps {
  status: Status;
}


export function StatusTag({ status }: StatusTagProps) {
  const config = statusConfig[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ${config.className}`}
    >
      <span className={`size-1.5 rounded-full ${config.dotClassName}`} />
      {config.label}
    </span>
  );
}