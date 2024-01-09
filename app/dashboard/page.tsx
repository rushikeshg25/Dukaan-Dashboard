import NishyanImg from "@/components/NishyanImg";
import React from "react";

const page = () => {
  return (
    <div>
      <div className='w-56 h-[1482px] flex-col justify-start items-start inline-flex'>
        <div className='w-56 grow shrink basis-0 px-2.5 py-4 bg-slate-800 flex-col justify-start items-center gap-4 flex'>
          <div className='w-52 grow shrink basis-0 flex-col justify-start items-center gap-6 flex'>
            <div className='w-48 justify-start items-center gap-3 inline-flex'>
              <NishyanImg />
              <div className='grow shrink basis-0 flex-col justify-center items-start gap-1 inline-flex'>
                <div className="self-stretch text-white text-[15px] font-medium font-['Inter'] leading-snug">
                  Nishyan
                </div>
                <div className="self-stretch opacity-80 text-white text-[13px] font-normal font-['Inter'] underline leading-none">
                  Visit store
                </div>
              </div>
              <div className='w-5 h-5 relative'></div>
            </div>
            <div className='w-52 grow shrink basis-0 flex-col justify-start items-start gap-1 flex'>
              <div className='w-52 px-4 py-2 rounded justify-start items-start gap-3 inline-flex'>
                <div className='w-5 h-5 relative opacity-80'></div>
                <div className="opacity-80 text-white text-sm font-medium font-['Inter'] leading-tight">
                  Home
                </div>
              </div>
              <div className='w-52 px-4 py-2 rounded justify-start items-start gap-3 inline-flex'>
                <div className='w-5 h-5 relative opacity-80'></div>
                <div className="opacity-80 text-white text-sm font-medium font-['Inter'] leading-tight">
                  Orders
                </div>
              </div>
              <div className='w-52 px-4 py-2 rounded justify-start items-start gap-3 inline-flex'>
                <div className='w-5 h-5 relative opacity-80'></div>
                <div className="opacity-80 text-white text-sm font-medium font-['Inter'] leading-tight">
                  Products
                </div>
              </div>
              <div className='w-52 px-4 py-2 rounded justify-start items-start gap-3 inline-flex'>
                <div className='w-5 h-5 relative opacity-80'></div>
                <div className="opacity-80 text-white text-sm font-medium font-['Inter'] leading-tight">
                  Delivery
                </div>
              </div>
              <div className='w-52 px-4 py-2 rounded justify-start items-start gap-3 inline-flex'>
                <div className='w-5 h-5 relative opacity-80'></div>
                <div className="opacity-80 text-white text-sm font-medium font-['Inter'] leading-tight">
                  Marketing
                </div>
              </div>
              <div className='w-52 px-4 py-2 rounded justify-start items-start gap-3 inline-flex'>
                <div className='w-5 h-5 relative opacity-80'></div>
                <div className="opacity-80 text-white text-sm font-medium font-['Inter'] leading-tight">
                  Analytics
                </div>
              </div>
              <div className='w-52 px-4 py-2 bg-white bg-opacity-10 rounded justify-start items-start gap-3 inline-flex'>
                <div className='w-5 h-5 relative'></div>
                <div className="text-white text-sm font-medium font-['Inter'] leading-tight">
                  Payments
                </div>
              </div>
              <div className='w-52 px-4 py-2 rounded justify-start items-start gap-3 inline-flex'>
                <div className='w-5 h-5 relative opacity-80'></div>
                <div className="opacity-80 text-white text-sm font-medium font-['Inter'] leading-tight">
                  Tools
                </div>
              </div>
              <div className='w-52 px-4 py-2 rounded justify-start items-start gap-3 inline-flex'>
                <div className='w-5 h-5 relative opacity-80'></div>
                <div className="opacity-80 text-white text-sm font-medium font-['Inter'] leading-tight">
                  Discounts
                </div>
              </div>
              <div className='w-52 px-4 py-2 rounded justify-start items-start gap-3 inline-flex'>
                <div className='w-5 h-5 relative opacity-80'></div>
                <div className="opacity-80 text-white text-sm font-medium font-['Inter'] leading-tight">
                  Audience
                </div>
              </div>
              <div className='w-52 px-4 py-2 rounded justify-start items-start gap-3 inline-flex'>
                <div className='w-5 h-5 relative opacity-80'></div>
                <div className="opacity-80 text-white text-sm font-medium font-['Inter'] leading-tight">
                  Appearance
                </div>
              </div>
              <div className='w-52 px-4 py-2 rounded justify-start items-start gap-3 inline-flex'>
                <div className='w-5 h-5 relative opacity-80'></div>
                <div className="opacity-80 text-white text-sm font-medium font-['Inter'] leading-tight">
                  Plugins
                </div>
              </div>
            </div>
          </div>
          <div className='h-[54px] px-3 py-1.5 bg-slate-700 rounded flex-col justify-start items-start gap-2.5 flex'>
            <div className='justify-start items-center gap-3 inline-flex'>
              <div className='p-1.5 bg-white bg-opacity-10 rounded justify-start items-start gap-2.5 flex'>
                <div className='w-6 h-6 relative'>
                  <img
                    className='w-[23.65px] h-[19.60px] left-[0.20px] top-[2.20px] absolute'
                    src='https://via.placeholder.com/24x20'
                  />
                </div>
              </div>
              <div className='flex-col justify-start items-start gap-0.5 inline-flex'>
                <div className="opacity-80 text-white text-[13px] font-normal font-['Inter'] leading-none">
                  Available credits
                </div>
                <div className="text-white text-base font-medium font-['Inter'] leading-normal">
                  222.10
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
