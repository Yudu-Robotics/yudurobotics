"use client";
// import React from "react";
import ClientLayout from "../common-layout";

export default function PartnerLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="overflow-x-hidden">
			<ClientLayout>{children}</ClientLayout>
		</div>
	);
}
