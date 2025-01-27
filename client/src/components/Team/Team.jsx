import React from "react";
import TeamCard from "./TeamCard";
import SoupayanMitra from "../images/SoupayanMitra.jpg";

import AmitavaRay from "../images/AmitavaRay.jpg";

import "./teamstyle.css";
import { NavLink } from "react-router-dom";

const data = [
	{
		id: 1,
		name: "Dr. Amitava Ray",
		department: "Principal, JGEC",
		position: "Advisor",
		image: `${AmitavaRay}`,
	},
	{
		id: 2,
		name: "Dr. Soupayan Mitra",
		department: "HOD (ME), JGEC",
		position: "President-Jyoti",
		image: `${SoupayanMitra}`,
	},
	{
		id: 3,
		name: "Rohit Mondal",
		department: "CSE-2025",
		position: "Joint Secretary-Jyoti",
		image: "/assets/Rohit-Mondal.png",
		link: "https://www.linkedin.com/in/rohit-mondal-b55ab522a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
	},
	{
		id: 4,
		name: "Priya Mahato",
		department: "Civil-2025",
		position: "Joint Secretary-Jyoti",
		image: "/assets/Priya-Mahato.png",
		link: "https://www.linkedin.com/in/priya-mahato-360334245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
	},
	{
		id: 5,
		name: "Md Masudur Rahaman",
		department: "CSE-2025",
		position: "Manager-Jyoti",
		image: "/assets/Md-Masudur-Rahaman.png",
		link: "https://www.linkedin.com/in/md-masudur-rahaman-860a5a211",
	},
	{
		id: 6,
		name: "Anurup Sil",
		department: "CSE-2025",
		position: "Manager-Jyoti",
		image: "/assets/Anurup-Sil.png",
		link: "https://www.linkedin.com/in/anurup-sil-8a916922a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
	},
	{
		id: 7,
		name: "Rajat Nandi",
		department: "ECE-2025",
		position: "Cashier-Jyoti",
		image: "/assets/Rajat-Nandi.png",
		link: "http://linkedin.com/in/rajat-nandi-b505aa230",
	},
	{
		id: 8,
		name: "Tapabrato Mondal",
		department: "ECE-2025",
		position: "Joint Cashier & Social Media-Jyoti",
		image: "/assets/Tapabrata-Mondal.png",
		link: "https://www.linkedin.com/in/tapabrato-mondal-0ba049224?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
	},
	{
		id: 9,
		name: "Prem Kumar Oraon",
		department: "CSE-2025",
		position: "Joint Cashier-Jyoti",
		image: "/assets/Prem-Kumar.png",
		link: "https://www.linkedin.com/in/prem-kumar-oraon-60a31a227/",
	},

	{
		id: 10,
		name: "Parvej Alam",
		department: "ECE-2025",
		position: "Stakeholder-Jyoti",
		image: "/assets/Parvej-Alam.png",
		link: "https://www.linkedin.com/in/parvej-alam-039634229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
	},
	{
		id: 11,
		name: "Shakil Ahmed",
		department: "ECE-2025",
		position: "Cultural Secretary-Jyoti",
		image: "/assets/Shakil-Ahmed.png",
		link: "https://www.linkedin.com/in/shakil-ahmed-426b89229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/",
	},
	{
		id: 12,
		name: "Mahek Parvez",
		department: "Civil-2025",
		position: "Cultural Coordinator-Jyoti",
		image: "/assets/Mahek-Parvez.png",
		link: "https://www.linkedin.com/in/mahek-parvez-362bb9235",
	},
	{
		id: 13,
		name: "Ananya Mandal",
		department: "Civil-2025",
		position: "Cultural Coordinator-Jyoti",
		image: "/assets/Ananya-Mandal.png",
		link: "https://www.linkedin.com/in/ananya-mandal-393578250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
	},
	{
		id: 14,
		name: "Arijit Mitra",
		department: "ECE-2026",
		position: "Website Handler-Jyoti",
		image: "/assets/Arijit-Mitra.png",
		link: "https://www.linkedin.com/in/arijit-mitra-984668254/",
	},
	{
		id: 15,
		name: "Souhardya Deb",
		department: "ECE-2026",
		position: "Website Handler-Jyoti",
		image: "/assets/Souhardya-Deb.jpg",
		link: "https://www.linkedin.com/in/souhardya-deb-921578254/",
	},

	{
		id: 16,
		name: "Sohan Chakma",
		department: "CSE-2025",
		position: "Librarian-Jyoti",
		image: "/assets/Sohan-Chakma.png",
		link: "https://www.linkedin.com/in/sohan-chakma-430378235/",
	},
	{
		id: 17,
		name: "Bikram Ray",
		department: "CSE-2025",
		position: "Social Media Handler-Jyoti",
		image: "/assets/Bikram-Ray.png",
		link: "https://www.linkedin.com/in/bikram-ray-29848518a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
	},
];

const Team = () => {
	return (
		<div className="teambackground lg:mt-0 mt-4 ">
			<div className="items-center pb-4 lg:h-auto pt-8 lg:p-8 text-[#9e9cb6]">
				<div className="flex flex-col justify-center items-center pb-10">
					<div className="text-[#915f2e] tinos-regular slideleft font-medium lg:text-5xl  text-[38px] ">
						Meet Our Core Team
					</div>
					<div className="border-[3px] rounded m-1 border-amber-700 slideright w-[25%] lg:w-[5%]"></div>
				</div>

				<div className="flex justify-center fadein flex-wrap gap-8 ">
					{data.map((e) => (
						<TeamCard
							name={e.name}
							department={e.department}
							position={e.position}
							image={e.image}
							link={e.link}
						/>
					))}
				</div>
				<hr className="w-[50%]" />
				<div className="flex mt-10 lg:mt-8 h-[8vh] justify-center items-center">
					<NavLink
						to="/team2k24"
						onClick={() => window.scrollTo(0, 0)}
						className=" tinos-regular text-xl font-[400] shadow-md">
						<div className="border teambutton cursor-pointer border-black p-5 px-10">
							Show 2K24 Team
						</div>
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default Team;
