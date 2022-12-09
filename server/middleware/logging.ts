// TODO: config morgan logger
//import morgan from "morgan";

export default defineEventHandler((event) => {
  console.log("New request: " + event.node.req.url);
});
