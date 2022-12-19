import AltRouteIcon from "@mui/icons-material/AltRoute";
import InsightsIcon from "@mui/icons-material/Insights";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import DetailsStatistic from "./DetailsStatistic";
import SmallStatistic from "./SmallStatistic";
//render 4 small statistic on server side nextjs
import InfoIcon from "@mui/icons-material/Info";
function TongQuanBody() {
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
              <span className="text-2xl font-bold">0</span>
            </SmallStatistic>
            <SmallStatistic
              icon={<LeaderboardIcon />}
              value={0}
              color="#6FB3E0"
            >
              <>
                <span className="">Số đơn hàng: 0</span>
                <span className="">Số hóa đơn: 0</span>
              </>
            </SmallStatistic>
            <SmallStatistic
              icon={<LeaderboardIcon />}
              title="Tiền bán hàng"
              value={0}
              color="#D53F40"
            >
              <span className="text-2xl font-bold">0</span>
            </SmallStatistic>
            <SmallStatistic
              icon={<LeaderboardIcon />}
              title="Tiền bán hàng"
              value={0}
              color="#E8B110"
            >
              <span className="text-2xl font-bold">0</span>
            </SmallStatistic>
          </div>
          <div className="flex gap-10 flex-wrap">
            <DetailsStatistic
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
            </DetailsStatistic>
            <DetailsStatistic
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
            </DetailsStatistic>
            <DetailsStatistic
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
            </DetailsStatistic>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TongQuanBody;
