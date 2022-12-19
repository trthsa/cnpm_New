import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DoDisturbOnIcon from "@mui/icons-material/DoDisturbOn";
import InfoIcon from "@mui/icons-material/Info";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import { Alert, Snackbar, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import DefaultWrapper from "../../components/UTILS/DefaultWrapper";
import { defaultHeadClass } from "./donhang";
// export async function getServerSideProps() {
//   const res = await fetch("/api/getDangKyDaiLy");
//   const data = await res.json();

//   return {
//     props: {
//       data,
//     },
//   };
// }
async function fetchDonDKDL() {
  const res = await fetch("/api/getDangKyDaiLy");
  const data = await res.json();
  console.log(data);

  return data.DONDK;
}
async function updateDonDKDL(maxnd: string, tinhtrang: number) {
  const res = await fetch("/api/updateTinhTrang", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      MAND: maxnd,
      TINHTRANG: tinhtrang,
    }),
  });
  const data = await res.json();
  return data;
}
function DonDangKiDaiLy() {
  const [snackState, setSnackState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const [DONDK, setDONDK] = useState<any>();
  const [don, setDon] = useState<any>();
  useEffect(() => {
    fetchDonDKDL().then((res) => {
      setDONDK(res);
    });
  }, []);
  if (!DONDK) {
    return <div>Loading ... </div>;
  }
  return (
    <div>
      <Snackbar
        autoHideDuration={2000}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={snackState.open}
        onClose={() => {
          setSnackState({ ...snackState, open: false });
        }}
        key={snackState.vertical + snackState.horizontal}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Đã cập nhật trạng thái đơn!
        </Alert>
      </Snackbar>
      <DefaultWrapper>
        <div className="w-full">
          <h1 className="bg-slate-300 mt-[-40px] mx-[-40px] py-5 font-bold text-xl pl-10">
            Đơn đăng ký đại lý{" "}
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
                    <th className={defaultHeadClass}>Mã đơn</th>
                    <th className={defaultHeadClass}>Họ tên</th>
                    <th className={defaultHeadClass}>Khu vực</th>
                    <th className={defaultHeadClass}>Địa chỉ</th>
                    <th className={defaultHeadClass}>Tình trạng</th>
                  </tr>
                </thead>
                <tbody>
                  {DONDK.map((item: any) => {
                    return (
                      <tr
                        onClick={() => {
                          setDon(item);
                        }}
                        key={item.MAND}
                        className="hover:bg-slate-300"
                      >
                        <td className={defaultHeadClass}>{item.MAND}</td>
                        <td className={defaultHeadClass}>{item.TENDL}</td>
                        <td className={defaultHeadClass}>{item.MAKV}</td>
                        <td className={defaultHeadClass}>{item.DIACHI}</td>
                        <td className={defaultHeadClass + " text-center"}>
                          {item.TinhTrang == 0 ? (
                            <PendingActionsIcon
                              titleAccess="Đang duyệt"
                              className="text-yellow-500"
                            />
                          ) : item.TinhTrang == 1 ? (
                            <CheckCircleIcon
                              titleAccess="Đã duyệt"
                              className="text-green-500"
                            />
                          ) : (
                            <DoDisturbOnIcon
                              titleAccess="Từ chối"
                              className="text-red-500"
                            />
                          )}
                        </td>
                      </tr>
                    );
                  })}
                  {/* <tr className="hover:bg-slate-400">
                    <td className="border border-slate-300">1</td>
                    <td className={defaultHeadClass}>1</td>
                    <td className={defaultHeadClass}>1</td>
                    <td className={defaultHeadClass}>1</td>
                    <td className={defaultHeadClass}>1</td>
                  </tr> */}
                </tbody>
              </table>
            </div>
            <div className="ml-5 h-fit sticky top-0">
              <div className="h-[5px] w-full bg-green-600"></div>
              <span className="flex items-center my-2">
                <InfoIcon className="text-green-400 mr-2" />
                Thông tin đơn
              </span>
              <div className="h-[1px] w-full bg-slate-300"></div>
              {!don ? (
                <div className="text-center">Chưa chọn đơn</div>
              ) : (
                <div className="flex flex-col">
                  <span>
                    Tình trạng:{" "}
                    {don.TinhTrang == 0 ? (
                      <PendingActionsIcon
                        titleAccess="Đang duyệt"
                        className="text-yellow-500"
                      />
                    ) : don.TinhTrang == 1 ? (
                      <CheckCircleIcon
                        titleAccess="Đã duyệt"
                        className="text-green-500"
                      />
                    ) : (
                      <DoDisturbOnIcon
                        titleAccess="Từ chối"
                        className="text-red-500"
                      />
                    )}
                  </span>
                  <span>
                    Mã đơn: <b>{don.MAND}</b>
                  </span>
                  <span>
                    Tên đăng ký: <b>{don.TENDL}</b>
                  </span>
                  <span>
                    Giới tính <b>{don.GIOITINH == true ? "Nam" : "Nữ"}</b>
                  </span>
                  <span>
                    CCCD: <b>{don.CCCD}</b>
                  </span>
                  <span>
                    Khu vực đăng ký: <b>{don.MAKV}</b>
                  </span>
                  <span>
                    Địa chỉ <b>{don.DIACHI}</b>
                  </span>
                  <span>
                    SĐT: <b>{don.SDT}</b>
                  </span>
                  <span className="flex gap-3 flex-col mt-3">
                    <button
                      onClick={async () => {
                        setSnackState((e) => {
                          return {
                            ...e,
                            open: true,
                          };
                        });
                        setDon((e: any) => {
                          return { ...e, TinhTrang: 1 };
                        });
                        await updateDonDKDL(don.MAND, 1);
                        setDONDK(await fetchDonDKDL());
                      }}
                      disabled={don.TinhTrang == 1}
                      className="bg-green-500 enabled:hover:bg-green-600 p-2 rounded disabled:select-none disabled:opacity-50 "
                    >
                      Duyệt
                    </button>
                    <button
                      onClick={async () => {
                        setSnackState((e) => {
                          return {
                            ...e,
                            open: true,
                          };
                        });
                        setDon((e: any) => {
                          return { ...e, TinhTrang: 2 };
                        });
                        await updateDonDKDL(don.MAND, 2);
                        setDONDK(await fetchDonDKDL());
                      }}
                      disabled={don.TinhTrang == 2}
                      className="bg-red-500 enabled:hover:bg-red-600 p-2 rounded disabled:select-none disabled:opacity-50"
                    >
                      Từ chối
                    </button>
                    <button
                      onClick={async () => {
                        setSnackState((e) => {
                          return {
                            ...e,
                            open: true,
                          };
                        });
                        setDon((e: any) => {
                          return { ...e, TinhTrang: 0 };
                        });
                        await updateDonDKDL(don.MAND, 0);
                        setDONDK(await fetchDonDKDL());
                      }}
                      disabled={don.TinhTrang == 0}
                      className="bg-yellow-500 enabled:hover:bg-yellow-600 p-2 rounded disabled:select-none disabled:opacity-50"
                    >
                      Đang duyệt
                    </button>
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </DefaultWrapper>
    </div>
  );
}

export default DonDangKiDaiLy;
