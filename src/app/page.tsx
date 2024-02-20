"use client";
import {
  PartnerProvider,
} from "@/components/PartnerContext";
import Partners from "@/components/Partners";

export default function Home() {
  

  return (
    <PartnerProvider>
      <main className="container mx-auto min-h-screen md:p-8 p-4 ">
        <Partners/>
      </main>
    </PartnerProvider>
  );
}
