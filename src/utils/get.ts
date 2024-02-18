import req from "./index";
export const HTTP_GET = (query: any, url: any) => req("get", url, query);
export const HTTP_DEL = (query: any, url: any) => req("delete", url, query);
