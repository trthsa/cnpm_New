import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import HeadNav from "../../components/HeadNav";
// model DONDKDAILY {
//   TENDL    String?  @db.VarChar(50)
//   CCCD     Int?
//   MAKV     String?  @db.Char(4)
//   DIACHI   String?  @db.VarChar(100)
//   GIOITINH Boolean? @db.Bit(1)
//   SDT      Int?

//   @@ignore
// }

// export async function getStaticProps() {
//   const res = await fetch("http://localhost:3000/api/getKhuVuc");
//   const data = await res.json();

//   return {
//     props: {
//       data,
//     },
//   };
// }

function Dangkydaily() {
  const [khuvuc, setKhuVuc] = useState<any>();
  const [listKhuVuc, setListKhuVuc] = useState<any>();
  const [sex, setSex] = useState("");
  const [err, setErr] = useState({});
  const ref = useRef({
    TENDL: {
      isErr: false,
      value: "",
    },
    CCCD: {
      isErr: false,
      value: "",
    },
    MAKV: {
      isErr: false,
      value: "",
    },
    DIACHI: {
      isErr: false,
      value: "",
    },
    GIOITINH: {
      isErr: false,
      value: "",
    },
    SDT: {
      isErr: false,
      value: "",
    },
  });
  useEffect(() => {
    const getKV = async () => {
      const res = await fetch("/api/getKhuVuc");
      const data = await res.json();
      setListKhuVuc(data.khuVuc);
    };
    getKV();
  }, []);
  if (!listKhuVuc) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="min-h-screen">
        <HeadNav />
        <div className="flex flex-col justify-center items-center">
          <div className="mt-12 p-10 w-2/3 flex flex-col gap-5 border-[1px] border-slate-400 rounded-md ">
            <div className="h-[5px] w-full bg-green-600"></div>
            <h1 className="font-bold text-xl">
              Form đăng ký đại lý khu vực của Đại lý Bia
            </h1>
            <TextField
              error={ref.current.TENDL.isErr}
              required
              onChange={(event) => {
                ref.current.TENDL.value = event.target.value;
              }}
              id="outlined-required"
              label="Họ và tên"
              defaultValue=""
              placeholder="Họ và tên của đại lý (V.d: Trần Văn B)"
            />
            <TextField
              error={ref.current.CCCD.isErr}
              onChange={(event) => {
                ref.current.CCCD.value = event.target.value;
              }}
              required
              id="outlined-required"
              label="Căn cước công dân"
              defaultValue=""
              placeholder="Số căn cước của đại lý (V.d: 07920XXXXXXXXXXX)"
            />
            <TextField
              error={ref.current.SDT.isErr}
              onChange={(event) => {
                ref.current.SDT.value = event.target.value;
              }}
              type={"number"}
              required
              id="outlined-required"
              label="Số điện thoại"
              defaultValue=""
              placeholder="Số điện thoại của đại lý (V.d: 0900XXXXX)"
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Khu vực đăng ký
              </InputLabel>
              <Select
                error={ref.current.MAKV.isErr}
                onChange={(event) => {
                  ref.current.MAKV.value = event.target.value;
                  setKhuVuc(event.target.value);
                }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={khuvuc}
                defaultValue=""
                label="Khu vực đăng ký đại lý"
              >
                {listKhuVuc.map((item: any) => {
                  return (
                    <MenuItem key={item.MAKV} value={item.MAKV}>
                      {item.Quan}, {item.Phuong}, {item.Thanhpho}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <TextField
              error={ref.current.DIACHI.isErr}
              onChange={(event) => {
                ref.current.DIACHI.value = event.target.value;
              }}
              required
              id="outlined-required"
              label="Địa chỉ"
              defaultValue=""
              placeholder="Địa chỉ đại lý (V.d: 123 Nguyễn Văn Cừ, P. 12, Q. 5, TP. HCM)"
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label-2">Giới tính</InputLabel>
              <Select
                error={ref.current.GIOITINH.isErr}
                labelId="demo-simple-select-label-2"
                id="demo-simple-select1"
                value={sex}
                label="Giới tính"
                onChange={(event) => {
                  console.log(event.target.value);
                  ref.current.GIOITINH.value = event.target.value;
                  setSex(event.target.value);
                }}
              >
                <MenuItem value={0}>Nam</MenuItem>
                <MenuItem value={1}>Nữ</MenuItem>
              </Select>
            </FormControl>
            <Button
              onClick={() => {
                console.log(ref.current);
                if (!validate(ref, setErr)) {
                  setErr((e) => !e);
                  fetch("http://localhost:3000/api/addDangKyDaiLy", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(ref.current),
                  }).then((res) => {
                    res.json().then((data) => {
                      console.log(res);

                      if (res.status === 200) {
                        alert("Đăng ký thành công");
                        //redirect to login

                        document.location.href = `/auth/tracking/${data.mand}`;
                      } else {
                        alert("Đăng ký thất bại");
                      }
                    });
                  });
                } else {
                  setErr((e) => !e);
                }
              }}
              className="bg-green-600"
              variant="contained"
            >
              Đăng ký
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const validate = (ref: any, trigger: any) => {
  let isErr = false;
  for (const key in ref.current) {
    if (ref.current[key].value === "") {
      ref.current[key].isErr = true;
      isErr = true;
    } else {
      ref.current[key].isErr = false;
    }
  }

  return isErr;
};

export default Dangkydaily;
