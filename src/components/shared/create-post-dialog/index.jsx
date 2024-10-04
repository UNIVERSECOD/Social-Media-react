import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
 
import { z } from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
 
const formSchema = z.object({
  title: z.string().min(3),
  content: z.string().min(4),
  tags: z.string(),
  image: z.instanceof(File, {
    message: "You must upload an image"
  })

})
const CreatePostDialog = () => {
  const form = useForm ({
    resolver: zodResolver(formSchema),
    defaultValues: "" ,
      content: "" ,
      tags: "" ,
      image: null,
  });

    // 1.04.04 
  //   const mutation = useMutation({
  //   mutationFn: ,
  //   onSuccess: () => {
  //     // Invalidate and refetch
  //     queryClient.invalidateQueries({ queryKey: ['todos'] })
  //   },
  // })



  function onSubmit(values) {

    console.log(values)
  }

  return (
    <Dialog>
  <DialogTrigger asChild>
    <Button size="sm">
Create Post
      </Button>
      </DialogTrigger>
  <DialogContent className="w-[360px]">
    <DialogHeader>
      <DialogTitle>Create Post</DialogTitle>
     
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
          name="tag"
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
                <Input  type="file" onChange ={(e) => {
                  const file = e.target.files[0];
                  if(file){
                    form.setValue("image", file);
                    form.clearErrors("image")
                  }
                } } /> 
                {/* {...field} */}
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  </DialogContent>
</Dialog>
  )
}

export default CreatePostDialog
