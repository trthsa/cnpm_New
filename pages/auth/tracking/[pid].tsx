import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DoDisturbOnIcon from "@mui/icons-material/DoDisturbOn";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import { Step, StepLabel, Stepper } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import HeadNav from "../../../components/HeadNav";

function ID(a: any) {
  const router = useRouter();
  const { pid } = router.query;
  const [data, setData] = useState<any>(null);
  console.log("pid" + pid);

  useEffect(() => {
    if (!pid) return;
    fetch(`/api/getSingleDangKyDaiLy`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        MAND: pid,
      }),
    })
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, [pid]);
  console.log(data);
  if (!data || data?.TinhTrang < 0) {
    return (
      <div className="min-h-screen">
        <HeadNav />
        <div className="flex flex-col justify-center items-center">
          <div className="mt-12 p-10 w-2/3 flex flex-col gap-5 border-[1px] border-slate-400 rounded-md ">
            <h1 className="font-bold text-xl">
              Theo dõi tình trạng đăng ký đại lý
            </h1>
            <p>Đang cập nhật! Đợi trong giây lát!</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="min-h-screen">
        <HeadNav />
        <div className="flex flex-col justify-center items-center">
          <div className="mt-12 p-10 w-2/3 flex flex-col gap-5 border-[1px] border-slate-400 rounded-md ">
            <h1 className="font-bold text-xl">
              Theo dõi tình trạng đăng ký đại lý
            </h1>
            <h2 className="text-xl">
              Mã đăng ký số: <b>{data.MAND}</b>
            </h2>
            <h2 className="text-xl">
              Tên đại lý: <b>{data.TENDL}</b>
            </h2>
            <div className="mt-10">
              <Stepper activeStep={data.TinhTrang + 1} alternativeLabel>
                {["Đã nhận", "Đang duyệt", "Kết quả"].map((label, index) => (
                  <Step key={label}>
                    <StepLabel>
                      {index >= 2 ? (
                        data.TinhTrang == 0 ? (
                          <PendingActionsIcon
                            titleAccess="Đang duyệt"
                            className="text-yellow-500"
                          />
                        ) : data.TinhTrang == 1 ? (
                          <>
                            <CheckCircleIcon
                              titleAccess="Đã duyệt"
                              className="text-green-500"
                            />
                            Đã duyệt
                          </>
                        ) : (
                          <>
                            <DoDisturbOnIcon
                              titleAccess="Từ chối"
                              className="text-red-500"
                            />
                            Từ chối
                          </>
                        )
                      ) : (
                        label
                      )}
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ID;
