import { Radio, Input } from "antd";
import { goalEvaluationForms, ratingOptions, evaluationCommentPlaceholder } from "../../Mock/EvaluationForms";
import { StatusTag } from "../Tags.tsx";

interface GoalsandObjectivesProps {
    comments: Record<string, string>;
    onCommentChange: (formId: string, comment: string) => void;
    onRatingChange: (formId: string, rating: number) => void;
    ratings: Record<string, number | null>;
}

const GoalsandObjectives = ({
    comments,
    onCommentChange,
    onRatingChange,
    ratings,
}: GoalsandObjectivesProps) => {

    return (
        <>
         <div className="w-full rounded-[18px] bg-white p-4 sm:p-6">

            <div className="w-full border-b border-border pb-5">
                <p className="text-[20px] font-extrabold">Goals & Objectives</p>
                <p className="mt-1 text-[14px] font-normal text-text-secondary">Rate yourself against each goal and add context your manager should know</p>
            </div>

            <div>
                {goalEvaluationForms.map((form, index)=>(
                
                     <div
                        key={form.id}
                        className={`flex w-full flex-col gap-6 ${index < goalEvaluationForms.length - 1 ? "border-b border-border py-5 sm:py-6" : "pt-5 sm:pt-6"}`}
                     >
                        
                        <div className="flex w-full flex-col items-start gap-3 lg:flex-row lg:justify-between lg:gap-4">
                          <div className="w-full min-w-0">
                           <p className="flex flex-col items-start gap-2 font-bold lg:flex-row lg:items-center">
                            <span className="w-full text-[16px] font-bold text-text lg:w-auto">{form.title}</span>
                            <span className="rounded-full border border-border bg-[#F7F7FB] px-2 py-0.5 text-[12px] font-bold text-text-secondary">{form.weight}% weight</span>
                           </p>
                           <p className="mt-1 w-full text-[14px] leading-5 text-text-secondary">{form.description}</p>
                          </div>
                          <div className="shrink-0">
                            <StatusTag
                                status={
                                    ratings[form.id] === null
                                        ? "not-started"
                                        : comments[form.id]?.trim()
                                          ? "complete"
                                          : "comment-pending"
                                }
                            />
                          </div>
                        </div>
                        
                        <div className="flex w-full flex-col items-start gap-3 lg:flex-row lg:items-center lg:gap-x-6">
                            
                                <span className="text-xs uppercase font-semibold text-text-secondary">
                                    Self-rating
                                </span>

                                <Radio.Group className="flex gap-2"
                                    aria-label={`Self-rating for ${form.title}`}
                                    value={ratings[form.id]}
                                    onChange={(event) => onRatingChange(form.id, event.target.value)}
                                    buttonStyle="solid"
                                >
                                    {ratingOptions.map((rating) => {
                                        const isSelected = ratings[form.id] === rating.value;

                                        return (
                                            <Radio.Button
                                                aria-label={`${rating.value}: ${rating.label}`}
                                                className="before:!hidden transition-colors"
                                                key={rating.value}
                                                value={rating.value}
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
                                            >
                                                {rating.value}
                                            </Radio.Button>
                                        );
                                    })}
                                </Radio.Group>

                                <span className={`text-[14px] font-semibold ${ratings[form.id] === null ? "italic text-text-muted" : "text-text"}`}>
                                    {ratings[form.id] === null
                                        ? "Not yet rated"
                                        : `${ratings[form.id]} · ${ratingOptions.find((rating) => rating.value === ratings[form.id])?.label}`}
                                </span>
                             
                        </div>

                        <div className="flex flex-col gap-2">
                            <label
                                className="text-[12px] font-semibold uppercase tracking-[0.02em] text-text-secondary"
                                htmlFor={`comments-${form.id}`}
                            >
                                Self-assessment comments
                            </label>

                            <Input.TextArea
                                autoSize={{ minRows: 2, maxRows: 5 }}
                                className="placeholder:italic placeholder:!text-[#A6A2B8]"
                                id={`comments-${form.id}`}
                                onChange={(event) => onCommentChange(form.id, event.target.value)}
                                placeholder={evaluationCommentPlaceholder}
                                value={comments[form.id]}
                                style={{
                                    backgroundColor: comments[form.id] ? "#F7F7FB" : "#FFFFFF",
                                    borderColor: "#E2E0EC",
                                    borderRadius: 10,
                                    borderStyle: comments[form.id] ? "solid" : "dashed",
                                    boxShadow: "none",
                                    color: "#2A2540",
                                    fontSize: 16,
                                    lineHeight: 1.6,
                                    minHeight: 58,
                                    padding: "8px 16px",
                                    resize: "none",
                                }}
                            />
                        </div>


                     </div>
                 
                ))}
            </div>

        </div>

        </>
    )
}

export default GoalsandObjectives
