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
		<main className="max-w-4xl mx-auto h-full grid place-items-center p-0 sm:p-12 lg:p-0">
			<section className="w-full h-full md:h-fit flex flex-col md:flex-row justify-center md:justify-between space-y-24 md:space-y-0">
				<div className="flex md:hidden">
					<Image
						src="/assets/logo.svg"
						alt="X Logo"
						width={83} // updated width (64 * 1.3 ≈ 83)
						height={83} // updated height (64 * 1.3 ≈ 83)
						className="object-fill"
					/>
				</div>
				<div className="hidden md:flex">
					<Image
						src="/assets/logo.svg"
						alt="X Logo"
						width={390} // updated width (300 * 1.3 = 390)
						height={390} // updated height (300 * 1.3 = 390)
						className="object-contain"
					/>
				</div>
				<div className="flex flex-col space-y-4 sm:space-y-8">
					<div className="flex flex-col space-y-8 sm:space-y-16">
						<h1 className="text-4xl sm:text-6xl font-extrabold">
							Speech Through Proxy
						</h1>
						<h3 className="text-xl sm:text-3xl font-bold tracking-wider">
							P2P Agency of Expression 
						</h3>
					</div>
					<CreateAnAccount />
				</div>
			</section>
		</main>
	);
}