import { useEffect, useState } from "react";
import { defaultHeadClass } from "../pages/admin/donhang";
import ChiTietDonHang from "./ChiTietDonHang";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
function DonHangList({ MaHD }: { MaHD: string }) {
  const [donHangList, setDonHangList] = useState<any>();
  const [focusDH, setfocusDH] = useState<any>();
  useEffect(() => {
    if (!MaHD) {
      return;
    }
    setfocusDH(null);
    const fetchDonHang = fetch("/api/getAllDonHangofHoaDon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        MAHD: MaHD,
      }),
    }).then((res) => {
      res.json().then((data) => {
        // console.log(data);

        setDonHangList(data.donhang);
      });
    });
  }, [MaHD]);
  if (!donHangList) {
    return (
      <div className="text-slate-400 mt-3">Bạn hãy chọn Hóa đơn cần xem </div>
    );
  }

  return (
    <div>
      <table className="my-3 w-full table-auto border-spacing-5 border border-collapse">
        <thead>
          <tr>
            <th className={defaultHeadClass}>Mã đơn hàng</th>
            {/* <th className={defaultHeadClass}>Ngày đặt</th>
                  <th className={defaultHeadClass}>Người đặt</th>
                  <th className={defaultHeadClass}>Trạng thái</th> */}
            <th className={defaultHeadClass}>Tổng tiền</th>
          </tr>
        </thead>
        <tbody>
          {donHangList.map((donhang: any) => {
            return (
              <tr
                onClick={() => {
                  setfocusDH(donhang.MADH);
                }}
                className="hover:bg-slate-300"
                key={donhang.MADH}
              >
                <td className={defaultHeadClass}>{donhang.MADH}</td>
                <td className={defaultHeadClass}>{donhang.TTien}</td>
                {/* <td className={defaultHeadClass}>{donhang.nguoidat}</td>
                      <td className={defaultHeadClass}>{donhang.trangthai}</td>
                      <td className={defaultHeadClass}>{donhang.tongtien}</td> */}
              </tr>
            );
          })}
          {/* <tr>
                  <td className="border border-slate-300">1</td>
                  <td className={defaultHeadClass}>1</td>
                  <td className={defaultHeadClass}>1</td>
                  <td className={defaultHeadClass}>1</td>
                  <td className={defaultHeadClass}>1</td>
                </tr> */}
        </tbody>
      </table>
      <div className="h-[5px] w-full bg-orange-600 max-w-[500px]"></div>
      <span className="flex items-center my-2">
        <DragIndicatorIcon className="text-orange-400 mr-2 " />
        Thông tin chi tiết về đơn hàng của hóa đơn
      </span>
      <div className="h-[1px] w-full bg-slate-300 max-w-[500px]"></div>
      <ChiTietDonHang MaDH={focusDH} />
    </div>
  );
}

export default DonHangList;
