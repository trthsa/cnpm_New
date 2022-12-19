import Image from "next/image";
function Introduce() {
  return (
    <div className="mx-20 gap-20 flex justify-between items-center mt-52">
      <div className="flex-1 flex-col justify-center text-center">
        <h1 className="font-bold text-3xl">Sản phẩm chính hãng</h1>
        <p className="text-xl">
          Chúng tôi cam kết sản phẩm đến tay người tiêu dùng là sản phẩm chính
          hãng. Cam kết bằng hợp đồng giữ nhà phân phối và đại lý tiêu thụ.
          Chúng tôi cam kết sản phẩm đến tay người tiêu dùng là sản phẩm chính
          hãng. Cam kết bằng hợp đồng giữ nhà phân phối và đại lý tiêu thụ.
          Chúng tôi cam kết sản phẩm đến tay người tiêu dùng là sản phẩm chính
          hãng. Cam kết bằng hợp đồng giữ nhà phân phối và đại lý tiêu thụ.
          Chúng tôi cam kết sản phẩm đến tay người tiêu dùng là sản phẩm chính
          hãng. Cam kết bằng hợp đồng giữ nhà phân phối và đại lý tiêu thụ.
        </p>
      </div>
      <div className="flex-1">
        <Image
          src="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
          alt="introduce"
        />
      </div>
    </div>
  );
}

export default Introduce;
