import Image from 'next/image'

export default function SplashScreen() {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center bg-[#FEFEFF] px-4">
            <div className="w-full">
                <div className="w-full flex justify-center items-center pb-7">
                    <Image alt="image splash screen" src={'/icon-image-ok-large.png'} width={167.5} height={170.625} />
                </div>

                <div className="w-full flex flex-col justify-center items-center gap-2 text-center">
                    <p className="text-[#090A0B] text-[10px]">MAHESA</p>
                    <h1 className="text-[15px] font-bold">Turn Your Everyday Skills into Real Opportunities</h1>
                    <h2 className="text-[#090A0B] text-[8.75px]">Discovers opportunities that match your skills and experience</h2>
                </div>

                <div className="w-full flex flex-col justify-center items-center gap-3 text-center pt-15.75 text-[10px]">
                    <button className="p-1 w-full max-w-100 bg-[#004868] text-white rounded-md">
                        GET STARTED
                    </button>
                    <p className="text-[10px]">I ALREADY HAVE AN ACCOUNT</p>
                </div>
            </div>
        </div>
    )
}
