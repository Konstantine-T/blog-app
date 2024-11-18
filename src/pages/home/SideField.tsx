import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";

type Author = {
  name: string;
  profession: string;
  image: string;
};

const tags = [
  "Blockchain",
  "Cryptocurrency",
  "Technology",
  "Programming",
  "AI",
  "Machine Learning",
];

const authors: Author[] = [
  {
    name: "James Mayhew",
    profession: "carpenter",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiUTP3jBPfPmghA0vxGyTbeJ84UavGiUE5Lw&s",
  },
  {
    name: "Rafael Sanchez",
    profession: "Handyman",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFemMHiSSfi1BfnLs8P4ZU4u8nxAuecq8tlQ&s",
  },
  { name: "Anna Mathews", profession: "tyis mchreli", image: "" },
  { name: "Headson", profession: "Shenze kai tipi", image: "" },
];

const SideField = () => {
  return (
    <div>
      <Card className="rounded-xl border bg-card text-card-foreground shadow w-4/5 m-auto">
        <CardContent className="flex flex-col space-y-1.5 p-6">
          <CardTitle className="font-semibold leading-none tracking-tight">
            Popular Tags
          </CardTitle>
        </CardContent>

        <CardFooter className="p-6 pt-0">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <a key={tag} href="/search">
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80">
                  {tag}
                </div>
              </a>
            ))}
          </div>
        </CardFooter>
      </Card>
      <Card className="rounded-xl border bg-card text-card-foreground shadow w-4/5 m-auto mt-5">
        <CardContent className="flex flex-col space-y-1.5 p-6">
          <CardTitle className="font-semibold leading-none tracking-tight">
            Featured Authors
          </CardTitle>
        </CardContent>

        <CardContent className="p-6 pt-0">
          <ul className="space-y-4">
            {authors.map((author: Author, index: number) => (
              <li key={index} className="flex items-center space-x-4">
                <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                  <img
                    className="aspect-square h-full w-full"
                    alt={`Avatar of ${author.name}`}
                    src={author.image}
                  />
                </span>
                <div>
                  {author.name}

                  <p className="text-sm text-muted-foreground">
                    {author.profession}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default SideField;
