"use client";
import { useState, useEffect } from "react";
const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
import {
  Chat,
  Channel,
  Window,
  ChannelHeader,
  MessageList,
  MessageInput,
  Thread,
  useCreateChatClient,
} from "stream-chat-react";
import "stream-chat-react/dist/css/v2/index.css";

const ChatForrum = ({ clerkUser, slug }) => {
  const userId = clerkUser.id;
  const userName = clerkUser.name;
  const token = clerkUser.token;
  const user = {
    id: userId,
    name: userName,
    image: `https://getstream.io/random_png/?name=${userName}`,
  };
  const [channel, setChannel] = useState();

  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: token,
    userData: { id: userId },
  });

  useEffect(() => {
    if (!client) return;

    const channel = client.channel("messaging", slug, {
      name: slug.charAt(0).toUpperCase() + slug.slice(1) + " Forum Discussion",
      members: [userId],
      image: `https://getstream.io/random_png/?name=${slug}`,
    });
    setChannel(channel);
    // channel.addMembers([userId]);
  }, [client, slug]);

  if (!client) return <div>Setting up client & connection...</div>;

  return (
    <Chat client={client}>
      <Channel channel={channel}>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
};

export default ChatForrum;
