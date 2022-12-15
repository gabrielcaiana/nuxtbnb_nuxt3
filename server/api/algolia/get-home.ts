import { AlgoliaRequest } from "../../algolia/service";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const title = query.title;

  const algolia = new AlgoliaRequest();
  const result = await algolia.get(title);

  return { result };
});
