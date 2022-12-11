import HeadNav from "../../components/HeadNav";
import SideBar from "../../components/SideBar";
import TongQuanBody from "../../components/Statistic/TongQuanBody";

function tongquan() {
  return (
    <div>
      <HeadNav />
      <div className="flex">
        <SideBar />
        <TongQuanBody />
      </div>
    </div>
  );
}

export default tongquan;
