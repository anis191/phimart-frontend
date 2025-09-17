const CategoryItems = ({ category }) => {
  return (
    <div className="flex flex-col items-center text-center cursor-pointer group min-w-[33.33%] sm:min-w-0 px-1">
      {/* Circle Image */}
      <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden shadow-sm transition-shadow duration-300 group-hover:shadow-md">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Name */}
      <h3 className="mt-2 text-xs md:text-base font-medium text-gray-800">
        {category.name}
      </h3>
    </div>
  );
};

export default CategoryItems;
