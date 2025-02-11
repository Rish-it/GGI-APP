"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
})

export function ProfileForm() {
  const [loading, setLoading] = useState(false)

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "" },
  })

  async function onSubmit(values: { name: string }) {
    setLoading(true)
    try {
      const response = await fetch("/api/backend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        throw new Error("Failed to submit")
      }

      toast({ title: "Success", description: "Item added successfully!" })
      form.reset() // Clear the form after success
    } catch (error) {
      toast({ title: "Error", description: "Failed to add item", variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter item name" {...field} />
              </FormControl>
              <FormDescription>This will be stored in the database.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </Form>
  )
}
