'use client'
import Image from 'next/image';
import { FaChevronLeft } from "react-icons/fa";
import { MdNotificationsNone } from "react-icons/md";

import { IoMdCloudDone } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa6";

import { FaCheck } from "react-icons/fa";

import { FaTractor } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";

import { IoMdInformationCircle } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa";
import { ScreenNames, TextData } from '@/app/type/data-simulation';

function OpportunityHeader() {
    return (
        <div className='w-full bg-[#B4C9FF] px-4 py-3 flex items-center justify-between'>
            <div className='flex items-center gap-2'>
                <div className='bg-[#298191] p-2 w-8 h-8 rounded-md flex items-center justify-center'>
                    <FaChevronLeft className='w-4 h-4 text-white' />
                </div>

                <div className="flex items-center gap-2">
                    <Image
                        alt="image header icon"
                        src={'/icon-image-ok.png'}
                        width={28}
                        height={28}
                    />
                    <p className='font-medium text-[14px]'>Opportunity</p>
                </div>
            </div>

            <div className='p-2 rounded-full bg-[#FFFFFF99]'>
                <MdNotificationsNone className='w-4 h-4 text-[#004868]' />
            </div>
        </div>
    );
}

function OpportunityCard() {
    return (
        <div className='p-3 rounded-lg w-full border border-gray-200 shadow-sm space-y-2'>

            <div className='w-full flex items-center justify-between'>
                <div className='p-2 bg-[#EBE0FF] rounded-md'>
                    <FaTractor className='w-4 h-4 text-[#3D01A4]' />
                </div>
                <div className='p-2 bg-[#EBE0FF] rounded-md'>
                    <FaPlayCircle className='w-4 h-4 text-[#3D01A4]' />
                </div>
            </div>

            <h1 className='text-[13px] text-gray-700 font-semibold leading-tight'>
                Loan capital for superior rice seeds
            </h1>

            <div className='bg-[#D3F4D7] py-1 px-2 rounded-md flex items-center gap-1'>
                <FaCheck className='w-3 h-3 text-[#2B9637]' />
                <p className='text-[10px] text-[#2B9637]'>
                    Recommended
                </p>
            </div>

            <p className='text-[11px] text-gray-600 italic leading-tight'>
                This is a bamboo craft business with a target market...
            </p>

            <div className='w-full flex flex-col gap-1.5 pt-1'>
                <button className="p-2 w-full bg-[#004868] text-white rounded-md text-[11px]">
                    Apply
                </button>
                <button className="p-2 w-full border border-[#004868] text-[#004868] rounded-md text-[11px]">
                    Details
                </button>
            </div>
        </div>
    );
}

function OfflineSafeBadge() {
    return (
        <div className='w-full flex justify-between items-center bg-gray-200 rounded-full px-3 py-1.5'>
            <div className='flex items-center text-[10px] text-[#3D01A4] gap-1.5'>
                <IoMdInformationCircle className='w-3.5 h-3.5' />
                <p>Offline - Safe</p>
            </div>
            <FaChevronRight className='w-3 h-3 text-gray-600' />
        </div>
    );
}

export default function OpportunityScreen(
    { controlNavigate, addMessagesControll }:
        { controlNavigate: (d: ScreenNames) => void; addMessagesControll: (m: TextData) => void }
) {
    return (
        <div className='w-full pb-6'>

            <OpportunityHeader />

            <div className='py-2 bg-white px-4 space-y-4'>

                <OfflineSafeBadge />

                <div className='w-full flex items-center justify-between'>
                    <div className='flex items-center gap-2'>

                        <div className='px-2 py-1.5 rounded-lg border border-gray-400 flex items-center gap-1.5'>
                            <IoMdCloudDone className='w-4 h-4' />
                            <p className='text-[11px]'>Saved</p>
                        </div>

                        <div className='px-2 py-1.5 rounded-lg border border-gray-400 flex items-center gap-1.5'>
                            <IoMdMenu className='w-4 h-4' />
                            <p className='text-[11px]'>History</p>
                        </div>
                    </div>

                    <div className='px-2 py-1.5 rounded-lg border border-gray-400 flex items-center gap-1.5'>
                        <FaChevronDown className='w-3 h-3' />
                        <p className='text-[11px]'>Menarik</p>
                    </div>
                </div>

                <div className='w-full grid grid-cols-2 gap-2'>

                    <div className='p-2 rounded-md border border-gray-300 shadow-sm space-y-2'>
                        <h2 className='text-[11px] font-medium'>Last Submissions</h2>

                        <div className='space-y-1'>
                            <div className='text-[#2B9637] flex items-center gap-1 bg-[#D3F4D7] rounded-md p-1'>
                                <FaCheck className='w-3 h-3' />
                                <p className='text-[10px]'>Proceed</p>
                            </div>

                            <div className='flex items-center gap-1 p-1 rounded-md border border-gray-300'>
                                <FaCheck className='w-3 h-3 text-[#2B9637]' />
                                <p className='text-[10px]'>2 Ready</p>
                            </div>
                        </div>
                    </div>

                    <div className='p-2 rounded-md border border-gray-300 shadow-sm'>
                        <h2 className='text-[11px] font-medium'>Total</h2>
                        <p className='text-[20px] font-semibold'>45</p>
                        <p className='text-[#43A047] text-[11px]'>+11%</p>
                    </div>

                </div>

                <div className='w-full flex flex-col gap-2'>
                    <p className='text-[13px]'>
                        Ada 3 <span className='font-semibold'>peluang baru</span>
                    </p>

                    <div className='space-y-2'>
                        <OpportunityCard />
                        <OpportunityCard />
                        <OpportunityCard />
                    </div>
                </div>

            </div>
        </div>
    );
}
