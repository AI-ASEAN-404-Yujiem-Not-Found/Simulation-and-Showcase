import { FaChevronLeft } from "react-icons/fa";
import { MdNotificationsNone } from "react-icons/md";
import { IoMdCloudDone, IoMdMenu } from 'react-icons/io';
import { FaCheck, FaChevronDown } from 'react-icons/fa6';
import Image from 'next/image';

import { IoMdInformationCircle } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa";

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

function ExploreWaysHeader() {
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
                    <p className='font-medium text-[14px]'>Explore Ways</p>
                </div>
            </div>

            <div className='p-2 rounded-full bg-[#FFFFFF99]'>
                <MdNotificationsNone className='w-4 h-4 text-[#004868]' />
            </div>
        </div>
    );
}


export default function SaveModeScreen() {
    return (
        <div className='w-full pb-6'>

            <ExploreWaysHeader />

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

                <div className='w-full p-3 rounded-md border border-gray-300 flex flex-col items-center gap-2'>

                    <h2 className='text-[13px] font-semibold text-center'>
                        Your Submission is Saved
                    </h2>

                    <Image
                        width={220}
                        height={60}
                        alt='submission-placeholder'
                        src={"/save-submission-placeholder.png"}
                    />

                    <div className='w-full flex p-1.5 items-center gap-1.5 rounded-full border border-green-600 bg-green-100'>
                        <FaCheck className='w-3 h-3 text-green-700' />
                        <p className='text-[10px] font-medium text-green-700'>
                            Saved securely
                        </p>
                    </div>

                    <div className='w-full flex p-1.5 items-center gap-1.5 rounded-full border border-gray-300 bg-gray-100'>
                        <FaCheck className='w-3 h-3 text-gray-600' />
                        <p className='text-[10px] font-medium text-gray-600'>
                            Waiting for signal
                        </p>
                    </div>

                    <div className='w-full flex flex-col gap-2 items-center pt-2'>
                        <button className='w-full text-white p-2 rounded-md bg-[#004EEB] text-[12px]'>
                            Prepare for Later
                        </button>

                        <p className='text-gray-500 text-[9px] text-center'>
                            Will be sent automatically when online
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
}
