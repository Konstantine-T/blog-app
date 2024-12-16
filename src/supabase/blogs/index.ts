import { supabase } from "..";

export async function createBlog({
  title_ka,
  title_en,
  description_ka,
  description_en,
  user_id,
  image_url,
}: {
  title_ka: string;
  title_en: string;
  description_ka: string;
  description_en: string;
  user_id: string;
  image_url: string | null;
}) {
  const { data, error } = await supabase.from("blogs").insert([
    {
      title_ka,
      title_en,
      description_ka,
      description_en,
      user_id,
      image_url,
    },
  ]);

  if (error) {
    console.error("Error creating blog:", error);
    return null;
  }

  return data;
}

export async function getAllBlogs() {
  try {
    const { data, error } = await supabase.from("blogs").select("*");

    if (error) {
      console.error("Error fetching blogs:", error.message);
      return null;
    }

    return data;
  } catch (err) {
    console.error("Unexpected error fetching blogs:", err);
    return null;
  }
}
