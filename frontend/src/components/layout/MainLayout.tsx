import React, { useEffect } from "react";
import SideBar from "../SideBar";
import TopNavBar from "../TopNavBar";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthProvider";
import { useToast } from "@/hooks/use-toast";
import Footer from "../shared/Footer";

// Importing all created components

// Pass the child props
export default function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const { toast } = useToast();
	const navigate = useNavigate();

	const { user } = useAuth();

	useEffect(() => {
		if (!user) {
			toast({
				title: "Please, sign into your account!",
				variant: "destructive",
			});
			navigate("/sign-in");
		}
	}, [user]);

	return (
		<div>
			<SideBar />
			<div className="flex-1 flex flex-col md:ml-64">
				<TopNavBar />
				<div className="container py-4 mt-14 md:mt-0">
					{children}
					<Footer />
				</div>
			</div>
		</div>
	);
}
