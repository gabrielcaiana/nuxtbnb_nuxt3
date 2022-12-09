import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const client = serverSupabaseClient(event);
  const query = getQuery(event);

  const { data } = await client
    .from("reviews")
    .select()
    .eq("homeId", query.homeId);

  return { data };
});
