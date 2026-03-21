import React from 'react';
import Image from 'next/image';
import { HiSparkles } from "react-icons/hi2";
import { FaTractor } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { MdNotificationsNone } from "react-icons/md";
import { ScreenNames, TextData } from '@/app/type/data-simulation';

function OnBoardingCard() {
    return (
        <div className='rounded-xl bg-gray-50 w-fit'>
            <Image src={'/opportinity-placeholder.png'} width={180} height={91} alt='opportinity placeholder' />

            <div className='w-full px-2 py-2 flex flex-col'>
                <div className='w-full flex items-center gap-1 pb-1'>
                    <HiSparkles className='fill-[#0247FE] w-2 h-2' />
                    <h2 className='text-[7px]'>Allign with your schedule</h2>
                </div>

                <div className='w-full text-[7px]'>
                    <p>Based of your local profile this time, your data suited</p>
                    <p>for 92% standard kriteria that&apos;s needed. data suited</p>
                    <p>for 92% standard kriteria that&apos;s needed.</p>
                </div>

                <div className='w-full flex items-center justify-between gap-2 pt-2'>
                    <button className='bg-gray-300 w-full p-1 rounded-md text-[8px]'>Listen</button>
                    <button className='bg-[#004868] w-full text-white p-1 rounded-md text-[8px]'>
                        Claim Now
                    </button>
                </div>
            </div>
        </div>
    )
}

function OnBoardingTipsCard() {
    return (
        <div className="bg-[#B9E5FF] w-full p-2 rounded-md flex justify-between items-center">
            <div className="flex items-start gap-1">
                <div className="p-1 bg-white rounded-md flex justify-center items-center">
                    <FaTractor className="fill-[#005D85] w-3 h-3" />
                </div>
                <div className="flex flex-col">
                    <h1 className="font-semibold text-[6px] text-gray-600">This Morning Tips</h1>
                    <p className="text-[5px] text-gray-500">Make sure the sprayer is clean before 7 am and 10 PM</p>
                </div>
            </div>
            <FaChevronRight />
        </div>
    )
}

function OnboardingHeader() {
    return (
        <div className='w-full bg-[#B4C9FF] p-2 flex items-start justify-between'>
            <div>
                <div className="w-full flex items-end gap-2">
                    <Image alt="image header icon" src={'/icon-image-ok.png'} width={49} height={50} />
                    <div>
                        <p className='font-medium text-[5px]'>Welcome, <span className='font-semibold'>Andi</span> !</p>
                        <p className='text-[5.5px]'>Are you ready for today&apos;s activity?</p>
                    </div>
                </div>
            </div>
            <div className='p-1 rounded-full bg-[#FFFFFF99]'>
                <MdNotificationsNone className='w-2 h-2 text-[#004868] bg-[004868]' fill='#004868' />
            </div>
        </div>
    )
}

export default function WelcomingScreen(
    { controlNavigate, addMessagesControll }:
        { controlNavigate: (d: ScreenNames) => void; addMessagesControll: (m: TextData) => void }
) {
    return (
        <div className='w-full pb-2'>

            <OnboardingHeader />

            <div className='py-1 bg-white px-5 space-y-4 pt-4'>

                <div className='w-full flex justify-between items-end'>
                    <h1 className='text-[10px]'><span className='font-semibold'>Opportunity</span> for you</h1>
                    <p className='text-[5.5px] font-semibold'>See all</p>
                </div>

                <div className='w-full flex flex-col gap-2 pt-2 items-center justify-center'>
                    <OnBoardingCard />
                </div>

                <div className='w-full flex flex-col gap-2 pt-2'>
                    <OnBoardingTipsCard />
                </div>

            </div>

        </div>
    )
}
