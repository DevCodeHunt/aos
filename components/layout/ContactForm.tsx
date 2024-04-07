"use client";

import React, { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Paperclip } from "lucide-react";
import { useToast } from "../ui/use-toast";
import { MailFile } from "@/types";
import { CldUploadWidget, CloudinaryUploadWidgetInfo } from "next-cloudinary";
import { sendMailToContact } from "@/actions";

const formSchema = z.object({
  name: z
    .string()
    .min(1, {
      message: "Name is required.",
    })
    .trim(),
  email: z
    .string()
    .min(1, {
      message: "Email is required.",
    })
    .email()
    .trim(),
  organization: z
    .string()
    .min(1, { message: "Organization is required." })
    .trim(),
  title: z.string().trim(),
  message: z
    .string()
    .min(1, {
      message: "Message is required.",
    })
    .trim(),
  newsLetter: z.boolean(),
});

const ContactForm = () => {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const [files, setFiles] = useState<MailFile[]>([]);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      title: "",
      message: "",
      organization: "",
      newsLetter: false,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    startTransition(async () => {
      try {
        const responseBody = {
          name: values.name,
          email: values.email,
          message: values.message,
          organization: values.organization,
          title: values.title,
          newsLetter: values.newsLetter,
          files: files,
          subscribed: values.newsLetter,
        };

        await sendMailToContact(responseBody);

        form.reset();
        setFiles([]);

        toast({
          title: "Thanks!",
          description: "Your message has been sent.",
          variant: "success",
        });
      } catch (error) {
        toast({
          title: "Fail to send message",
          description: "Something went wrong with your message",
          variant: "default",
        });
      }
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-lg w-full mx-auto flex flex-col"
      >
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-4 md:gap-y-6 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="dark:border-white border-black"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="dark:border-white border-black"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="organization"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Organization</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="dark:border-white border-black"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="dark:border-white border-black"
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  className="dark:border-white min-h-[150px] border-black"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex items-center justify-between">
          <CldUploadWidget
            onSuccess={(results) => {
              if (typeof results === "string" || !results.info) {
                return;
              }

              const { secure_url, original_filename, format } =
                results.info as CloudinaryUploadWidgetInfo;
              const filename = `${original_filename}.${format}`;
              setFiles((prevSate) => [
                {
                  filename,
                  path: secure_url,
                },
                ...prevSate,
              ]);
            }}
            options={{
              sources: ["local", "url", "unsplash", "dropbox", "google_drive"],
            }}
            signatureEndpoint="/api/upload-image"
          >
            {({ open }) => {
              return (
                <label onClick={() => open()} htmlFor="file">
                  <div className="flex items-center gap-2 cursor-pointer">
                    <Paperclip size={18} />
                    <span className="text-sm">Attach Resume</span>
                  </div>
                </label>
              );
            }}
          </CldUploadWidget>

          <span className="text-sm">Attachments ({files.length})</span>
        </div>

        <FormField
          control={form.control}
          name="newsLetter"
          render={({ field }) => (
            <FormItem className="flex gap-2 items-center">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  id="newsLetter"
                />
              </FormControl>
              <FormLabel htmlFor="newsLetter">
                Sign up for our email list for updates, promotions, and more.
              </FormLabel>
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending}>
          Send
        </Button>

        <p className="text-xs dark:opacity-80 text-center">
          This site is protected by reCAPTCHA and the Google{" "}
          <a
            className="dark:text-slate-300 text-slate-600 hover:underline transition duration-300"
            href="https://policies.google.com/privacy"
            target="_blank"
          >
            Privacy Policy
          </a>{" "}
          and{" "}
          <a
            className="dark:text-slate-300 text-slate-600 hover:underline transition duration-300"
            href="https://policies.google.com/terms"
            target="_blank"
          >
            Terms of Service
          </a>{" "}
          apply.
        </p>
      </form>
    </Form>
  );
};

export default ContactForm;
