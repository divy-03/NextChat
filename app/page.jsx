import Image from "next/image"; // Import Image from Next.js
import { MessageSquare, Users, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Connect with friends in real-time
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            A simple, secure, and fast way to chat with your friends and family.
            No ads, no tracking, just chatting.
          </p>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
            <Button className="bg-purple-600 hover:bg-purple-700 text-lg py-6 px-8">
              Get Started
            </Button>
            <Button variant="outline" className="text-lg py-6 px-8">
              Learn More
            </Button>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-8 right-4 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 -left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            <div className="relative">
              <Image
                src="https://i.ibb.co/yBWzdJmw/chat.png"
                alt="Chat app interface preview"
                width={600} // Adjust width as needed
                height={600} // Adjust height as needed
                // className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section id="features" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Features that make chatting better
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <FeatureCard
              icon={<MessageSquare className="h-10 w-10 text-purple-600" />}
              title="Real-time Messaging"
              description="Send and receive messages instantly with our lightning-fast messaging system."
            />
            <FeatureCard
              icon={<Users className="h-10 w-10 text-purple-600" />}
              title="Group Chats"
              description="Create groups with friends, family, or colleagues for team discussions."
            />
            <FeatureCard
              icon={<Shield className="h-10 w-10 text-purple-600" />}
              title="End-to-End Encryption"
              description="Your conversations are secure with our end-to-end encryption technology."
            />
            <FeatureCard
              icon={<Zap className="h-10 w-10 text-purple-600" />}
              title="Fast & Reliable"
              description="Built on modern technology to ensure your messages are delivered quickly."
            />
            <FeatureCard
              icon={<MessageSquare className="h-10 w-10 text-purple-600" />}
              title="Media Sharing"
              description="Easily share photos, videos, and documents with your contacts."
            />
            <FeatureCard
              icon={<Users className="h-10 w-10 text-purple-600" />}
              title="Cross-Platform"
              description="Use ChatApp on any device - mobile, tablet, or desktop."
            />
          </div>
        </div>
      </section>
      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            How ChatApp Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StepCard
              number="1"
              title="Create an account"
              description="Sign up with your email or phone number in just a few seconds."
            />
            <StepCard
              number="2"
              title="Add your contacts"
              description="Find your friends or invite them to join ChatApp."
            />
            <StepCard
              number="3"
              title="Start chatting"
              description="Send messages, create groups, and stay connected."
            />
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="bg-purple-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to start chatting?
          </h2>
          <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
            Join thousands of users who are already enjoying our simple, secure,
            and fast chat experience.
          </p>
          <Button className="bg-black text-purple-600 hover:bg-gray-100 text-lg py-6 px-10">
            Get Started for Free
          </Button>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gray-50 p-8 rounded-lg transition-all duration-300 hover:shadow-lg">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function StepCard({ number, title, description }) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
