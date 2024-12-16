import BlogCard from "@/components/card/Card";

type CardsViewProps = {
  articles: ArticleInfo[];
};

type ArticleInfo = {
  description_en: string | null;
  description_ka: string | null;
  id: number;
  image_url: string | null;
  title_en: string | null;
  title_ka: string | null;
  user_id: string | null;
};

const CardsView: React.FC<CardsViewProps> = ({ articles }) => {
  console.log(articles);
  return (
    <div>
      {articles.map((article: ArticleInfo, index: number) => (
        <BlogCard key={index} {...article} />
      ))}
    </div>
  );
};

export default CardsView;
