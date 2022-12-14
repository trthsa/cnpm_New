import Head from 'next/head'
import Image from 'next/image'
import HeadNav from './components/HeadNav'
import Carousel from './components/Carousel'

export default function Home() {
  return (
    <div 
    className='flex flex-col'
    style={{height:"100vh"}}>
      <Head>
        <title>Đại lý Bia</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
       <HeadNav/>
       <Carousel/>
       
       
      </main>

      <footer style={{marginTop:"auto"}}>
    
          Powered by Nhóm 4
    
      </footer>
    </div>
  )
}
