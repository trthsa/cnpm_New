import Link from "next/link";
import HeadNav from "../../components/HeadNav";

export function Login() {
  return (
    <div className="min-h-screen">
      <HeadNav />
      <div className="flex flex-col justify-center items-center">
        <div className="mt-40 p-10 border-[1px] border-slate-400 rounded-md ">
          Login box. For administator only!
          <p>
            Đăng ký đại lý <Link className="text-blue-400" href={"./dangkydaily"}> tại đây</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
