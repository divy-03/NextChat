import { clerkClient } from "@clerk/nextjs/server";
import { StreamChat } from "stream-chat";

const api_key = process.env.API_KEY;
const api_secret = process.env.API_SECRET;

// const user_id = "user_2wmJfwQRoSDLFf7G3xYo7Oai4zQ";

export async function POST(request) {
  const serverClient = StreamChat.getInstance(api_key, api_secret);
  const user = await request.json();
  // const { user_id } = user.id;
  const token = serverClient.createToken(user.data.id);
  // console.log(user.data.id);
  const client = await clerkClient();
  await serverClient.upsertUser({ id: user.data.id });

  await client.users.updateUserMetadata(user.data.id, {
    publicMetadata: {
      token: token,
    },
  });

  const slugs = ["py", "js", "reactjs", "node"];
  for (const slug of slugs) {
    const channel = serverClient.channel("messaging", slug, {
      name: `${slug.charAt(0).toUpperCase() + slug.slice(1)} Forum Discussion`,
      members: [user.data.id],
      image: `https://getstream.io/random_png/?name=${slug}`,
    });
    await channel.create();
    await channel.addMembers([user.data.id]);
  }

  return new Response(JSON.stringify({ id: user.id }), {
    headers: { "Content-Type": "application/json" },
  });
}
