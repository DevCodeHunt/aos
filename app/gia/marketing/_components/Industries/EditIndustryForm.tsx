"use client";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Controller, useForm } from "react-hook-form";
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
import {
  CldImage,
  CldUploadWidget,
  CloudinaryUploadWidgetInfo,
} from "next-cloudinary";
import { useEffect, useMemo, useState, useTransition } from "react";
import { Industry, Project, Service, TImage } from "@/types";
import { useToast } from "@/components/ui/use-toast";
import { addIndustry, addProject, updateIndustry } from "@/actions";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import MultiSelect from "@/components/layout/MultiSelect";

const formSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Title must contain at least 3 character(s)" })
    .trim(),
  description: z.string().min(3, { message: "Description is required" }).trim(),
  projects: z.array(
    z
      .object({
        label: z.string().trim(),
        value: z.string().trim(),
        id: z.string().trim(),
      })
      .optional()
  ),
  services: z
    .array(
      z.object({
        label: z.string().trim(),
        value: z.string().trim(),
        id: z.string().trim(),
      })
    )
    .min(1, { message: "Service is required" }),
});

const EditIndustryForm = ({
  projects,
  services,
  industry,
}: {
  projects: Project[];
  services: Service[];
  industry: Industry;
}) => {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const [banner, setBanner] = useState<TImage>();
  const [thumbnail, setThumbnail] = useState<TImage>();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: industry.title,
      description: industry.description,
      projects: industry.projects.map((project) => ({
        id: project.id,
        value: project.title,
        label: project.title,
      })),
      services: industry.services.map((service) => ({
        id: service.id,
        value: service.title,
        label: service.title,
      })),
    },
  });

  useEffect(() => {
    if (industry) {
      setBanner({
        secure_url: industry.banner,
      });
      setThumbnail({
        secure_url: industry.thumbnail,
      });
    }
  }, [industry]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!banner) {
      toast({
        variant: "destructive",
        description: "Please upload banner",
      });
    }

    if (!thumbnail) {
      toast({
        variant: "destructive",
        description: "Please upload thumbnail",
      });
    }

    startTransition(async () => {
      try {
        const responseData = {
          title: values.title,
          description: values.description,
          projects:
            values.projects
              ?.filter(
                (
                  project
                ): project is { id: string; value: string; label: string } =>
                  !!project &&
                  "id" in project &&
                  "value" in project &&
                  "label" in project
              )
              .map((project) => project.id) || [],
          services: values.services.map((service) => service.id),
          banner: banner?.secure_url || "",
          thumbnail: thumbnail?.secure_url || "",
          id: industry.id,
        };

        const data = await  updateIndustry(responseData);

        toast({
          variant: "success",
          description: "Industry edit successfully",
        });
        router.push("/gia/marketing/industries");
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

  const allProjects = useMemo(() => {
    return projects.map((project: Project) => ({
      id: project.id,
      value: project.title,
      label: project.title,
    }));
  }, [projects]);

  const allServices = useMemo(() => {
    return services.map((service: Service) => ({
      id: service.id,
      value: service.title,
      label: service.title,
    }));
  }, [services]);

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
              <Textarea {...field} />
              <FormMessage />
            </div>
          )}
        />

        <Controller
          name="projects"
          control={form.control}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <div>
              <FormLabel>Projects</FormLabel>
              <MultiSelect
                options={allProjects}
                value={
                  value?.filter((item) => item !== undefined) as {
                    label: string;
                    value: string;
                    id?: string;
                  }[]
                }
                onChange={onChange}
                error={error?.message}
              />
            </div>
          )}
        />

        <Controller
          name="services"
          control={form.control}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <div>
              <FormLabel>Services</FormLabel>
              <MultiSelect
                options={allServices}
                value={value}
                onChange={onChange}
                error={error?.message}
              />
            </div>
          )}
        />

        <div>
          <FormLabel>Thumbnail</FormLabel>
          <CldUploadWidget
            onSuccess={(results) => {
              if (typeof results === "string" || !results.info) {
                return;
              }

              const { public_id, secure_url, width, height } =
                results.info as CloudinaryUploadWidgetInfo;

              setThumbnail({
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
                    className="flex flex-col items-center justify-center w-full h-40 border border-gray-400 border-dashed rounded-lg cursor-pointer"
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
                        <span className="font-semibold">
                          Click to upload thumbnail
                        </span>
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
          {thumbnail && (
            <CldImage
              src={thumbnail?.public_id || thumbnail?.secure_url}
              alt="project-image"
              width="400"
              height="400"
              crop="fill"
              className="mx-auto mt-4 rounded"
            />
          )}
        </div>

        <div>
          <FormLabel>Banner</FormLabel>
          <CldUploadWidget
            onSuccess={(results) => {
              if (typeof results === "string" || !results.info) {
                return;
              }

              const { public_id, secure_url, width, height } =
                results.info as CloudinaryUploadWidgetInfo;

              setBanner({
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
                    className="flex flex-col items-center justify-center w-full h-40 border border-gray-400 border-dashed rounded-lg cursor-pointer"
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
                        <span className="font-semibold">
                          Click to upload banner
                        </span>
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
          {banner && (
            <CldImage
              src={banner?.public_id || banner?.secure_url}
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

export default EditIndustryForm;
