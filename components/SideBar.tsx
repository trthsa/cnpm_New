import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";
type ItemParams = { title: string; icon: JSX.Element; link: string };
const SideBarItemList: {
  [key: string]: ItemParams;
} = {
  TongQuan: {
    title: "Tổng quan",
    icon: <AccessibilityNewIcon />,
    link: "/admin/tongquan",
  },
  DonHang: {
    title: "Đơn hàng",
    icon: <ShoppingCartIcon />,
    link: "/admin/donhang",
  },
  ĐonangKyDL: {
    title: "Đơn đăng ký đại lý",
    icon: <NoteAddIcon />,
    link: "/admin/dondangkydl",
  },
};

function SideBar() {
  return (
    <div className="max-w-[400px] min-h-full overflow-x-auto bg-slate-200">
      <div className="inline-block w-full">
        {Object.values(SideBarItemList).map((item, idex) => {
          return (
            <SideBarItem
              key={idex}
              title={item.title}
              icon={item.icon}
              link={item.link}
            />
          );
        })}
      </div>
    </div>
  );
}

const SideBarItem = ({
  title,
  icon,
  link,
}: {
  title: string;
  icon: JSX.Element;
  link: string;
}) => {
  return (
    <Link href={link}>
      <span className="flex items-center gap-2 p-5 pr-5 hover:bg-gray-500 active:bg-slate-400">
        <div className="w-6 h-6">{icon}</div>
        {title}
      </span>
    </Link>
  );
};

export default SideBar;
