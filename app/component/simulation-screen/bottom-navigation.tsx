import { IoHomeOutline } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";

export default function BottomNavigation() {
  return (
    <div className="w-full h-full px-5 grid grid-cols-5 border border-gray-300 rounded-t-2xl gap-2 p-2">
      <div className="w-full rounded-md flex flex-col justify-center items-center gap-2">
        <IoHomeOutline className="w-2.5 h-2.5" />
        <p className="text-[5px]">Home</p>
      </div>
      <div className="w-full rounded-md flex flex-col justify-center items-center gap-2">
        <IoMdInformationCircleOutline className="w-2.5 h-2.5" />
        <p className="text-[5px]">Opportunity</p>
      </div>
      <div className="w-full rounded-md flex flex-col justify-center items-center gap-2">
        <MdOutlineDocumentScanner className="w-2.5 h-2.5" />
        <p className="text-[5px]">Education</p>
      </div>
      <div className="w-full rounded-md flex flex-col justify-center items-center gap-2">
        <FiEdit className="w-2.5 h-2.5" />
        <p className="text-[5px]">Recap</p>
      </div>
      <div className="w-full rounded-md flex flex-col justify-center items-center gap-2">
        <FaRegUser className="w-2.5 h-2.5" />
        <p className="text-[5px]">Profile</p>
      </div>
    </div>
  );
}
