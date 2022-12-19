import InfoIcon from "@mui/icons-material/Info";
import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import DonHangList from "../../components/DonHangList";
import DefaultWrapper from "../../components/UTILS/DefaultWrapper";
export const defaultHeadClass = `border border-slate-300 hover:bg-slate-500 hover:text-white p-2`;
// export async function getStaticProps() {

//   const data = await prisma.namer.findFirst();

//   return {
//     props: {
//       data: data || "no data",
//     },
//   };
// }
function tongquan({ data }: any) {
  const [hoaDonList, setHoaDonList] = useState<[]>([]);
  const [temp_hoaDonList, setTemp_HoaDonList] = useState<[]>([]);
  const [focusHD, setFocusHD] = useState<any>();
  useEffect(() => {
    const fetchHoaDon = async () => {
      const res = await fetch("/api/getAllHoaDon");
      const data = await res.json();
      setHoaDonList(data.hoadon);
      setTemp_HoaDonList(data.hoadon);
      console.log(data);
    };
    fetchHoaDon();
  }, []);
  if (!hoaDonList) return <div>loading...</div>;
  return (
    <DefaultWrapper>
      <div className="w-full">
        <h1 className="bg-slate-300 mt-[-40px] mx-[-40px] py-5 font-bold text-xl pl-10">
          Đơn hàng{" "}
        </h1>
        <div className="my-5 grid grid-cols-3">
          <div className="col-span-1">
            <TextField
              className="w-full"
              id="outlined-basic"
              label="Nhập mã hóa đơn"
              variant="outlined"
              onChange={(e) => {
                const value: any = e.target.value;
                const temp: any = temp_hoaDonList.filter((hoadon: any) => {
                  return hoadon.MAHD.includes(String(value).toUpperCase());
                });
                console.log(temp);

                setHoaDonList(temp);
              }}
            />
            <table className="my-3 w-full table-auto border-spacing-5 border border-collapse">
              <thead>
                <tr>
                  <th className={defaultHeadClass}>Mã hóa đơn</th>
                  {/* <th className={defaultHeadClass}>Ngày đặt</th>
                  <th className={defaultHeadClass}>Người đặt</th>
                  <th className={defaultHeadClass}>Trạng thái</th> */}
                  <th className={defaultHeadClass}>Tổng tiền</th>
                </tr>
              </thead>
              <tbody>
                {hoaDonList.map((hoadon: any) => {
                  return (
                    <tr
                      onClick={() => {
                        setFocusHD(hoadon.MAHD);
                        console.log(hoadon.MAHD);
                      }}
                      className="hover:bg-slate-300"
                      key={hoadon.MAHD}
                    >
                      <td className={defaultHeadClass}>{hoadon.MAHD}</td>
                      <td className={defaultHeadClass}>{hoadon.TONGTIEN}</td>
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
          <div className="ml-5 col-span-2">
            <div className="h-[5px] w-full bg-green-600 max-w-[500px]"></div>
            <span className="flex items-center my-2">
              <InfoIcon className="text-green-400 mr-2 " />
              Thông tin chi tiết về đơn hàng của hóa đơn
            </span>
            <div className="h-[1px] w-full bg-slate-300 max-w-[500px]"></div>
            <div>
              <DonHangList MaHD={focusHD} />
            </div>
          </div>
        </div>
      </div>
    </DefaultWrapper>
  );
}

export default tongquan;
