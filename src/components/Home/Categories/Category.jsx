// import React from 'react';
import { useEffect, useState } from "react";
import apiClient from "../../../services/api-client"
import CategoryItems from "./CategoryItems";
import CategoriesSkeletons from "../../Skeletons/CategoriesSkeletons";
import ErrorAlert from "../../ErrorAlert";

const Category = () => {
    const [Loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const[categories, setCategories] = useState([])
    useEffect(()=>{
        setLoading(true)
        apiClient.get('/categories').then((res) => {
            setCategories(res.data)
        })
        .catch(err => setError(err.message))
        .finally(() => setLoading(false))
    },[])

    return (
        <section className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex justify-between items-center px-4 md:px-8 py-5">
                <h2 className="text-2xl md:text-3xl font-bold">Browse Categories</h2>
                <a href="#" className="btn btn-secondary px-6 py-5 text-md rounded-xl">View All</a>
            </div>

                {Loading && (
                    <div className="flex justify-center">
                        {/* <span className="loading loading-spinner text-secondary text-xl"></span> */}
                        <CategoriesSkeletons />
                    </div>
                )}
                {error && <ErrorAlert error_message={error}/>}
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
                {categories.map((categorie) => (
                    <CategoryItems key={categorie.id} index={categorie.id} category={categorie}/>
                ))}
            </div>
        </section>
    );
};

export default Category;