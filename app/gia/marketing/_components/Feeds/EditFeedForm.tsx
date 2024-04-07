"use client";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import TipTapEditor from "../Editor/TipTapEditor";
import {
  CldImage,
  CldUploadWidget,
  CloudinaryUploadWidgetInfo,
} from "next-cloudinary";
import { useEffect, useState, useTransition } from "react";
import { TFeed, TImage } from "@/types";
import { useToast } from "@/components/ui/use-toast";
import { updateFeed } from "@/actions";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Title must contain at least 3 character(s)" })
    .trim(),
  description: z.string().min(3, { message: "Description is required" }).trim(),
});

const EditFeedForm = ({ feed }: { feed: TFeed }) => {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const [image, setImage] = useState<TImage>();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: feed.title,
      description: feed.description,
    },
  });

  useEffect(() => {
    if (feed) {
      setImage({
        secure_url: feed.image,
      });
    }
  }, [feed]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!image) {
      toast({
        variant: "destructive",
        description: "Please upload feeed image",
      });
    }

    startTransition(async () => {
      try {
        const data = await updateFeed({
          id: feed.id,
          title: values.title,
          description: values.description,
          image: image?.secure_url || "",
        });

        toast({
          variant: "success",
          description: "Project edit successfully",
        });
        router.push("/gia/marketing/feeds");
      } catch (error: any) {
        if (error?.status === 400) {
          toast({
            variant: "destructive",
            description: error.response.data.message,
          });
        } else {
          toast({
            variant: "destructive",
            description: "Something went wrong.",
          });
        }
      }
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 max-w-2xl w-full mx-auto shadow-lg p-4 mt-8"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} className="" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <div>
              <FormLabel>Description</FormLabel>
              <TipTapEditor
              hasMenu
                editorState={field.value}
                setEditorState={field.onChange}
              />
              <FormMessage />
            </div>
          )}
        />
        <div>
          <CldUploadWidget
            onSuccess={(results) => {
              if (typeof results === "string" || !results.info) {
                return;
              }

              const { public_id, secure_url, width, height } =
                results.info as CloudinaryUploadWidgetInfo;

              setImage({
                public_id,
                secure_url: secure_url,
                width,
                height,
              });
            }}
            options={{
              sources: ["local", "url", "unsplash", "dropbox", "google_drive"],
            }}
            signatureEndpoint="/api/upload-image"
          >
            {({ open }) => {
              return (
                <div className="flex items-center justify-center w-full">
                  <label
                    onClick={() => open()}
                    className="flex flex-col items-center justify-center w-full h-40 border border-gray-300 border-dashed rounded-lg cursor-pointer"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-8 h-8 mb-4 text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or JPEG
                      </p>
                    </div>
                  </label>
                </div>
              );
            }}
          </CldUploadWidget>
          {image && (
            <CldImage
              src={image?.public_id || image?.secure_url}
              alt="project-image"
              width="400"
              height="400"
              crop="fill"
              className="mx-auto mt-4 rounded"
            />
          )}
        </div>

        <Button disabled={isPending} type="submit" className="w-full">
          Save
        </Button>
      </form>
    </Form>
  );
};

export default EditFeedForm;
