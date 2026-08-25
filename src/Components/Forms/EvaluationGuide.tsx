import RatingScale from "./RatingScale";
import RreveiwTimeline from "./RreveiwTimeline";

const EvaluationGuide = () => {
  return (
    <aside className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:flex lg:flex-col">
      <RatingScale />
      <RreveiwTimeline />
    </aside>
  );
};

export default EvaluationGuide;
