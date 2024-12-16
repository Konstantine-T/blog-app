"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { TagInput } from "emblor";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/supabase";

const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const formSchema = z.object({
  title: z.string().min(10, {
    message: "Title must be at least 8 characters.",
  }),
  content: z.string().min(20, {
    message: "Content must be at least 20 characters.",
  }),
  titleGeo: z.string().min(10, {
    message: "Title must be at least 8 characters.",
  }),
  contentGeo: z.string().min(20, {
    message: "Content must be at least 20 characters.",
  }),
  images: z
    .custom<FileList>((value) => value instanceof FileList, {
      message: "Please upload valid images.",
    })
    .refine((files) => files && files.length > 0, {
      message: "At least one image is required.",
    })
    .refine(
      (files) =>
        Array.from(files).every((file) =>
          ACCEPTED_IMAGE_TYPES.includes(file.type)
        ),
      {
        message: `Only the following formats are allowed: ${ACCEPTED_IMAGE_TYPES.join(
          ", "
        )}`,
      }
    ),
  tags: z.array(z.string()).optional(),
});

export function ProfileForm() {
  const [tags, setTags] = useState<any>([]);
  const [activeTagIndex, setActiveTagIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
      tags: [],
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (values.images) {
      supabase.storage
        .from("blog_images")
        .upload(values.images[0].name, values.images[0])
        .then((res) => {
          return supabase.from("blogs").insert({
            title_en: values.title,
            description_en: values.content,
            title_ka: values.titleGeo,
            description_ka: values.contentGeo,
            user_id: "random id",
            image_url: res.data?.fullPath,
          });
        });
    }

    console.log(values);
    navigate("/");
  }

  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow max-w-3xl mx-auto mt-10">
      <div className="flex flex-col space-y-1.5 p-6">
        <div className="tracking-tight text-2xl font-bold">
          Write a New Post
        </div>
      </div>
      <div className="p-6 pt-0">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your post title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="titleGeo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title (Geo)</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your post title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Write your post content here..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contentGeo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content (Geo)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Write your post content here..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="images"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Images</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      multiple
                      accept={ACCEPTED_IMAGE_TYPES.join(",")}
                      onChange={(e) => field.onChange(e.target.files)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <TagInput
              tags={tags}
              setTags={(newTags) => {
                setTags(newTags);
                form.setValue(
                  "tags",
                  tags.map((tag: any) => tag.text)
                );
              }}
              placeholder="Add a tag"
              styleClasses={{
                input: "w-full sm:max-w-[350px]",
              }}
              activeTagIndex={activeTagIndex}
              setActiveTagIndex={setActiveTagIndex}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
