import { useEffect, useState } from "react";
import apiClient from "../../../services/api-client";
import CategoryItems from "./CategoryItems";
import CategoriesSkeletons from "../../Skeletons/CategoriesSkeletons";
import ErrorAlert from "../../ErrorAlert";

const Category = () => {
  const [Loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setLoading(true);
    apiClient
      .get("/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Explore Popular Categories
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Find your preferred item in the highlighted product selection.
        </p>
      </div>

      {Loading && (
        <div className="flex justify-center">
          <CategoriesSkeletons />
        </div>
      )}
      {error && <ErrorAlert error_message={error} />}

      {/* Desktop Smooth Scroll */}
      <div className="hidden sm:block overflow-x-hidden relative">
        <div
          className="flex gap-6 whitespace-nowrap animate-scroll-x"
          style={{ animationPlayState: "running" }}
          onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
          onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
        >
          {categories.concat(categories).map((categorie, idx) => (
            <div key={idx} className="inline-block">
              <CategoryItems category={categorie} />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Smooth Scroll */}
      <div className="sm:hidden overflow-x-auto scrollbar-hide">
        <div className="flex animate-scroll-x hover:[animation-play-state:paused] gap-0">
          {categories.concat(categories).map((categorie, idx) => (
            <CategoryItems key={idx} category={categorie} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
