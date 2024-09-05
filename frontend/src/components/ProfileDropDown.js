"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileDropDown = ProfileDropDown;
const lucide_react_1 = require("lucide-react");
const dropdown_menu_1 = require("@/components/ui/dropdown-menu");
const AuthProvider_1 = require("@/context/AuthProvider");
const react_router_dom_1 = require("react-router-dom");
const use_toast_1 = require("@/hooks/use-toast");
const constants_1 = require("@/constants");
function ProfileDropDown() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const { logout, user } = (0, AuthProvider_1.useAuth)();
    const { toast } = (0, use_toast_1.useToast)();
    const handleLogout = async () => {
        logout();
        toast({
            title: "Logout successful",
            variant: "success",
        });
        navigate("/sign-in");
    };
    console.log(user);
    return (<dropdown_menu_1.DropdownMenu>
			<dropdown_menu_1.DropdownMenuTrigger asChild>
				<div className="flex cursor-pointer items-center justify-start gap-2">
					<img src={user?.picture} alt={user?.fullName} className="rounded-full w-10 h-10 object-cover"/>
					<div className="flex items-start flex-col justify-center space-y-0">
						<h3 className="text-sm font-bold">{user?.fullName}</h3>
						<small className="text-xs">{user?.email}</small>
					</div>
				</div>
			</dropdown_menu_1.DropdownMenuTrigger>
			<dropdown_menu_1.DropdownMenuContent className="w-56">
				<dropdown_menu_1.DropdownMenuLabel>My Account</dropdown_menu_1.DropdownMenuLabel>
				<dropdown_menu_1.DropdownMenuSeparator />
				<dropdown_menu_1.DropdownMenuGroup>
					<dropdown_menu_1.DropdownMenuItem>
						<lucide_react_1.User className="mr-2 h-4 w-4"/>
						<span>Profile</span>
						<dropdown_menu_1.DropdownMenuShortcut>⇧⌘P</dropdown_menu_1.DropdownMenuShortcut>
					</dropdown_menu_1.DropdownMenuItem>
					<dropdown_menu_1.DropdownMenuItem>
						<lucide_react_1.CreditCard className="mr-2 h-4 w-4"/>
						<span>Billing</span>
						<dropdown_menu_1.DropdownMenuShortcut>⌘B</dropdown_menu_1.DropdownMenuShortcut>
					</dropdown_menu_1.DropdownMenuItem>
					<dropdown_menu_1.DropdownMenuItem>
						<lucide_react_1.Settings className="mr-2 h-4 w-4"/>
						<span>Settings</span>
						<dropdown_menu_1.DropdownMenuShortcut>⌘S</dropdown_menu_1.DropdownMenuShortcut>
					</dropdown_menu_1.DropdownMenuItem>
					<dropdown_menu_1.DropdownMenuItem>
						<lucide_react_1.Keyboard className="mr-2 h-4 w-4"/>
						<span>Keyboard shortcuts</span>
						<dropdown_menu_1.DropdownMenuShortcut>⌘K</dropdown_menu_1.DropdownMenuShortcut>
					</dropdown_menu_1.DropdownMenuItem>
				</dropdown_menu_1.DropdownMenuGroup>
				<dropdown_menu_1.DropdownMenuSeparator />
				<dropdown_menu_1.DropdownMenuGroup>
					<dropdown_menu_1.DropdownMenuItem>
						<lucide_react_1.Users className="mr-2 h-4 w-4"/>
						<span>Team</span>
					</dropdown_menu_1.DropdownMenuItem>
					<dropdown_menu_1.DropdownMenuSub>
						<dropdown_menu_1.DropdownMenuSubTrigger>
							<lucide_react_1.UserPlus className="mr-2 h-4 w-4"/>
							<span>Invite users</span>
						</dropdown_menu_1.DropdownMenuSubTrigger>
						<dropdown_menu_1.DropdownMenuPortal>
							<dropdown_menu_1.DropdownMenuSubContent>
								<dropdown_menu_1.DropdownMenuItem>
									<lucide_react_1.Mail className="mr-2 h-4 w-4"/>
									<span>Email</span>
								</dropdown_menu_1.DropdownMenuItem>
								<dropdown_menu_1.DropdownMenuItem>
									<lucide_react_1.MessageSquare className="mr-2 h-4 w-4"/>
									<span>Message</span>
								</dropdown_menu_1.DropdownMenuItem>
								<dropdown_menu_1.DropdownMenuSeparator />
								<dropdown_menu_1.DropdownMenuItem>
									<lucide_react_1.PlusCircle className="mr-2 h-4 w-4"/>
									<span>More...</span>
								</dropdown_menu_1.DropdownMenuItem>
							</dropdown_menu_1.DropdownMenuSubContent>
						</dropdown_menu_1.DropdownMenuPortal>
					</dropdown_menu_1.DropdownMenuSub>
					<dropdown_menu_1.DropdownMenuItem>
						<lucide_react_1.Plus className="mr-2 h-4 w-4"/>
						<span>New Team</span>
						<dropdown_menu_1.DropdownMenuShortcut>⌘+T</dropdown_menu_1.DropdownMenuShortcut>
					</dropdown_menu_1.DropdownMenuItem>
				</dropdown_menu_1.DropdownMenuGroup>
				<dropdown_menu_1.DropdownMenuSeparator />
				<a href={constants_1.githubRepo} target="_blank">
					<dropdown_menu_1.DropdownMenuItem>
						<lucide_react_1.Github className="mr-2 h-4 w-4"/>
						<span>GitHub</span>
					</dropdown_menu_1.DropdownMenuItem>
				</a>
				<dropdown_menu_1.DropdownMenuItem>
					<lucide_react_1.LifeBuoy className="mr-2 h-4 w-4"/>
					<span>Support</span>
				</dropdown_menu_1.DropdownMenuItem>
				<dropdown_menu_1.DropdownMenuItem disabled>
					<lucide_react_1.Cloud className="mr-2 h-4 w-4"/>
					<span>API</span>
				</dropdown_menu_1.DropdownMenuItem>
				<dropdown_menu_1.DropdownMenuSeparator />
				<dropdown_menu_1.DropdownMenuItem onClick={() => handleLogout()}>
					<lucide_react_1.LogOut className="mr-2 h-4 w-4"/>
					<span>Log out</span>
					<dropdown_menu_1.DropdownMenuShortcut>⇧⌘Q</dropdown_menu_1.DropdownMenuShortcut>
				</dropdown_menu_1.DropdownMenuItem>
			</dropdown_menu_1.DropdownMenuContent>
		</dropdown_menu_1.DropdownMenu>);
}
