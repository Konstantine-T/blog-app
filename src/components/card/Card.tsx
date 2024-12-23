import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type BlogCardProps = {
  description_en: string | null;
  description_ka: string | null;
  id: number;
  image_url: string | null;
  title_en: string | null;
  title_ka: string | null;
  user_id: string | null;
};

const BlogCard: React.FC<BlogCardProps> = (props) => {
  return (
    <Card className="rounded-xl border bg-card text-card-foreground shadow w-4/5 m-auto	mt-5">
      <CardHeader className="p-0">
        <img
          src="https://g-zwkebgiacpe.vusercontent.net/placeholder.svg?height=200&width=400"
          alt="Cover image for The Future of Blockchain Technology"
          className="rounded-t-xl object-cover w-full h-[200px]"
        />
      </CardHeader>

      <CardContent className="flex flex-col space-y-2 p-6">
        <CardTitle className="text-2xl font-bold">{props.title_en}</CardTitle>
        <p className="text-muted-foreground">{props.description_en}</p>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
