import InterestsIcon from "@mui/icons-material/Interests";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SmallStatistic from "./SmallStatistic";
//render 4 small statistic on server side nextjs
const currencyFormatter = (value: number) => {
  return value.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
};

import { useEffect, useState } from "react";
function TongQuanBody() {
  const [statisData, setStatisData] = useState<any>();
  useEffect(() => {
    fetch("/api/getStatistic")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setStatisData(data.statistic);
      });
  }, []);
  if (!statisData) return <div>loading...</div>;
  return (
    <div className="min-h-screen">
      <div className="mt-10">
        <div className="flex items-start justify-center flex-col gap-20">
          <div className="flex gap-10 flex-wrap">
            <SmallStatistic
              icon={<LeaderboardIcon />}
              title="Tiền bán hàng"
              value={0}
              color="#9ABC32"
            >
              <span className="text-xl font-bold">
                {currencyFormatter(statisData.saleTotal)}
              </span>
            </SmallStatistic>
            <SmallStatistic
              icon={<ShoppingCartIcon />}
              value={0}
              color="#6FB3E0"
            >
              <>
                <span className="">Số đơn hàng: {statisData.ordersCount}</span>
                <span className="">Số hóa đơn: {statisData.receiptCount}</span>
              </>
            </SmallStatistic>
            <SmallStatistic
              icon={<RemoveCircleOutlineIcon />}
              title="Số đại lý bị từ chối"
              value={0}
              color="#D53F40"
            >
              <span className="text-2xl font-bold">
                {statisData.tuchoiCount}
              </span>
            </SmallStatistic>
            <SmallStatistic
              icon={<InterestsIcon />}
              title="Số hàng hàng hóa"
              value={0}
              color="#E8B110"
            >
              <span className="text-2xl font-bold">
                {statisData.productsCount}
              </span>
            </SmallStatistic>
          </div>
          <div className="flex gap-10 flex-wrap">
            {/* <DetailsStatistic
              color="#3CCBF8"
              icon={<InsightsIcon />}
              title={"Hoạt động"}
            >
              <>
                {
                  //render 5 row
                  [...Array(10)].map((_, index) => {
                    return (
                      <span key={index} className="flex justify-between">
                        <p>Số tiền bán</p>
                        <span>0đ</span>
                      </span>
                    );
                  })
                }
              </>
            </DetailsStatistic> */}
            {/* <DetailsStatistic
              color="#F6A424"
              icon={<AltRouteIcon />}
              title={"Thông tin khác"}
            >
              <>
                {
                  //render 5 row
                  [...Array(10)].map((_, index) => {
                    return (
                      <span key={index} className="flex justify-between">
                        <p>Số tiền bán</p>
                        <span>0đ</span>
                      </span>
                    );
                  })
                }
              </>
            </DetailsStatistic> */}
            {/* <DetailsStatistic
              color="#9ABC32"
              icon={<InfoIcon />}
              title={"Thông tin hàng hóa"}
            >
              <>
                {
                  //render 5 row
                  [...Array(10)].map((_, index) => {
                    return (
                      <span key={index} className="flex justify-between">
                        <p>Số tiền bán</p>
                        <span>0đ</span>
                      </span>
                    );
                  })
                }
              </>
            </DetailsStatistic> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TongQuanBody;
