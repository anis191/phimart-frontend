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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {/* Search Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Search Products</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearchQuery(e.target.value)}
            placeholder="Search products..."
            className="block w-full pl-10 pr-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>

      {/* Category Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
        <div className="relative">
          <select
            value={selectedCategory}
            onChange={(e) => handleSelectedCategoryChange(e.target.value)}
            className="block w-full pl-3 pr-10 py-1 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Price Range Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Price Range: ${priceRange[0]} - ${priceRange[1]}
        </label>
        <div className="">
          <div className="relative">
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange[0]}
              step="10"
              onChange={(e) => handlePriceChange(0, Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <div className="relative">
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange[1]}
              step="10"
              onChange={(e) => handlePriceChange(1, Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Sort Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
        <div className="relative">
          <select
            value={orderingQuery}
            onChange={(e) => handleOrderingQuery(e.target.value)}
            className="block w-full pl-3 pr-10 py-1 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Default</option>
            <option value="price">Price: Low to High</option>
            <option value="-price">Price: High to Low</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
