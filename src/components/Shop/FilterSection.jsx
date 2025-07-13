
const FilterSection = ({priceRange, handlePriceChange, categories, selectedCategory,handleSelectedCategoryChange, searchQuery, handleSearchQuery, orderingQuery, handleOrderingQuery}) => {
  return (
    <div className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Price Range */}
      <div className="bg-white p-4 rounded-lg shadow">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Price Range
        </label>
        {/* Min Range  */}
        <div className="flex items-center space-x-4">
          <input type="number" 
          min="0" max={priceRange[1]} 
          value={priceRange[0]} 
          onChange={(eve) => handlePriceChange(0, Number(eve.target.value))}
          className="w-20 p-2 border rounded-md"/>
          <input type="range" 
          min="0" max={priceRange[1]} 
          value={priceRange[0]} step="10"
          onChange={(eve) => handlePriceChange(0, Number(eve.target.value))}
          className="w-full"/>
        </div>
        {/* Max Range  */}
        <div className="flex items-center space-x-4">
          <input type="number" 
          min={priceRange[0]} max="1000" 
          value={priceRange[1]} 
          onChange={(eve) => handlePriceChange(1, Number(eve.target.value))}
          className="w-20 p-2 border rounded-md"/>
          <input type="range" 
          min={priceRange[0]} max="1000" 
          value={priceRange[1]} step="10"
          onChange={(eve) => handlePriceChange(1, Number(eve.target.value))}
          className="w-full"/>
        </div>

        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white p-4 rounded-lg shadow">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Category
        </label>
        <select value={selectedCategory} onChange={(eve) => handleSelectedCategoryChange(eve.target.value)} className="w-full p-2 border rounded-md">
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>
      </div>

      {/* Search */}
      <div className="bg-white p-4 rounded-lg shadow">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Search
        </label>
        <input
          type="text" 
          value={searchQuery} 
          onChange={eve => handleSearchQuery(eve.target.value)}
          placeholder="Search books..." 
          className="w-full p-2 border rounded-md"/>
      </div>

      {/* Sorting  */}
      <div className="bg-white p-4 rounded-lg shadow">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Sort By Price
        </label>
        <select value={orderingQuery} onChange={eve=>handleOrderingQuery(eve.target.value)} className="w-full p-2 border rounded-md">
          <option value="">Default</option>
          <option value="price">Price: Low to High</option>
          <option value="-price">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSection;