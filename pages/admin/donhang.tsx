import InfoIcon from "@mui/icons-material/Info";
import ReceiptIcon from "@mui/icons-material/Receipt";
import { TextField } from "@mui/material";
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

  return (
    <DefaultWrapper>
      <div className="w-full">
        <h1 className="bg-slate-300 mt-[-40px] mx-[-40px] py-5 font-bold text-xl pl-10">
          Đơn hàng{" "}
        </h1>
        <div className="my-5 grid grid-cols-3">
          <div className="col-span-2">
            <TextField
              className="w-full"
              id="outlined-basic"
              label="Nhập mã hóa đơn"
              variant="outlined"
            />
            <table className="my-3 w-full table-auto border-spacing-5 border border-collapse">
              <thead>
                <tr>
                  <th className={defaultHeadClass}>Mã hóa đơn</th>
                  <th className={defaultHeadClass}>Ngày đặt</th>
                  <th className={defaultHeadClass}>Người đặt</th>
                  <th className={defaultHeadClass}>Trạng thái</th>
                  <th className={defaultHeadClass}>Tổng tiền</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-300">1</td>
                  <td className={defaultHeadClass}>1</td>
                  <td className={defaultHeadClass}>1</td>
                  <td className={defaultHeadClass}>1</td>
                  <td className={defaultHeadClass}>1</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="ml-5">
            <div className="h-[5px] w-full bg-green-600"></div>
            <span className="flex items-center my-2">
              <InfoIcon className="text-green-400 mr-2" />
              Thông tin đơn hàng
            </span>
            <div className="h-[1px] w-full bg-slate-300"></div>
            <div className="flex flex-col">
              <span>Mã hóa đơn</span>
              <span>Khách hàng</span>
              <span>Ngày bán</span>
              <span>Người bán</span>
              <span>Ghi chú</span>
            </div>
            <div className="h-[5px] w-full bg-orange-500 mt-2"></div>
            <span className="flex items-center my-2">
              <ReceiptIcon className="text-orange-400 mr-2" />
              Thông tin thanh toán
            </span>
            <div className="h-[1px] w-full bg-slate-300"></div>
            <div className="flex flex-col">
              <span className="flex gap-2">
                <h1>Mã hóa đơn:</h1>
                <p className="font-bold">01012312</p>
              </span>
              <span>Khách hàng</span>
              <span>Ngày bán</span>
              <span>Người bán</span>
              <span>Ghi chú</span>
            </div>
          </div>
        </div>
      </div>
    </DefaultWrapper>
  );
}

export default tongquan;
