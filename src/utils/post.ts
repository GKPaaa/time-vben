import req from "./index";

export const HTTP_POST = (query: any, url: string): Object =>
  req("post", url, query);
