import { useMutation } from "@tanstack/react-query";
import { SignInSchema } from "../_types/signInSchema";
import { signIn, signOut } from "./sign-in-mutations";
import { useRouter } from "next/navigation";

const useSignIn = () => {
  return useMutation({
    mutationFn: async (data: SignInSchema) => {
      await signIn(data);
    },
  });
};

const useSignOut = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      router.push("/sign-in");
    },
  });
};

export { useSignIn, useSignOut };
