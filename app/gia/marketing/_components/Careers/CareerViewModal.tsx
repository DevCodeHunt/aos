"use client";

import AnimationWrapper from "@/components/layout/AnimationWrapper";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import useViewCareerStore from "@/store/career-view-stroe";
import { Career } from "@/types";
import { Mail, Phone, UserRound } from "lucide-react";
import { CldImage } from "next-cloudinary";
import { useCallback } from "react";

const CareerViewModal = ({
  career,
  setSelectCareer,
}: {
  career: Career;
  setSelectCareer: any;
}) => {
  const { open, onClose } = useViewCareerStore();

  const handleClose = useCallback(() => {
    setSelectCareer(null);
    setTimeout(() => {
      onClose();
    }, 200);
  }, [onClose, setSelectCareer]);
  if (!career) return null;

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-xl w-full">
        <DialogHeader>
          <DialogTitle className="font-bold">{career.name}</DialogTitle>
        </DialogHeader>

        <div className=" flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <UserRound size={20} />
            <span className="text-sm break-all">{career.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={20} />
            <span className="break-all text-sm">{career.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={20} />
            <span className="break-all text-sm">{career.phone}</span>
          </div>
          {career.attachments.length > 0 && (
            <div className="flex flex-wrap gap-3 max-h-[600px] overscroll-y-auto">
              {career.attachments.map((file, i) => {
                return (
                  <AnimationWrapper
                    key={i}
                    transition={{ duration: 1, delay: i * 0.08 }}
                  >
                    <a href={file} download target="_blank" className="no-underline">
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

export default CareerViewModal;
