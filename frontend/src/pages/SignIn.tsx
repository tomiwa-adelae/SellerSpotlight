import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { BASE_URL } from "@/constants";
import { Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { redirect } from "react-router-dom";
import { useAuth } from "@/context/AuthProvider";
import Logo from "@/components/shared/Logo";

const FormSchema = z.object({
	email: z.string().min(2, {
		message: "Email must be at least 2 characters.",
	}),
	password: z.string().min(2, {
		message: "Password must be at least 2 characters.",
	}),
});

const SignIn = () => {
	const { toast } = useToast();
	const navigate = useNavigate();

	const { user, login } = useAuth();

	useEffect(() => {
		if (user) {
			toast({
				title: `You are already signed in as ${user.fullName}`,
			});
			setTimeout(() => {
				navigate("/dashboard");
			}, 3000);
		}
	}, [user]);

	const [showPassword, setShowPassword] = useState(false);

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	async function onSubmit(data: z.infer<typeof FormSchema>) {
		try {
			const res = await axios.post(
				`${BASE_URL}/api/users/auth`,
				{
					...data,
				},
				{ withCredentials: true }
			);
			toast({
				title: `Welcome back!`,
				variant: "success",
			});
			login(res.data);
			navigate("/dashboard");
		} catch (error: any) {
			toast({
				title:
					error?.response?.data?.message ||
					"Something went wrong! Please try again.",
				variant: "destructive",
			});
		}
	}
	return (
		<div className="flex items-center justify-center min-h-screen h-screen relative p-6 md:p-0">
			<div className="flex-1 flex items-start justify-center flex-col container h-full py-8 z-50 bg-white dark:bg-dark rounded-lg">
				<Logo />
				<div className="flex-1 w-full flex items-center justify-center">
					<div className="w-full">
						<h1 className="font-semibold text-3xl">Hi there 👋</h1>
						<p className="text-sm mt-3">Login to your account</p>
						<div className="my-6">
							<Form {...form}>
								<form
									onSubmit={form.handleSubmit(onSubmit)}
									className="space-y-4"
								>
									<FormField
										control={form.control}
										name="email"
										render={({ field }) => (
											<FormItem>
												<FormLabel>
													Email address
												</FormLabel>
												<FormControl>
													<Input
														placeholder="johndoe@gmail.com"
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name="password"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Password</FormLabel>
												<FormControl className="relative">
													<div>
														<Input
															type={
																showPassword
																	? "text"
																	: "password"
															}
															placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
															{...field}
														/>
														{showPassword ? (
															<EyeOff
																onClick={() =>
																	setShowPassword(
																		!showPassword
																	)
																}
																className="absolute top-1/2 right-3 -translate-y-1/2 w-4 h-4 cursor-pointer"
															/>
														) : (
															<Eye
																onClick={() =>
																	setShowPassword(
																		!showPassword
																	)
																}
																className="absolute top-1/2 right-3 -translate-y-1/2 w-4 h-4 cursor-pointer"
															/>
														)}
													</div>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<Button
										disabled={form.formState.isSubmitting}
										className="w-full"
										type="submit"
									>
										{form.formState.isSubmitting
											? "Signing in..."
											: "Sign in"}
									</Button>
								</form>
							</Form>
							<small className="mt-4 block">
								New user?{" "}
								<Link to="/sign-up" className="font-semibold">
									Create an account
								</Link>
							</small>
						</div>
					</div>
				</div>
				<footer>
					<small className="font-semibold">
						&copy; SellerSpotlight 2024. All Rights Reserved.
					</small>
				</footer>
			</div>
			<div className="flex-1 fixed top-0 left-0 w-screen md:static">
				<img
					src={"/assets/images/auth-img.jpg"}
					className="h-screen object-cover w-screen"
				/>
			</div>
		</div>
	);
};

export default SignIn;
