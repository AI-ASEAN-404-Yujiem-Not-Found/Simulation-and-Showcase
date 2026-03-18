'use client'

import React from "react";
import SimulationDetails from "./component/simulation-details";
import SimulationMap from "./component/simulation-map";
import { NodeIntarface } from "./type/data-simulation";

export default function Page() {
  const [data, setData] = React.useState<NodeIntarface []>([]);

  return (
    <div className="w-full min-h-screen xl:h-screen p-10">
      <div className="w-full h-full flex items-start justify-between gap-5">
        <div className="w-full xl:w-[45%] h-full bg-white rounded-md border border-gray-300 p-5">
          <h1 className="text-center text-xl px-10">Simulation Of How Data is Being Broadcast One to Another</h1>
          <SimulationDetails data={data} />
        </div>
        <div className="w-full xl:w-[55%] h-full bg-white rounded-md border border-gray-300">
          <SimulationMap onNodesUpdate={setData} />
        </div>
      </div>
    </div>
  )
}
