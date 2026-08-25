import { Input, Radio } from "antd";
import { ratingOptions } from "../../Mock/EvaluationForms";
import { competencyEvaluationForms } from "../../Mock/ReviewForms";
import { StatusTag } from "../Tags.tsx";

const competencyCommentPlaceholder =
    "Add context for your manager \u2014 what changed, and what evidence backs this rating?";

interface CompetenciesProps {
    comments: Record<string, string>;
    onCommentChange: (competencyId: string, comment: string) => void;
    onRatingChange: (competencyId: string, rating: number) => void;
    ratings: Record<string, number | null>;
}

const Competencies = ({
    comments,
    onCommentChange,
    onRatingChange,
    ratings,
}: CompetenciesProps) => {

    return (
        <div className="w-full rounded-[18px] bg-white p-4 sm:p-6">
            <div className="w-full border-b border-border pb-5">
                <p className="text-[20px] font-extrabold">Competencies</p>
                <p className="mt-1 text-[14px] font-normal text-text-secondary">
                    Rate how consistently you demonstrated each core competency this cycle.
                </p>
            </div>

            <div>
                {competencyEvaluationForms.map((competency, index) => (
                    <div
                        className={`flex w-full flex-col gap-5 ${index < competencyEvaluationForms.length - 1 ? "border-b border-border py-5 sm:py-6" : "pt-5 sm:pt-6"}`}
                        key={competency.id}
                    >
                        <div className="flex w-full flex-col items-start gap-3 lg:flex-row lg:justify-between lg:gap-4">
                            <div className="w-full min-w-0">
                                <p className="w-full text-[16px] font-bold text-text">
                                    {competency.title}
                                </p>
                                <p className="mt-1 w-full text-[14px] leading-5 text-text-secondary">
                                    {competency.description}
                                </p>
                            </div>

                            <div className="shrink-0">
                                <StatusTag
                                    status={
                                        ratings[competency.id] === null
                                            ? "not-started"
                                            : comments[competency.id]?.trim()
                                              ? "complete"
                                              : "comment-pending"
                                    }
                                />
                            </div>
                        </div>

                        <div className="flex w-full flex-col items-start gap-3 lg:flex-row lg:items-center lg:gap-x-6">
                            <span className="text-xs font-semibold uppercase text-text-secondary">
                                Self-rating
                            </span>

                            <Radio.Group
                                aria-label={`Self-rating for ${competency.title}`}
                                buttonStyle="solid"
                                className="flex gap-2"
                                onChange={(event) => onRatingChange(competency.id, event.target.value)}
                                value={ratings[competency.id]}
                            >
                                {ratingOptions.map((rating) => {
                                    const isSelected = ratings[competency.id] === rating.value;

                                    return (
                                        <Radio.Button
                                            aria-label={`${rating.value}: ${rating.label}`}
                                            className="before:!hidden transition-colors"
                                            key={rating.value}
                                            style={{
                                                alignItems: "center",
                                                backgroundColor: isSelected ? "#6C5DF4" : "#FFFFFF",
                                                borderColor: isSelected ? "#6C5DF4" : "#E2E0EC",
                                                borderRadius: 8,
                                                boxShadow: "none",
                                                color: isSelected ? "#FFFFFF" : "#8D8AA3",
                                                display: "inline-flex",
                                                fontSize: 16,
                                                fontWeight: 700,
                                                height: 28,
                                                justifyContent: "center",
                                                lineHeight: 1,
                                                marginInlineStart: 0,
                                                padding: 0,
                                                width: 28,
                                            }}
                                            value={rating.value}
                                        >
                                            {rating.value}
                                        </Radio.Button>
                                    );
                                })}
                            </Radio.Group>

                            <span
                                className={`text-[14px] font-semibold ${ratings[competency.id] === null ? "italic text-text-muted" : "text-text"}`}
                            >
                                {ratings[competency.id] === null
                                    ? "Not yet rated"
                                    : `${ratings[competency.id]} \u00B7 ${ratingOptions.find((rating) => rating.value === ratings[competency.id])?.label}`}
                            </span>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label
                                className="text-[12px] font-semibold uppercase tracking-[0.02em] text-text-secondary"
                                htmlFor={`competency-comments-${competency.id}`}
                            >
                                Self-assessment comments
                            </label>

                            <Input.TextArea
                                autoSize={{ minRows: 2, maxRows: 5 }}
                                className="placeholder:italic placeholder:!text-[#A6A2B8]"
                                id={`competency-comments-${competency.id}`}
                                onChange={(event) => onCommentChange(competency.id, event.target.value)}
                                placeholder={competencyCommentPlaceholder}
                                style={{
                                    backgroundColor: comments[competency.id] ? "#F7F7FB" : "#FFFFFF",
                                    borderColor: "#E2E0EC",
                                    borderRadius: 10,
                                    borderStyle: comments[competency.id] ? "solid" : "dashed",
                                    boxShadow: "none",
                                    color: "#2A2540",
                                    fontSize: 16,
                                    lineHeight: 1.6,
                                    minHeight: 58,
                                    padding: "11px 14px",
                                    resize: "none",
                                }}
                                value={comments[competency.id]}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Competencies;
