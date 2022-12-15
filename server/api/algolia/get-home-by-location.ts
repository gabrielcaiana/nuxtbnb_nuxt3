import { AlgoliaRequest } from "../../algolia/service";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  const algolia = new AlgoliaRequest();
  const data = await algolia.getByLocation(query.lat, query.lng);

  return { data };
});
