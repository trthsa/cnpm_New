import Head from "next/head";
import HeadNav from "../components/HeadNav";
import Introduce from "../components/Introduce";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col bg-[#F6B258]" style={{ height: "100vh" }}>
      <Head>
        <title>Đại lý Bia</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-[#F6B258]">
        <HeadNav />

        <Introduce />
      </main>

      <footer
        className="bg-[#F6B258] py-10 flex flex-col items-center justify-center gap-10"
        style={{ marginTop: "auto" }}
      >
        <Image
          src="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=800&h=250&q=60"
          alt="logo"
        />
        <div>@Copyright Nhóm 4</div>
      </footer>
    </div>
  );
}
