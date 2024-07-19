import { Navbar } from "@/components/Navbar";

export default function PublicLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
      <Navbar/>
      <main className="flex flex-col items-center p-24">
        <h1>Public Layout</h1>
        {children}
      </main>
    </>
  );
}