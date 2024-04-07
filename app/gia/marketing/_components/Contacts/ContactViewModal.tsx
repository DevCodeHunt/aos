"use client";

import AnimationWrapper from "@/components/layout/AnimationWrapper";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import useViewContactStore from "@/store/contact-view-store";
import { Contact } from "@/types";
import { Building2, Mail, UserRound } from "lucide-react";
import { CldImage } from "next-cloudinary";
import { useCallback } from "react";

const ContactViewModal = ({
  contact,
  setSelectContact,
}: {
  contact: Contact;
  setSelectContact: any;
}) => {
  const { open, onClose } = useViewContactStore();

  const handleClose = useCallback(() => {
    setSelectContact(null);
    setTimeout(() => {
      onClose();
    }, 200);
  }, [onClose, setSelectContact]);

  if (!contact) return null;

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-xl w-full">
        <DialogHeader>
          <DialogTitle className="font-bold flex gap-2 items-center">
            <span>{contact.name}</span>
            <p>
              ({contact.subscribed ? (
                <span className="dark:text-green-400 text-green-600 font-semibold">
                  Subscribed News Letter
                </span>
              ) : (
                <span className="text-red-600 dark:text-red-400 font-semibold">
                  Unsubscribed News Letter
                </span>
              )}
              )
            </p>
          </DialogTitle>
        </DialogHeader>

        <div className=" flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <UserRound size={20} />
            <span className="text-sm break-all">{contact.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={20} />
            <span className="break-all text-sm">{contact.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Building2 size={20} />
            <span className="break-all text-sm">{contact.organization}</span>
          </div>
          {contact.attachments.length > 0 && (
            <div className="flex flex-wrap gap-3 max-h-[600px] overscroll-y-auto">
              {contact.attachments.map((file, i) => {
                return (
                  <AnimationWrapper
                    key={i}
                    transition={{ duration: 1, delay: i * 0.08 }}
                  >
                    <a
                      href={file}
                      download
                      target="_blank"
                      className="no-underline"
                    >
                      <CldImage
                        width={200}
                        height={200}
                        src={file}
                        alt="attachement-file"
                        className="w-[200px] h-[200px] rounded object-cover"
                      />
                    </a>
                  </AnimationWrapper>
                );
              })}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactViewModal;
