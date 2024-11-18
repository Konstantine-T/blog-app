import SideField from "./SideField";
import CardsView from "./CardsView";
import { articles } from "./data/articles";

const HomePage = () => {
  return (
    <>
      <div className="flex items-start space-x-6 mt-20 mx-0 max-w-7xl">
        <section className="w-[70%]">
          <CardsView articles={articles} />
        </section>
        <aside className="w-[40%]">
          <SideField />
        </aside>
      </div>
    </>
  );
};

export default HomePage;
