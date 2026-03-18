import SimulationDetails from "../component/simulation-details";
import SimulationMap from "../component/simulation-map";

export default function Page() {
  return (
    <div className="w-full min-h-screen xl:h-screen p-10">
      <div className="w-full h-full flex items-start justify-between gap-5">
        <div className="w-full xl:w-[45%] h-full bg-white rounded-md border border-gray-300 p-5">
          <h1 className="text-center text-xl px-10">Simulation Of How Data is Being Broadcast One to Onther</h1>
          <SimulationDetails />
        </div>
        <div className="w-full xl:w-[55%] h-full bg-white rounded-md border border-gray-300">
          <SimulationMap />
        </div>
      </div>
    </div>
  )
}
