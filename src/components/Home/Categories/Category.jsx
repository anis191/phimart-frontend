// import React from 'react';
import { useEffect, useState } from "react";
import apiClient from "../../../services/api-client"
import CategoryItems from "./CategoryItems";

const Category = () => {
    const[categories, setCategories] = useState([])
    useEffect(()=>{
        apiClient.get('/categories').then((res) => {
            setCategories(res.data)
        })
        // fetchProducts()
    },[])

    // const fetchProducts = async () => {
        // try{
            // const response = await apiClient.get('/categories')
            // const data = await response.data
            // setCategories(data.results)
            // console.log(data.results)
        // }catch(err){
            // console.log(err)
        // }
    // }

    return (
        <section className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex justify-between items-center px-4 md:px-8 py-5">
                <h2 className="text-2xl md:text-3xl font-bold">Browse Categories</h2>
                <a href="#" className="btn btn-secondary px-6 py-5 text-md rounded-xl">View All</a>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
                {categories.map((categorie) => (
                    <CategoryItems key={categorie.id} index={categorie.id} category={categorie}/>
                ))}
            </div>
        </section>
    );
};

export default Category;