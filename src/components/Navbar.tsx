import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <div className="w-full pt-10 py-4 flex justify-center">
      <nav className="bg-white rounded-md px-6 py-3 w-full max-w-7xl text-center flex justify-between items-center">
        <h1 className="text-6xl font-bold text-primary">PavéPRO</h1>
        <div className="space-x-4">
          <Button variant="link">Home</Button>
          <Button variant="link">Services</Button>
          <Button variant="link">Contact</Button>
        </div>
      </nav>
    </div>
  );
}
