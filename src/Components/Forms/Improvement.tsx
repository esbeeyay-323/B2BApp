import { Input } from "antd";
import { developmentFields } from "../../Mock/ReviewForms";

interface ImprovementProps {
    onValueChange: (fieldId: string, value: string) => void;
    values: Record<string, string>;
}

const Improvement = ({ onValueChange, values }: ImprovementProps) => {

    return(<>

        <div className="w-full rounded-panel bg-white p-4 sm:p-6">
            
            <div className="w-full border-b border-border pb-5">
                <p className="text-[20px] font-extrabold">Development Plan</p>
                <p className="mt-1 text-[14px] font-normal text-text-secondary">
                    Tell your manager where you want to grow and what support would help.Goals & Objectives</p>
            </div>

            <div className="w-full flex p-4 flex-col gap-6">
                {
                    developmentFields.map((form)=> (
                        <div className="flex w-full flex-col gap-6 border-b border-border py-5 sm:py-6" key={form.id}>
                                                    <label
                                                        className="text-[12px] font-bold uppercase tracking-[0.02em] text-text-secondary"
                                                        htmlFor={`comments-${form.id}`}
                                                    >
                                                       {form.label}
                                                    </label>
                        
                                                    <Input.TextArea
                                                        autoSize={{ minRows: 2, maxRows: 5 }}
                                                        className="placeholder:italic placeholder:!text-[#A6A2B8]"
                                                        id={`comments-${form.id}`}
                                                        onChange={(event) => onValueChange(form.id, event.target.value)}
                                                       placeholder="Please type here"
                                                        value={values[form.id]}
                                                        style={{
                                                            backgroundColor: values[form.id] ? "#F7F7FB" : "#FFFFFF",
                                                            borderColor: "#E2E0EC",
                                                            borderRadius: "var(--radius-control)",
                                                            borderStyle: values[form.id] ? "solid" : "dashed",
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
                    ))
                }

            </div>

        </div>
              
            
         </>)
}

  

export default Improvement;
