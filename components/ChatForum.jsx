"use client";

import { useState, useEffect } from "react";
import {
  Chat,
  Channel,
  ChannelList,
  Window,
  ChannelHeader,
  MessageList,
  MessageInput,
  Thread,
  useCreateChatClient,
} from "stream-chat-react";
import "stream-chat-react/dist/css/v2/index.css";
const apiKey = "85entmvkuq9u";
const userId = "user_2wmJfwQRoSDLFf7G3xYo7Oai4zQ";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidXNlcl8yd21KZndRUm9TRExGZjdHM3hZbzdPYWk0elEifQ.S-QrkSspRWxP_sNkYkIryDaLOunvsj9ho2ulMIKDR74";
const filters = { members: { $in: [userId] }, type: "messaging" };
const options = { presence: true, state: true };
const sort = { last_message_at: -1 };

export default function ForumPage({ slug }) {
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
    });
    setChannel(channel);
  }, [client, slug]);

  if (!client) return <div>Setting up client & connection...</div>

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
