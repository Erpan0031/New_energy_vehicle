import axios from "@/utils/request";

export const getUserInfor = async () => {
  return await axios.get("/api/auth/getuserinfo");
};
