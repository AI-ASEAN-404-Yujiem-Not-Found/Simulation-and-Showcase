export default function NodeSimulation(
    {
        devicename,
        isKeepData,
        finishedBroadcasting,
    }:{
        devicename: string;
        isKeepData: boolean;
        finishedBroadcasting: boolean;
    }
) {
    return (
        <div className="w-full grid grid-cols-4 border border-gray-100 min-h-8 gap-0">
            <div className="w-full col-span-2 bg-gray-200 text-center flex justify-center items-center">{devicename}</div>
            <div className="w-full bg-green-500 flex justify-center items-center">{isKeepData ? 'keep-data' : 'release-data'}</div>
            <div className="w-full bg-yellow-500 flex justify-center items-center">{finishedBroadcasting ? 'release' : 'finished'}</div>
        </div>
    )
}
