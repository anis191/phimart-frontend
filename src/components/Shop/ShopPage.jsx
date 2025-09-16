import { useState } from "react";
import ProductList from "./ProductList";
import Pagination from "./Pagination";
import useFetchProducts from "../../hooks/useFetchProducts";
import FilterSection from "./FilterSection";
import useFetchCategories from "../../hooks/useFetchCategories";
import { FiFilter } from "react-icons/fi";

const ShopPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [orderingQuery, setOrderingQuery] = useState("");
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const { Loading, error, products, totalPages } = useFetchProducts(
    currentPage,
    priceRange,
    selectedCategory,
    searchQuery,
    orderingQuery
  );
  const { categories } = useFetchCategories();

  const handlePriceChange = (idx, value) => {
    setPriceRange((prev) => {
      const newRange = [...prev];
      newRange[idx] = value;
      return newRange;
    });
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-4 lg:-mt-10">
        
        <div className="flex justify-end lg:hidden">
        <button
            onClick={() => setShowMobileFilter(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-full shadow-md bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium hover:scale-105 active:scale-95 transition-transform duration-200">
            <FiFilter className="text-lg" /> 
            Filters
          </button>
        </div>

        {/* Desktop Filter */}
        <div className="hidden lg:block bg-white p-6 mb-4 mt-4">
          <FilterSection
            priceRange={priceRange}
            handlePriceChange={handlePriceChange}
            categories={categories}
            selectedCategory={selectedCategory}
            handleSelectedCategoryChange={setSelectedCategory}
            searchQuery={searchQuery}
            handleSearchQuery={setSearchQuery}
            orderingQuery={orderingQuery}
            handleOrderingQuery={setOrderingQuery}
          />
        </div>

        {/* Mobile Filter Modal */}
        {showMobileFilter && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white w-11/12 max-w-md p-6 rounded-lg relative">
              <button
                onClick={() => setShowMobileFilter(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl font-bold"
              >
                &times;
              </button>
              <FilterSection
                priceRange={priceRange}
                handlePriceChange={handlePriceChange}
                categories={categories}
                selectedCategory={selectedCategory}
                handleSelectedCategoryChange={setSelectedCategory}
                searchQuery={searchQuery}
                handleSearchQuery={setSearchQuery}
                orderingQuery={orderingQuery}
                handleOrderingQuery={setOrderingQuery}
              />
            </div>
          </div>
        )}

        {/* Results Count */}
        {!Loading && !error && (
          <div className="flex justify-between items-center mb-0 md:mb-3">
            <p className="text-gray-600">
              Showing <span className="font-semibold">{products.length}</span> products
            </p>
          </div>
        )}

        {/* Product Grid */}
        <ProductList products={products} loading={Loading} error={error} />

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8">
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              handleChange={setCurrentPage}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopPage;
