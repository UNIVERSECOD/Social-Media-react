import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {  createPosts } from "@/services/post";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { POST_QUERY_KEY } from "@/constants/query-keys";

import { MODAL_TYPE } from "@/constants";
import { useDialog } from "@/hooks/useDialog";

const formSchema = z.object({
  title: z.string().min(3),
  content: z.string().min(4),
  tags: z.string(),
  image: z.instanceof(File, {
    message: "You must upload an image",
  }),
});
const PostActionDialog = () => {
  const {type, isOpen, setIsOpen} = useDialog();
  const queryClient = useQueryClient();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
      tags: "",
      image: null,
    }
  });


  const {mutate, data, isPending} = useMutation({
    mutationFn: createPosts,
    onSuccess: () => {
      setIsOpen(false);
      // Invalidate and refetch
      form.reset();
      queryClient.invalidateQueries({ queryKey: [POST_QUERY_KEY] }) //yeniden api ye post yaratmaq uchun request gonderir
    },
  });

  //mutation.mutate mutateni mutationun ichinden goturduyunden destructing eledeik {mutate}
  // const {mutate} = useMutation destructing ichinde isPending IsError veziyyetleri elave etmek olur
  const isEdit = type === MODAL_TYPE.EDIT;


  function onSubmit(values) {
    const formData = new FormData();
    formData.append("title", values.title)
    formData.append("content", values.content)
    formData.append("tags", values.tags)
    formData.append("image", values.image)
    mutate(formData);
   }

  console.log(data);
  

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="w-[360px]">
        <DialogHeader>
          <DialogTitle>{ isEdit ? "Edit Post" : "Create Post"}</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Post Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Type here..." {...field} />
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
                    <Input placeholder="Type here..." {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tags</FormLabel>
                  <FormControl>
                    <Input placeholder="Tag1, Tag2" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          form.setValue("image", file);
                          form.clearErrors("image");
                        }
                      }}
                    />
                    {/* {...field} */}
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogClose asChild>
            <Button
            variant="secondary" 
            disabled={isPending} 
            type="button" 
            className="ml-2"
            >
              Cancel
              </Button>
              </DialogClose>
            <Button disabled={isPending} type="submit" >Submit</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default PostActionDialog;
