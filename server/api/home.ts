import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const client = serverSupabaseClient(event);
  const query = getQuery(event);

  const { data } = await client.from("homes").select().eq("id", query.id);

  if (!data?.length) {
    throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
  }

  return { data };
});
