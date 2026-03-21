import { PiMicrophoneFill } from "react-icons/pi";
import { FaChevronLeft } from "react-icons/fa";
import { MdNotificationsNone } from "react-icons/md";
import Image from 'next/image';
import { ScreenNames, TextData } from "@/app/type/data-simulation";

export default function STTScreen(
  { controlNavigate, addMessagesControll }:
    { controlNavigate: (d: ScreenNames) => void; addMessagesControll: (m: TextData) => void }
) {

  const handleContinue = () => {
    addMessagesControll({
      time: 20,
      content: "User proceeds to next step after recording voice."
    })

    controlNavigate("welcome")
  }

  const handleRecordSoundSTT = () => {
    const userSpeech = "What advice would be good for me as a farmer to start funding?"

    addMessagesControll({
      time: 20,
      content: `User said: "${userSpeech}"`
    })

    setTimeout(() => {
      addMessagesControll({
        time: 20,
        content: "Processing speech-to-text and analyzing user intent..."
      })
    }, 500)
  }

  return (
    <div className='w-full pb-4'>
      <div className='w-full bg-[#B4C9FF] p-5 flex items-start justify-between'>
        <div className='flex items-start gap-3'>
          <div 
            className='bg-[#298191] p-1 w-4 h-4 rounded-md cursor-pointer'
            onClick={() => controlNavigate("splash")}
          >
            <FaChevronLeft className='w-2 h-2 text-white' />
          </div>
          <div className="w-full flex items-end gap-2">
            <Image alt="image header icon" src={'/icon-image-ok.png'} width={30} height={32} />
            <p className='font-medium text-[10px]'>Register through story</p>
          </div>
        </div>
        <div className='p-1 rounded-full bg-[#FFFFFF99]'>
          <MdNotificationsNone className='w-2 h-2 text-[#004868] fill-[#004868]' fill='#004868' />
        </div>
      </div>

      <div className='py-8 bg-white px-5'>
        <div className='text-center'>
          <h1 className='font-semibold text-[10px]'>Tell About Your Needs</h1>
          <h2 className='text-[8.75px] text-gray-600'>
            Cukup ceritakan pengalaman dan kesulitan anda. Kami akan membantu mencatat semuanya
          </h2>
        </div>

        <div className='w-full h-30 flex flex-col justify-center items-center gap-4'>
          
          <button
            onClick={handleRecordSoundSTT}
            className={`w-18 h-18 rounded-full flex justify-center items-center transition-all duration-300 bg-[#E4F5FF]`}
          >
            <div
              className={`w-14 h-14 rounded-full flex justify-center items-center transition-all duration-300 bg-[#B2E3FF]`}
            >
              <PiMicrophoneFill
                className={`w-4 h-4 transition-colors duration-300 text-[#003A53]`}
              />
            </div>
          </button>

          <div className='text-center w-full'>
            <p className='text-[10px] font-semibold text-[#003A53]'>
              Touch to Speak
            </p>

            <p className='text-[#625B71] text-[8px] min-h-5'>
              <span>&quot;I have a bamboo craft business with a target market...&quot;</span>
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-center gap-3 text-center pt-15.75">
          <button 
            className="p-2 w-full max-w-100 bg-[#004868] text-white rounded-md text-[10px]" 
            onClick={handleContinue}
          >
            Continue
          </button>
          <p className="text-[10px] text-gray-600">
            Need help?{' '}
            <span className='font-semibold text-[#005D85]'>Contact village assistance</span>
          </p>
        </div>
      </div>
    </div>
  )
}