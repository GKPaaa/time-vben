import { defineStore } from "pinia";
// 第一个参数是应用程序中 store 的唯一 id
export const useUsersStore = defineStore("users", {
  state: () => ({
    username: localStorage.getItem("username") || "",
    TenantId: localStorage.getItem("Tenant-id") || "",
    Authorization: localStorage.getItem("Authorization") || "",
    refreshToken: localStorage.getItem("refreshAuthorization") || "",
  }),
  actions: {
    setuserName(name: string) {
      this.username = name;
      localStorage.setItem("username", name);
    },
    setTenantId(TenantId: string) {
      this.TenantId = TenantId;
      localStorage.setItem("Tenant-id", TenantId);
    },
    setAuthorization(Authorization: string, refreshToken: string) {
      this.Authorization = Authorization;
      localStorage.setItem("Authorization", Authorization);
      localStorage.setItem("refreshAuthorization", refreshToken);
    },
  },
});
