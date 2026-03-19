'use client'

import { useState } from "react";
import PhoneFrame from "./component/phone-frame";
import TypingEffectCommand from "./component/typing-effect";
import { StartingData } from "./data/text-dummy-log";

export default function Page() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full min-h-screen xl:h-screen p-10">
      <div className="w-full h-full flex items-start justify-between gap-5">

        <div className="w-full h-full xl:w-[60%] flex justify-center items-center">
          <PhoneFrame>
            <div>Hallo world</div>
          </PhoneFrame>
        </div>

        <div className="w-full xl:w-[40%] bg-white rounded-md">
          <div className="w-full h-[80vh] bg-black/80 overflow-auto hide-scrollbar rounded-md">
            <div className="p-10 min-h-screen space-y-2 text-[12px]">

              {StartingData
                .slice(0, activeIndex + 1)
                .map((d, idx) => (
                  <TypingEffectCommand
                    key={idx}
                    text={d.content}
                    speed={d.time}
                    onDone={() => {
                      if (idx === activeIndex) {
                        setActiveIndex(prev => prev + 1);
                      }
                    }}
                  />
              ))}

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}