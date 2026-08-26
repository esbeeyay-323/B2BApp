import { Form, Input } from "antd";

interface TwoSideInputProps {
    sectionOne : string;
    sectionTwo : string;
}

const TwoSideInput = ({sectionOne, sectionTwo}:TwoSideInputProps) => {

        return (<>
        
        <div className="w-full">
                <div className="flex w-full flex-col gap-0 sm:flex-row sm:gap-4 lg:gap-[10%]">
                    <div className="w-full sm:flex-1 lg:w-45/100 lg:flex-none">
                    <Form.Item 
                    label={ <span className="font-bold uppercase text-text-muted text-[12px]">
                        {sectionOne}
                    </span>} 
                    layout="vertical">
                        <Input style={{ fontSize: 16 }}/>
                    </Form.Item>
                    </div>
                    <div className="w-full sm:flex-1 lg:w-45/100 lg:flex-none">
                    <Form.Item 
                    label={ <span className="font-bold uppercase text-text-muted text-[12px]">
                            {sectionTwo}
                    </span>} 
                    layout="vertical">
                        <Input style={{ fontSize: 16 }}/>
                    </Form.Item>
                    </div>
                </div>
            </div>
        </>)
}

export default TwoSideInput;
