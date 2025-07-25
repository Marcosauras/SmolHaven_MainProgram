import type { NewUser } from "@/types";
import {
  useQuery,
  useMutation,
  useQueryClient,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { createUserAccount } from "../appwrite/api";

export const useCreateUserAccount = () => {
  return useMutation({
    mutationFn: (user: NewUser) => createUserAccount(user),
  });
};

export const useSignInAccount = () => {
  return useMutation({
    mutationFn: (user: 
        { email: string;
         password: string 
        }) =>
      signInAccount(user),
  });
};

//    export const useSignOutAccount = () => {
//    return useMutation({
//        mutationFn: signOutAccount,
//   });
//    };
