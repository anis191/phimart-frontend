import { useParams } from "react-router";
import ReviewForm from "./ReviewForm";
import authApiClient from "../../services/auth-api-client";
import useAuthContext from "../../hooks/useAuthContext";
import { useEffect, useState } from "react";
import ReviewList from "./ReviewList";
import apiClient from "../../services/api-client";

const ReviewSection = () => {
    const {productId} = useParams()
    const {user} = useAuthContext()
    const [userCanReview, setUserCanReview] = useState(false)
    const [reviews, setReviews] = useState([])
    const [loading, setLoading] = useState(false)
    const [editReview, setEditReview] = useState({ratings:0, comment:""})
    const [editingId, setEditingId] = useState(null)
    
    const fetchReview = async() => {
        setLoading(true)
        try{
            const response = await apiClient.get(`/products/${productId}/reviews/`)
            setReviews(response.data)
        }catch(error){console.log(error)}
        finally{setLoading(false)}
    }

    const handleUpdateReview = async(reviewId) =>{
        try{
            const response = await authApiClient.put(`/products/${productId}/reviews/${reviewId}/`, editReview)
            console.log(response)
            setEditingId(null)
            fetchReview()
        }catch(error){console.log(error)}
    }

    const handleDeleteReview = async(reviewId) =>{
        try{
            await authApiClient.delete(`/products/${productId}/reviews/${reviewId}/`)
            fetchReview()
        }catch(error){console.log(error)}
    }

    const onSubmit = async(data) =>{
        const reviewDataPayload = {
            ratings : data.ratings,
            comment : data.comment,
            user : user
        }
        try{
            await authApiClient.post(`/products/${productId}/reviews/`, reviewDataPayload)
            fetchReview()
        }catch(error){console.log(error)}
    }

    const checkUserPermission = async() => {
        try{
            const response = await authApiClient.get(`/orders/has_ordered/${productId}/`)
            setUserCanReview(response.data.hasOrdered)
        }catch(error){console.log(error)}
    }

    useEffect(()=>{
        checkUserPermission()
        fetchReview()
    },[])

    return (
        <div className="space-y-8 mt-10 max-w-5xl mx-auto px-4">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Customer Reviews</h2>
                <div>
                  {reviews.length} {reviews.length === 1 ? "Review" : "Reviews"}
                </div>
            </div>

            {userCanReview && <ReviewForm onSubmit={onSubmit}/>}
            <div className="divider"></div>
            {loading ? (
                <div className="flex justify-center py-8">
                    <span className="loading loading-spinner loading-lg text-primary"></span>
                </div>
            ) : reviews.length === 0 ? (
                <div className="text-center py-8">
                <div className="text-5xl mb-4">📝</div>
                <h3 className="text-xl font-semibold mb-2">No Reviews Yet</h3>
                    <p className="text-base-content/70">
                      Be the first to review this product!
                    </p>
                </div>
            ) : (
                <ReviewList reviews={reviews} user={user} editReview={editReview} setEditReview={setEditReview} editingId={editingId} setEditingId={setEditingId} handleUpdateReview={handleUpdateReview} handleDeleteReview={handleDeleteReview}/>
            )}
        </div>
    );
};

export default ReviewSection;