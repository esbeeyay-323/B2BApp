import {BarChartOutlined, CalendarOutlined, CheckOutlined, ClockCircleOutlined, FormOutlined, LeftOutlined, RightOutlined, SaveOutlined } from "@ant-design/icons";
import { Button, Card, Form, Progress, Steps } from "antd";
import { useState } from "react";
import { evaluationMetrics } from "../../Mock/Data";
import { PageTitle } from "../../Components/DesignUtils";
import Competencies from "../../Components/Forms/Competencies";
import GoalsandObjectives from "../../Components/Forms/GoalsandOnjectives";
import Improvement from "../../Components/Forms/Improvement";
import Review from "../../Components/Forms/Review";
import { goalEvaluationForms } from "../../Mock/EvaluationForms";
import { competencyEvaluationForms, developmentFields } from "../../Mock/ReviewForms";
import RatingScale from "../../Components/Forms/RatingScale";
import RreveiwTimeline from "../../Components/Forms/RreveiwTimeline";
import BeforeSubmit from "../../Components/Forms/Beforesubmit";



const SelfEvaluation = () => {

const [current, setCurrent] = useState(0);
const [form] = Form.useForm();
const [goalRatings, setGoalRatings] = useState<Record<string, number | null>>(
  () => Object.fromEntries(goalEvaluationForms.map((goal) => [goal.id, goal.selfRating])),
);
const [goalComments, setGoalComments] = useState<Record<string, string>>(
  () => Object.fromEntries(goalEvaluationForms.map((goal) => [goal.id, goal.comments])),
);
const [competencyRatings, setCompetencyRatings] = useState<Record<string, number | null>>(
  () => Object.fromEntries(
    competencyEvaluationForms.map((competency) => [competency.id, competency.selfRating]),
  ),
);
const [competencyComments, setCompetencyComments] = useState<Record<string, string>>(
  () => Object.fromEntries(
    competencyEvaluationForms.map((competency) => [competency.id, competency.comments]),
  ),
);
const [developmentValues, setDevelopmentValues] = useState<Record<string, string>>(
  () => Object.fromEntries(developmentFields.map((field) => [field.id, field.comments])),
);
const [finalComments, setFinalComments] = useState("");

const handleGoalRatingChange = (goalId: string, rating: number) => {
  setGoalRatings((currentRatings) => ({ ...currentRatings, [goalId]: rating }));
};

const handleGoalCommentChange = (goalId: string, comment: string) => {
  setGoalComments((currentComments) => ({ ...currentComments, [goalId]: comment }));
};

const handleCompetencyRatingChange = (competencyId: string, rating: number) => {
  setCompetencyRatings((currentRatings) => ({ ...currentRatings, [competencyId]: rating }));
};

const handleCompetencyCommentChange = (competencyId: string, comment: string) => {
  setCompetencyComments((currentComments) => ({ ...currentComments, [competencyId]: comment }));
};

const handleDevelopmentValueChange = (fieldId: string, value: string) => {
  setDevelopmentValues((currentValues) => ({ ...currentValues, [fieldId]: value }));
};

const steps = [
    {
        title : "Goals and Objectives",
        content : (
          <GoalsandObjectives
            comments={goalComments}
            onCommentChange={handleGoalCommentChange}
            onRatingChange={handleGoalRatingChange}
            ratings={goalRatings}
          />
        )
      
    },

    {
        title : "Competencies",
        content : (
          <Competencies
            comments={competencyComments}
            onCommentChange={handleCompetencyCommentChange}
            onRatingChange={handleCompetencyRatingChange}
            ratings={competencyRatings}
          />
        )
      
    },

    {           
       title : "Development Plan",
      content: (
        <Improvement
          onValueChange={handleDevelopmentValueChange}
          values={developmentValues}
        />
      )
    },

    { title : "Review and Submit",
      content: (
        <Review
          competencyRatings={competencyRatings}
          developmentValues={developmentValues}
          finalComments={finalComments}
          goalRatings={goalRatings}
          onFinalCommentsChange={setFinalComments}
        />
      )
    },

   
  ];

  const next = async () => {
    try {
      await form.validateFields();
      setCurrent((prev) => prev + 1);
    } catch {
      console.log("Validation failed");
    }
  };

  const previous = () => {
    setCurrent((prev) => Math.max(prev - 1, 0));
  };

  const handleSaveDraft = () => {
    console.log("Draft saved:", {
      competencies: { comments: competencyComments, ratings: competencyRatings },
      developmentPlan: developmentValues,
      finalComments,
      goals: { comments: goalComments, ratings: goalRatings },
    });
  };

  const handleFinish = () => {
    console.log("Final form values:", {
      competencies: { comments: competencyComments, ratings: competencyRatings },
      developmentPlan: developmentValues,
      finalComments,
      goals: { comments: goalComments, ratings: goalRatings },
    });
  };

    return (
        <>
        <main className="m-6 flex flex-col gap-8">
        <PageTitle mainText="Self Evaluation" 
        subText="Work through each section, save as you go, and submit when you're ready for manager review."/>

        <Card className="flex w-full flex-col gap-6 rounded-panel bg-white p-4 shadow-panel sm:p-6">
          <div className="flex w-full flex-col gap-4 sm:flex-row">
            <div className="size-12.5 rounded-card
            shrink-0 flex justify-center text-[#6F5CEA] items-center bg-[#EFEAFF]">
                <FormOutlined/>
            </div>
            <div className="flex min-w-0 flex-col gap-2">
                <p className="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-4">
                <span className="text-lg font-bold sm:text-[22px]">H1 2026 Performance Review</span>
                <span className="inline-flex items-center gap-2 rounded-full bg-[#FFF6E6] px-3 py-1 text-[12px] font-semibold text-[#B06A00]">
                <span className=" inline-block rounded-full size-1.5 bg-[#B06A00]"/> Self-Assessment · In Progress</span>
                </p>
                
                <p className="text-[14px] font-normal text-text-secondary">IT Administration · Reporting to David Mensah</p>


                <p className="flex flex-col gap-2 text-[13px] font-normal text-text-muted sm:flex-row sm:flex-wrap sm:gap-x-4">
                    <span><CalendarOutlined/> Jan – Jun 2026</span>
                    <span><ClockCircleOutlined/> Due Aug 25, 2026</span>
                    <span><BarChartOutlined/> 6 goals · 4 competencies</span>
                </p>
            </div>
            </div> 
            <div className="w-full">
             <p className=" text-[14px] font-normal text-text-secondary">Overall progress</p>   
                <Progress percent={65} strokeWidth={12} strokeColor="#6F5CEA"/>
        </div>
        </Card>

        <div className="grid w-full grid-cols-1 gap-4 xl:grid-cols-4">
            {evaluationMetrics.map((metric)=> (
                <div className="rounded-panel border border-border bg-white p-6 shadow-panel" key={metric.id}>
                  <div className="w-full flex flex-col gap-4">
                    <div className={`${metric.iconClassName} text-[20px] items-center flex justify-center rounded-control p-2 size-12.5`}>
                        {<metric.icon/>}
                    </div>
                    <div className="w-full flex flex-col gap-0.5">
                        <p className="text-[13px] text-text-muted">{metric.title}</p>
                        <p className="text-[28px] font-bold">{metric.value}</p>
                       <p className="text-[13px] text-text-muted">{metric.description}</p>
                    </div>
                </div> 
                </div>
            ))}
        </div>
            
          
                <div className="w-full rounded-panel border border-border bg-white p-6 shadow-panel">
                    <Steps
                        current={current}
                        titlePlacement="vertical"
                        items={steps.map((step) => ({
                        title : step.title,
                        }))}
                    />
            </div>
           
           <div className="flex w-full flex-col gap-6 lg:flex-row">
           
           <div className="w-full min-w-0 overflow-hidden rounded-panel border border-border bg-white shadow-panel lg:w-66/100">
              <Form form={form} layout="vertical" onFinish={handleFinish}>
                {steps[current].content}

                <div className={`flex flex-col gap-3 border-t border-border ${steps[current].title !=="Review and Submit" ? "bg-white":"bg-bg"}  p-4 sm:flex-row sm:items-center sm:justify-between sm:p-6`}>
                  <Button
                    className="w-full rounded-control font-semibold sm:w-auto"
                    icon={<SaveOutlined />}
                    onClick={handleSaveDraft}
                    size="medium"
                  >
                    Save as draft
                  </Button>

                  <div className="flex w-full gap-3 sm:w-auto">
                    {current > 0 && (
                      <Button
                        className="flex-1 rounded-control font-semibold sm:flex-none"
                        icon={<LeftOutlined />}
                        onClick={previous}
                        size="medium"
                      >
                        Previous
                      </Button>
                    )}

                    {current < steps.length - 1 ? (
                      <Button
                        className="flex-1 rounded-control bg-primary px-5 font-semibold hover:bg-primary-dark sm:flex-none"
                        icon={<RightOutlined />}
                        iconPlacement="end"
                        onClick={next}
                        size="medium"
                        type="primary"
                      >
                        Next
                      </Button>
                    ) : (
                      <Button
                        className="flex-1 rounded-control bg-primary px-5 font-semibold hover:bg-primary-dark sm:flex-none"
                        htmlType="submit"
                        icon={<CheckOutlined />}
                        size="medium"
                        type="primary"
                      >
                        Submit
                      </Button>
                    )}
                  </div>
                </div>
              </Form>
           </div>
         
           <div className="w-full min-w-0 lg:w-31/100">
              <aside className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:flex lg:flex-col">
                { steps[current].title === "Review and Submit" ? <BeforeSubmit/>: <RatingScale/>}
                <RreveiwTimeline />
              </aside>
           </div>
         
        

           </div>

        </main>
        
        </>
    )
}

export default SelfEvaluation;
