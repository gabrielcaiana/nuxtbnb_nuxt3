export default () => {
  const { algoliaAppId, algoliaApiKey } = useRuntimeConfig();

  const headers = {
    "X-Algolia-API-Key": algoliaApiKey,
    "X-Algolia-Application-Id": algoliaAppId,
  };

  return {
    getHomes: async (homeId) => {
      const {
        data: home,
        pending,
        error,
      } = await useLazyAsyncData("homes", async () => {
        const data = await $fetch(
          `https://${algoliaAppId}-dsn.algolia.net/1/indexes/homes/${homeId}`,
          {
            headers,
          }
        );

        return data;
      });

      return { home, pending, error };
    },
  };
};
