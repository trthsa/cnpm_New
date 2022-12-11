import InsightsIcon from "@mui/icons-material/Insights";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import DetailsStatistic from "./DetailsStatistic";
import SmallStatistic from "./SmallStatistic";
import AltRouteIcon from "@mui/icons-material/AltRoute";
//render 4 small statistic on server side nextjs
import InfoIcon from "@mui/icons-material/Info";
function TongQuanBody() {
  return (
    <div className="flex-1 min-h-screen">
      <div className="mx-32 mt-20">
        <div className="flex flex-col gap-20">
          <div className="flex gap-10">
            <SmallStatistic
              icon={<LeaderboardIcon />}
              title="Tiền bán hàng"
              value={0}
              color="#9ABC32"
              children={<span className="text-2xl font-bold">0</span>}
            />
            <SmallStatistic
              icon={<LeaderboardIcon />}
              value={0}
              color="#6FB3E0"
              children={
                <>
                  <span className="">Số đơn hàng: 0</span>
                  <span className="">Số hóa đơn: 0</span>
                </>
              }
            />
            <SmallStatistic
              icon={<LeaderboardIcon />}
              title="Tiền bán hàng"
              value={0}
              color="#D53F40"
              children={<span className="text-2xl font-bold">0</span>}
            />
            <SmallStatistic
              icon={<LeaderboardIcon />}
              title="Tiền bán hàng"
              value={0}
              color="#E8B110"
              children={<span className="text-2xl font-bold">0</span>}
            />
          </div>
          <div className="flex gap-10">
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
                      <span className="flex justify-between">
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
                      <span className="flex justify-between">
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
                      <span className="flex justify-between">
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
