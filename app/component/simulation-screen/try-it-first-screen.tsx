'use client'

import { FaChevronLeft } from "react-icons/fa";
import { MdNotificationsNone, MdOutlineAccountCircle } from "react-icons/md";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { FaCheck, FaTractor } from 'react-icons/fa6';
import { RiSparkling2Fill } from 'react-icons/ri';
import { PiBagFill } from 'react-icons/pi';
import { IoIosDocument } from 'react-icons/io';

function GrowthCenterResultHeader() {
    return (
        <div className='w-full px-4 py-3 flex items-center justify-between'>
            <div
                className='bg-[#298191] p-2 w-8 h-8 rounded-md flex items-center justify-center'
            >
                <FaChevronLeft className='w-4 h-4 text-white' />
            </div>

            <div className="text-[14px] font-semibold">Try it First</div>

            <div className='p-2 rounded-full bg-[#FFFFFF99]'>
                <MdNotificationsNone className='w-4 h-4 text-[#004868]' />
            </div>
        </div>
    );
}

interface GaugeProps {
    value: number;
}

function ApprovalGauge({ value }: GaugeProps) {
    const percentage = Math.max(0, Math.min(1, value));

    const radius = 70;
    const circumference = Math.PI * radius;
    const offset = circumference * (1 - percentage);

    return (
        <div className="flex flex-col items-center gap-2">
            <h1 className="text-[14px] font-semibold text-center">
                Likely to be approved:{" "}
                <span className="text-blue-600">High</span>
            </h1>

            <div className="relative">
                <svg width="180" height="100" viewBox="0 0 180 100">

                    <path
                        d="M 10 90 A 70 70 0 0 1 170 90"
                        fill="none"
                        stroke="#bfdbfe"
                        strokeWidth="14"
                        strokeLinecap="round"
                    />

                    <path
                        d="M 10 90 A 70 70 0 0 1 170 90"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="14"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        style={{ transition: "stroke-dashoffset 0.6s ease" }}
                    />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-end pb-2">
                    <BsFillLightningChargeFill className="w-4 h-4 fill-purple-800" />
                    <p className="text-[18px] font-semibold">
                        {(percentage * 100).toFixed(0)}%
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function TryItFirstScreen() {
    return (
        <div className='w-full pb-6'>
            <GrowthCenterResultHeader />

            <div className='px-4 pt-2 pb-4 space-y-4'>

                <div className='w-full flex gap-3 items-center px-3 py-2 bg-[#F7E5DE] border border-[#F3C1AB] rounded-lg'>
                    <div className='p-2 bg-orange-600 rounded-lg'>
                        <FaTractor className='w-5 h-5 fill-white' />
                    </div>
                    <div className='w-full'>
                        <h2 className='text-[10px] font-semibold text-orange-500'>
                            Simulation Mode
                        </h2>
                        <p className='text-[9px] text-gray-700'>
                            The simulation of how data being procesed and broadcast
                        </p>
                    </div>
                </div>

                <ApprovalGauge value={0.784} />

                <div className='w-full p-3 flex flex-col gap-2 border border-gray-300 rounded-md'>
                    <div className='flex items-center gap-2'>
                        <RiSparkling2Fill className='fill-blue-700 w-4 h-4' />
                        <h1 className='text-[13px] font-semibold'>Mahesa AI Analysis</h1>
                    </div>

                    <div className='text-[12px] text-gray-700 leading-tight'>
                        <p>Based on your profile, your data meets ~92% of required criteria.</p>
                    </div>

                    <div className='p-3 rounded-md bg-[#D4DFFF] text-[11px] text-gray-700'>
                        &quot;Approval chance is high. Ensure documents are correct before submitting.&quot;
                    </div>
                </div>

                <div className='w-full p-3 flex flex-col gap-2 border border-gray-300 rounded-md'>
                    <h2 className='text-[13px] font-semibold text-gray-600'>
                        Local Data Summary
                    </h2>

                    <div className='flex flex-col gap-2'>

                        {[
                            { icon: MdOutlineAccountCircle, label: "Self Identity" },
                            { icon: PiBagFill, label: "Employment" },
                            { icon: IoIosDocument, label: "Documents" },
                        ].map((item, i) => (
                            <div key={i} className='flex items-center justify-between border border-gray-300 rounded-md p-2'>
                                <div className='flex items-center gap-2'>
                                    <item.icon className='w-4 h-4' />
                                    <p className='text-[12px] font-medium'>{item.label}</p>
                                </div>
                                <FaCheck className='w-3 h-3' />
                            </div>
                        ))}

                    </div>
                </div>

                <div className='w-full flex gap-2'>
                    <button className='w-full text-center rounded-md p-2 text-[12px] bg-gray-200'>
                        Change Data
                    </button>
                    <button className='w-full text-center rounded-md p-2 text-[12px] bg-[#005D85] text-white'>
                        Claim Now
                    </button>
                </div>

            </div>
        </div>
    );
}