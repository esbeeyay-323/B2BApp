const ratingScale = [
  { score: 1, label: "Needs Improvement", color: "#F05A5A" },
  { score: 2, label: "Below Expectations", color: "#F59E0B" },
  { score: 3, label: "Meets Expectations", color: "#D4AA15" },
  { score: 4, label: "Exceeds Expectations", color: "#12A89D" },
  { score: 5, label: "Outstanding", color: "#22B573" },
];

const RatingScale = () => {
  return (
    <section className="rounded-[18px] border border-border bg-white p-4 shadow-sm">
      <div>
        <h2 className="text-[16px] font-bold text-text">Rating Scale Guide</h2>
        <p className="mt-0.5 text-[13px] text-text-muted">What each score means</p>
      </div>

      <div className="mt-3 flex flex-col gap-2">
        {ratingScale.map((rating) => (
          <div
            className="flex items-center gap-2 text-[14px] text-text"
            key={rating.score}
          >
            <span
              aria-hidden="true"
              className="size-2 shrink-0 rounded-full"
              style={{ backgroundColor: rating.color }}
            />

            <span>
              {rating.score} &mdash; {rating.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RatingScale;
