"use client";
import React from "react";
import ClientLayout from "../common-layout";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <ClientLayout>
        {children}
      </ClientLayout>
    </div>
  );
}
