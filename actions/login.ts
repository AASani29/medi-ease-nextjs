"use server";

import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { LoginSchema } from "@/schemas";
import * as z from "zod";

export const login = async (values: z.infer<typeof LoginSchema>) => {
	const validatedFields = LoginSchema.safeParse(values);

	if (!validatedFields.success) {
		return { Error: "Invalid fields" };
	}

	const { email, password } = validatedFields.data;

	const user = await signIn("credentials", {
		email,
		password,
		redirect: true,
		redirectTo: DEFAULT_LOGIN_REDIRECT,
	});

	if (!user) {
		return { Error: "Invalid credentials" };
	}

	return { Success: "Logged in" };
};
