import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'

export default function Home() {
  return (
    <div class="">
      <Head>
        <title>Datalink Glacier Showcase</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
      </Head>

      <main>
        <section class="antialiased bg-blue_9 text-white h-screen p-2 w-screen">
          <div class="flex flex-col justify-start h-full ">
            <div class="top-bar flex flex-row justify-between mb-2">

              <div class="logoAndIcon flex flex-row items-center">
                <div class="menuIcon rounded-lg p-2 bg-white_glacier_def hover:bg-white_glacier_hov cursor-pointer duration-300">
                  <img src="/menu.svg" />
                </div>
                <div class="logo flex ml-4">
                  <Image src="/logo.svg" width="158.67" height="14" />
                </div>
              </div>

              <h1 class="mr-5 font-semibold text-xl tracking-tight self-center">File Manager</h1>

              <div class="userSelector items-center menuIcon rounded-lg bg-white_glacier_def hover:bg-white_glacier_hov cursor-pointer duration-300 h-9">
                <div class="flex flex-row h-9">
                  <div class="flex items-center justify-center text-xls font-bold text-blue_9 short-name rounded-l-lg">
                    <p class="opacity-75 leading-tight">TV</p>
                  </div>   
                  <div class="flex flex-row items-center p-2">
                    <p class="mr-2 text-xls font-medium leading-tight">Tommy Vercetti</p>
                    <Image src="/arrow.svg" width="18" height="18" />
                  </div>
                </div>
                
              </div>
            </div>
            <div class="bg-white rounded-lg h-screen shadow-3xl overflow-hidden">
              <div class="fixed-bars fixed w-full	pr-4">
                <div class="table-top-bar backdrop-blur bg-white/50 justify-end rounded-t-lg flex flex-row p-1.5 h-12 shadow-3xl relative z-30">
                  <div class="secondary-btn cursor-pointer duration-300 rounded-lg inline-flex flex-row items-center gap-2">
                    <Image class="duration-300" src="/filter.svg" width="20" height="20" />
                    <p class="font-medium text-sm text-black_10 leading-tight">Filter</p>
                  </div>
                  <div class="primary-btn cursor-pointer duration-300 rounded-lg inline-flex flex-row items-center gap-2">
                    <Image src="/plus.svg" width="20" height="20" />
                    <p class="text-blue_9 font-medium text-sm leading-tight">Add New Files</p>
                  </div>
                </div>
                <div class="flex flex-row items-center pl-4  table-columns h-8 border-b border-blue_0	bg-gray_0/50 backdrop-blur z-10">
                  <div class="file_name w-64 top-column pr-6 flex items-center text-gray_4 text-xs tracking-wider font-semibold uppercase border-r border-gray_4/20 h-full">
                    <p>file name</p>
                  </div>
                  <div class="file_size w-20 top-column pl-2 pr-6 flex items-center text-gray_4 text-xs tracking-wider font-semibold uppercase border-r border-gray_4/20 h-full">
                    <p>size</p>
                  </div>
                  <div class="file_size w-36 top-column pl-2 pr-6 flex items-center text-gray_4 text-xs tracking-wider font-semibold uppercase border-r border-gray_4/20 h-full">
                    <p>Trans. No.</p>
                  </div>
                  <div class="file_size w-32 top-column pl-2 pr-6 flex items-center text-gray_4 text-xs tracking-wider font-semibold uppercase border-r border-gray_4/20 h-full">
                    <p>Created date</p>
                  </div>
                </div>
              </div>
              <div class="rows pt-20 overflow-y-scroll">
                <div class="flex flex-row row h-8 pl-4 border-b border-blue_0 duration-300 border-r border-blue_0">
                  <p class="text-xls w-64 pr-6 text-black_10 flex items-center h-full border-r border-gray_0"><a href="#" class="text-blue_9 underline decoration-blue_0 hover:decoration-blue_9 underline-offset-2 duration-300">G-123145690.pdf</a></p>
                  <p class="text-xls w-20 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5,8 MB</p>
                  <p class="text-xls w-36 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">DL-1333425256</p>
                  <p class="text-xls w-32 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5/11/2021</p>
                </div>
                <div class="flex flex-row row h-8 pl-4 border-b border-blue_0 duration-300 border-r border-blue_0">
                  <p class="text-xls w-64 pr-6 text-black_10 flex items-center h-full border-r border-gray_0"><a href="#" class="text-blue_9 underline decoration-blue_0 hover:decoration-blue_9 underline-offset-2 duration-300">G-123145690.pdf</a></p>
                  <p class="text-xls w-20 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5,8 MB</p>
                  <p class="text-xls w-36 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">DL-1333425256</p>
                  <p class="text-xls w-32 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5/11/2021</p>
                </div>
                <div class="flex flex-row row h-8 pl-4 border-b border-blue_0 duration-300 border-r border-blue_0">
                  <p class="text-xls w-64 pr-6 text-black_10 flex items-center h-full border-r border-gray_0"><a href="#" class="text-blue_9 underline decoration-blue_0 hover:decoration-blue_9 underline-offset-2 duration-300">G-123145690.pdf</a></p>
                  <p class="text-xls w-20 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5,8 MB</p>
                  <p class="text-xls w-36 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">DL-1333425256</p>
                  <p class="text-xls w-32 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5/11/2021</p>
                </div>
                <div class="flex flex-row row h-8 pl-4 border-b border-blue_0 duration-300 border-r border-blue_0">
                  <p class="text-xls w-64 pr-6 text-black_10 flex items-center h-full border-r border-gray_0"><a href="#" class="text-blue_9 underline decoration-blue_0 hover:decoration-blue_9 underline-offset-2 duration-300">G-123145690.pdf</a></p>
                  <p class="text-xls w-20 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5,8 MB</p>
                  <p class="text-xls w-36 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">DL-1333425256</p>
                  <p class="text-xls w-32 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5/11/2021</p>
                </div>
                <div class="flex flex-row row h-8 pl-4 border-b border-blue_0 duration-300 border-r border-blue_0">
                  <p class="text-xls w-64 pr-6 text-black_10 flex items-center h-full border-r border-gray_0"><a href="#" class="text-blue_9 underline decoration-blue_0 hover:decoration-blue_9 underline-offset-2 duration-300">G-123145690.pdf</a></p>
                  <p class="text-xls w-20 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5,8 MB</p>
                  <p class="text-xls w-36 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">DL-1333425256</p>
                  <p class="text-xls w-32 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5/11/2021</p>
                </div>
                <div class="flex flex-row row h-8 pl-4 border-b border-blue_0 duration-300 border-r border-blue_0">
                  <p class="text-xls w-64 pr-6 text-black_10 flex items-center h-full border-r border-gray_0"><a href="#" class="text-blue_9 underline decoration-blue_0 hover:decoration-blue_9 underline-offset-2 duration-300">G-123145690.pdf</a></p>
                  <p class="text-xls w-20 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5,8 MB</p>
                  <p class="text-xls w-36 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">DL-1333425256</p>
                  <p class="text-xls w-32 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5/11/2021</p>
                </div>
                <div class="flex flex-row row h-8 pl-4 border-b border-blue_0 duration-300 border-r border-blue_0">
                  <p class="text-xls w-64 pr-6 text-black_10 flex items-center h-full border-r border-gray_0"><a href="#" class="text-blue_9 underline decoration-blue_0 hover:decoration-blue_9 underline-offset-2 duration-300">G-123145690.pdf</a></p>
                  <p class="text-xls w-20 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5,8 MB</p>
                  <p class="text-xls w-36 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">DL-1333425256</p>
                  <p class="text-xls w-32 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5/11/2021</p>
                </div>
                <div class="flex flex-row row h-8 pl-4 border-b border-blue_0 duration-300 border-r border-blue_0">
                  <p class="text-xls w-64 pr-6 text-black_10 flex items-center h-full border-r border-gray_0"><a href="#" class="text-blue_9 underline decoration-blue_0 hover:decoration-blue_9 underline-offset-2 duration-300">G-123145690.pdf</a></p>
                  <p class="text-xls w-20 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5,8 MB</p>
                  <p class="text-xls w-36 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">DL-1333425256</p>
                  <p class="text-xls w-32 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5/11/2021</p>
                </div>
                <div class="flex flex-row row h-8 pl-4 border-b border-blue_0 duration-300 border-r border-blue_0">
                  <p class="text-xls w-64 pr-6 text-black_10 flex items-center h-full border-r border-gray_0"><a href="#" class="text-blue_9 underline decoration-blue_0 hover:decoration-blue_9 underline-offset-2 duration-300">G-123145690.pdf</a></p>
                  <p class="text-xls w-20 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5,8 MB</p>
                  <p class="text-xls w-36 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">DL-1333425256</p>
                  <p class="text-xls w-32 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5/11/2021</p>
                </div>
                <div class="flex flex-row row h-8 pl-4 border-b border-blue_0 duration-300 border-r border-blue_0">
                  <p class="text-xls w-64 pr-6 text-black_10 flex items-center h-full border-r border-gray_0"><a href="#" class="text-blue_9 underline decoration-blue_0 hover:decoration-blue_9 underline-offset-2 duration-300">G-123145690.pdf</a></p>
                  <p class="text-xls w-20 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5,8 MB</p>
                  <p class="text-xls w-36 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">DL-1333425256</p>
                  <p class="text-xls w-32 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5/11/2021</p>
                </div>
                <div class="flex flex-row row h-8 pl-4 border-b border-blue_0 duration-300 border-r border-blue_0">
                  <p class="text-xls w-64 pr-6 text-black_10 flex items-center h-full border-r border-gray_0"><a href="#" class="text-blue_9 underline decoration-blue_0 hover:decoration-blue_9 underline-offset-2 duration-300">G-123145690.pdf</a></p>
                  <p class="text-xls w-20 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5,8 MB</p>
                  <p class="text-xls w-36 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">DL-1333425256</p>
                  <p class="text-xls w-32 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5/11/2021</p>
                </div>
                <div class="flex flex-row row h-8 pl-4 border-b border-blue_0 duration-300 border-r border-blue_0">
                  <p class="text-xls w-64 pr-6 text-black_10 flex items-center h-full border-r border-gray_0"><a href="#" class="text-blue_9 underline decoration-blue_0 hover:decoration-blue_9 underline-offset-2 duration-300">G-123145690.pdf</a></p>
                  <p class="text-xls w-20 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5,8 MB</p>
                  <p class="text-xls w-36 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">DL-1333425256</p>
                  <p class="text-xls w-32 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5/11/2021</p>
                </div>
                <div class="flex flex-row row h-8 pl-4 border-b border-blue_0 duration-300 border-r border-blue_0">
                  <p class="text-xls w-64 pr-6 text-black_10 flex items-center h-full border-r border-gray_0"><a href="#" class="text-blue_9 underline decoration-blue_0 hover:decoration-blue_9 underline-offset-2 duration-300">G-123145690.pdf</a></p>
                  <p class="text-xls w-20 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5,8 MB</p>
                  <p class="text-xls w-36 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">DL-1333425256</p>
                  <p class="text-xls w-32 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5/11/2021</p>
                </div>
                <div class="flex flex-row row h-8 pl-4 border-b border-blue_0 duration-300 border-r border-blue_0">
                  <p class="text-xls w-64 pr-6 text-black_10 flex items-center h-full border-r border-gray_0"><a href="#" class="text-blue_9 underline decoration-blue_0 hover:decoration-blue_9 underline-offset-2 duration-300">G-123145690.pdf</a></p>
                  <p class="text-xls w-20 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5,8 MB</p>
                  <p class="text-xls w-36 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">DL-1333425256</p>
                  <p class="text-xls w-32 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5/11/2021</p>
                </div>
                <div class="flex flex-row row h-8 pl-4 border-b border-blue_0 duration-300 border-r border-blue_0">
                  <p class="text-xls w-64 pr-6 text-black_10 flex items-center h-full border-r border-gray_0"><a href="#" class="text-blue_9 underline decoration-blue_0 hover:decoration-blue_9 underline-offset-2 duration-300">G-123145690.pdf</a></p>
                  <p class="text-xls w-20 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5,8 MB</p>
                  <p class="text-xls w-36 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">DL-1333425256</p>
                  <p class="text-xls w-32 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5/11/2021</p>
                </div>
                <div class="flex flex-row row h-8 pl-4 border-b border-blue_0 duration-300 border-r border-blue_0">
                  <p class="text-xls w-64 pr-6 text-black_10 flex items-center h-full border-r border-gray_0"><a href="#" class="text-blue_9 underline decoration-blue_0 hover:decoration-blue_9 underline-offset-2 duration-300">G-123145690.pdf</a></p>
                  <p class="text-xls w-20 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5,8 MB</p>
                  <p class="text-xls w-36 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">DL-1333425256</p>
                  <p class="text-xls w-32 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5/11/2021</p>
                </div>
                <div class="flex flex-row row h-8 pl-4 border-b border-blue_0 duration-300 border-r border-blue_0">
                  <p class="text-xls w-64 pr-6 text-black_10 flex items-center h-full border-r border-gray_0"><a href="#" class="text-blue_9 underline decoration-blue_0 hover:decoration-blue_9 underline-offset-2 duration-300">G-123145690.pdf</a></p>
                  <p class="text-xls w-20 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5,8 MB</p>
                  <p class="text-xls w-36 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">DL-1333425256</p>
                  <p class="text-xls w-32 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5/11/2021</p>
                </div>
                <div class="flex flex-row row h-8 pl-4 border-b border-blue_0 duration-300 border-r border-blue_0">
                  <p class="text-xls w-64 pr-6 text-black_10 flex items-center h-full border-r border-gray_0"><a href="#" class="text-blue_9 underline decoration-blue_0 hover:decoration-blue_9 underline-offset-2 duration-300">G-123145690.pdf</a></p>
                  <p class="text-xls w-20 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5,8 MB</p>
                  <p class="text-xls w-36 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">DL-1333425256</p>
                  <p class="text-xls w-32 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5/11/2021</p>
                </div>
                <div class="flex flex-row row h-8 pl-4 border-b border-blue_0 duration-300 border-r border-blue_0">
                  <p class="text-xls w-64 pr-6 text-black_10 flex items-center h-full border-r border-gray_0"><a href="#" class="text-blue_9 underline decoration-blue_0 hover:decoration-blue_9 underline-offset-2 duration-300">G-123145690.pdf</a></p>
                  <p class="text-xls w-20 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5,8 MB</p>
                  <p class="text-xls w-36 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">DL-1333425256</p>
                  <p class="text-xls w-32 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5/11/2021</p>
                </div>
                <div class="flex flex-row row h-8 pl-4 border-b border-blue_0 duration-300 border-r border-blue_0">
                  <p class="text-xls w-64 pr-6 text-black_10 flex items-center h-full border-r border-gray_0"><a href="#" class="text-blue_9 underline decoration-blue_0 hover:decoration-blue_9 underline-offset-2 duration-300">G-123145690.pdf</a></p>
                  <p class="text-xls w-20 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5,8 MB</p>
                  <p class="text-xls w-36 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">DL-1333425256</p>
                  <p class="text-xls w-32 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5/11/2021</p>
                </div>
                <div class="flex flex-row row h-8 pl-4 border-b border-blue_0 duration-300 border-r border-blue_0">
                  <p class="text-xls w-64 pr-6 text-black_10 flex items-center h-full border-r border-gray_0"><a href="#" class="text-blue_9 underline decoration-blue_0 hover:decoration-blue_9 underline-offset-2 duration-300">G-123145690.pdf</a></p>
                  <p class="text-xls w-20 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5,8 MB</p>
                  <p class="text-xls w-36 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">DL-1333425256</p>
                  <p class="text-xls w-32 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5/11/2021</p>
                </div>
                <div id="rowss" class="flex flex-row row h-8 pl-4 border-b border-blue_0 duration-300 border-r border-blue_0">
                  <p class="text-xls w-64 pr-6 text-black_10 flex items-center h-full border-r border-gray_0"><a href="#" class="text-blue_9 underline decoration-blue_0 hover:decoration-blue_9 underline-offset-2 duration-300">G-123145690_last_item.pdf</a></p>
                  <p class="text-xls w-20 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5,8 MB</p>
                  <p class="text-xls w-36 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">DL-1333425256</p>
                  <p class="text-xls w-32 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5/11/2021</p>
                </div>
              </div>
              <div class="bottom-scroll bg-white/50 backdrop-blur border-t border-blue_0 pl-4 pr-4 pt-0.5">
                <p class="text-xls text-gray_4">44 records</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <script type="text/javascript" src="/static/common.js"></script>
    </div>
  )
}
