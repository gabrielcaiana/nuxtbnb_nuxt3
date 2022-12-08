import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const client = serverSupabaseClient(event);
  const url = event.node.req.url;
  const id = url?.split("?id=")[1];

  const { data } = await client.from("homes").select().eq("id", id);
  return { data };
});
