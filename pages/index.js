import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Datalink Glacier Showcase</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
      </Head>

      <main>

        <div id="mySidebar" class="sidebar bg-white/70 glass h-full fixed shadow-3xl bg-gradient-to-r from-white">
          <div class="logoAndIcon flex flex-row items-center p-2 border-b border-gray_0">
                <div class="close-btn secondary-btn cursor-pointer duration-300 rounded-lg inline-flex flex-row items-center p-1.5">
                    <Image class="duration-300" src="/close.svg" width="20" height="20" />
                </div>
                <div class="logo flex ml-4">
                  <Image src="/logo_colorful.svg" width="158.67" height="14" />
                </div>
          </div>
          <div class="font-semibold text-xl tracking-tight text-gray_4 px-2 py-4">
            <div class="link1 cursor-pointer flex flex-row items-center h-14 pl-4 pr-4 mb-2 hover:bg-blue_9 rounded-lg hover:text-white">            
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.3211 7.0625H12.6883L14.8797 14.625H9.85234L8.30547 12.5625H6.54375L7.53203 16L6.54375 19.4375H8.30547L9.85234 17.375H14.8797L12.6883 24.9375H14.3211L18.618 17.375H23.6023C24.118 17.375 24.7052 17.2174 25.3641 16.9023C26.0229 16.5872 26.4526 16.2865 26.6531 16C26.4526 15.7135 26.0229 15.4128 25.3641 15.0977C24.7052 14.7826 24.118 14.625 23.6023 14.625H18.618L14.3211 7.0625ZM15.0945 5C15.3523 5 15.5529 5.11458 15.6961 5.34375L19.8211 12.5625H23.6023C24.6622 12.5625 25.7794 12.9206 26.9539 13.6367C28.157 14.3242 28.7586 15.112 28.7586 16C28.7586 16.888 28.157 17.6901 26.9539 18.4062C25.7794 19.0937 24.6622 19.4375 23.6023 19.4375H19.8211L15.6961 26.6562C15.5529 26.8854 15.3523 27 15.0945 27H10.8836C10.6544 27 10.4682 26.8997 10.325 26.6992C10.1818 26.5273 10.1531 26.3411 10.2391 26.1406L12.1297 19.4375H10.8836L9.55156 21.2422C9.40833 21.4141 9.22214 21.5 8.99297 21.5H4.69609C4.46693 21.5 4.28073 21.4141 4.1375 21.2422C4.02292 21.0703 3.97995 20.8698 4.00859 20.6406L5.38359 16L4.00859 11.3594C3.97995 11.1302 4.02292 10.9297 4.1375 10.7578C4.28073 10.5859 4.46693 10.5 4.69609 10.5H8.99297C9.22214 10.5 9.40833 10.5859 9.55156 10.7578L10.8836 12.5625H12.1297L10.2391 5.85937C10.1818 5.77344 10.1674 5.67318 10.1961 5.55859C10.2247 5.44401 10.2677 5.34375 10.325 5.25781C10.3823 5.17187 10.4539 5.11458 10.5398 5.08594C10.6544 5.02865 10.769 5 10.8836 5H15.0945Z" fill="#697386"/>
              </svg>
              <p class="grow ml-2">Trips</p>
              <svg class="" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.76562 1.98438C10 1.77604 10.2214 1.77604 10.4297 1.98438L18.5938 10.1875C18.8281 10.3958 18.8281 10.6042 18.5938 10.8125L10.4297 19.0156C10.2214 19.224 10 19.224 9.76562 19.0156L8.98438 18.2344C8.90625 18.1562 8.86719 18.0521 8.86719 17.9219C8.86719 17.7917 8.90625 17.6745 8.98438 17.5703L15.0391 11.5156H1.71875C1.40625 11.5156 1.25 11.3594 1.25 11.0469V9.95312C1.25 9.64062 1.40625 9.48438 1.71875 9.48438H15.0391L8.98438 3.42969C8.77604 3.19531 8.77604 2.97396 8.98438 2.76562L9.76562 1.98438Z" fill="#697386"/>
              </svg>
            </div>
            <div class="link1 cursor-pointer flex flex-row items-center h-14 pl-4 pr-4 mb-2 hover:bg-blue_9 rounded-lg hover:text-white">            
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M18.8575 11.1836C18.474 10.5081 17.8639 9.9296 17 9.66597V8.53125C17 7.97897 16.5523 7.53125 16 7.53125C15.4477 7.53125 15 7.97897 15 8.53125L15 9.63929C13.6339 10.0199 12.6859 11.218 12.5443 12.5729C12.3622 14.3161 13.4802 16.0349 15.8615 16.8825C17.4532 17.4491 17.8082 18.4544 17.7268 19.133C17.6385 19.8685 17.0402 20.5214 16.0606 20.5214C15.1712 20.5214 14.7595 20.149 14.511 19.6935C14.375 19.4442 14.2839 19.1421 14.2272 18.8324C14.1256 18.278 13.6854 17.8072 13.1217 17.8072C12.5817 17.8072 12.1312 18.2383 12.1926 18.7748C12.2609 19.3711 12.4217 20.0398 12.7553 20.6512C13.1988 21.4644 13.9292 22.1325 15 22.398L15 23.4131C15 23.9654 15.4477 24.4131 16 24.4131C16.5523 24.4131 17 23.9654 17 23.4131V22.4116C18.5169 22.0442 19.5411 20.8004 19.7125 19.3712C19.9242 17.6066 18.8449 15.8215 16.5321 14.9983C14.7911 14.3786 14.4705 13.384 14.5335 12.7807C14.6068 12.0795 15.1746 11.5137 15.9321 11.5137C16.5741 11.5137 16.9031 11.7921 17.1183 12.1711C17.2047 12.3233 17.2713 12.5076 17.3205 12.7014C17.4615 13.2578 17.9112 13.7509 18.4852 13.7509C19.0121 13.7509 19.456 13.3376 19.3868 12.8154C19.3167 12.2864 19.1563 11.7099 18.8575 11.1836Z" fill="#697386"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16 26C21.161 26 25.4088 22.0903 25.9433 17.0711C26.0015 16.5246 26.4429 16.0801 26.9925 16.0801C27.5477 16.0801 28.0011 16.5337 27.9515 17.0866C27.4023 23.2049 22.2611 28 16 28C11.8051 28 8.11299 25.8476 5.96777 22.5869V24.7967C5.96777 25.349 5.52006 25.7967 4.96777 25.7967C4.41549 25.7967 3.96777 25.349 3.96777 24.7967V19.7939C3.96777 19.5221 4.18813 19.3018 4.45996 19.3018H6.55792H9.56194C10.1142 19.3018 10.5619 19.7495 10.5619 20.3018C10.5619 20.854 10.1142 21.3018 9.56195 21.3018H7.51955C9.2874 24.1236 12.4246 26 16 26ZM16 4C20.214 4 23.9207 6.17215 26.0615 9.45788V7.28336C26.0615 6.73108 26.5092 6.28336 27.0615 6.28336C27.6138 6.28336 28.0615 6.73108 28.0615 7.28336V12.2794C28.0615 12.5549 27.8382 12.7783 27.5626 12.7783H25.4697H22.4674C21.9151 12.7783 21.4674 12.3306 21.4674 11.7783C21.4674 11.226 21.9151 10.7783 22.4674 10.7783H24.5301C22.7717 7.91199 19.6091 6 16 6C10.8142 6 6.55031 9.94741 6.04924 15.0014C5.99475 15.551 5.55228 16 5 16C4.44772 16 3.99565 15.5507 4.04105 15.0003C4.54906 8.84063 9.70923 4 16 4Z" fill="#697386"/>
              </svg>
              <p class="grow ml-2">Transactions</p>
              <svg class="" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.76562 1.98438C10 1.77604 10.2214 1.77604 10.4297 1.98438L18.5938 10.1875C18.8281 10.3958 18.8281 10.6042 18.5938 10.8125L10.4297 19.0156C10.2214 19.224 10 19.224 9.76562 19.0156L8.98438 18.2344C8.90625 18.1562 8.86719 18.0521 8.86719 17.9219C8.86719 17.7917 8.90625 17.6745 8.98438 17.5703L15.0391 11.5156H1.71875C1.40625 11.5156 1.25 11.3594 1.25 11.0469V9.95312C1.25 9.64062 1.40625 9.48438 1.71875 9.48438H15.0391L8.98438 3.42969C8.77604 3.19531 8.77604 2.97396 8.98438 2.76562L9.76562 1.98438Z" fill="#697386"/>
              </svg>
            </div>
            <div class="link1 cursor-pointer flex flex-row items-center h-14 pl-4 pr-4 mb-2 hover:bg-blue_9 rounded-lg hover:text-white">            
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.98514 5.98514C8.51962 5.45066 9.24452 5.15039 10.0004 5.15039H17.0004C17.2258 5.15039 17.442 5.23994 17.6014 5.39935L24.6014 12.3993C24.7608 12.5588 24.8504 12.775 24.8504 13.0004V24.0004C24.8504 24.7563 24.5501 25.4812 24.0156 26.0156C23.4812 26.5501 22.7563 26.8504 22.0004 26.8504H10.0004C9.24452 26.8504 8.51961 26.5501 7.98514 26.0156C7.45066 25.4812 7.15039 24.7563 7.15039 24.0004V8.00039C7.15039 7.24452 7.45066 6.51961 7.98514 5.98514ZM10.0004 6.85039C9.69539 6.85039 9.40288 6.97155 9.18722 7.18722C8.97155 7.40288 8.85039 7.69539 8.85039 8.00039V24.0004C8.85039 24.3054 8.97155 24.5979 9.18722 24.8136C9.40288 25.0292 9.69539 25.1504 10.0004 25.1504H22.0004C22.3054 25.1504 22.5979 25.0292 22.8136 24.8136C23.0292 24.5979 23.1504 24.3054 23.1504 24.0004V13.3525L16.6483 6.85039H10.0004Z" fill="#697386"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0004 5.15039C17.4698 5.15039 17.8504 5.53095 17.8504 6.00039V12.1504H24.0004C24.4698 12.1504 24.8504 12.5309 24.8504 13.0004C24.8504 13.4698 24.4698 13.8504 24.0004 13.8504H17.0004C16.5309 13.8504 16.1504 13.4698 16.1504 13.0004V6.00039C16.1504 5.53095 16.5309 5.15039 17.0004 5.15039Z" fill="#697386"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9502 22.8402C15.9502 22.3708 16.3308 21.9902 16.8002 21.9902H20.0002C20.4696 21.9902 20.8502 22.3708 20.8502 22.8402C20.8502 23.3097 20.4696 23.6902 20.0002 23.6902H16.8002C16.3308 23.6902 15.9502 23.3097 15.9502 22.8402Z" fill="#697386"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1504 9.00039C11.1504 8.53095 11.5309 8.15039 12.0004 8.15039H14.0004C14.4698 8.15039 14.8504 8.53095 14.8504 9.00039C14.8504 9.46983 14.4698 9.85039 14.0004 9.85039H12.0004C11.5309 9.85039 11.1504 9.46983 11.1504 9.00039Z" fill="#697386"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1504 12.6C11.1504 12.1306 11.5309 11.75 12.0004 11.75H14.0004C14.4698 11.75 14.8504 12.1306 14.8504 12.6C14.8504 13.0694 14.4698 13.45 14.0004 13.45H12.0004C11.5309 13.45 11.1504 13.0694 11.1504 12.6Z" fill="#697386"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9002 17.4598V18.8598H19.1002V17.4598H12.9002ZM12.2002 15.7598C11.6479 15.7598 11.2002 16.2075 11.2002 16.7598V19.5598C11.2002 20.112 11.6479 20.5598 12.2002 20.5598H19.8002C20.3525 20.5598 20.8002 20.1121 20.8002 19.5598V16.7598C20.8002 16.2075 20.3525 15.7598 19.8002 15.7598H12.2002Z" fill="#697386"/>
              </svg>
              <p class="grow ml-2">Invoices</p>
              <svg class="" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.76562 1.98438C10 1.77604 10.2214 1.77604 10.4297 1.98438L18.5938 10.1875C18.8281 10.3958 18.8281 10.6042 18.5938 10.8125L10.4297 19.0156C10.2214 19.224 10 19.224 9.76562 19.0156L8.98438 18.2344C8.90625 18.1562 8.86719 18.0521 8.86719 17.9219C8.86719 17.7917 8.90625 17.6745 8.98438 17.5703L15.0391 11.5156H1.71875C1.40625 11.5156 1.25 11.3594 1.25 11.0469V9.95312C1.25 9.64062 1.40625 9.48438 1.71875 9.48438H15.0391L8.98438 3.42969C8.77604 3.19531 8.77604 2.97396 8.98438 2.76562L9.76562 1.98438Z" fill="#697386"/>
              </svg>
            </div>            
            <div class="link1 cursor-pointer flex flex-row items-center h-14 pl-4 pr-4 mb-2 hover:bg-blue_9 rounded-lg hover:text-white">            
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M26.9996 7.09961C27.4967 7.09961 27.8996 7.50255 27.8996 7.99961V13.9996C27.8996 14.4967 27.4967 14.8996 26.9996 14.8996H20.9996C20.5026 14.8996 20.0996 14.4967 20.0996 13.9996C20.0996 13.5026 20.5026 13.0996 20.9996 13.0996H26.0996V7.99961C26.0996 7.50255 26.5026 7.09961 26.9996 7.09961Z" fill="#697386"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.09961 17.9996C4.09961 17.5026 4.50255 17.0996 4.99961 17.0996H10.9996C11.4967 17.0996 11.8996 17.5026 11.8996 17.9996C11.8996 18.4967 11.4967 18.8996 10.9996 18.8996H5.89961V23.9996C5.89961 24.4967 5.49667 24.8996 4.99961 24.8996C4.50255 24.8996 4.09961 24.4967 4.09961 23.9996V17.9996Z" fill="#697386"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M18.2447 8.22053C16.9303 7.84034 15.5411 7.79931 14.2065 8.10127C12.872 8.40322 11.6357 9.03832 10.613 9.94731C9.59028 10.8563 8.81451 12.0095 8.35806 13.2994C8.19224 13.768 7.67796 14.0135 7.20938 13.8476C6.74079 13.6818 6.49535 13.1675 6.66117 12.699C7.21905 11.1224 8.16721 9.7129 9.41718 8.60192C10.6671 7.49094 12.1782 6.7147 13.8093 6.34564C15.4404 5.97659 17.1384 6.02674 18.7449 6.49141C20.3467 6.95475 21.8055 7.81518 22.986 8.99276L27.6159 13.3433C27.9781 13.6837 27.9959 14.2533 27.6555 14.6155C27.3151 14.9777 26.7455 14.9954 26.3833 14.6551L21.7433 10.2951C21.7365 10.2886 21.7297 10.2821 21.7231 10.2754C20.7558 9.30768 19.5591 8.60072 18.2447 8.22053ZM4.34373 17.3829C4.68411 17.0207 5.25368 17.0029 5.61591 17.3433L10.2559 21.7033C10.2628 21.7098 10.2695 21.7163 10.2762 21.723C11.2434 22.6907 12.4401 23.3977 13.7545 23.7779C15.0689 24.1581 16.4582 24.1991 17.7927 23.8971C19.1272 23.5952 20.3635 22.9601 21.3862 22.0511C22.4089 21.1421 23.1847 19.9889 23.6412 18.699C23.807 18.2304 24.3213 17.9849 24.7898 18.1508C25.2584 18.3166 25.5039 18.8309 25.3381 19.2994C24.7802 20.876 23.832 22.2855 22.582 23.3965C21.3321 24.5075 19.821 25.2837 18.1899 25.6528C16.5588 26.0218 14.8608 25.9717 13.2543 25.507C11.6525 25.0436 10.1937 24.1832 9.01328 23.0057L4.38331 18.6551C4.02108 18.3147 4.00336 17.7451 4.34373 17.3829Z" fill="#697386"/>
              </svg>
              <p class="grow ml-2">Data Sync</p>
              <svg class="" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.76562 1.98438C10 1.77604 10.2214 1.77604 10.4297 1.98438L18.5938 10.1875C18.8281 10.3958 18.8281 10.6042 18.5938 10.8125L10.4297 19.0156C10.2214 19.224 10 19.224 9.76562 19.0156L8.98438 18.2344C8.90625 18.1562 8.86719 18.0521 8.86719 17.9219C8.86719 17.7917 8.90625 17.6745 8.98438 17.5703L15.0391 11.5156H1.71875C1.40625 11.5156 1.25 11.3594 1.25 11.0469V9.95312C1.25 9.64062 1.40625 9.48438 1.71875 9.48438H15.0391L8.98438 3.42969C8.77604 3.19531 8.77604 2.97396 8.98438 2.76562L9.76562 1.98438Z" fill="#697386"/>
              </svg>
            </div>
            <div class="link1 cursor-pointer flex flex-row items-center h-14 pl-4 pr-4 mb-2 hover:bg-blue_9 rounded-lg hover:text-white">            
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26.3984 8.96094C26.7995 9.36198 27 9.84896 27 10.4219V24.6875C27 25.2604 26.7995 25.7474 26.3984 26.1484C25.9974 26.5495 25.5104 26.75 24.9375 26.75H12.5625C11.9896 26.75 11.5026 26.5495 11.1016 26.1484C10.7005 25.7474 10.5 25.2604 10.5 24.6875V20.2188H12.5625V24.6875H24.9375V12.3125H20.4688C20.1823 12.3125 19.9388 12.2122 19.7383 12.0117C19.5378 11.8112 19.4375 11.5677 19.4375 11.2812V6.8125H12.5625V16.0938H17.375V13.9883C17.375 13.7591 17.4753 13.6016 17.6758 13.5156C17.9049 13.4297 18.1055 13.4727 18.2773 13.6445L21.3281 16.7383C21.5859 16.9961 21.5859 17.2539 21.3281 17.5117L18.2773 20.6055C18.1055 20.7773 17.9049 20.8203 17.6758 20.7344C17.4753 20.6484 17.375 20.4909 17.375 20.2617V18.1562H5.51562C5.3724 18.1562 5.24349 18.1133 5.12891 18.0273C5.04297 17.9128 5 17.7839 5 17.6406V16.6094C5 16.4661 5.04297 16.3516 5.12891 16.2656C5.24349 16.151 5.3724 16.0938 5.51562 16.0938H10.5V6.8125C10.5 6.4401 10.5859 6.09635 10.7578 5.78125C10.9583 5.46615 11.2161 5.22266 11.5312 5.05078C11.8464 4.85026 12.1901 4.75 12.5625 4.75H21.3281C21.901 4.75 22.388 4.95052 22.7891 5.35156L26.3984 8.96094ZM21.5 10.25H24.7656L21.5 6.98438V10.25Z" fill="#697386"/>
              </svg>
              <p class="grow ml-2">File Manager</p>
              <svg class="" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.76562 1.98438C10 1.77604 10.2214 1.77604 10.4297 1.98438L18.5938 10.1875C18.8281 10.3958 18.8281 10.6042 18.5938 10.8125L10.4297 19.0156C10.2214 19.224 10 19.224 9.76562 19.0156L8.98438 18.2344C8.90625 18.1562 8.86719 18.0521 8.86719 17.9219C8.86719 17.7917 8.90625 17.6745 8.98438 17.5703L15.0391 11.5156H1.71875C1.40625 11.5156 1.25 11.3594 1.25 11.0469V9.95312C1.25 9.64062 1.40625 9.48438 1.71875 9.48438H15.0391L8.98438 3.42969C8.77604 3.19531 8.77604 2.97396 8.98438 2.76562L9.76562 1.98438Z" fill="#697386"/>
              </svg>
            </div>

          </div>          
        </div>

        <section class="antialiased bg-blue_9 text-white h-screen w-screen">
          <div class="flex flex-col justify-start h-full ">
            <div class="top-bar ml-2 m-2 mr-2 flex flex-row justify-between mb-2">

              <div class="logoAndIcon flex flex-row items-center">
                <div class="menuIcon menu-icon rounded-lg p-2 bg-white_glacier_def hover:bg-white_glacier_hov cursor-pointer duration-300">
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
            <div class="bg-white mr-2 ml-2 mb-2 rounded-lg h-screen shadow-3xl overflow-hidden">
              <div class="fixed-bars sticky">
                <div class="table-top-bar bg-white justify-end rounded-t-lg flex flex-row p-1.5 h-12 shadow-3xl relative z-30">
                  <div class="secondary-btn cursor-pointer duration-300 rounded-lg inline-flex flex-row items-center pl-2 pr-3">
                    <Image class="duration-300" src="/filter.svg" width="20" height="20" />
                    <p class="font-medium ml-2 text-sm text-black_10 leading-tight">Filter</p>
                  </div>
                  <div class="primary-btn cursor-pointer duration-300 rounded-lg inline-flex flex-row items-center ml-1.5">
                    <Image src="/plus.svg" width="20" height="20" />
                    <p class="text-blue_9 ml-2 font-medium text-sm leading-tight">Add New Files</p>
                  </div>
                </div>
                <div class="flex flex-row items-center pl-4  table-columns h-8 border-b border-blue_0	bg-gray_0 z-10">
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
              <div class="rows overflow-y-scroll">
                <div class="flex flex-row row h-8 pl-4 border-b border-blue_0 border-r border-blue_0">
                  <p class="text-xls w-64 pr-6 text-black_10 flex items-center h-full border-r border-gray_0"><a href="#" class="text-blue_9 underline decoration-blue_0 hover:decoration-blue_9 underline-offset-2 duration-300">G-123145690.pdf</a></p>
                  <p class="text-xls w-20 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5,8 MB</p>
                  <p class="text-xls w-36 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">DL-1333425256</p>
                  <p class="text-xls w-32 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5/11/2021</p>
                </div>
                <div class="flex flex-row row h-8 pl-4 border-b border-blue_0 border-r border-blue_0">
                  <p class="text-xls w-64 pr-6 text-black_10 flex items-center h-full border-r border-gray_0"><a href="#" class="text-blue_9 underline decoration-blue_0 hover:decoration-blue_9 underline-offset-2 duration-300">G-123145690.pdf</a></p>
                  <p class="text-xls w-20 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5,8 MB</p>
                  <p class="text-xls w-36 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">DL-1333425256</p>
                  <p class="text-xls w-32 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5/11/2021</p>
                </div>
                <div class="flex flex-row row h-8 pl-4 border-b border-blue_0 border-r border-blue_0">
                  <p class="text-xls w-64 pr-6 text-black_10 flex items-center h-full border-r border-gray_0"><a href="#" class="text-blue_9 underline decoration-blue_0 hover:decoration-blue_9 underline-offset-2 duration-300">G-123145690.pdf</a></p>
                  <p class="text-xls w-20 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5,8 MB</p>
                  <p class="text-xls w-36 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">DL-1333425256</p>
                  <p class="text-xls w-32 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5/11/2021</p>
                </div>
                <div class="flex flex-row row h-8 pl-4 border-b border-blue_0 border-r border-blue_0">
                  <p class="text-xls w-64 pr-6 text-black_10 flex items-center h-full border-r border-gray_0"><a href="#" class="text-blue_9 underline decoration-blue_0 hover:decoration-blue_9 underline-offset-2 duration-300">G-123145690.pdf</a></p>
                  <p class="text-xls w-20 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5,8 MB</p>
                  <p class="text-xls w-36 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">DL-1333425256</p>
                  <p class="text-xls w-32 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5/11/2021</p>
                </div>
                <div class="flex flex-row row h-8 pl-4 border-b border-blue_0 border-r border-blue_0">
                  <p class="text-xls w-64 pr-6 text-black_10 flex items-center h-full border-r border-gray_0"><a href="#" class="text-blue_9 underline decoration-blue_0 hover:decoration-blue_9 underline-offset-2 duration-300">G-123145690.pdf</a></p>
                  <p class="text-xls w-20 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5,8 MB</p>
                  <p class="text-xls w-36 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">DL-1333425256</p>
                  <p class="text-xls w-32 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5/11/2021</p>
                </div>
                <div class="flex flex-row row h-8 pl-4 border-b border-blue_0 border-r border-blue_0">
                  <p class="text-xls w-64 pr-6 text-black_10 flex items-center h-full border-r border-gray_0"><a href="#" class="text-blue_9 underline decoration-blue_0 hover:decoration-blue_9 underline-offset-2 duration-300">G-123145690.pdf</a></p>
                  <p class="text-xls w-20 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5,8 MB</p>
                  <p class="text-xls w-36 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">DL-1333425256</p>
                  <p class="text-xls w-32 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5/11/2021</p>
                </div>
                <div class="flex flex-row row h-8 pl-4 border-b border-blue_0 border-r border-blue_0">
                  <p class="text-xls w-64 pr-6 text-black_10 flex items-center h-full border-r border-gray_0"><a href="#" class="text-blue_9 underline decoration-blue_0 hover:decoration-blue_9 underline-offset-2 duration-300">G-123145690.pdf</a></p>
                  <p class="text-xls w-20 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5,8 MB</p>
                  <p class="text-xls w-36 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">DL-1333425256</p>
                  <p class="text-xls w-32 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5/11/2021</p>
                </div>
                <div class="flex flex-row row h-8 pl-4 border-b border-blue_0 border-r border-blue_0">
                  <p class="text-xls w-64 pr-6 text-black_10 flex items-center h-full border-r border-gray_0"><a href="#" class="text-blue_9 underline decoration-blue_0 hover:decoration-blue_9 underline-offset-2 duration-300">G-123145690.pdf</a></p>
                  <p class="text-xls w-20 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5,8 MB</p>
                  <p class="text-xls w-36 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">DL-1333425256</p>
                  <p class="text-xls w-32 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5/11/2021</p>
                </div>
                <div class="flex flex-row row h-8 pl-4 border-b border-blue_0 border-r border-blue_0">
                  <p class="text-xls w-64 pr-6 text-black_10 flex items-center h-full border-r border-gray_0"><a href="#" class="text-blue_9 underline decoration-blue_0 hover:decoration-blue_9 underline-offset-2 duration-300">G-123145690.pdf</a></p>
                  <p class="text-xls w-20 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5,8 MB</p>
                  <p class="text-xls w-36 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">DL-1333425256</p>
                  <p class="text-xls w-32 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5/11/2021</p>
                </div>
                <div class="flex flex-row row h-8 pl-4 border-b border-blue_0 border-r border-blue_0">
                  <p class="text-xls w-64 pr-6 text-black_10 flex items-center h-full border-r border-gray_0"><a href="#" class="text-blue_9 underline decoration-blue_0 hover:decoration-blue_9 underline-offset-2 duration-300">G-123145690.pdf</a></p>
                  <p class="text-xls w-20 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5,8 MB</p>
                  <p class="text-xls w-36 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">DL-1333425256</p>
                  <p class="text-xls w-32 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5/11/2021</p>
                </div>
                <div class="flex flex-row row h-8 pl-4 border-b border-blue_0 border-r border-blue_0">
                  <p class="text-xls w-64 pr-6 text-black_10 flex items-center h-full border-r border-gray_0"><a href="#" class="text-blue_9 underline decoration-blue_0 hover:decoration-blue_9 underline-offset-2 duration-300">G-123145690.pdf</a></p>
                  <p class="text-xls w-20 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5,8 MB</p>
                  <p class="text-xls w-36 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">DL-1333425256</p>
                  <p class="text-xls w-32 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5/11/2021</p>
                </div>
                <div class="flex flex-row row h-8 pl-4 border-b border-blue_0 border-r border-blue_0">
                  <p class="text-xls w-64 pr-6 text-black_10 flex items-center h-full border-r border-gray_0"><a href="#" class="text-blue_9 underline decoration-blue_0 hover:decoration-blue_9 underline-offset-2 duration-300">G-123145690.pdf</a></p>
                  <p class="text-xls w-20 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5,8 MB</p>
                  <p class="text-xls w-36 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">DL-1333425256</p>
                  <p class="text-xls w-32 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5/11/2021</p>
                </div>
                <div class="flex flex-row row h-8 pl-4 border-b border-blue_0 border-r border-blue_0">
                  <p class="text-xls w-64 pr-6 text-black_10 flex items-center h-full border-r border-gray_0"><a href="#" class="text-blue_9 underline decoration-blue_0 hover:decoration-blue_9 underline-offset-2 duration-300">G-123145690.pdf</a></p>
                  <p class="text-xls w-20 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5,8 MB</p>
                  <p class="text-xls w-36 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">DL-1333425256</p>
                  <p class="text-xls w-32 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5/11/2021</p>
                </div>
                <div class="flex flex-row row h-8 pl-4 border-b border-blue_0 border-r border-blue_0">
                  <p class="text-xls w-64 pr-6 text-black_10 flex items-center h-full border-r border-gray_0"><a href="#" class="text-blue_9 underline decoration-blue_0 hover:decoration-blue_9 underline-offset-2 duration-300">G-123145690.pdf</a></p>
                  <p class="text-xls w-20 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5,8 MB</p>
                  <p class="text-xls w-36 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">DL-1333425256</p>
                  <p class="text-xls w-32 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5/11/2021</p>
                </div>
                <div class="flex flex-row row h-8 pl-4 border-b border-blue_0 border-r border-blue_0">
                  <p class="text-xls w-64 pr-6 text-black_10 flex items-center h-full border-r border-gray_0"><a href="#" class="text-blue_9 underline decoration-blue_0 hover:decoration-blue_9 underline-offset-2 duration-300">G-123145690.pdf</a></p>
                  <p class="text-xls w-20 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5,8 MB</p>
                  <p class="text-xls w-36 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">DL-1333425256</p>
                  <p class="text-xls w-32 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5/11/2021</p>
                </div>
                <div class="flex flex-row row h-8 pl-4 border-b border-blue_0 border-r border-blue_0">
                  <p class="text-xls w-64 pr-6 text-black_10 flex items-center h-full border-r border-gray_0"><a href="#" class="text-blue_9 underline decoration-blue_0 hover:decoration-blue_9 underline-offset-2 duration-300">G-123145690.pdf</a></p>
                  <p class="text-xls w-20 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5,8 MB</p>
                  <p class="text-xls w-36 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">DL-1333425256</p>
                  <p class="text-xls w-32 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5/11/2021</p>
                </div>
                <div class="flex flex-row row h-8 pl-4 border-b border-blue_0 border-r border-blue_0">
                  <p class="text-xls w-64 pr-6 text-black_10 flex items-center h-full border-r border-gray_0"><a href="#" class="text-blue_9 underline decoration-blue_0 hover:decoration-blue_9 underline-offset-2 duration-300">G-123145690.pdf</a></p>
                  <p class="text-xls w-20 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5,8 MB</p>
                  <p class="text-xls w-36 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">DL-1333425256</p>
                  <p class="text-xls w-32 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5/11/2021</p>
                </div>
                <div class="flex flex-row row h-8 pl-4 border-b border-blue_0 border-r border-blue_0">
                  <p class="text-xls w-64 pr-6 text-black_10 flex items-center h-full border-r border-gray_0"><a href="#" class="text-blue_9 underline decoration-blue_0 hover:decoration-blue_9 underline-offset-2 duration-300">G-123145690.pdf</a></p>
                  <p class="text-xls w-20 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5,8 MB</p>
                  <p class="text-xls w-36 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">DL-1333425256</p>
                  <p class="text-xls w-32 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5/11/2021</p>
                </div>
                <div class="flex flex-row row h-8 pl-4 border-b border-blue_0 border-r border-blue_0">
                  <p class="text-xls w-64 pr-6 text-black_10 flex items-center h-full border-r border-gray_0"><a href="#" class="text-blue_9 underline decoration-blue_0 hover:decoration-blue_9 underline-offset-2 duration-300">G-123145690.pdf</a></p>
                  <p class="text-xls w-20 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5,8 MB</p>
                  <p class="text-xls w-36 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">DL-1333425256</p>
                  <p class="text-xls w-32 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5/11/2021</p>
                </div>
                <div class="flex flex-row row h-8 pl-4 border-b border-blue_0 border-r border-blue_0">
                  <p class="text-xls w-64 pr-6 text-black_10 flex items-center h-full border-r border-gray_0"><a href="#" class="text-blue_9 underline decoration-blue_0 hover:decoration-blue_9 underline-offset-2 duration-300">G-123145690.pdf</a></p>
                  <p class="text-xls w-20 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5,8 MB</p>
                  <p class="text-xls w-36 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">DL-1333425256</p>
                  <p class="text-xls w-32 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5/11/2021</p>
                </div>
                <div class="flex flex-row row h-8 pl-4 border-b border-blue_0 border-r border-blue_0">
                  <p class="text-xls w-64 pr-6 text-black_10 flex items-center h-full border-r border-gray_0"><a href="#" class="text-blue_9 underline decoration-blue_0 hover:decoration-blue_9 underline-offset-2 duration-300">G-123145690.pdf</a></p>
                  <p class="text-xls w-20 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5,8 MB</p>
                  <p class="text-xls w-36 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">DL-1333425256</p>
                  <p class="text-xls w-32 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5/11/2021</p>
                </div>
                <div id="rowss" class="flex flex-row row h-8 pl-4 border-b border-blue_0 border-r border-blue_0">
                  <p class="text-xls w-64 pr-6 text-black_10 flex items-center h-full border-r border-gray_0"><a href="#" class="text-blue_9 underline decoration-blue_0 hover:decoration-blue_9 underline-offset-2 duration-300">G-123145690_last_item.pdf</a></p>
                  <p class="text-xls w-20 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5,8 MB</p>
                  <p class="text-xls w-36 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">DL-1333425256</p>
                  <p class="text-xls w-32 pl-2 pr-6 text-black_10 flex items-center h-full border-r border-gray_0">5/11/2021</p>
                </div>
              </div>
              <div class="bottom-scroll bg-white/70 glass sticky border-t border-blue_0 pl-4 pr-4 pt-0.5 rounded-b-lg">
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
