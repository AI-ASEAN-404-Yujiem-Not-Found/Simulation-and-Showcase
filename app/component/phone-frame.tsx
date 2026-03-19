import React from "react";
import BottomNavigation from "./simulation-screen/bottom-navigation";

export default function PhoneFrame(
    { children, needBottomNav = true }: { children: React.ReactNode; needBottomNav?: boolean }
) {
    return (
        <div className="relative h-full aspect-350/720 border border-gray-200 overflow-hidden">

            <div className="h-full overflow-y-auto hide-scrollbar pb-16">
                {children}
            </div>

            {
                needBottomNav && <div className="absolute bottom-0 left-0 w-full">
                    <BottomNavigation />
                </div>
            }
        </div>
    );
}