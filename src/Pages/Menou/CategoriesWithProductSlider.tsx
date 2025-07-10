import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import LoadingSpinner from "../../components/LoadingSpinner";
import { supabase } from "../../database/supabaseClient";

interface Category {
  id: number;
  name: string;
  Img_Url: string;
}

interface Product {
  id: number;
  name: string;
  image_url: string;
  price: number;
  category_id: number;
}

const fetchCategories = async (): Promise<Category[]> => {
  const { data, error } = await supabase.from("categories").select("*");
  if (error) throw error;
  return data as Category[];
};

const fetchAllProducts = async (): Promise<Product[]> => {
  const { data, error } = await supabase.from("products").select("*");
  if (error) throw error;
  return data as Product[];
};

const CategoriesWithProductSlider = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [visibleProducts, setVisibleProducts] = useState<number>(4);

  const { data: categories } = useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const {
    data: allProducts,
    isLoading,
    isFetching,
  } = useQuery<Product[]>({
    queryKey: ["allProducts"],
    queryFn: fetchAllProducts,
  });

  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return allProducts;
    return allProducts?.filter((prod) => prod.category_id === selectedCategory);
  }, [allProducts, selectedCategory]);

  const loadMoreProducts = () => {
    setVisibleProducts((prev) => prev + 4);
  };

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

      <div className="flex flex-wrap gap-3 mb-6 w-[90%] md:w-[70%] m-auto text-center">
        <div className="relative w-full">
          <Swiper
            spaceBetween={30}
            slidesPerView={2}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            navigation={{
              prevEl: ".swiper-button-prev-5",
              nextEl: ".swiper-button-next-5",
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper">
            {categories?.map((category) => (
              <SwiperSlide key={category.id} className="cursor-pointer">
                <div className="overflow-hidden rounded-md">
                  <img
                    onClick={() => setSelectedCategory(category.id)}
                    src={category.Img_Url}
                    alt={category.name}
                    className={`rounded-md transition-all hover:scale-110 ${
                      selectedCategory === category.id
                        ? "ring-4 ring-orange-400"
                        : ""
                    }`}
                  />
                </div>
                <div className="mt-2 text-white font-bold text-sm">
                  {category.name}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-button-prev-5 absolute top-1/2 left-0 -translate-y-1/2 text-white p-4 rounded-full cursor-pointer transition-all shadow-lg z-10 bg-orange-400 hover:bg-orange-500">
            <IoIosArrowBack className="w-[20px] h-[20px] md:w-[40px] md:h-[40px]" />
          </div>
          <div className="swiper-button-next-5 absolute top-1/2 right-0 -translate-y-1/2 text-white p-4 rounded-full cursor-pointer transition-all shadow-lg z-10 bg-orange-400 hover:bg-orange-500">
            <IoIosArrowForward className="w-[20px] h-[20px] md:w-[40px] md:h-[40px]" />
          </div>
        </div>
        {selectedCategory !== null && (
          <button
            className="ml-4 mt-2 text-orange-400 underline text-sm"
            onClick={() => setSelectedCategory(null)}>
            عرض الكل
          </button>
        )}
      </div>

      <div>
        {isLoading || isFetching ? (
          <div className="m-auto text-center flex justify-center items-center">
            <LoadingSpinner />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-5">
            {filteredProducts?.slice(0, visibleProducts)?.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow rounded-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex flex-col items-center">
                <div className="w-full px-4 pt-4">
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="w-full h-40 object-cover rounded-md"
                  />
                </div>
                <div className="w-full p-4 text-center">
                  <h3 className="text-lg font-bold mb-1">{product.name}</h3>
                  <p className="text-gray-700">{product.price} ج.م</p>
                </div>
              </div>
            ))}
          </div>
        )}
        {filteredProducts && filteredProducts.length > visibleProducts && (
          <div className="text-center mt-4">
            <button
              onClick={loadMoreProducts}
              className="bg-orange-400 text-white py-2 px-4 rounded-md hover:bg-orange-500">
              عرض المزيد
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoriesWithProductSlider;
