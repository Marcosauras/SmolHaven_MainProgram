import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { SignupValidation } from "@/lib/validation";
import { createUserAccount } from "@/lib/appwrite/api";
import { useCreateUserAccount } from "@/lib/react-query/queriesAndMutations";

const SignupForm = () => {

  const { mutateAsync: createUserAccount, isLoading} =useCreateUserAccount();

  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: { username: "", email: "", password: "" },
  });

  async function onSubmit(values: z.infer<typeof SignupValidation>) {
    // Creates a new user account
    const newUser = await createUserAccount(values);

    if(!newUser) {
      console.error("Failed to create user account");
      return;
    }

    // const session = await signInAccount();
  }

  return (
    <Form {...form}>
      {/* page wrapper */}
      <div className="min-h-screen flex items-center justify-center bg-zomp-900 py-6 px-4">
        {/* card */}
        <div className="w-full max-w-md rounded-lg bg-zomp-800 shadow-xl p-8">
          <h2 className="mb-6 text-center text-2xl font-semibold text-zomp-100">
            Create a new account
          </h2>

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Username */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-zomp-200">Username</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Username"
                      className="bg-zomp-700 text-zomp-100 placeholder-zomp-400 focus-visible:ring-zomp-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-zomp-200">Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      {...field}
                      placeholder="email@example.com"
                      className="bg-zomp-700 text-zomp-100 placeholder-zomp-400 focus-visible:ring-zomp-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-zomp-200">Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      {...field}
                      placeholder="••••••••"
                      className="bg-zomp-700 text-zomp-100 placeholder-zomp-400 focus-visible:ring-zomp-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit */}
            <Button
              type="submit"
              className="w-full bg-persian_green-600 hover:bg-persian_green-700 text-white focus-visible:ring-persian_green-400"
            >
              {isLoading ? "Loading…" : "Sign up"}
            </Button>
          </form>

          {/* Footer link */}
          <p className="mt-6 text-center text-sm text-zomp-300">
            Already have an account?{" "}
            <Link
              to="/sign-in"
              className="font-medium text-persian_green-400 hover:text-persian_green-300 underline"
            >
              Log in here
            </Link>
          </p>
        </div>
      </div>
    </Form>
  );
};

export default SignupForm;
