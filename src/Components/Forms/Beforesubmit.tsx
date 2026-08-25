


const BeforeSubmit = () => {
  return (
    <section className="w-full rounded-[18px] border border-border bg-white p-5 shadow-sm">
      <h2 className="text-[16px] font-bold text-text">
        Before you submit
      </h2>

      <p className="mt-0.5 text-[13px] text-text-muted">
        Once submitted, this locks
      </p>

      <ul className="mt-4 flex list-none flex-col gap-4">
        <li className="flex items-start gap-3 text-[14px] leading-5 text-text">
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
          <span>
            You won't be able to edit ratings or comments after submitting.
          </span>
        </li>

        <li className="flex items-start gap-3 text-[14px] leading-5 text-text">
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
          <span>
            David Mensah is notified immediately and reviews within 5 business
            days.
          </span>
        </li>

        <li className="flex items-start gap-3 text-[14px] leading-5 text-text">
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
          <span>
            You'll still see your own responses under Self Evaluation.
          </span>
        </li>
      </ul>
    </section>
  );
};

export default BeforeSubmit;


