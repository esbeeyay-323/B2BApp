import { CheckCircleOutlined } from "@ant-design/icons";

interface AttentionItem {
  id: string;
  name: string;
  message: string;
  urgencyClassName: string;
}

interface RatingBand {
  id: string;
  score: number;
  label: string;
  count: number;
  barClassName: string;
}

type TimelineState = "complete" | "current" | "upcoming";

interface TimelineItem {
  id: string;
  label: string;
  date: string;
  state: TimelineState;
}

const attentionItems: AttentionItem[] = [
  {
    id: "efua-danso",
    name: "Efua Danso",
    message: "Self-assessment not started — due today, Aug 25",
    urgencyClassName: "bg-danger",
  },
  {
    id: "kojo-mensah",
    name: "Kojo Mensah",
    message: "Self-assessment 40% complete — at risk of missing the deadline",
    urgencyClassName: "bg-accent-orange",
  },
];

const ratingBands: RatingBand[] = [
  { id: "outstanding", score: 5, label: "Outstanding", count: 1, barClassName: "bg-success" },
  { id: "exceeds", score: 4, label: "Exceeds Expectations", count: 2, barClassName: "bg-accent-teal" },
  { id: "meets", score: 3, label: "Meets Expectations", count: 2, barClassName: "bg-accent-orange" },
  { id: "below", score: 2, label: "Below Expectations", count: 0, barClassName: "bg-pink-600" },
  { id: "improvement", score: 1, label: "Needs Improvement", count: 0, barClassName: "bg-danger" },
];

const timelineItems: TimelineItem[] = [
  { id: "opened", label: "Cycle opened", date: "Jul 1", state: "complete" },
  { id: "self-evaluation", label: "Self-evaluation due", date: "Aug 25", state: "complete" },
  { id: "manager-review", label: "Manager review", date: "Sep 5", state: "current" },
  { id: "calibration", label: "Calibration", date: "Sep 15", state: "upcoming" },
  { id: "released", label: "Results released", date: "Sep 30", state: "upcoming" },
];

const insightCardClassName =
  "rounded-panel border border-border bg-surface p-5 shadow-panel sm:p-6";

export const NeedsAttention = () => (
  <section aria-labelledby="attention-heading" className={insightCardClassName}>
    <header className="mb-4">
      <h2 id="attention-heading" className="text-[16px] font-extrabold leading-tight text-text">
        Needs your attention
      </h2>
      <p className="mt-1 text-[12px] text-text-secondary">People behind schedule this cycle</p>
    </header>

    <ul className="divide-y divide-border">
      {attentionItems.map((item) => (
        <li className="grid grid-cols-[8px_minmax(0,1fr)] gap-3 py-3 first:pt-2 last:pb-0" key={item.id}>
          <span aria-hidden="true" className={`mt-1.5 size-2 rounded-full ${item.urgencyClassName}`} />
          <div className="min-w-0">
            <h3 className="text-[13px] font-bold leading-tight text-text">{item.name}</h3>
            <p className="mt-1 text-[12px] leading-relaxed text-text-secondary">{item.message}</p>
            <button
              className="mt-1.5 cursor-pointer text-[12px] font-bold text-primary underline-offset-4 transition-colors hover:text-primary-dark hover:underline focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 active:translate-y-px"
              type="button"
            >
              Send reminder <span aria-hidden="true">→</span>
            </button>
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export const TeamRatingSnapshot = () => {
  const totalSubmitted = ratingBands.reduce((total, band) => total + band.count, 0);

  return (
    <section aria-labelledby="rating-heading" className={insightCardClassName}>
      <header className="mb-4">
        <h2 id="rating-heading" className="text-[16px] font-extrabold leading-tight text-text">
          Team rating snapshot
        </h2>
        <p className="mt-1 text-[12px] text-text-secondary">
          Self-rating distribution · {totalSubmitted} submitted
        </p>
      </header>

      <ul className="space-y-3">
        {ratingBands.map((band) => {
          const percentage = totalSubmitted === 0 ? 0 : (band.count / totalSubmitted) * 100;

          return (
            <li className="grid grid-cols-[62px_minmax(0,1fr)_14px] items-center gap-3" key={band.id}>
              <span className="text-[12px] leading-tight text-text-secondary">
                {band.score} · {band.label}
              </span>
              <span
                aria-label={`${band.label}: ${band.count} of ${totalSubmitted}`}
                className="h-2 overflow-hidden rounded-full bg-bg"
                role="img"
              >
                <span
                  className={`block h-full rounded-full transition-[width] duration-500 ${band.barClassName}`}
                  style={{ width: `${percentage}%` }}
                />
              </span>
              <span className="text-right text-[12px] font-bold text-text-secondary">{band.count}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

const TimelineMarker = ({ state }: { state: TimelineState }) => {
  if (state === "complete") {
    return <CheckCircleOutlined aria-hidden="true" className="text-[15px] text-success" />;
  }

  if (state === "current") {
    return (
      <span aria-hidden="true" className="flex size-3.5 items-center justify-center rounded-full border border-primary">
        <span className="size-1.5 rounded-full bg-primary" />
      </span>
    );
  }

  return <span aria-hidden="true" className="size-3.5 rounded-full border border-text-muted" />;
};

export const ReviewTimeline = () => (
  <section aria-labelledby="timeline-heading" className={insightCardClassName}>
    <header className="mb-3">
      <h2 id="timeline-heading" className="text-[16px] font-extrabold leading-tight text-text">
        Review timeline
      </h2>
      <p className="mt-1 text-[12px] text-text-secondary">Where this cycle stands</p>
    </header>

    <ol className="divide-y divide-border">
      {timelineItems.map((item) => {
        const isCurrent = item.state === "current";
        const isUpcoming = item.state === "upcoming";

        return (
          <li className="grid grid-cols-[16px_minmax(0,1fr)_auto] items-center gap-2.5 py-3" key={item.id}>
            <TimelineMarker state={item.state} />
            <span className={`text-[13px] ${isCurrent ? "font-extrabold text-text" : isUpcoming ? "font-medium text-text-secondary" : "font-medium text-text"}`}>
              {item.label}
            </span>
            <time className={`text-[11px] font-bold sm:text-[12px] ${isCurrent ? "text-primary" : "text-text-secondary"}`}>
              {item.date}
            </time>
          </li>
        );
      })}
    </ol>
  </section>
);
