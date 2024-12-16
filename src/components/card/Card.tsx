import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

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
  console.log(props, "sdsaas");
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
        {/* <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <a href="/author/1" className="hover:underline">
            {props.author}
          </a>
        </div> */}
        <p className="text-muted-foreground">{props.description_en}</p>
      </CardContent>

      {/* <CardFooter className="flex items-center p-6 pt-0">
        <div className="flex space-x-2">
          {props.tags.map((tag) => (
            <a key={tag} href="/search">
              <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                {tag}
              </div>
            </a>
          ))}
        </div>
      </CardFooter> */}
    </Card>
  );
};

export default BlogCard;
