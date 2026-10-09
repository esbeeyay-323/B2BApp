 interface pageTitleProps {

    mainText : string,
    subText : string
 }

  
 export const cardClassName =
  "rounded-panel border-border bg-surface shadow-panel transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-raised";

 export const PageTitle = ({mainText, subText}:pageTitleProps) => { 
    return (<>
        
  <div>
        <h1 className="font-display text-[29px] font-bold tracking-[-0.035em] text-text">{mainText}</h1>
        <p className="mt-1 text-[14px] leading-6 text-text-secondary">{subText}</p>
        </div>
    </>)
 }

