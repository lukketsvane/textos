x-Squared-clone                         
├─ prisma                               
│  └─ schema.prisma                     
├─ public                               
│  ├─ assets                            
│  │  ├─ previews                       
│  │  │  ├─ preview-bookmarks.webp      
│  │  │  ├─ preview-explore.webp        
│  │  │  ├─ preview-home.webp           
│  │  │  ├─ preview-notifications.webp  
│  │  │  ├─ preview-profile.webp        
│  │  │  └─ preview-search.webp         
│  │  ├─ bookmark-fill-icon.svg         
│  │  ├─ bookmark-icon.svg              
│  │  ├─ bookmarks-icon.svg             
│  │  ├─ comment-icon.svg               
│  │  ├─ comment-notification-icon.svg  
│  │  ├─ create-tweet.svg               
│  │  ├─ explore-fill-icon.svg          
│  │  ├─ explore-icon.svg               
│  │  ├─ heart-fill-icon.svg            
│  │  ├─ home-fill-icon.svg             
│  │  ├─ home-icon.svg                  
│  │  ├─ large-x-logo.svg               
│  │  ├─ like-icon.svg                  
│  │  ├─ logo.svg                 
│  │  ├─ notif-fill-icon.svg            
│  │  ├─ notif-icon.svg                 
│  │  ├─ notifications-icon.svg         
│  │  ├─ profile-fill-icon.svg          
│  │  ├─ profile-icon.svg               
│  │  ├─ reply-notification-icon.svg    
│  │  ├─ search-icon.svg                
│  │  ├─ settings-icon.svg              
│  │  ├─ shared-icon.svg                
│  │  ├─ shine-icon.svg                 
│  │  ├─ small-x-logo.svg               
│  │  ├─ tweet-bookmark-fill-icon.svg   
│  │  └─ user-notification-icon.svg     
│  ├─ next.svg                          
│  └─ vercel.svg                        
├─ src                                  
│  ├─ actions                           
│  │  ├─ notification.action.ts         
│  │  ├─ tweet.action.ts                
│  │  └─ user.action.ts                 
│  ├─ app                               
│  │  ├─ (auth)                         
│  │  │  ├─ onboarding                  
│  │  │  │  └─ page.tsx                 
│  │  │  ├─ sign-in                     
│  │  │  │  └─ [[...sign-in]]           
│  │  │  │     └─ page.tsx              
│  │  │  ├─ sign-up                     
│  │  │  │  └─ [[...sign-up]]           
│  │  │  │     └─ page.tsx              
│  │  │  └─ layout.tsx                  
│  │  ├─ (home)                         
│  │  │  ├─ [username]                  
│  │  │  │  ├─ (profile)                
│  │  │  │  │  ├─ likes                 
│  │  │  │  │  │  └─ page.tsx           
│  │  │  │  │  ├─ with_replies          
│  │  │  │  │  │  └─ page.tsx           
│  │  │  │  │  ├─ layout.tsx            
│  │  │  │  │  ├─ loading.tsx           
│  │  │  │  │  └─ page.tsx              
│  │  │  │  └─ status                   
│  │  │  │     └─ [tweetId]             
│  │  │  │        ├─ layout.tsx         
│  │  │  │        ├─ loading.tsx        
│  │  │  │        └─ page.tsx           
│  │  │  ├─ bookmarks                   
│  │  │  │  ├─ layout.tsx               
│  │  │  │  ├─ loading.tsx              
│  │  │  │  └─ page.tsx                 
│  │  │  ├─ compose                     
│  │  │  │  └─ tweet                    
│  │  │  │     ├─ layout.tsx            
│  │  │  │     ├─ loading.tsx           
│  │  │  │     └─ page.tsx              
│  │  │  ├─ explore                     
│  │  │  │  ├─ layout.tsx               
│  │  │  │  ├─ loading.tsx              
│  │  │  │  └─ page.tsx                 
│  │  │  ├─ home                        
│  │  │  │  ├─ following                
│  │  │  │  │  └─ page.tsx              
│  │  │  │  ├─ layout.tsx               
│  │  │  │  ├─ loading.tsx              
│  │  │  │  └─ page.tsx                 
│  │  │  ├─ notifications               
│  │  │  │  ├─ layout.tsx               
│  │  │  │  ├─ loading.tsx              
│  │  │  │  └─ page.tsx                 
│  │  │  ├─ search                      
│  │  │  │  ├─ layout.tsx               
│  │  │  │  ├─ loading.tsx              
│  │  │  │  └─ page.tsx                 
│  │  │  ├─ settings                    
│  │  │  │  └─ profile                  
│  │  │  │     └─ page.tsx              
│  │  │  └─ layout.tsx                  
│  │  ├─ favicon.ico                    
│  │  ├─ globals.css                    
│  │  ├─ layout.tsx                     
│  │  └─ page.tsx                       
│  ├─ components                        
│  │  ├─ bookmarks                      
│  │  │  └─ Topbar.tsx                  
│  │  ├─ cards                          
│  │  │  ├─ notifications               
│  │  │  │  ├─ Menu.tsx                 
│  │  │  │  ├─ PostNotification.tsx     
│  │  │  │  ├─ Unread.tsx               
│  │  │  │  └─ UserNotification.tsx     
│  │  │  ├─ tweets                      
│  │  │  │  ├─ Bookmark.tsx             
│  │  │  │  ├─ Comment.tsx              
│  │  │  │  ├─ Like.tsx                 
│  │  │  │  ├─ Menu.tsx                 
│  │  │  │  ├─ Share.tsx                
│  │  │  │  ├─ Tweets.tsx               
│  │  │  │  └─ index.ts                 
│  │  │  ├─ Users.tsx                   
│  │  │  └─ UsersTwo.tsx                
│  │  ├─ compose                        
│  │  │  └─ tweet                       
│  │  │     └─ ShowCreateTweetForm.tsx  
│  │  ├─ explore                        
│  │  │  └─ Topbar.tsx                  
│  │  ├─ forms                          
│  │  │  ├─ createtweetform             
│  │  │  │  ├─ CreateTweetForm.tsx      
│  │  │  │  ├─ PreviewImage.tsx         
│  │  │  │  ├─ Reply.tsx                
│  │  │  │  ├─ SubmitButton.tsx         
│  │  │  │  └─ Topbar.tsx               
│  │  │  ├─ EditProfileForm.tsx         
│  │  │  └─ OnBoarding.tsx              
│  │  ├─ home                           
│  │  │  ├─ MobileSidebar.tsx           
│  │  │  └─ Topbar.tsx                  
│  │  ├─ modals                         
│  │  │  ├─ CreateTweetModal.tsx        
│  │  │  ├─ DeleteModal.tsx             
│  │  │  ├─ EditProfileModal.tsx        
│  │  │  └─ Modal.tsx                   
│  │  ├─ notifications                  
│  │  │  └─ Topbar.tsx                  
│  │  ├─ profile                        
│  │  │  ├─ Tabs.tsx                    
│  │  │  ├─ Topbar.tsx                  
│  │  │  └─ UserProfile.tsx             
│  │  ├─ search                         
│  │  │  ├─ Latest.tsx                  
│  │  │  ├─ Media.tsx                   
│  │  │  ├─ People.tsx                  
│  │  │  ├─ Tabs.tsx                    
│  │  │  ├─ Top.tsx                     
│  │  │  └─ Topbar.tsx                  
│  │  ├─ sharing                        
│  │  │  ├─ leftsidebar                 
│  │  │  │  ├─ LeftSidebar.tsx          
│  │  │  │  ├─ Lists.tsx                
│  │  │  │  └─ Logout.tsx               
│  │  │  ├─ rightsidebar                
│  │  │  │  ├─ RightSidebar.tsx         
│  │  │  │  └─ WhoToFollow.tsx          
│  │  │  ├─ searchbar                   
│  │  │  │  ├─ Focused.tsx              
│  │  │  │  └─ Searchbar.tsx            
│  │  │  ├─ 404.tsx                     
│  │  │  ├─ Bottombar.tsx               
│  │  │  ├─ ButtonBack.tsx              
│  │  │  ├─ ButtonCreatePostMobile.tsx  
│  │  │  ├─ CreateAnAccount.tsx         
│  │  │  ├─ Loading.tsx                 
│  │  │  ├─ Logout.tsx                  
│  │  │  ├─ NotFound.tsx                
│  │  │  ├─ PaginationButtons.tsx       
│  │  │  └─ TweetText.tsx               
│  │  ├─ tweetId                        
│  │  │  ├─ DetailTweet.tsx             
│  │  │  └─ Topbar.tsx                  
│  │  └─ ui                             
│  │     ├─ accordion.tsx               
│  │     ├─ button.tsx                  
│  │     ├─ dialog.tsx                  
│  │     ├─ dropdown-menu.tsx           
│  │     ├─ form.tsx                    
│  │     ├─ input.tsx                   
│  │     ├─ label.tsx                   
│  │     ├─ sheet.tsx                   
│  │     ├─ skeleton.tsx                
│  │     └─ textarea.tsx                
│  ├─ constants                         
│  │  └─ index.ts                       
│  ├─ hooks                             
│  │  ├─ usePrevious.tsx                
│  │  ├─ useReplyTweet.tsx              
│  │  ├─ useTabsPosts.tsx               
│  │  └─ useTweetModal.tsx              
│  ├─ interfaces                        
│  │  ├─ index.ts                       
│  │  ├─ notification.interface.ts      
│  │  ├─ tweet.interface.ts             
│  │  └─ user.interface.ts              
│  ├─ lib                               
│  │  ├─ cloudinary.ts                  
│  │  ├─ prismadb.ts                    
│  │  ├─ tweet.ts                       
│  │  ├─ user.ts                        
│  │  └─ utils.ts                       
│  ├─ types                             
│  │  ├─ index.ts                       
│  │  ├─ notification.type.ts           
│  │  ├─ tweet.type.ts                  
│  │  └─ user.type.ts                   
│  ├─ validations                       
│  │  ├─ tweet.validation.ts            
│  │  └─ user.validation.ts             
│  └─ middleware.ts                     
├─ README.md                            
├─ components.json                      
├─ filetree.md                          
├─ next-env.d.ts                        
├─ next.config.js                       
├─ package-lock.json                    
├─ package.json                         
├─ postcss.config.js                    
├─ tailwind.config.ts                   
├─ tsconfig.json                        
└─ yarn.lock     

// src/app/layout.tsx 
import "./globals.css";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
	title: {
		default: "X",
		template: "%s / X",
	},
	metadataBase: new URL(process.env.NEXT_PUBLIC_NEXT_URL!),
	themeColor: "black",
	openGraph: {
		title: {
			default: "X",
			template: "%s / X",
		},
		siteName: "X (formerly Squared)",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className="bg-black-100 text-white font-lato">
					<Toaster position="bottom-center" />
					<main className="h-full">{children}</main>
				</body>
			</html>
		</ClerkProvider>
	);
}


// src/app/page.tsx
import CreateAnAccount from "@/components/sharing/CreateAnAccount";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Image from "next/image";
import { getUserAction, saveUserAction } from "@/actions/user.action";

export default async function Home() {
	const clerkUser = await currentUser();

	// if the clerk user data exists
	if (clerkUser) {
		// get data user from database
		const user = await getUserAction(clerkUser.id);

		// if user not existing in database
		if (!user) {
			const mapUser = {
				id: clerkUser.id,
				imageUrl: clerkUser.imageUrl,
				name: "",
				username: clerkUser.username!.toLowerCase(),
				email: clerkUser.emailAddresses[0].emailAddress,
				bio: "",
			};

			// save to database
			const temporaryUserData = {
				...mapUser,
				name: "unknown",
				isCompleted: false,
			};
			await saveUserAction(temporaryUserData);

			redirect('/onboarding');
		}

		// if user data exists and isCompleted is within user
		if ("isCompleted" in user && Boolean(user.isCompleted)) {
			redirect("/home");
		} else {
			redirect('/onboarding');
		}
	}

	return (
		<main className="max-w-4xl mx-auto h-full grid place-items-center p-5 sm:p-12 lg:p-0">
			<section className="w-full h-full md:h-fit flex flex-col md:flex-row justify-center md:justify-between space-y-24 md:space-y-0">
				<div className="flex md:hidden">
					<Image
						src="/assets/logo.svg"
						alt="X Logo"
						width={40}
						height={40}
						className="object-contain"
					/>
				</div>
				<div className="hidden md:flex">
					<Image
						src="/assets/logo.svg"
						alt="X Logo"
						width={300}
						height={300}
						className="object-contain"
					/>
				</div>
				<div className="flex flex-col space-y-4 sm:space-y-8">
					<div className="flex flex-col space-y-8 sm:space-y-16">
						<h1 className="text-4xl sm:text-6xl font-extrabold">
							Happening now
						</h1>
						<h3 className="text-xl sm:text-3xl font-bold tracking-wider">
							Join today.
						</h3>
					</div>
					<CreateAnAccount />
				</div>
			</section>
		</main>
	);
}


# TASK
LETS IMPROVE THE STYLING!
See the attached images, we want to make our app more smoth, and more minimal. WE WANT TO USE FRAMERMOTION FOR SMOOTH TRANSITIONS SLEEK and very professional. See the attached images for guidance and let this inspire your. Reply only with the complete updated and integrated fcode in fulldeploying vercel now,.