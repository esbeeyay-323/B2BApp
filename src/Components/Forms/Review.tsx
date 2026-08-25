import { CheckOutlined, MinusOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { goalEvaluationForms } from "../../Mock/EvaluationForms";
import { competencyEvaluationForms, developmentFields } from "../../Mock/ReviewForms";

interface ReviewProps {
    competencyRatings: Record<string, number | null>;
    developmentValues: Record<string, string>;
    finalComments: string;
    goalRatings: Record<string, number | null>;
    managerName?: string;
    onFinalCommentsChange: (comment: string) => void;
}

interface RatingSummary {
    average: number | null;
    rated: number;
    total: number;
}

const getRatingSummary = (
    ids: string[],
    ratings: Record<string, number | null>,
): RatingSummary => {
    const completedRatings = ids
        .map((id) => ratings[id])
        .filter((rating): rating is number => rating !== null && rating !== undefined);

    return {
        average: completedRatings.length
            ? completedRatings.reduce((total, rating) => total + rating, 0) / completedRatings.length
            : null,
        rated: completedRatings.length,
        total: ids.length,
    };
};

const RatingValue = ({ average }: { average: number | null }) => (
    <p className="shrink-0 text-[20px] font-extrabold text-text">
        {average === null ? "—" : average.toFixed(1)}
        <span className="text-[12px] font-semibold text-text-secondary">/5</span>
    </p>
);

const Review = ({
    competencyRatings,
    developmentValues,
    finalComments,
    goalRatings,
    managerName = "David Mensah",
    onFinalCommentsChange,
}: ReviewProps) => {
    const goals = getRatingSummary(
        goalEvaluationForms.map((goal) => goal.id),
        goalRatings,
    );
    const competencies = getRatingSummary(
        competencyEvaluationForms.map((competency) => competency.id),
        competencyRatings,
    );
    const completedDevelopmentFields = developmentFields.filter(
        (field) => developmentValues[field.id]?.trim(),
    ).length;
    const developmentIsComplete = completedDevelopmentFields === developmentFields.length;

    const checklistItems = [
        {
            complete: goals.rated === goals.total,
            detail: `${goals.rated} / ${goals.total} rated`,
            label: "Goals & Objectives",
        },
        {
            complete: competencies.rated === competencies.total,
            detail: `${competencies.rated} / ${competencies.total} rated`,
            label: "Competencies",
        },
        {
            complete: developmentIsComplete,
            detail: developmentIsComplete
                ? "Complete"
                : `${completedDevelopmentFields} / ${developmentFields.length} fields completed`,
            label: "Development Plan",
        },
    ];

    return (
        <div className="flex w-full flex-col gap-5 bg-bg p-3 sm:p-5">
            <section className="rounded-[18px] border border-border bg-white p-5 shadow-sm sm:p-6">
                <div className="border-b border-border pb-5">
                    <h2 className="text-[20px] font-extrabold text-text">Review Summary</h2>
                    <p className="mt-1 text-[14px] text-text-secondary">
                        Double-check your scores before this goes to {managerName}.
                    </p>
                </div>

                <div className="flex items-center justify-between gap-4 border-b border-border py-4">
                    <div>
                        <p className="text-[16px] font-bold text-text">Goals &amp; Objectives</p>
                        <p className="text-[13px] text-text-secondary">
                            {goals.rated} of {goals.total} goals rated
                        </p>
                    </div>
                    <RatingValue average={goals.average} />
                </div>

                <div className="flex items-center justify-between gap-4 border-b border-border py-4">
                    <div>
                        <p className="text-[16px] font-bold text-text">Competencies</p>
                        <p className="text-[13px] text-text-secondary">
                            {competencies.rated} of {competencies.total} competencies rated
                        </p>
                    </div>
                    <RatingValue average={competencies.average} />
                </div>

                <div className="flex items-center justify-between gap-4 pt-4">
                    <div>
                        <p className="text-[16px] font-bold text-text">Development Plan</p>
                        <p className="text-[13px] text-text-secondary">
                            {completedDevelopmentFields} of {developmentFields.length} fields completed
                        </p>
                    </div>
                    <p
                        className={`text-[14px] font-bold ${developmentIsComplete ? "text-success" : "text-text-secondary"}`}
                    >
                        {developmentIsComplete ? "Complete" : "In progress"}
                    </p>
                </div>
            </section>

            <section className="rounded-[18px] border border-border bg-white p-5 shadow-sm sm:p-6">
                <h2 className="border-b border-border pb-2 text-[20px] font-extrabold text-text">
                    Section Checklist
                </h2>

                {checklistItems.map((item, index) => (
                    <div
                        className={`flex items-center justify-between gap-4 py-3 ${index < checklistItems.length - 1 ? "border-b border-border" : ""}`}
                        key={item.label}
                    >
                        <div className="flex min-w-0 items-center gap-3">
                            <span
                                className={`flex size-5 shrink-0 items-center justify-center rounded-full ${item.complete ? "bg-emerald-50 text-success" : "bg-amber-50 text-amber-500"}`}
                            >
                                {item.complete ? (
                                    <CheckOutlined className="text-[10px]" />
                                ) : (
                                    <MinusOutlined className="text-[10px]" />
                                )}
                            </span>
                            <span className="truncate text-[14px] font-bold text-text">{item.label}</span>
                        </div>
                        <span className="shrink-0 text-right text-[13px] text-text-secondary">
                            {item.detail}
                        </span>
                    </div>
                ))}
            </section>

            <section className="rounded-[18px] border border-border bg-white p-5 shadow-sm sm:p-6">
                <h2 className="text-[20px] font-extrabold text-text">Final comments</h2>
                <p className="mt-1 text-[14px] text-text-secondary">
                    Anything else you'd like {managerName.split(" ")[0]} to know before reviewing this?
                </p>
                <Input.TextArea
                    aria-label="Final comments"
                    className="mt-5 placeholder:!text-text-secondary"
                    onChange={(event) => onFinalCommentsChange(event.target.value)}
                    placeholder="Add a closing note for your manager..."
                    rows={4}
                    style={{
                        borderColor: "#E2E0EC",
                        borderRadius: 10,
                        boxShadow: "none",
                        fontSize: 16,
                        padding: "14px 16px",
                        resize: "vertical",
                    }}
                    value={finalComments}
                />
            </section>
        </div>
    );
};

export default Review;
