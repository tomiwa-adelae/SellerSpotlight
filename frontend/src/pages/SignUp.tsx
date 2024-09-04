import React from "react";
import { Link } from "react-router-dom";
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
const FormSchema = z.object({
	fullname: z.string().min(2, {
		message: "Fullname must be at least 2 characters.",
	}),
	email: z.string().min(2, {
		message: "Email must be at least 2 characters.",
	}),
	password: z.string().min(2, {
		message: "Fullname must be at least 2 characters.",
	}),
});

const SignUp = () => {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			fullname: "",
			email: "",
			password: "",
		},
	});
	function onSubmit(data: z.infer<typeof FormSchema>) {}
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
										name="fullname"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Fullname</FormLabel>
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
												<FormControl>
													<Input
														placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<Button className="w-full" type="submit">
										Get started
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
