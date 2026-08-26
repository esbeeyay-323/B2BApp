import { Button } from "antd";
import TwoSideInput from "../Forms/TwoSideInput";
import { EditOutlined } from "@ant-design/icons";


const PersonalDetails = () => {
    return (
        <>
        <div className="flex w-full min-w-0 flex-col rounded-panel border border-border bg-white p-4 shadow-panel sm:p-6">
            
             <div className="mb-6 flex w-full flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
                <h2 className="text-[17px] font-bold text-text">
                Personal Information
                </h2>

                <p className="text-[14px] text-text-secondary">
                    Keep your information accurate and up to date
                </p>
                </div>

                <Button className="w-full sm:w-auto"> <EditOutlined/> Edit</Button>
            </div>

            <h1 className="mb-3 mt-5.5 text-[12px] uppercase text-text-muted font-bold ">Basic information</h1>
            <div>
            {
                <TwoSideInput 
                sectionOne="FULLNAME"
                sectionTwo="Employee id"
                />
            }
            </div>
            <div>
            {
                <TwoSideInput 
                sectionOne="Gender"
                sectionTwo="date of birth"
                />
            }
            </div>

             <h1 className="mb-3 mt-5.5 text-[12px] uppercase text-text-muted font-bold ">Contact information</h1>
            <div>
            {
                <TwoSideInput 
                sectionOne="email address"
                sectionTwo="phone number"
                />
            }
            </div>
            <div>
            {
                <TwoSideInput 
                sectionOne="address"
                sectionTwo="emergency contact"
                />
            }
            </div>

             <h1 className="mb-3 mt-5.5 text-[12px] uppercase text-text-muted font-bold ">Work information</h1>            
            <div>
            {
                <TwoSideInput 
                sectionOne="department"
                sectionTwo="job title"
                />
            }
            </div>
            <div>
            {
                <TwoSideInput 
                sectionOne="employment type"
                sectionTwo="date joined"
                />
            }
            </div>
        </div>
        
        </>
    )
}


export default PersonalDetails;
