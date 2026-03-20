import React from "react";
import BottomNavigation from "./simulation-screen/bottom-navigation";

interface ScreenSimulationPairing {
    children: React.ReactNode;
    needbotnav: boolean;
    name: "splash" | "stt" | "welcome" | "multichoice" | "tryit" | "savemode";
}

export default function PhoneFrame(
    {
        comp,
        activeScreen
    }: {
        comp: ScreenSimulationPairing[];
        activeScreen: ScreenSimulationPairing["name"];
    }
) {
    const current = comp.find(c => c.name === activeScreen);

    if (!current) return null;

    return (
        <div className="relative h-full aspect-350/720 border border-gray-200 overflow-hidden bg-white">

            {/* Screen */}
            <div className="h-full overflow-y-auto hide-scrollbar pb-14">
                {current.children}
            </div>

            {/* Bottom Nav */}
            {current.needbotnav && (
                <div className="absolute bottom-0 left-0 w-full">
                    <BottomNavigation />
                </div>
            )}
        </div>
    );
}