import { Button } from "antd";
import TwoSideInput from "../Forms/TwoSideInput";
import { EditOutlined } from "@ant-design/icons";


const PersonalDetails = () => {
    return (
        <>
        <div className="w-full flex flex-col shadow bg-white p-6 rounded-[18px] ">
            
             <div className="mb-6 w-full flex justify-between">
            <div>
                <h2 className="text-[17px] font-bold text-text">
                Personal Information
                </h2>

                <p className="text-[14px] text-text-secondary">
                    Keep your information accurate and up to date
                </p>
                </div>

                <Button> <EditOutlined/> Edit</Button>
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