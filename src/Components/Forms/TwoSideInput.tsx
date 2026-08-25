import { Form, Input } from "antd";

interface TwoSideInputProps {
    sectionOne : string;
    sectionTwo : string;
}

const TwoSideInput = ({sectionOne, sectionTwo}:TwoSideInputProps) => {

        return (<>
        
        <div className="w-full">
                <div className="w-full flex gap-[10%]">
                    <div className="w-45/100">
                    <Form.Item 
                    label={ <span className="font-bold uppercase text-text-muted text-[12px]">
                        {sectionOne}
                    </span>} 
                    layout="vertical">
                        <Input style={{ fontSize: 16 }}/>
                    </Form.Item>
                    </div>
                    <div className="w-45/100">
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
