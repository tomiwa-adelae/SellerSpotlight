import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
// import { toast } from "@/components/hooks/use-toast";
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
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/context/AuthProvider";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import { BASE_URL } from "@/constants";
import { Eye, EyeOff } from "lucide-react";
const FormSchema = z.object({
	fullName: z.string().min(2, {
		message: "Full name must be at least 2 characters.",
	}),
	email: z.string().min(2, {
		message: "Email must be at least 2 characters.",
	}),
	password: z.string().min(2, {
		message: "Password must be at least 2 characters.",
	}),
});

const SignUp = () => {
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
			fullName: "",
			email: "",
			password: "",
		},
	});
	async function onSubmit(data: z.infer<typeof FormSchema>) {
		try {
			const res = await axios.post(
				`${BASE_URL}/api/users`,
				{
					...data,
				},
				{ withCredentials: true }
			);
			toast({
				title: `Account successfully created!`,
				variant: "success",
			});
			login(res.data);
			navigate("/dashboard");
		} catch (error: any) {
			toast({
				title: error?.response?.data?.message,
				variant: "destructive",
			});
		}
	}

	return (
		<div className="flex items-center justify-center min-h-screen">
			<div className="flex-1 flex items-start justify-center flex-col container h-screen py-8 gap-8">
				<Link to="/">
					<h3
						style={{ fontFamily: "Irish Grover" }}
						className="text-purple-400 text-2xl font-bold"
					>
						SellerSpotlight
					</h3>
				</Link>
				<div className="flex-1 w-full flex items-center justify-center">
					<div className="w-full">
						<h1 className="font-semibold text-3xl">Hi there 👋</h1>
						<p className="text-sm mt-3">
							Get started with SellerSpotlight
						</p>
						<div className="my-6">
							<Form {...form}>
								<form
									onSubmit={form.handleSubmit(onSubmit)}
									className="space-y-4"
								>
									<FormField
										control={form.control}
										name="fullName"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Full name</FormLabel>
												<FormControl>
													<Input
														placeholder="John Doe"
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
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
											? "Signing up..."
											: "Sign up"}
									</Button>
								</form>
							</Form>
							<small className="mt-4 block">
								Already have an account?{" "}
								<Link to="/sign-in" className="font-semibold">
									Login now
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
			<div className="flex-1">
				<img
					src={"/assets/images/auth-img.jpg"}
					className="h-screen object-cover"
				/>
			</div>
		</div>
	);
};

export default SignUp;
