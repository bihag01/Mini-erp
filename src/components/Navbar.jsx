
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  function routeTo(path) {
    navigate(path);
  }

  return (
    <div className='w-full h-[6%] bg-[#121a23] border-b-2 border-[#1f2937] pl-[10px] flex gap-[10px] items-center'>

      <h1 className="mr-[10px] text-xl text-center">MiniERP</h1>

      <button
        onClick={() => {routeTo('/Products')}}
        className="px-[10px] cursor-pointer hover:bg-[#3da9fc]/70 h-[60%] rounded-md">
          Products
      </button>

      <button
        onClick={() => {routeTo('/Categories')}}
        className="px-[10px] cursor-pointer hover:bg-[#3da9fc]/70 h-[60%] rounded-md">
          Categories
      </button>

      <div className="flex flex-1 justify-end pr-[5px] h-full items-center">

        <button
          onClick={() => {routeTo('/')}}
          className="px-[10px] cursor-pointer hover:bg-[#3da9fc]/70 h-[60%] rounded-md">
            logout
        </button>

      </div>

    </div>
  )
}