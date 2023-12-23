"use client";

import { Icons } from "@/components/icons";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AuthValidator,
  TAuthValidator,
} from "@/lib/validators/credentials-validator";
import { trpc } from "@/trpc/client";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuthValidator>({
    resolver: zodResolver(AuthValidator),
  });

  const onSubmit = ({ email, password }: TAuthValidator) => {
    console.log("Success");


    const {data} = trpc.anyAPIRoute.useQuery();
    console.log(data);

  };

  return (
    <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col items-center space-y-2 text-center">
          <Icons.logo className="h-20 w-20" />
          <h1 className="text-2xl font-bold">Create an account</h1>

          <Link
            className={buttonVariants({
              variant: "link",
              className: "text-muted-foreground",
            })}
            href="/sign-in"
          >
            Already have an account? Sign In.
          </Link>
        </div>

        <div className="grid gap-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-2">
              <div className="grid gap-1 py-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  {...register("email")}
                  name="email"
                  className={cn({
                    "focus-visible:ring-red-50": errors.email,
                  })}
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="grid gap-1 py-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  {...register("password")}
                  name="password"
                  className={cn({
                    "focus-visible:ring-red-50": errors.password,
                  })}
                  placeholder="example@gmail.com"
                />
              </div>
              <Button>Sign Up</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
