import { Button } from "@/components/ui/button";

export default function Chat() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to ChatApp</h1>
      <p className="text-lg text-gray-700 mb-8">
        Your one-stop solution for all your chat needs.
      </p>
      <div className="flex space-x-4">
        <Button variant="default">Get Started</Button>
        <Button variant="outline">Learn More</Button>
      </div>
    </div>
  );
}
