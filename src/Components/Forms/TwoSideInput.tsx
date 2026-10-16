import { Form, Input } from "antd";

interface TwoSideInputProps {
    sectionOne : string;
    sectionTwo : string;
    valueOne?: string;
    valueTwo?: string;
}

const TwoSideInput = ({sectionOne, sectionTwo, valueOne, valueTwo}:TwoSideInputProps) => {

        return (<>
        
        <div className="w-full">
                <div className="flex w-full flex-col gap-0 sm:flex-row sm:gap-4 lg:gap-[10%]">
                    <div className="w-full sm:flex-1 lg:w-45/100 lg:flex-none">
                    <Form.Item 
                    label={ <span className="font-bold uppercase text-text-muted text-[12px]">
                        {sectionOne}
                    </span>} 
                    layout="vertical">
                        <Input readOnly style={{ fontSize: 14 }} value={valueOne ?? ""}/>
                    </Form.Item>
                    </div>
                    <div className="w-full sm:flex-1 lg:w-45/100 lg:flex-none">
                    <Form.Item 
                    label={ <span className="font-bold uppercase text-text-muted text-[12px]">
                            {sectionTwo}
                    </span>} 
                    layout="vertical">
                        <Input readOnly style={{ fontSize: 14 }} value={valueTwo ?? ""}/>
                    </Form.Item>
                    </div>
                </div>
            </div>
        </>)
}

export default TwoSideInput;
