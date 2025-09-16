// ProductDetail.jsx
import { Link, useParams } from "react-router";
import AddToCartButton from "../components/ProductDetails/AddToCartButton";
import ProductImageGallery from "../components/ProductDetails/ProductImageGallery";
import { FaArrowLeft, FaStar, FaRegStar, FaShare, FaHeart } from "react-icons/fa";
import { Suspense, useEffect, useState } from "react";
import apiClient from "../services/api-client";
// import ProductsSkeleton from "../components/Skeletons/ProductsSkeleton";
import ReviewSection from "../components/Reviews/ReviewSection";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("description");
  const { productId } = useParams();
  
  useEffect(() => {
    setLoading(true);
    apiClient.get(`/products/${productId}/`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
        setLoading(false);
      });
  }, [productId]);
  
  if (loading) return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
      <div className="animate-pulse">
        <div className="h-5 w-32 bg-gray-200 rounded mb-4"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="aspect-square bg-gray-200 rounded-lg"></div>
          <div className="space-y-3">
            <div className="h-7 bg-gray-200 rounded w-3/4"></div>
            <div className="h-5 bg-gray-200 rounded w-1/4"></div>
            <div className="h-16 bg-gray-200 rounded"></div>
            <div className="h-10 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  );
  
  if (!product) return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
      <div className="text-center py-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">Product Not Found</h2>
        <Link 
          to="/shop" 
          className="inline-flex items-center text-indigo-600 hover:text-indigo-500 transition-colors text-sm"
        >
          <FaArrowLeft className="mr-1 h-3 w-3" />
          Back to products
        </Link>
      </div>
    </div>
  );
  
  // Calculate average rating for demonstration
  const averageRating = 4.5;
  const reviewCount = 24;
  
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
      {/* Breadcrumb */}
      <nav className="flex mb-4" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-1 text-xs text-gray-500">
          <li>
            <Link to="/" className="hover:text-gray-700 transition-colors">Home</Link>
          </li>
          <li className="flex items-center">
            <span className="mx-1">/</span>
            <Link to="/shop" className="hover:text-gray-700 transition-colors">Shop</Link>
          </li>
          <li className="flex items-center">
            <span className="mx-1">/</span>
            <span className="text-gray-600 font-medium truncate max-w-xs">{product.name}</span>
          </li>
        </ol>
      </nav>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Product Images */}
        <div>
          <Suspense fallback={
            <div className="aspect-square bg-gray-100 animate-pulse rounded-lg"></div>
          }>
            <ProductImageGallery images={product.images} productName={product.name} />
          </Suspense>
        </div>
        
        {/* Product Info */}
        <div className="flex flex-col">
          <div className="flex justify-between items-start mb-3">
            <div>
              <div className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-100 text-indigo-800 mb-2">
                {product.category}
              </div>
              <h1 className="text-xl font-bold text-gray-900">{product.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center mt-1">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    star <= averageRating ? 
                    <FaStar key={star} className="h-4 w-4 text-yellow-400" /> : 
                    <FaRegStar key={star} className="h-4 w-4 text-yellow-400" />
                  ))}
                </div>
                <span className="ml-1 text-xs text-gray-600">{averageRating} ({reviewCount} reviews)</span>
              </div>
            </div>
            
            <div className="flex space-x-1">
              <button className="p-1.5 rounded hover:bg-gray-100 transition-colors">
                <FaShare className="h-4 w-4 text-gray-500" />
              </button>
              <button className="p-1.5 rounded hover:bg-gray-100 transition-colors">
                <FaHeart className="h-4 w-4 text-gray-500" />
              </button>
            </div>
          </div>
          
          {/* Pricing */}
          <div className="mt-3">
            <div className="flex items-baseline">
              <span className="text-xl font-bold text-gray-900">${product.price}</span>
              {product.after_discount && (
                <span className="ml-2 text-xs text-gray-500 line-through">${product.after_discount}</span>
              )}
              {product.after_discount && (
                <span className="ml-2 inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                  Save ${(product.price - product.after_discount).toFixed(2)}
                </span>
              )}
            </div>
            {product.after_discount && (
              <p className="mt-0.5 text-xs text-gray-500">${product.after_discount} incl. tax</p>
            )}
          </div>
          
          {/* Availability */}
          <div className="mt-4">
            <div className="flex items-center">
              {product.stock > 0 ? (
                <>
                  <span className="h-2 w-2 rounded-full bg-green-500 mr-1.5"></span>
                  <span className="text-xs font-medium text-green-700">In stock ({product.stock} available)</span>
                </>
              ) : (
                <>
                  <span className="h-2 w-2 rounded-full bg-red-500 mr-1.5"></span>
                  <span className="text-xs font-medium text-red-700">Out of stock</span>
                </>
              )}
            </div>
          </div>
          
          {/* Add to Cart */}
          <div className="mt-5 border-t border-gray-200 pt-4">
            <AddToCartButton product={product} />
          </div>
          
          {/* Product Details Tabs */}
          <div className="mt-6">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-6">
                <button
                  onClick={() => setActiveTab("description")}
                  className={`py-2 px-1 border-b-2 font-medium text-xs ${
                    activeTab === "description"
                      ? "border-indigo-500 text-indigo-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveTab("specifications")}
                  className={`py-2 px-1 border-b-2 font-medium text-xs ${
                    activeTab === "specifications"
                      ? "border-indigo-500 text-indigo-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Specifications
                </button>
                <button
                  onClick={() => setActiveTab("reviews")}
                  className={`py-2 px-1 border-b-2 font-medium text-xs ${
                    activeTab === "reviews"
                      ? "border-indigo-500 text-indigo-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Reviews
                </button>
              </nav>
            </div>
            
            <div className="mt-4">
              {activeTab === "description" && (
                <div className="text-sm text-gray-500">
                  <p>{product.description}</p>
                  <ul className="mt-2 space-y-1">
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 mr-1.5"></span>
                      Premium quality materials
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 mr-1.5"></span>
                      Designed for comfort and durability
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 mr-1.5"></span>
                      Eco-friendly manufacturing process
                    </li>
                  </ul>
                </div>
              )}
              
              {activeTab === "specifications" && (
                <div className="border border-gray-200 rounded overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-xs font-medium text-gray-900 bg-gray-50">Material</td>
                        <td className="px-4 py-2 whitespace-nowrap text-xs text-gray-500">High-quality cotton blend</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-xs font-medium text-gray-900 bg-gray-50">Dimensions</td>
                        <td className="px-4 py-2 whitespace-nowrap text-xs text-gray-500">12 × 10 × 3 inches</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-xs font-medium text-gray-900 bg-gray-50">Weight</td>
                        <td className="px-4 py-2 whitespace-nowrap text-xs text-gray-500">1.2 pounds</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-xs font-medium text-gray-900 bg-gray-50">SKU</td>
                        <td className="px-4 py-2 whitespace-nowrap text-xs text-gray-500">PRD-{product.id}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
              
              {activeTab === "reviews" && (
                <ReviewSection />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;