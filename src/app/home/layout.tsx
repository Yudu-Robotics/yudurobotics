"use client";
import React from "react";
import ClientLayout from "../common-layout";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <ClientLayout>
        {children}
       
      </ClientLayout>
    </div>
  );
}
