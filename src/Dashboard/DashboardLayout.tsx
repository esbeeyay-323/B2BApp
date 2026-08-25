import SideBarMenu from "../Components/SideBarMenu";
import Logo2 from "../assets/Logo2.webp"
import Header from "../Components/Header";
import MyProfile from "./Pages/MyProfile";
import SelfEvaluation from "./Pages/SelfEvaluation";
import TeamAppraisals from "./Pages/TeamAppraisals";



const DashboardLayout = () => {
  return (
    <main className="flex h-screen w-full overflow-hidden bg-bg">
      
       <aside className="hidden h-full w-24/100 max-w-60 flex-col border-r border-border bg-surface lg:flex">
        <div className="w-full p-6 mb-6 border-b border-[#ECEBF3]">
          <img  className="w-full "src={Logo2} alt="Company logo" />
        </div>

        <div className="min-h-0  flex-1">
            <SideBarMenu />
        </div>
      </aside> 

      <div className="flex min-w-0 flex-1 flex-col">
        <Header />

        <div className="min-h-0 flex-1 overflow-y-auto ">
          <TeamAppraisals/>
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
