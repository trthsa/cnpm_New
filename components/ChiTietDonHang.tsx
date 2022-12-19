import { useEffect, useState } from "react";
import { defaultHeadClass } from "../pages/admin/donhang";
const fetchChiTietDonHang = async (MaDH: string) => {
  return fetch("/api/getAllofChiTietDonHang", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      MADH: MaDH,
    }),
  }).then((res) => {
    return res.json();
  });
};
function ChiTietDonHang({ MaDH }: { MaDH: string }) {
  const [chitietdonhang, setChiTietDonHang] = useState<any>();
  useEffect(() => {
    if (!MaDH) {
      setChiTietDonHang(null);
      return;
    }
    fetchChiTietDonHang(MaDH).then((data) => {
      console.log(data);
      setChiTietDonHang(data.ctdonhang);
    });
  }, [MaDH]);
  if (!chitietdonhang) {
    return <div className="text-slate-400 mt-3">Bạn hãy chọn Đơn hàng cần xem </div>;
  }

  return (
    <div>
      <table className="my-3 w-full table-auto border-spacing-5 border border-collapse">
        <thead>
          <tr>
            <th className={defaultHeadClass}>Mã nhận dạng</th>
            {/* <th className={defaultHeadClass}>Ngày đặt</th>
                  <th className={defaultHeadClass}>Người đặt</th>
                  <th className={defaultHeadClass}>Trạng thái</th> */}
            <th className={defaultHeadClass}>Mã sản phẩm</th>
            <th className={defaultHeadClass}>Số lượng</th>
          </tr>
        </thead>
        <tbody>
          {chitietdonhang.map((ctdonhang: any) => {
            return (
              <tr className="hover:bg-slate-300" key={ctdonhang.MADH}>
                <td className={defaultHeadClass}>{ctdonhang.MAND}</td>
                <td className={defaultHeadClass}>{ctdonhang.MASP}</td>
                <td className={defaultHeadClass}>{ctdonhang.SOLUONG}</td>
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
    </div>
  );
}

export default ChiTietDonHang;
