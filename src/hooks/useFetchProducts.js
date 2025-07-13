import { useEffect, useState } from "react"
import apiClient from "../services/api-client"

const useFetchProducts = (currentPage, priceRange, selectedCategory, searchQuery, orderingQuery) => {
    const [Loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const[products, setProducts] = useState([])
    const [totalPages, setTotalPages] = useState(0)

    useEffect(()=>{
        const fetchProducts = async () => {
            setLoading(true)
            const url = `/products/?category_id=${selectedCategory}&price__gt=${priceRange[0]}&price__lt=${priceRange[1]}&page=${currentPage}&search=${searchQuery}&ordering=${orderingQuery}`
            try{
                const response = await apiClient.get(url)
                const data = await response.data
                setProducts(data.results)
                setTotalPages(Math.ceil(data.count / 10))
            }catch(err){
                setError(err.message)
            }finally{
                setLoading(false)
            }
        }
        fetchProducts()
    },[currentPage, priceRange, selectedCategory, searchQuery, orderingQuery])

    return{
        Loading, error, products, totalPages
    }
}

export default useFetchProducts