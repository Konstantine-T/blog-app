import { useQuery } from "@tanstack/react-query";
import { getAllBlogs } from "@/supabase/blogs";

export const useBlogs = () => {
  return useQuery(["blogs"], getAllBlogs, {
    retry: 2,
    staleTime: 5 * 60 * 1000,
  });
};
