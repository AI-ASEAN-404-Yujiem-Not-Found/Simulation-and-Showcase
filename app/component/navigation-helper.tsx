'use client'

import { useRouter } from 'next/navigation'
import { FaHome } from 'react-icons/fa'
import { TbManualGearbox } from "react-icons/tb";
import { IoArrowBack } from 'react-icons/io5'

export default function NavigationHelper() {
  const router = useRouter()

  return (
    <div className="fixed bottom-6 left-6 flex flex-col gap-3 z-50">
      
      <button
        onClick={() => router.back()}
        className="bg-gray-700 hover:bg-gray-800 text-white p-4 rounded-full shadow-lg transition"
      >
        <IoArrowBack size={20} />
      </button>

      <button
        onClick={() => router.push('/sim')}
        className="bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-full shadow-lg transition"
      >
        <TbManualGearbox size={20} />
      </button>

      <button
        onClick={() => router.push('/')}
        className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition"
      >
        <FaHome size={20} />
      </button>

    </div>
  )
}