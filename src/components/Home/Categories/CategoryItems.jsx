import { FaAngleRight } from "react-icons/fa6";

const CategoryItems = ({ index, category }) => {
  const gradients = [
    "from-pink-50 to-pink-100",
    "from-blue-50 to-blue-100",
    "from-purple-50 to-purple-100",
    "from-green-50 to-green-100",
  ];

  return (
    <div
      className={`rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer bg-gradient-to-br ${
        gradients[index % gradients.length]
      }`}
    >
      <div className="p-4 flex flex-col h-full">
        {/* Top Section: Icon + Name + Count */}
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-pink-500 text-white flex items-center justify-center text-sm font-bold">
              {category.name.charAt(0)}
            </div>
            <h3 className="text-base font-semibold text-gray-900">{category.name}</h3>
          </div>
          <span className="text-[10px] md:text-xs text-gray-700 bg-white/80 px-2 rounded-full">
            {category.product_count}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-xs mb-2 flex-grow">{category.description}</p>

        {/* Button */}
        <button className="text-pink-500 text-xs font-medium hover:text-pink-600 transition-colors flex items-center gap-1">
          Explore <FaAngleRight size={12} />
        </button>
      </div>
    </div>
  );
};

export default CategoryItems;
