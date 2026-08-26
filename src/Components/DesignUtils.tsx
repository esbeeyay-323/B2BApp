 interface pageTitleProps {

    mainText : string,
    subText : string
 }

  
 export const cardClassName =
  "rounded-panel border-border bg-surface shadow-panel transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-raised";

 export const PageTitle = ({mainText, subText}:pageTitleProps) => { 
    return (<>
        
  <div className="mb-12">
        <h1 className="text-[29px] font-extrabold">{mainText}</h1>
        <h1 className="text-[14.5px]  text-text-muted ">{subText}</h1>
        </div>
    </>)
 }

