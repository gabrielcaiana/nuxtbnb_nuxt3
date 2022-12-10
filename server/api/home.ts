import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const client = serverSupabaseClient(event);
  const query = getQuery(event);

  const { data: home } = (await client
    .from("homes")
    .select()
    .eq("id", query.id)) as any;

  if (!home?.length) {
    throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
  }

  const { data: user } = (await client
    .from("users")
    .select()
    .eq("id", home[0].userId)) as any;

  return {
    data: { ...home[0], user: { ...user[0] } },
  };
});
