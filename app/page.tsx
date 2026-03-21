'use client'

import { useState } from "react";
import PhoneFrame from "./component/phone-frame";
import TypingEffectCommand from "./component/typing-effect";
import { StartingData } from "./data/text-dummy-log";

import SplashScreen from "./component/simulation-screen/splash-screen";
import STTScreen from "./component/simulation-screen/stt-screen";
import WelcomingScreen from "./component/simulation-screen/welcoming-screen";
import MultiChoiceScreen from "./component/simulation-screen/multi-choice-screen";
import TryItFirstScreen from "./component/simulation-screen/try-it-first-screen";
import SaveModeScreen from "./component/simulation-screen/save-mode-screen";
import { ScreenNames, ScreenSimulationPairing, TextData } from "./type/data-simulation";

export default function Page() {
  const [activeScreen, setActiveScreen] = useState<ScreenNames>("splash");
  const [logdata, setlogdata] = useState<TextData[]>(StartingData);

  const controlNavigate = (screen: ScreenNames) => {
    setActiveScreen(screen)
  }

  const addMessagesControll = (message: TextData) => {
    setlogdata(prev => [...prev, message])
  }

  const screens: ScreenSimulationPairing[] = [
    { name: "splash", needbotnav: false, children: <SplashScreen addMessagesControll={addMessagesControll} controlNavigate={controlNavigate} /> },
    { name: "stt", needbotnav: false, children: <STTScreen addMessagesControll={addMessagesControll} controlNavigate={controlNavigate} /> },
    { name: "welcome", needbotnav: false, children: <WelcomingScreen addMessagesControll={addMessagesControll} controlNavigate={controlNavigate} /> },
    { name: "multichoice", needbotnav: false, children: <MultiChoiceScreen addMessagesControll={addMessagesControll} controlNavigate={controlNavigate} /> },
    { name: "tryit", needbotnav: true, children: <TryItFirstScreen addMessagesControll={addMessagesControll} controlNavigate={controlNavigate} /> },
    { name: "savemode", needbotnav: true, children: <SaveModeScreen addMessagesControll={addMessagesControll} controlNavigate={controlNavigate} /> },
  ];

  return (
    <div className="w-full min-h-screen xl:h-screen p-10">
      <div className="w-full h-full flex items-start justify-between gap-5">

        <div className="w-full h-full xl:w-[60%] flex justify-center items-center">
          <PhoneFrame comp={screens} activeScreen={activeScreen} />
        </div>

        <div className="w-full xl:w-[40%] bg-white rounded-md">
          <div className="w-full h-[80vh] bg-black/80 overflow-auto hide-scrollbar rounded-md">
            <div className="p-10 min-h-screen space-y-2 text-[12px]">

              {logdata.map((d, idx) => (
                <TypingEffectCommand
                  key={idx}
                  text={d.content}
                  speed={d.time}
                />
              ))}

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}