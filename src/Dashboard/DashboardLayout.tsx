import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import SideBarMenu from "../Components/SideBarMenu";
import Logo2 from "../assets/Logo2.webp"
import Header from "../Components/Header";

const pageTitles: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/dashboard/profile": "Profile",
  "/dashboard/goals": "Goals",
  "/dashboard/self-evaluation": "Self Evaluation",
  "/dashboard/team-appraisals": "Team Appraisals",
  "/dashboard/user-directory": "User Directory",
  "/dashboard/cycle-settings": "Cycle Settings",
  "/dashboard/settings": "Settings",
};

const DashboardLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const normalizedPath = pathname.replace(/\/$/, "") || "/dashboard";
    const pageTitle = pageTitles[normalizedPath] ?? "Dashboard";

    document.title = `ApexPerform | ${pageTitle}`;
  }, [pathname]);

  return (
    <main className="flex min-h-dvh w-full max-w-full bg-bg">
      
       <aside className="sticky top-0 hidden h-dvh w-24/100 max-w-60 self-start flex-col overflow-y-auto border-r border-border bg-surface lg:flex">
        <div className="w-full p-6 mb-6 border-b border-[#ECEBF3]">
          <img  className="w-full "src={Logo2} alt="Company logo" />
        </div>

        <div className="min-h-0  flex-1">
            <SideBarMenu />
        </div>
      </aside> 

      <div className="flex w-0 min-w-0 max-w-full flex-1 self-stretch flex-col bg-surface">
        <Header />

        <div className="min-h-0 min-w-0 flex-1 bg-bg">
          <Outlet/>
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
