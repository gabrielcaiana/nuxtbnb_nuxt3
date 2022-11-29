export default () => {
  const { algoliaAppId, algoliaApiKey } = useRuntimeConfig();

  return {
    getHomes: async (homeId) => {
      const { data: home, pending } = await useLazyAsyncData(
        "getHomes",
        async () => {
          const data = await $fetch(
            `https://${algoliaAppId}-dsn.algolia.net/1/indexes/homes/${homeId}`,
            {
              headers: {
                "X-Algolia-API-Key": algoliaApiKey,
                "X-Algolia-Application-Id": algoliaAppId,
              },
            }
          );

          return data;
        }
      );

      return { home, pending };
    },
  };
};
