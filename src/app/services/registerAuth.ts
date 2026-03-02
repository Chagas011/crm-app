import { httpClient } from "./httpClient";

interface RegisterParams {
  account: {
    email: string;
    password: string;
  };
}

interface AccessToken {
  access_token: string;
}

export const register = async (dataParams: RegisterParams) => {
  const { data } = await httpClient.post<AccessToken>(
    "/auth/sign-up",
    dataParams,
  );

  return { data };
};
