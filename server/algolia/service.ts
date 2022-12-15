import algoliasearch from "algoliasearch";

const { algoliaAppId, algoliaApiKey } = useRuntimeConfig();

const client = algoliasearch(algoliaAppId, algoliaApiKey);
const index = client.initIndex("homes");

export class AlgoliaRequest {
  async create(data: any) {
    const response = await index
      .saveObjects(data, { autoGenerateObjectIDIfNotExist: true })
      .wait();

    return response;
  }

  async get(text: any) {
    const response = await index.search(text).then(({ hits }) => hits);
    return response;
  }

  async getByLocation(lat: any, lng: any) {
    // TODO: verify aroundRadius
    const response = await index
      .search("", {
        aroundLatLng: `${lat},${lng}`,
        hitsPerPage: 10,
      })
      .then(({ hits }) => hits);

    return response;
  }
}
