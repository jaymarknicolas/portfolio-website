"use client";
import Header from "@/components/global/Header";
import { Footer } from "@/components/global/Footer";

const LayoutProviders = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <div className="flex justify-between items-end gap-5  h-0 ">
          <div className="" style={{ flexBasis: "25%" }}>
            <div className="bg-white p-10"></div>
          </div>
          <div style={{ flexBasis: "75%" }}>{children}</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LayoutProviders;
