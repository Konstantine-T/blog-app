import SideField from "./SideField";
import CardsView from "./CardsView";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useBlogs } from "@/hooks/useBlogs";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("userToken")) {
      navigate("/login");
    }
  }, [navigate]);

  const { data: blogs, isLoading, isError } = useBlogs();

  if (isError) {
    return <p>Error loading blogs. Please try again later.</p>;
  }

  return (
    <>
      <div className="flex items-start space-x-6 mt-20 mx-0 max-w-7xl">
        <section className="w-[70%]">
          {isLoading ? (
            <p>Loading blogs...</p>
          ) : (
            <CardsView articles={blogs || []} />
          )}
        </section>
        <aside className="w-[40%]">
          <SideField />
        </aside>
      </div>
    </>
  );
};

export default HomePage;
