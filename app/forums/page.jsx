import Image from "next/image";
import Link from "next/link";

const topics = [
  {
    text: "Python",
    img: "/images/python.png",
    link: "/forum/py",
    description: "Discuss all things Python, from beginner to advanced topics.",
  },
  {
    text: "JavaScript",
    img: "/images/javascript.png",
    link: "/forum/js",
    description: "Share your JavaScript knowledge and learn from others.",
  },
  {
    text: "React",
    img: "/images/react.png",
    link: "/forum/reactjs",
    description:
      "Join discussions about React, its ecosystem, and best practices.",
  },
  {
    text: "Node.js",
    img: "/images/nodejs.png",
    link: "/forum/node",
    description: "Talk about Node.js, Express, and server-side JavaScript.",
  },
];

export default function Forums() {
  return (
    <div className="container mx-auto my-20">
      <h1 className="text-3xl font-bold mb-8">Discussion Forums</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="p-6 border rounded-lg shadow hover:shadow-lg transition"
          >
            {/* <Image
              src={topic.img}
              alt={topic.text}
              width={64}
              height={64}
              className="w-16 h-16 mb-4 mx-auto"
            /> */}
            <h2 className="text-xl font-semibold mb-2">{topic.text}</h2>
            <p className="text-gray-600 mb-4">{topic.description}</p>
            <Link
              href={topic.link}
              className="text-blue-500 hover:underline font-medium"
            >
              Visit {topic.text} Forum
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
