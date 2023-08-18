<script>
	import Image from "../components/image/Image.svelte";
	import SyncLogo from "../lib/images/syntactics-icon.svg";
	import FooterMenu from "../components/FooterMenu.svelte";

	// Payment Methods
	import americanExpress from "../lib/images/american-express.svg";
	import mastercard from "../lib/images/mastercard.svg";
	import paypal from "../lib/images/paypal.svg";
	import visa from "../lib/images/visa.svg";

	// Awards
	import SEO from "../lib/images/awards/best-in-Search-search_engine_optimization.jpg";
	import Meta from "../lib/images/awards/meta-certified-digital-marketing-associate.jpg";
	import Digital from "../lib/images/awards/the-digital.jpg";
	import Clutch from "../lib/images/awards/top-clutch-top-software-developers.jpg";

	// Member of
	import Epson from "../lib/images/membership/epson.png";
	import ICT from "../lib/images/membership/ICT.png";
	import oroChamber from "../lib/images/membership/oro-chamber.png";
	import PhilGeps from "../lib/images/membership/PhilGeps.png";
	import PSIA from "../lib/images/membership/PSIA.png";

	// get the current year
	let currentYear = new Date().getFullYear();

</script>

<div class="container-fluid mx-auto flex items-center bg-gray-950 px-4 md:px-8">
	<div class="xl:container flex gap-y-16 flex-col pt-24 text-gray-400 leading-normal" >
		<div class="grid sm:grid-cols-1 lg:grid-cols-4 gap-8">
			<div class="text-white">
				<div class="mb-8">
					<Image src={SyncLogo} alt="Syntactics Logo" />
				</div>
				<p class="mb-8">
					RAMI Corporate Building Corner Tiano-Mabini Streets, Cagayan de Oro,
					Philippines 9000
				</p>
				<div class="mb-8 ">
					<a class="pb-1 border-b border-primary-500 transition hover:text-primary-500" href="mailto:inquiries@syntacticsinc.com"
						>inquiries@syntacticsinc.com</a
					>
				</div>
				<div>
					<FooterMenu menuItems = {
						[
							{ id: 1, label: "PH Office: (088) 856 2242", link: "tel:(088) 856 2242" },
							{ id: 2, label: "PH Mobile: +63-917-704-8755", link: "tel:+63-917-704-8755" },
							{ id: 3, label: "PH Mobile: +63-917-704-8034", link: "tel:+63-917-704-8034" },
							{ id: 4, label: "US: +1-650-557-3336", link: "tel:+1-650-557-3336" },
							{ id: 5, label: "AU: +61-280-062-938", link: "tel:+61-280-062-938" },
						]
					} />
				</div>
			</div>

			<div class="col-span-3">
				<div class="grid 
					sm:grid-cols-2 
					lg:grid-cols-3 gap-x-8 gap-y-16 mb-16">
					<div>
						<h4 class="tracking-[0.125rem] uppercase mb-8 leading-normal">
							Company
						</h4>

						<FooterMenu menuItems = {
							[
								{ id: 1, label: "About Us", link: "/" },
								{ id: 2, label: "Career", link: "/" },
								{ id: 3, label: "Works", link: "/" },
								{ id: 4, label: "Blog", link: "/" },
							]
						} />
					</div>

					<div>
						<h4 class="tracking-[0.125rem] uppercase mb-8 leading-normal">
							What We Do
						</h4>

						<FooterMenu menuItems = {
							[
								{ id: 1, label: "Web Design and Development", link: "/" },
								{ id: 2, label: "Digital Marketing", link: "/" },
								{ id: 3, label: "Virtual Assistant", link: "/" },
								{ id: 4, label: "IT Support and Hardware Support", link: "/" },
							]
						} />
						
					</div>

					<div>
						<h4 class="tracking-[0.125rem] uppercase mb-8 leading-normal">
							We Offer
						</h4>

						<FooterMenu menuItems = {
							[
								{ id: 1, label: "Bitdefender Cybersecurity", link: "/" },
								{ id: 2, label: "FIFO Inventory System", link: "/" },
								{ id: 3, label: "Synchronized Accounting System", link: "/" },
								{ id: 4, label: "PxTrack: Electronic Medical Records Software", link: "/" },
								{ id: 5, label: "Docotrak: Document Tracking System", link: "/" },
								{ id: 6, label: "Web Security Solutions", link: "/" },
							]
						} />
						
					</div>
				</div>

				<div class="grid grid-cols-2 gap-8">
					<div class="col-span-1.5">
						<h4 class="tracking-[0.125rem] uppercase mb-8 leading-normal">
							We Accept
						</h4>

						<div class="flex gap-2">
							<Image src={americanExpress} alt="American Express Logo" />
							<Image src={mastercard} alt="Mastercard Logo" />
							<Image src={visa} alt="Visa Logo" />
							<Image src={paypal} alt="Paypal Logo" />
						</div>
					</div>

					<div class="col-span-1.5">
						<h4 class="tracking-[0.125rem] uppercase mb-8 leading-normal">
							notable awards
						</h4>

						<div class="flex gap-2">
							<Image src={Digital} alt="the-digital" />
							<Image
								src={Meta}
								alt="meta-certified-digital-marketing-associate"
							/>
							<Image
								src={SEO}
								alt="best-in-Search-search_engine_optimization"
							/>
							<Image src={Clutch} alt="top-clutch-top-software-developers" />
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Copyright -->
		<div>
			<div class="border-y border-gray-800">
				<div class="flex justify-between items-center my-8">
					<h4 class="tracking-[0.125rem] uppercase leading-normal">
						Proud Member of:
					</h4>
						<Image src={PSIA} alt="Philippine Software Industry Association" />
						<Image src={PhilGeps} alt="PhilGeps" />
						<Image src={ICT} alt="ICT Business Council" />
						<Image src={Epson} alt="Epson" />
						<Image src={oroChamber} alt="Oro Chamber" />
					
				</div>
			</div>

			<div class="flex justify-between 
				sm:flex-col sm:my-6 sm:gap-6
				md:my-8
				lg:flex-row items-center 
				 text-gray-600 text-sm">
				<p>© {currentYear} Syntactics, Inc. All Rights Reserved.</p>

				<div class="flex items-stretch gap-2">
					<a href="/">Privacy Notice</a>
					<div class="bg-gray-600 w-[.0625rem]" />
					<a href="/">Terms & Condition</a>
					<div class="bg-gray-600 w-[.0625rem]" />
					<a href="/">Sitemap</a>
				</div>

				<div class="flex gap-6">
					<a href="/">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
						>
							<path
								d="M17.5845 13.5L18.251 9.15656H14.0834V6.33797C14.0834 5.14969 14.6656 3.99141 16.5321 3.99141H18.4268V0.293438C18.4268 0.293438 16.7074 0 15.0635 0C11.6313 0 9.38791 2.08031 9.38791 5.84625V9.15656H5.57275V13.5H9.38791V24H14.0834V13.5H17.5845Z"
								fill="var()"
							/>
						</svg>
					</a>
					<a href="/">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
						>
							<path
								d="M21.533 7.11175C21.5482 7.32494 21.5482 7.53817 21.5482 7.75136C21.5482 14.2539 16.599 21.7463 7.5533 21.7463C4.76648 21.7463 2.17767 20.9391 0 19.5382C0.395953 19.5838 0.776625 19.5991 1.18781 19.5991C3.48727 19.5991 5.60405 18.8224 7.29441 17.4976C5.13197 17.4519 3.31978 16.0356 2.69541 14.0864C3 14.132 3.30455 14.1625 3.62437 14.1625C4.06598 14.1625 4.50764 14.1016 4.91878 13.995C2.66498 13.5381 0.974578 11.5585 0.974578 9.16759V9.1067C1.62937 9.47219 2.39086 9.70061 3.19791 9.73103C1.87303 8.84777 1.00505 7.34017 1.00505 5.63458C1.00505 4.72089 1.24866 3.88333 1.67508 3.15236C4.09641 6.13713 7.73602 8.08633 11.8172 8.29956C11.7411 7.93408 11.6954 7.55341 11.6954 7.17269C11.6954 4.462 13.8883 2.25391 16.6141 2.25391C18.0304 2.25391 19.3095 2.84781 20.208 3.8072C21.3197 3.59402 22.3857 3.18283 23.3299 2.61939C22.9643 3.76155 22.1877 4.72094 21.1674 5.33003C22.1573 5.22348 23.1167 4.94931 23.9999 4.56864C23.33 5.54322 22.4924 6.4112 21.533 7.11175Z"
								fill="#686F7A"
							/>
						</svg>
					</a>
					<a href="/"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
						>
							<path
								d="M22.6002 6.65375C22.3457 5.69528 21.596 4.94042 20.6441 4.68425C18.9187 4.21875 12 4.21875 12 4.21875C12 4.21875 5.08135 4.21875 3.35591 4.68425C2.404 4.94046 1.65428 5.69528 1.39982 6.65375C0.9375 8.39104 0.9375 12.0157 0.9375 12.0157C0.9375 12.0157 0.9375 15.6404 1.39982 17.3777C1.65428 18.3362 2.404 19.0596 3.35591 19.3158C5.08135 19.7812 12 19.7812 12 19.7812C12 19.7812 18.9186 19.7812 20.6441 19.3158C21.596 19.0596 22.3457 18.3362 22.6002 17.3777C23.0625 15.6404 23.0625 12.0157 23.0625 12.0157C23.0625 12.0157 23.0625 8.39104 22.6002 6.65375ZM9.7372 15.3067V8.72478L15.5198 12.0158L9.7372 15.3067Z"
								fill="#686F7A"
							/>
						</svg>
					</a>
					<a href="/"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
						>
							<path
								d="M12.5625 0.304688C7.75313 0.304688 3 3.51094 3 8.7C3 12 4.85625 13.875 5.98125 13.875C6.44531 13.875 6.7125 12.5813 6.7125 12.2156C6.7125 11.7797 5.60156 10.8516 5.60156 9.0375C5.60156 5.26875 8.47031 2.59688 12.1828 2.59688C15.375 2.59688 17.7375 4.41094 17.7375 7.74375C17.7375 10.2328 16.7391 14.9016 13.5047 14.9016C12.3375 14.9016 11.3391 14.0578 11.3391 12.8484C11.3391 11.0766 12.5766 9.36094 12.5766 7.53281C12.5766 4.42969 8.175 4.99219 8.175 8.74219C8.175 9.52969 8.27344 10.4016 8.625 11.1188C7.97813 13.9031 6.65625 18.0516 6.65625 20.9203C6.65625 21.8063 6.78281 22.6781 6.86719 23.5641C7.02656 23.7422 6.94688 23.7234 7.19063 23.6344C9.55313 20.4 9.46875 19.7672 10.5375 15.5344C11.1141 16.6313 12.6047 17.2219 13.7859 17.2219C18.7641 17.2219 21 12.3703 21 7.99688C21 3.34219 16.9781 0.304688 12.5625 0.304688Z"
								fill="#686F7A"
							/>
						</svg>
					</a>
					<a href="/"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
						>
							<path
								d="M6.20062 20.9995H1.84688V6.97922H6.20062V20.9995ZM4.02141 5.06672C2.62922 5.06672 1.5 3.91359 1.5 2.52141C1.5 1.85269 1.76565 1.21136 2.2385 0.738503C2.71136 0.265647 3.35269 0 4.02141 0C4.69012 0 5.33145 0.265647 5.80431 0.738503C6.27716 1.21136 6.54281 1.85269 6.54281 2.52141C6.54281 3.91359 5.41313 5.06672 4.02141 5.06672ZM22.4953 20.9995H18.1509V14.1745C18.1509 12.548 18.1181 10.462 15.8873 10.462C13.6237 10.462 13.2769 12.2292 13.2769 14.0573V20.9995H8.92781V6.97922H13.1034V8.89172H13.1644C13.7456 7.79016 15.1655 6.62766 17.2838 6.62766C21.69 6.62766 22.5 9.52922 22.5 13.298V20.9995H22.4953Z"
								fill="#686F7A"
							/>
						</svg>
					</a>
					<a href="/"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
						>
							<path
								d="M12.0048 6.60977C9.02354 6.60977 6.61885 9.01445 6.61885 11.9957C6.61885 14.977 9.02354 17.3816 12.0048 17.3816C14.986 17.3816 17.3907 14.977 17.3907 11.9957C17.3907 9.01445 14.986 6.60977 12.0048 6.60977ZM12.0048 15.4973C10.0782 15.4973 8.50322 13.927 8.50322 11.9957C8.50322 10.0645 10.0735 8.49414 12.0048 8.49414C13.936 8.49414 15.5063 10.0645 15.5063 11.9957C15.5063 13.927 13.9313 15.4973 12.0048 15.4973ZM18.8673 6.38945C18.8673 7.08789 18.3048 7.6457 17.611 7.6457C16.9126 7.6457 16.3548 7.0832 16.3548 6.38945C16.3548 5.6957 16.9173 5.1332 17.611 5.1332C18.3048 5.1332 18.8673 5.6957 18.8673 6.38945ZM22.4345 7.66445C22.3548 5.98164 21.9704 4.49102 20.7376 3.26289C19.5095 2.03477 18.0188 1.65039 16.336 1.56602C14.6017 1.46758 9.40322 1.46758 7.66885 1.56602C5.99072 1.6457 4.5001 2.03008 3.26729 3.2582C2.03447 4.48633 1.65479 5.97695 1.57041 7.65977C1.47197 9.39414 1.47197 14.5926 1.57041 16.327C1.6501 18.0098 2.03447 19.5004 3.26729 20.7285C4.5001 21.9566 5.98604 22.341 7.66885 22.4254C9.40322 22.5238 14.6017 22.5238 16.336 22.4254C18.0188 22.3457 19.5095 21.9613 20.7376 20.7285C21.9657 19.5004 22.3501 18.0098 22.4345 16.327C22.5329 14.5926 22.5329 9.39883 22.4345 7.66445ZM20.1938 18.1879C19.8282 19.1066 19.1204 19.8145 18.197 20.1848C16.8142 20.7332 13.5329 20.6066 12.0048 20.6066C10.4767 20.6066 7.19072 20.7285 5.8126 20.1848C4.89385 19.8191 4.18604 19.1113 3.81572 18.1879C3.26729 16.8051 3.39385 13.5238 3.39385 11.9957C3.39385 10.4676 3.27197 7.18164 3.81572 5.80352C4.18135 4.88477 4.88916 4.17695 5.8126 3.80664C7.19541 3.2582 10.4767 3.38477 12.0048 3.38477C13.5329 3.38477 16.8188 3.26289 18.197 3.80664C19.1157 4.17227 19.8235 4.88008 20.1938 5.80352C20.7423 7.18633 20.6157 10.4676 20.6157 11.9957C20.6157 13.5238 20.7423 16.8098 20.1938 18.1879Z"
								fill="#686F7A"
							/>
						</svg>
					</a>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	:root {
		--footer-icon-color: #667085;
	}

	svg {
		fill: var(--footer-icon-color);
	}
</style>
