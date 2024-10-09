
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckIcon } from 'lucide-react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from "zod";

const formSchema =  z.object({
    comment: z.string().min(1),
  });


const CommentCreate = () => {

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          comment: "",
        },
      });

function onSubmit(values){
    console.log(values);
    
}
      
  return (
  <div >
     <Form {...form}>
     <form 
     onSubmit={form.handleSubmit(onSubmit)} 
     className='flex items-center gap-3 space-y-3'>
     <FormField
              control={form.control}
              name="comment"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                  <Input 
                   className="mt-2" 
                   placeholder="Type comment..."
                   {...field}
                   />
                  </FormControl>
                </FormItem>
              )}
            />
      <Button variant="ghost" size="sm" > <CheckIcon/> </Button>
            </form>
            </Form>
  </div>
  )}

export default CommentCreate
