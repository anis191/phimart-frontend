// import React from 'react';
import { useState } from "react";
import ProductList from "./ProductList";
import Pagination from "./Pagination";
import useFetchProducts from "../../hooks/useFetchProducts";
import FilterSection from "./FilterSection";
import useFetchCategories from "../../hooks/useFetchCategories";

const ShopPage = () => {
    const[currentPage, setCurrentPage] = useState(1)
    const[priceRange, setPriceRange] = useState([0,1000])
    const[selectedCategory, setSelectedCategory] = useState("")
    const[searchQuery, setSearchQuery] = useState("")
    const[orderingQuery, setOrderingQuery] = useState("")

    const{Loading, error, products, totalPages} = useFetchProducts(currentPage,priceRange, selectedCategory, searchQuery, orderingQuery)
    const {categories} = useFetchCategories()

    const handlePriceChange = (idx, value) =>{
        setPriceRange((prev) =>{
            const newRange = [...prev]
            newRange[idx] = value
            return newRange
        })
        setCurrentPage(1)
    }

    return (
        <div className="max-w-6xl mx-auto px-3 py-6">
            <h1 className="text-xl md:text-2xl font-bold py-4">Shop Our Products</h1>
            <FilterSection priceRange={priceRange} handlePriceChange={handlePriceChange} categories={categories} selectedCategory={selectedCategory} handleSelectedCategoryChange={setSelectedCategory} searchQuery={searchQuery} handleSearchQuery={setSearchQuery} orderingQuery={orderingQuery} handleOrderingQuery={setOrderingQuery}/>
            <ProductList products={products} loading={Loading} error={error}/>
            <Pagination totalPages={totalPages} currentPage={currentPage} handleChange={setCurrentPage}/>
        </div>
    );
};

export default ShopPage;