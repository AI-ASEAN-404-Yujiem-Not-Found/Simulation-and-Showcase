export default function NodeSimulation({
    devicename,
    isKeepData,
    finishedBroadcasting,
}: {
    devicename: string;
    isKeepData: string | null;
    finishedBroadcasting: string | null;
}) {

    const isConnected = isKeepData !== null;

    return (
        <div className="w-full rounded-md overflow-hidden">
            <button
                className="w-full grid grid-cols-4 items-center py-3 px-4 hover:bg-gray-50 transition"
            >
                <div className="col-span-2 text-left font-medium">
                    {devicename}
                </div>

                <div className="flex justify-center">
                    <div
                        className={`rounded-full px-4 py-1 text-sm text-white ${
                            isConnected
                                ? "bg-green-500"
                                : "bg-gray-400"
                        }`}
                    >
                        {isConnected ? "Connected" : "Disconnected"}
                    </div>
                </div>

                <div className="flex justify-center items-center gap-2">
                    <div className="rounded-full bg-yellow-500 px-4 py-1 text-sm">
                        {finishedBroadcasting ?? "release"}
                    </div>
                </div>
            </button>
        </div>
    );
}