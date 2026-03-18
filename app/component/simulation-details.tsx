'use client'
import NodeSimulation from './node-simulation'

export default function SimulationDetails() {
    return (
        <div className="pt-5 w-full">
            <NodeSimulation
                devicename="device-1"
                finishedBroadcasting={true}
                isKeepData={true}
            />
            <NodeSimulation
                devicename="device-2"
                finishedBroadcasting={true}
                isKeepData={true}
            />
            <NodeSimulation
                devicename="device-3"
                finishedBroadcasting={true}
                isKeepData={true}
            />
            <NodeSimulation
                devicename="bus-1"
                finishedBroadcasting={true}
                isKeepData={true}
            />
            <NodeSimulation
                devicename="bus-2"
                finishedBroadcasting={true}
                isKeepData={true}
            />
            <NodeSimulation
                devicename="connector-1"
                finishedBroadcasting={true}
                isKeepData={true}
            />
        </div>
    )
}
