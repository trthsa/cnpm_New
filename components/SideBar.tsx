import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import Link from "next/link";
function SideBar() {
  return (
    <div className="max-w-[400px] overflow-x-auto bg-slate-200">
      <div className=" inline-block ">
        {[...Array(10)].map((item, idex) => {
          return (
            <SideBarItem
              key={idex}
              title="Tổng quan"
              icon={<AccessibilityNewIcon />}
              link="/admin/tongquan"
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
      <span className="flex items-center gap-2 p-5  pr-20 hover:bg-gray-500 active:bg-slate-400">
        <div className="w-6 h-6">{icon}</div>
        {title}
      </span>
    </Link>
  );
};

export default SideBar;
