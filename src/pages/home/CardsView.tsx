import BlogCard from "@/components/card/Card";

type CardsViewProps = {
  articles: ArticleInfo[];
};

type ArticleInfo = {
  heading: string;
  author: string;
  date: string;
  readingTime: string;
  previewText: string;
  text: string;
  tags: string[];
};

const CardsView: React.FC<CardsViewProps> = ({ articles }) => {
  return (
    <div>
      {articles.map((article: ArticleInfo, index: number) => (
        <BlogCard key={index} {...article} />
      ))}
    </div>
  );
};

export default CardsView;
