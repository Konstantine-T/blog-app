import { supabase } from "@/supabase";

export async function uploadImage(file: File) {
  const fileName = `${Date.now()}_${file.name}`;
  const { error } = await supabase.storage
    .from("blog_images")
    .upload(fileName, file);

  if (error) {
    console.error("Image upload error:", error);
    return null;
  }

  const imagePath = supabase.storage
    .from("blog_images")
    .getPublicUrl(`images/${fileName}`);

  return imagePath.data.publicUrl;
}
