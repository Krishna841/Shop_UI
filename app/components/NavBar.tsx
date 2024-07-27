import { IoArrowBack } from "react-icons/io5";


export default function NavBar() {
  return (
    <nav className="flex justify-between items-center w-auto h-32">
      <div className="flex items-center text-4xl w-auto">
        <div className="cursor-pointer mx-6">
          <IoArrowBack />
        </div>
        <h1
          style={{ fontFamily: "Recoleta, sans-serif" }}
          className={`border-b-[1.5px] border-black font-semibold pb-1 pr-56 pl-4`}
        >
          {" "}
          Rules creation
        </h1>
      </div>
      <button className="bg-green-500 text-white px-4 py-3 rounded-md text-sm">
        Publish Feed
      </button>
    </nav>
  );
}