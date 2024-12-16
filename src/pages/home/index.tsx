import SideField from "./SideField";
import CardsView from "./CardsView";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllBlogs } from "@/supabase/blogs";

type blogData = {
  description_en: string | null;
  description_ka: string | null;
  id: number;
  image_url: string | null;
  title_en: string | null;
  title_ka: string | null;
  user_id: string | null;
}[];

const HomePage = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState<blogData>([]); // State to hold blogs data
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem("userToken")) {
      navigate("/login");
      return;
    }
    const fetchBlogs = async () => {
      setLoading(true);
      const data = await getAllBlogs();
      if (data) {
        setBlogs(data);
      }
      setLoading(false);
    };

    fetchBlogs();
  }, []);
  return (
    <>
      <div className="flex items-start space-x-6 mt-20 mx-0 max-w-7xl">
        <section className="w-[70%]">
          {loading ? <p>Loading blogs...</p> : <CardsView articles={blogs} />}
        </section>
        <aside className="w-[40%]">
          <SideField />
        </aside>
      </div>
    </>
  );
};

export default HomePage;
