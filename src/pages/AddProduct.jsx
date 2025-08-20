import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { useForm } from "react-hook-form";
import authApiClient from "../services/auth-api-client";

const AddProduct = () => {
  const [categories, setCategories] = useState([]);
  const [productId, setProductId] = useState(null);
  const [previewImages, setPreviewImages] = useState([]);
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)

  // react-hook-form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Fetch categories
  useEffect(() => {
    apiClient.get("/categories/").then((res) => {
      setCategories(res.data);
    });
  }, []);

  // Form submit handler
  const handleProductAdd = async(data) => {
    // console.log("Form Data:", data);
    try{
        const response = await authApiClient.post("/products/", data)
        // console.log(response.data)
        setProductId(response.data.id)
    }catch(error){console.log(error)}
  };

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files)
    setImages(files)
    setPreviewImages(files.map((file) => URL.createObjectURL(file)))
  }

  const handleImageUpload = async() => {
    if(!images.length) return alert("Please select images")
    
    setLoading(true)
    try{
      for(const image of images){
        const formData = new FormData()
        formData.append("image", image)
        await authApiClient.post(`/products/${productId}/images/`, formData)
    }
    alert("Images uploaded successfully.")
    }catch(error){console.log(error)}
    finally{setLoading(false)}
  }

  return (
    <div className="w-full max-w-3xl mx-auto mt-10 px-4 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Add New Product</h2>

      {!productId ? (
      <form onSubmit={handleSubmit(handleProductAdd)} className="space-y-4">
        {/* Product Name */}
        <div>
          <label className="block text-sm font-medium">Product Name</label>
          <input
            {...register("name", { required: "This field is required" })}
            className="input input-bordered w-full"
            placeholder="Product Name"
          />
          {errors.name && (
            <p className="text-red-500 text-xs">{errors.name.message}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            {...register("description", { required: "This field is required" })}
            className="textarea textarea-bordered w-full"
            placeholder="Description"
          ></textarea>
          {errors.description && (
            <p className="text-red-500 text-xs">{errors.description.message}</p>
          )}
        </div>

        {/* Price & Stock */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Price</label>
            <input
              type="text"
              {...register("price", {
                required: "This field is required",
                validate: (value) =>
                  !isNaN(parseFloat(value)) || "Please enter a valid number!",
              })}
              className="input input-bordered w-full"
              placeholder="Price"
            />
            {errors.price && (
              <p className="text-red-500 text-xs">{errors.price.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Stock Quantity</label>
            <input
              type="number"
              {...register("stock", { required: "This field is required" })}
              className="input input-bordered w-full"
              placeholder="Stock"
            />
            {errors.stock && (
              <p className="text-red-500 text-xs">{errors.stock.message}</p>
            )}
          </div>
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium">Category</label>
          <select
            {...register("category", { required: "This field is required" })}
            className="select select-bordered w-full"
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="text-red-500 text-xs">{errors.category.message}</p>
          )}
        </div>

        <button type="submit" className="btn btn-primary w-full">
          Add Product
        </button>
      </form>
      ) : (
        <div>
          <h3 className="text-lg font-medium mb-2">Upload Product Images</h3>
          <input
            type="file"
            multiple
            accept="image/*"
            className="file-input file-input-bordered w-full"
            onChange={handleImageChange}
          />
          <div>
            {previewImages.length > 0 && 
            <div className="flex gap-2 mt-2">
              {previewImages.map((src, idx) => (
                <img
                key={idx}
                  src={src}
                  alt="Preview Image"
                  className="w-16 h-16 rounded-md object-cover"
                />
              ))}
            </div>
            }
          </div>
          <button onClick={handleImageUpload} className="btn btn-primary w-full mt-2" disabled={loading}>{loading ? "Uploading images..." : "Upload Images"}</button>
        </div>
      )}

    </div>
  );
};

export default AddProduct;
