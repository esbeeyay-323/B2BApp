 interface pageTitleProps {

    mainText : string,
    subText : string
 }

  
 export const cardClassName =
  "border-border shadow-[0_4px_16px_rgba(30,27,46,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(30,27,46,0.11)]";

 export const PageTitle = ({mainText, subText}:pageTitleProps) => { 
    return (<>
        
  <div className="mb-12">
        <h1 className="text-[29px] font-extrabold">{mainText}</h1>
        <h1 className="text-[14.5px]  text-text-muted ">{subText}</h1>
        </div>
    </>)
 }

