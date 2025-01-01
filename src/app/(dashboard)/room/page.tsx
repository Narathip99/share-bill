"use client";
import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// components
import { Card } from "@/components/ui/card";
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
import { UsersIcon } from "@/components/ui/users";
import AddPeople from "@/components/rooms/add-people";

const formSchema = z.object({
  title: z.string().min(1).max(50),
  description: z.string().min(3).max(50),
});

const Room = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="min-h-[calc(100vh-64px]"
      >
        <div className="p-4 space-y-8">
          <Card className="p-4 space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </Card>

          <Card className="p-4 space-y-4">
            <div className="flex justify-between">
              <div className="flex items-end gap-2">
                <UsersIcon />
                <h3 className="text-lg font-semibold">People List</h3>
              </div>
              <AddPeople />
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold">User A</h4>
              <p className="text-sm text-gray-600">Role: Admin</p>
            </div>
          </Card>
        </div>
        <div className="w-full p-4 bg-background absolute bottom-0">
          <Button type="submit" className="w-full">
            Create Room
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default Room;
