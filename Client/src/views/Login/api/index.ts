import axiso from "@/utils/request";

export const Login_Post = async (props: any) => {
  return await axiso.post("/api/auth/access", props);
};

export const Create_Post = async (props: any) => {
  return await axiso.post("/api/auth/register", props);
};
