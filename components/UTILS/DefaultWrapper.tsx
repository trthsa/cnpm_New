import HeadNav from "../HeadNav";
import SideBar from "../SideBar";

function DefaultWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <HeadNav />
      <div className="grid grid-cols-6 min-h-screen">
        <SideBar />
        <div className="col-span-5 m-10">{children}</div>
      </div>
    </div>
  );
}

export default DefaultWrapper;
