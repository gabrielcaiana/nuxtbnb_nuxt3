import { AlgoliaRequest } from "../../algolia/service";

export default defineEventHandler(async (event) => {
  const { data }: any = await $fetch("/api/homes");
  const algolia = new AlgoliaRequest();
  const result = await algolia.create(data);

  return { result };
});
