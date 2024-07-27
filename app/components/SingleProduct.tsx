import { CgMenuGridO } from "react-icons/cg";
import { Product } from "../data";
import { Reorder, useDragControls } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";
import toast from "react-hot-toast";
interface Props {
  product: Product;
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}
export default function SingleProduct({ product, setProducts }: Props) {
  const controls = useDragControls();
  return (
    <Reorder.Item value={product} dragControls={controls} dragListener={false}>
      <div className="min-w-[35%] flex justify-start items-center h-48 my-6 group">
        <div
          style={{ fontFamily: "Recoleta, sans-serif" }}
          className="w-20 text-3xl flex justify-center font-semibold  border-r border-gray-200 h-full items-center pr-4 relative"
        >
          <span
            className="absolute cursor-pointer top-10 text-red-500 hidden group-hover:block"
            onClick={() => {
              setProducts((prev) => prev.filter((p) => p.id !== product.id));
              toast.success("State Removed");
            }}
          >
            <FaRegTrashAlt />
          </span>
          <span>{product.id}</span>
          <span
            className="cursor-grab"
            onPointerDown={(e) => controls.start(e)}
          >
            <CgMenuGridO />
          </span>
        </div>
        <div className="w-full px-4 py-4 border-r border-gray-200 h-full text-center">
          <div className="w-full bg-white h-40">
            <div className="h-full w-full flex justify-center items-center">
              <div className="h-16 max-w-96 flex justify-start px-10 items-center flex-wrap">
                {product.filters.length > 0 ? (
                  product.filters.map((filter) => (
                    <span
                      key={filter.id}
                      className={`w-fit bg-white border ${
                        filter.isActive
                          ? "bg-green-100 text-green-500 font-semibold border-green-200"
                          : "border-gray-200"
                      } text-xs px-3 py-1 mx-1 rounded-md shadow-sm whitespace-nowrap`}
                    >
                      {filter.name}
                    </span>
                  ))
                ) : (
                  <div className="rounded-md overflow-hidden py-2 px-4 text-xl font-semibold flex justify-between items-center border border-gray-200 cursor-pointer">
                    <FiPlus />
                    <span className="text-sm ml-1 font-normal">
                      Add Product Filters
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reorder.Item>
  );
}
