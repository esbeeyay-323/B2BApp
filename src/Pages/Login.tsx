import { Button, Form, Input, ConfigProvider, Checkbox } from "antd"
import { MailOutlined, LockOutlined } from "@ant-design/icons"
import { useAuth } from "../Context/AuthContext"
import type { LoginValues } from "../Mock/Login"
import AcronymLogo from "../assets/AcronymLogo.png"



const Login = () => {

    const {login, isLoading} = useAuth();
    
    
    const handleFinish = async  (values:LoginValues) => {
      const {email, password} = values;

   try {      
    const success = await login(email, password);

      if(success) {
        console.log("Login Successful")
      }else {
        
        console.log("Incorrect email or passowrd")
      }

        console.log(values)
    } catch (error) {
        console.error(error)
    }
    } 

    return (
        <>
       <main className="h-screen w-full bg-bg  flex items-center justify-center">
        <div className="h-85 w-85 -top-22.5  rounded-full -left-22.5 bg-primary absolute opacity-[0.28] blur-[60px]"></div>
        <div className="h-70 w-70 bottom-5 rounded-full right-10 bg-accent-orange absolute opacity-[0.22] blur-[60px]"></div>
        <div className="h-55 w-55 bottom-15  rounded-full left-[8%]  bg-accent-teal absolute opacity-[0.18] blur-[60px]"></div>
        <div className="
        w-full max-w-101 relative
            border-0 shadow-none rounded-none
            flex flex-col justify-center items-center
            py-10 px-8
            min-[720px]:rounded-panel min-[720px]:bg-surface min-[720px]:shadow-panel">
            <img src={AcronymLogo} alt="logo" className="w-20 flex items-center justify-center"/>
            <h2 className="font-bold text-[22px] mb-2!">Welcome back</h2>
            <h3 className="font-medium text-text-secondary text-[14px] mb-8!">Sign in to manage your business</h3>

    <ConfigProvider theme={{

        components : {
            
            Input : {
                    paddingInline : 16,
                    paddingBlock: 12
            },
            Button : {
                paddingInline : 16,
                colorBgContainer : "#6C5DF4"
            },
            Checkbox : {
                colorPrimary : "#6C5DF4",
                colorPrimaryHover : "#564BD1"
            }
        }
    }}>
        <Form onFinish={handleFinish} className="w-full">
            <div className="w-full mb-5!">
                <Form.Item 
                label={<span className="text-[13px] font-semibold">Email address</span>}
                name="email" 
                layout="vertical">
                    <Input placeholder="someone@example.com" 
                      prefix={<MailOutlined/>}
                      type="email"
    
                      />
                </Form.Item>
            </div>
            <div className="w-full mb-5!">
            <Form.Item 
               label={<span className="text-[13px] font-semibold">Password</span>}
                name="password" 
                layout="vertical">
                <Input.Password 
                placeholder="input password" 
                prefix={<LockOutlined/>}/> 
            </Form.Item>
            </div>

            <div className="w-full mb-6! flex justify-between">
               <Checkbox>
               <h1 className="font-medium text-[13px]">Remeber me</h1>
               </Checkbox>
               <a className="font-semibold text-[13px] text-primary!">Forgot Password?</a>
            </div>
            
            <div className="w-full mb-6!">
                <Button style={{
                    paddingBlock: "20px"
                }} className="w-full" disabled={isLoading} loading ={isLoading} htmlType="submit">{<span className="text-[16px] font-semibold text-white">Sign in</span>}</Button>
            </div>

            <div className="w-full mb-5! flex justify-center items-center">
                <h1 className="font-[13px]">Don't have an account? <a className="font-[13px] text-primary!">Sign up</a></h1>
            </div>
        </Form>
    </ConfigProvider>
        </div>



       </main>
        </>
    )

}



export default Login
