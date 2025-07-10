// CategoriesWithProducts.tsx
import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { supabase } from "../database/supabaseClient";
import LoadingSpinner from "./LoadingSpinner";

const fetchCategories = async () => {
  const { data, error } = await supabase.from("categories").select("*");
  if (error) throw error;
  return data;
};

const fetchAllProducts = async () => {
  const { data, error } = await supabase.from("products").select("*");
  if (error) throw error;
  return data;
};

export default function CategoriesWithProducts() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(3);

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const {
    data: allProducts,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["allProducts"],
    queryFn: fetchAllProducts,
  });

  // فلترة المنتجات حسب الكاتيجوري
  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return allProducts;
    return allProducts?.filter((prod) => prod.category_id === selectedCategory);
  }, [allProducts, selectedCategory]);

  return (
    <div className="px-0 py-5 CategoriesWithProducts container m-auto">
      <div className="py-10">
        <h5 className="text-[14px] m-0 font-bold mb-4 text-orange-400 text-center">
          مطعم حجوجة
        </h5>
        <h2 className="text-5xl mt-[-20px] mb-10 font-bold text-white text-center">
          استطعم بافضل الاسعار
        </h2>
      </div>

      {/* أزرار الفلترة */}
      <div className="flex flex-wrap gap-3 mb-6 w-[90%] md:w-[70%] m-auto text-center">
        {categories?.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded ${
              selectedCategory === cat.id
                ? "bg-blue-600 text-white"
                : "bg-gray-200"
            }`}>
            {cat.name}
          </button>
        ))}
      </div>

      {/* المنتجات */}
      {isLoading || isFetching ? (
        <div className="m-auto text-center flex justify-center items-center">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-5">
          <AnimatePresence>
            {filteredProducts?.map((prod) => (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{
                  duration: 0.5,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="p-4 card shadow rounded flex flex-wrap justify-evenly items-center">
                <div className="w-[50%]">
                  <img src={prod.image_url} alt={prod.name} />
                </div>
                <div className="w-[50%] m-auto text-center">
                  <h3 className="text-lg font-bold mb-1">{prod.name}</h3>
                  <p className="text-gray-700">{prod.price} ج.م</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
