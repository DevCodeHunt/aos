"use cleint";

import { Editor } from "@tiptap/react";
import {
  Bold,
  Code,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Italic,
  List,
  ListOrdered,
  Quote,
  Redo,
  Strikethrough,
  Undo,
  Link,
  Image as LuImage,
  Upload,
  X,
  Underline,
  Minus,
} from "lucide-react";
import { LuCodepen } from "react-icons/lu";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { toast } from "sonner";
import { CldUploadWidget, CloudinaryUploadWidgetInfo } from "next-cloudinary";

type Props = {
  editor: Editor;
};

const TipTapMenuBar = ({ editor }: Props) => {
  const [toggleImage, setToggleImage] = useState(false);

  const toggleImageHandler = useCallback(() => {
    setToggleImage((prev) => !prev);
  }, []);

  const setLink = useCallback(() => {
    const url = prompt("Enter the URL:");

    if (url === null) {
      return;
    }

    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
    }

    editor
      .chain()
      .focus()
      .extendMarkRange("link")
      .setLink({ href: url, target: "_bank" })
      .run();
  }, [editor]);

  return (
    <>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          disabled={!editor.can().chain().focus().toggleBold().run()}
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`${editor.isActive("bold") ? "border rounded" : ""}`}
        >
          <Bold className="w-6 h-6" />
        </button>
        <button
          type="button"
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`${editor.isActive("italic") ? "border rounded" : ""}`}
        >
          <Italic className="w-6 h-6" />
        </button>
        <button
          type="button"
          disabled={!editor.can().chain().focus().setUnderline().run()}
          onClick={() => editor.chain().focus().setUnderline().run()}
          className={`${editor.isActive("underline") ? "border rounded" : ""}`}
        >
          <Underline className="w-6 h-6" />
        </button>
        <button
          type="button"
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={`${editor.isActive("strike") ? "border rounded" : ""}`}
        >
          <Strikethrough className="w-6 h-6" />
        </button>
        <button type="button" onClick={setLink}>
          <Link className="w-6 h-6" />
        </button>
        <CldUploadWidget
            onSuccess={(results) => {
              if (typeof results === "string" || !results.info) {
                return;
              }

              const {  secure_url, } =
                results.info as CloudinaryUploadWidgetInfo;

                editor.chain().focus().setImage({ src: secure_url }).run();
            }}
            options={{
              sources: ["local", "url", "unsplash", "dropbox", "google_drive"],
            }}
            signatureEndpoint="/api/upload-image"
          >
            {({ open }) => {
              return (
                <button type="button"  onClick={() => open()}>
                <LuImage className="w-6 h-6" />
              </button>
              );
            }}
          </CldUploadWidget>
     
      
        <button
          type="button"
          disabled={
            !editor.can().chain().focus().toggleHeading({ level: 1 }).run()
          }
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={`${
            editor.isActive("heading", { level: 1 }) ? "border rounded" : ""
          }`}
        >
          <Heading1 className="w-6 h-6" />
        </button>
        <button
          type="button"
          disabled={
            !editor.can().chain().focus().toggleHeading({ level: 2 }).run()
          }
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={`${
            editor.isActive("heading", { level: 2 }) ? "border rounded" : ""
          }`}
        >
          <Heading2 className="w-6 h-6" />
        </button>
        <button
          type="button"
          disabled={
            !editor.can().chain().focus().toggleHeading({ level: 3 }).run()
          }
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={`${
            editor.isActive("heading", { level: 3 }) ? "border rounded" : ""
          }`}
        >
          <Heading3 className="w-6 h-6" />
        </button>
        <button
          type="button"
          disabled={
            !editor.can().chain().focus().toggleHeading({ level: 4 }).run()
          }
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 4 }).run()
          }
          className={`${
            editor.isActive("heading", { level: 4 }) ? "border rounded" : ""
          }`}
        >
          <Heading4 className="w-6 h-6" />
        </button>
        <button
          type="button"
          disabled={
            !editor.can().chain().focus().toggleHeading({ level: 5 }).run()
          }
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 5 }).run()
          }
          className={`${
            editor.isActive("heading", { level: 5 }) ? "border rounded" : ""
          }`}
        >
          <Heading5 className="w-6 h-6" />
        </button>
        <button
          type="button"
          disabled={
            !editor.can().chain().focus().toggleHeading({ level: 6 }).run()
          }
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 6 }).run()
          }
          className={`${
            editor.isActive("heading", { level: 6 }) ? "border rounded" : ""
          }`}
        >
          <Heading6 className="w-6 h-6" />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "border rounded" : ""}
        >
          <List className="w-6 h-6" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive("orderedList") ? "border rounded" : ""}
        >
          <ListOrdered className="w-6 h-6" />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive("blockquote") ? "border rounded" : ""}
        >
          <Quote className="w-6 h-6" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          // disabled={!editor.can().chain().focus().setHorizontalRule().run()}
        >
          <Minus className="w-6 h-6" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
        >
          <Undo className="w-6 h-6" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
        >
          <Redo className="w-6 h-6" />
        </button>
      </div>

      {toggleImage && <AddImage onClose={toggleImageHandler} editor={editor} />}
    </>
  );
};

export default TipTapMenuBar;

const AddImage = ({
  onClose,
  editor,
}: {
  onClose: () => void;
  editor: Editor;
}) => {
  const [toggleImageInput, setToggleImageInput] = useState("Upload");
  const toggleImageInputHandler = useCallback((value: string) => {
    setToggleImageInput(value);
  }, []);

  const uploadImage = async (file: File) => {
    const loading = toast.loading("Uploading...");
    try {
      const formData = new FormData();
      formData.append("file", file);
      // const data = await uploadMedia(formData);

      // return data?.url;
      return ""
    } catch (error) {
      toast.error("Error uploading file");
    } finally {
      toast.dismiss(loading);
    }
  };

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      const url = await uploadImage(file);
 

      if (url) {
        editor.chain().focus().setImage({ src: url }).run();
        onClose();
      }
    },
    [editor, onClose]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });
  const addImageFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    const url = await uploadImage(file);

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
      onClose();
    }
  };

  const addImageURL = (event: React.ChangeEvent<HTMLInputElement>) => {
    const url = event.target.value;
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
      onClose();
    }
  };

  return (
    <div className="fixed px-4 inset-0 z-[500] bg-black/60 flex items-center justify-start h-screen">
      <div className="bg-[#191919] rounded-lg max-w-xl w-full mx-auto p-4">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-end gap-4">
            <button
              type="button"
              onClick={() => toggleImageInputHandler("Upload")}
              className={`${
                toggleImageInput === "Upload" ? "border rounded" : ""
              } p-1`}
            >
              <Upload size={18} />
            </button>
            <button
              type="button"
              onClick={() => toggleImageInputHandler("Link")}
              className={`${
                toggleImageInput === "Link" ? "border rounded" : ""
              } p-1`}
            >
              <Link size={18} />
            </button>
          </div>
          <button type="button" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {toggleImageInput === "Upload" && (
          <div className="flex items-center justify-center w-full mt-4">
            <label
              {...getRootProps()}
              onClick={(e) => {
                e.stopPropagation();
              }}
              htmlFor="editor-image"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer mt-3"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4"
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
                <p className="mb-2 text-sm">
                  <span className="font-semibold">Click to upload</span>
                </p>
                <p className="text-xs">SVG, PNG, JPG or JPEG, GIF</p>
              </div>
              <input
                {...getInputProps()}
                id="editor-image"
                type="file"
                className="hidden"
                onChange={addImageFile}
              />
            </label>
          </div>
        )}

        {toggleImageInput === "Link" && (
          <input
            id="editor-image"
            type="text"
            onChange={addImageURL}
            className="border p-2 rounded bg-transparent w-full mt-6"
          />
        )}
      </div>
    </div>
  );
};
