"use client";

import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
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
const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidXNlcl8yd21KZndRUm9TRExGZjdHM3hZbzdPYWk0elEifQ.S-QrkSspRWxP_sNkYkIryDaLOunvsj9ho2ulMIKDR74";
// const filters = { members: { $in: [userId] }, type: "messaging" };
// const options = { presence: true, state: true };
// const sort = { last_message_at: -1 };

export default function ForumPage({ slug }) {
  const clerkUser = useUser();
  const userId = clerkUser.user?.id;
  const userName = clerkUser.user?.firstName;

  const user = {
    id: userId,
    name: userName,
    image: `https://getstream.io/random_png/?name=${userName}`,
  };

  //   const { slug } = await params;
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
  }, [client, slug]);

  if (!client) return <div>Setting up client & connection...</div>;

  return (
    <Chat client={client}>
      {/* <ChannelList sort={sort} filters={filters} options={options} /> */}
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
}
