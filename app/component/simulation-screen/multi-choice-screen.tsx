'use client'

import React from 'react';
import { CiMicrophoneOn } from 'react-icons/ci';
import { FaChevronLeft } from "react-icons/fa";
import { MdNotificationsNone } from "react-icons/md";

function ChanceFormRadio({ content }: { content: string }) {
    return (
        <label className='p-3 rounded-lg border border-gray-300 flex items-center justify-between cursor-pointer'>
            <p className='text-[13px] font-medium'>{content}</p>
            <input
                type="radio"
                name="input_key"
                className='w-4 h-4'
            />
        </label>
    );
}

function ChanceFormProgress() {
    return (
        <div className='w-full'>
            <p className='text-[11px] text-gray-600 text-center pb-1'>1 out of 3</p>
            <div className='bg-[#B3ADC073] w-full rounded-full h-2'>
                <div className='h-full w-[66%] rounded-full bg-[#62BBE0]' />
            </div>
        </div>
    );
}

function ChanceFormHeader() {
    return (
        <div className='w-full bg-[#B4C9FF] px-4 py-3 flex items-center justify-between'>
            <div className='bg-[#298191] p-2 w-8 h-8 rounded-md flex items-center justify-center'>
                <FaChevronLeft className='w-4 h-4 text-white' />
            </div>

            <div className='p-2 rounded-full bg-[#FFFFFF99]'>
                <MdNotificationsNone className='w-4 h-4 text-[#004868]' />
            </div>
        </div>
    );
}

export default function MultiChoiceScreen() {
    return (
        <div className='w-full pb-6'>
            <ChanceFormHeader />

            <div className='px-4 pt-2'>
                <ChanceFormProgress />

                <div className='text-center pt-3 pb-4'>
                    <h1 className='text-[16px] font-semibold'>
                        How many cows do you have?
                    </h1>
                    <p className='text-[12px] text-gray-600'>
                        Select one according to your current ownership
                    </p>
                </div>

                <div className='w-full space-y-2'>
                    <ChanceFormRadio content='1 - 3 Tails' />
                    <ChanceFormRadio content='4 - 10 Tails' />
                    <ChanceFormRadio content='>10 Tails' />
                </div>

                <div className='w-full flex flex-col gap-2 py-4'>
                    <button className='p-2.5 w-full flex justify-center items-center gap-2 bg-[#004868] text-white rounded-md'>
                        <CiMicrophoneOn className='w-4 h-4' />
                        <p className='text-[12px]'>Answer with Voiceover</p>
                    </button>

                    <button className='p-2.5 w-full text-[#004868] border border-dashed border-[#004868] rounded-md'>
                        <div className='text-[12px]'>Try It First</div>
                    </button>
                </div>
            </div>
        </div>
    );
}