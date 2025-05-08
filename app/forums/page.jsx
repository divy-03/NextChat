const topics = [
  {
    text: "Python",
    img: "/images/python.png",
    link: "/forums/python",
    description: "Discuss all things Python, from beginner to advanced topics.",
  },
  {
    text: "JavaScript",
    img: "/images/javascript.png",
    link: "/forums/javascript",
    description: "Share your JavaScript knowledge and learn from others.",
  },
  {
    text: "React",
    img: "/images/react.png",
    link: "/forums/react",
    description:
      "Join discussions about React, its ecosystem, and best practices.",
  },
  {
    text: "Node.js",
    img: "/images/nodejs.png",
    link: "/forums/nodejs",
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
            <img
              src={topic.img}
              alt={topic.text}
              className="w-16 h-16 mb-4 mx-auto"
            />
            <h2 className="text-xl font-semibold mb-2">{topic.text}</h2>
            <p className="text-gray-600 mb-4">{topic.description}</p>
            <a
              href={topic.link}
              className="text-blue-500 hover:underline font-medium"
            >
              Visit {topic.text} Forum
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
