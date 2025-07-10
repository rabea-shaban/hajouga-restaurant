import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { supabase } from "../../database/supabaseClient";

import LoadingSpinner from "../../components/LoadingSpinner";

// تعريف نوع البيانات
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

export default function CategoriesWithProductSlider() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [visibleProducts, setVisibleProducts] = useState<number>(4); // عدد المنتجات التي ستظهر مبدئيًا

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
            {categories?.map((cat) => (
              <SwiperSlide key={cat.id} className="cursor-pointer">
                <div className="overflow-hidden rounded-md">
                  <img
                    onClick={() => setSelectedCategory(cat.id)}
                    src={cat.Img_Url}
                    alt={cat.name}
                    className="rounded-md transition-all hover:scale-110"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-button-prev-5 absolute top-0 left-0 transform -translate-y-1/2 text-white p-4 rounded-full cursor-pointer transition-all shadow-lg z-10">
            <IoIosArrowBack className="w-[20px] h-[20px] md:w-[40px] md:h-[40px]  text-white" />
          </div>
          <div className="swiper-button-next-5 absolute top-0 right-0 transform -translate-y-1/2 text-white p-4 rounded-full cursor-pointer transition-all shadow-lg z-10">
            <IoIosArrowForward className="w-[20px] h-[20px] md:w-[40px] md:h-[40px]  text-white" />
          </div>
        </div>
      </div>

      <div>
        {isLoading || isFetching ? (
          <div className="m-auto text-center flex justify-center items-center">
            <LoadingSpinner />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-5">
            {filteredProducts?.slice(0, visibleProducts)?.map((prod) => (
              <div
                key={prod.id}
                className="bg-white shadow rounded-md hover:shadow-lg hover:scale-105 transition-all duration-300ex flex-wrap justify-evenly items-center">
                <div className="top m-0 w-full shadow rounded-md"></div>

                <div className="w-[100%] px-4">
                  <img
                    src={prod.image_url}
                    alt={prod.name}
                    className="w-full h-auto object-cover rounded-md"
                  />
                </div>
                <div className="w-[100%] p-4 m-auto text-center">
                  <h3 className="text-lg font-bold mb-1">{prod.name}</h3>
                  <p className="text-gray-700">{prod.price} ج.م</p>
                </div>
                <div className="top m-0 w-full shadow rounded-md"></div>
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
}
