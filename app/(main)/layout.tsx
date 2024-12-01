import React from "react";
import LayoutProviders from "@/provider/LayoutProvider";

const layout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <LayoutProviders>{children}</LayoutProviders>;
};

export default layout;
