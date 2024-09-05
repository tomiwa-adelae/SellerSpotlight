"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const zod_1 = require("@hookform/resolvers/zod");
const react_hook_form_1 = require("react-hook-form");
const zod_2 = require("zod");
const button_1 = require("@/components/ui/button");
const form_1 = require("@/components/ui/form");
const input_1 = require("@/components/ui/input");
const axios_1 = __importDefault(require("axios"));
const constants_1 = require("@/constants");
const lucide_react_1 = require("lucide-react");
const use_toast_1 = require("@/hooks/use-toast");
const AuthProvider_1 = require("@/context/AuthProvider");
const Logo_1 = __importDefault(require("@/components/shared/Logo"));
const Footer_1 = __importDefault(require("@/components/shared/Footer"));
const FormSchema = zod_2.z.object({
    email: zod_2.z.string().min(2, {
        message: "Email must be at least 2 characters.",
    }),
    password: zod_2.z.string().min(2, {
        message: "Password must be at least 2 characters.",
    }),
});
const SignIn = () => {
    const { toast } = (0, use_toast_1.useToast)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const { user, login } = (0, AuthProvider_1.useAuth)();
    (0, react_1.useEffect)(() => {
        if (user) {
            toast({
                title: `You are already signed in as ${user.fullName}`,
            });
            setTimeout(() => {
                navigate("/dashboard");
            }, 3000);
        }
    }, [user]);
    const [showPassword, setShowPassword] = (0, react_1.useState)(false);
    const form = (0, react_hook_form_1.useForm)({
        resolver: (0, zod_1.zodResolver)(FormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });
    async function onSubmit(data) {
        try {
            const res = await axios_1.default.post(`${constants_1.BASE_URL}/api/users/auth`, {
                ...data,
            }, { withCredentials: true });
            toast({
                title: `Welcome back!`,
                variant: "success",
            });
            login(res.data);
            navigate("/dashboard");
        }
        catch (error) {
            toast({
                title: error?.response?.data?.message ||
                    "Something went wrong! Please try again.",
                variant: "destructive",
            });
        }
    }
    return (<div className="flex items-center justify-center min-h-screen h-screen relative p-6 md:p-0">
			<div className="flex-1 flex items-start justify-center flex-col container h-full py-8 z-50 bg-white dark:bg-dark rounded-lg">
				<Logo_1.default />
				<div className="flex-1 w-full flex items-center justify-center">
					<div className="w-full">
						<h1 className="font-semibold text-3xl">Hi there 👋</h1>
						<p className="text-sm mt-3">Login to your account</p>
						<div className="my-6">
							<form_1.Form {...form}>
								<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
									<form_1.FormField control={form.control} name="email" render={({ field }) => (<form_1.FormItem>
												<form_1.FormLabel>
													Email address
												</form_1.FormLabel>
												<form_1.FormControl>
													<input_1.Input placeholder="johndoe@gmail.com" {...field}/>
												</form_1.FormControl>
												<form_1.FormMessage />
											</form_1.FormItem>)}/>
									<form_1.FormField control={form.control} name="password" render={({ field }) => (<form_1.FormItem>
												<form_1.FormLabel>Password</form_1.FormLabel>
												<form_1.FormControl className="relative">
													<div>
														<input_1.Input type={showPassword
                ? "text"
                : "password"} placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" {...field}/>
														{showPassword ? (<lucide_react_1.EyeOff onClick={() => setShowPassword(!showPassword)} className="absolute top-1/2 right-3 -translate-y-1/2 w-4 h-4 cursor-pointer"/>) : (<lucide_react_1.Eye onClick={() => setShowPassword(!showPassword)} className="absolute top-1/2 right-3 -translate-y-1/2 w-4 h-4 cursor-pointer"/>)}
													</div>
												</form_1.FormControl>
												<form_1.FormMessage />
											</form_1.FormItem>)}/>
									<button_1.Button disabled={form.formState.isSubmitting} className="w-full" type="submit">
										{form.formState.isSubmitting
            ? "Signing in..."
            : "Sign in"}
									</button_1.Button>
								</form>
							</form_1.Form>
							<small className="mt-4 block">
								New user?{" "}
								<react_router_dom_1.Link to="/sign-up" className="font-semibold">
									Create an account
								</react_router_dom_1.Link>
							</small>
						</div>
					</div>
				</div>
				<Footer_1.default />
			</div>
			<div className="flex-1 fixed top-0 left-0 w-screen md:static">
				<img src={"/assets/images/auth-img.jpg"} className="h-screen object-cover w-screen"/>
			</div>
		</div>);
};
exports.default = SignIn;
