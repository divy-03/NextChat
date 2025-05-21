import ChatForum from "@/components/ChatForum";

export default async function ForumPage({ params }) {
  const { slug } = await params;

  return <ChatForum slug={slug} />;
}
