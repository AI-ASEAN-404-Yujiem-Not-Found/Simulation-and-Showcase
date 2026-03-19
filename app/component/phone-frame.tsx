import React from "react";

export default function PhoneFrame(
    { children }: { children: React.ReactNode }
) {
    return (
        <div className="h-full aspect-346/720 border border-gray-200">
            {children}
        </div>
    );
}