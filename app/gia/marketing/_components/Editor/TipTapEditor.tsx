"use client";

import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Image } from "@tiptap/extension-image";
import { Link } from "@tiptap/extension-link";
import { Underline } from "@tiptap/extension-underline";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import TipTapMenuBar from "./TipTapMenuBar";

type Props = {
  hasMenu?: boolean;
  editorState: string;
  setEditorState: React.Dispatch<React.SetStateAction<string>>;
};

const TipTapEditor = (props: Props) => {
  const { editorState, setEditorState, hasMenu } = props;

  const editor = useEditor({
    extensions: [StarterKit, Image, Link, Underline, HorizontalRule],
    content: editorState,
    onUpdate: ({ editor }) => {
      setEditorState(editor.getHTML());
    },
  });

  return (
    <>
      {hasMenu && (
        <div className="flex my-4">
          {editor && <TipTapMenuBar editor={editor} />}
        </div>
      )}

      <div className="prose text-black dark:text-white prose-invert prose-h1:p-0 prose-h3:p-0 prose-h2:p-0 prose-h4:p-0 prose-h5:p-0 prose-h6:p-0 prose-hr:p-0 prose-blockquote:p-0 prose-li:p-0 prose-hr:text-white border rounded-lg min-h-[400px] w-full">
        <EditorContent editor={editor} placeholder="Write here...." />
      </div>
    </>
  );
};

export default TipTapEditor;
