interface IDetailsStatistic {
  title: string;
  icon: JSX.Element;
  children?: JSX.Element;
  color?: string;
}

function DetailsStatistic(props: IDetailsStatistic) {
  return (
    <div>
      <div className="flex flex-col w-fit min-w-[300px] min-h-[300px] border-[1px] border-slate-200 rounded items-center gap-3">
        <div
          className="text-bold py-3 text-center w-full"
          style={{ backgroundColor: props.color }}
        >
          {props.icon}
          {props.title}
        </div>
        <div className="flex flex-col gap-2 w-3/4 pb-3">
          {/* {
            //render 5 row
            [...Array(0)].map((_, index) => {
              return (
                <span className="flex justify-between">
                  <p>Số tiền bán</p>
                  <span>0đ</span>
                </span>
              );
            })
          } */}
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default DetailsStatistic;
