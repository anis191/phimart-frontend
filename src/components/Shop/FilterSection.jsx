const FilterSection = ({
  priceRange,
  handlePriceChange,
  categories,
  selectedCategory,
  handleSelectedCategoryChange,
  searchQuery,
  handleSearchQuery,
  orderingQuery,
  handleOrderingQuery,
}) => {
  return (
    <div className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Price Range */}
      <div className="bg-white p-2 rounded-lg shadow h-full">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Price Range
        </label>
        {/* Min Range */}
        <div className="flex items-center space-x-2">
          <input
            type="number"
            min="0"
            max={priceRange[1]}
            value={priceRange[0]}
            onChange={(e) => handlePriceChange(0, Number(e.target.value))}
            className="w-16 p-1 border rounded-md text-sm"
          />
          <input
            type="range"
            min="0"
            max={priceRange[1]}
            value={priceRange[0]}
            step="10"
            onChange={(e) => handlePriceChange(0, Number(e.target.value))}
            className="w-full"
          />
        </div>

        {/* Max Range */}
        <div className="flex items-center space-x-2 mt-1">
          <input
            type="number"
            min={priceRange[0]}
            max="1000"
            value={priceRange[1]}
            onChange={(e) => handlePriceChange(1, Number(e.target.value))}
            className="w-16 p-1 border rounded-md text-sm"
          />
          <input
            type="range"
            min={priceRange[0]}
            max="1000"
            value={priceRange[1]}
            step="10"
            onChange={(e) => handlePriceChange(1, Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div className="flex justify-between text-xs text-gray-600 mt-1">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white p-2 rounded-lg shadow h-full">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Category
        </label>
        <select
          value={selectedCategory}
          onChange={(e) => handleSelectedCategoryChange(e.target.value)}
          className="w-full p-1 border rounded-md text-sm"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {/* Search */}
      <div className="bg-white p-2 rounded-lg shadow h-full">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Search
        </label>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => handleSearchQuery(e.target.value)}
          placeholder="Search books..."
          className="w-full p-1 border rounded-md text-sm"
        />
      </div>

      {/* Sort By Price */}
      <div className="bg-white p-2 rounded-lg shadow h-full">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Sort By Price
        </label>
        <select
          value={orderingQuery}
          onChange={(e) => handleOrderingQuery(e.target.value)}
          className="w-full p-1 border rounded-md text-sm"
        >
          <option value="">Default</option>
          <option value="price">Price: Low to High</option>
          <option value="-price">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSection;
