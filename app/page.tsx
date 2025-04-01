import Sidebar from "@/components/Sidebar";
import WhiteListed from "@/components/WhiteListed";

export default function Home() {
  return (
    <div className="flex w-full">
      <Sidebar />
      <WhiteListed />
    </div>
  );
}
