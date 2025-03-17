"use client";

import JumpingButtons from "../common/jumping-buttons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import ContactForm from "../common/contact-us-form";

export default function JumpingButtonsSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <JumpingButtons
        ishorizontal={true}
        text1="Book"
        text2="a free demo"
        bgColor="#2CF7A4"
        textColor="#0A4029"
        onClick={() => setIsOpen(true)}
      />

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px] w-[95%] p-1 md:p-0 rounded-md gap-0">
          <div className="px-4 pt-4 md:p-4">
            <DialogTitle className="text-primary font-cobaltRidge">
              Book a free demo
            </DialogTitle>
            <DialogDescription className="text-primary">
              Please fill in the form below to book a free demo.
            </DialogDescription>
          </div>
          <ContactForm
            submitButtonText="Book a free demo"
            defaultEnquiryType="Book a free demo"
            className="md:p-0 p-0"
            classNameInner="border-none w-full mx-0 p-4"
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
