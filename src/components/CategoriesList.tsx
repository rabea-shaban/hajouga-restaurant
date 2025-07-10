import { useEffect, useState } from "react";
import { supabase } from "../database/supabaseClient";

export default function CategoriesList() {
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data, error } = await supabase.from("categories").select("*");

      if (error) console.error(error);
      else setCategories(data);
      setLoading(false);
    };

    fetchCategories();
  }, []);
  console.log(categories);

  if (loading) return <p>جاري التحميل...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {categories.map((cat) => (
        <div key={cat.id} className="p-4 bg-white rounded shadow text-center">
          {cat.name}
        </div>
      ))}
    </div>
  );
}
