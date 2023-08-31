import getCurrentUser from "@/app/actions/getCurrentUser";
import DesktopSidebar from "./DesktopSidebar";
import MobileFooter from "./MobileFooter";

async function SideBar({children}:{children:React.ReactNode}) {

    const currentUser=await getCurrentUser();

    return(
        <div className="h-screen">
            <DesktopSidebar currentUser={currentUser!}/>
            <MobileFooter/>
         <main className="lg:pl-20 h-screen">
           {children}
         </main>
        </div>
    )
};

export default SideBar;