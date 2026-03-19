'use client'
import { NodeIntarface } from '../type/data-simulation'
import NodeSimulation from './node-simulation'

export default function SimulationDetails({ data }: { data: NodeIntarface[] | undefined }) {
    console.log(data)
    return (
        <div className="pt-5 w-full">
            {data?.map(node => (
                <NodeSimulation
                    key={node.deviceId}
                    devicename={node.deviceId}
                    isKeepData={node.keepDataStatus}
                    finishedBroadcasting={node.releaseDataStatus}
                />
            ))}
        </div>
    )
}
