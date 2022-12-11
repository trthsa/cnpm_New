interface ISmallStatisticProps {
  title?: string;
  value?: number;
  icon: JSX.Element;
  color: string;
  children?: JSX.Element;
}
function SmallStatistic(props: ISmallStatisticProps) {
  return (
    <div>
      <div className="">
        <div
          style={{
            backgroundColor: props.color,
          }}
          className={`flex items-center gap-5 p-5 min-h-[96px] w-fit text-white`}
        >
          <span className="text-black">{props.icon}</span>
          <span>
            <div className="flex flex-col">
              {props.title && <span className="font-bold ">{props.title}</span>}

              {props.children}
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SmallStatistic;
