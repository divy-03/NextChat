import ChatForum from "@/components/ChatForum";
import ChatForrum from "@/components/ChatForrum";
import { currentUser } from "@clerk/nextjs/server";

export default async function ForumPage({ params }) {
  const user = await currentUser();
  if (!user) {
    return <div>Please log in to access the forum.</div>;
  }
  const { slug } = await params;

  return <ChatForrum slug={slug} clerkUser={{id: user.id, name: user.firstName, token: user.publicMetadata.token}} />;
}
