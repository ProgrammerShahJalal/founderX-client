import { Navbar } from "@/src/components/UI/navbar";

export default function GroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="relative flex flex-col h-screen">
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  );
}
