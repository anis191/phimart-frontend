import ProductItem from "../Products/ProductItem";
import ErrorAlert from "../ErrorAlert";
// import ProductsSkeleton from "../Skeletons/ProductsSkeleton";
import ShopSkeletons from "../Skeletons/ShopSkeletons.jsx"

const ProductList = ({ products, loading, error }) => {
  if (loading)
    return (
      <div className="min-h-screen">
        {/* <ProductsSkeleton /> */}
        <ShopSkeletons />
      </div>
    );
  else if (error)
    return (
      <div className="flex justify-center items-center h-96">
        <ErrorAlert error_message={error} />
      </div>
    );
    
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
