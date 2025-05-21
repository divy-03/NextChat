import { StreamChat } from "stream-chat";

const api_key = "85entmvkuq9u";
const api_secret =
  "hcde5d9wzcuggnsbxvuagvcvc885fvedtjganexj3sygb3yb3g3frqzz9jz84cfr";
// const user_id = "user_2wmJfwQRoSDLFf7G3xYo7Oai4zQ";

export async function POST(request) {
  const serverClient = StreamChat.getInstance(api_key, api_secret);
  const user = await request.json();
  // const { user_id } = user.id;
  // const token = serverClient.createToken(user_id);
  console.log(user.data.id);
  return new Response(JSON.stringify({ id: user.id }), {
    headers: { "Content-Type": "application/json" },
  });
}
