import React from "react";
import TeamCard from "./TeamCard";
import SoupayanMitra from "../images/SoupayanMitra.jpg";

import AmitavaRay from "../images/AmitavaRay.jpg";

import "./teamstyle.css";
import PreviousTeamLink from "./PreviousTeamLink";

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
    name: "Arkoprovo De",
    department: "ECE-2027",
    position: "Joint Secretary-Jyoti",
    image: "/assets/ArkoprovoDe.jpg",
    link: "https://www.linkedin.com/in/arkaprova-de-57628b291",
  },
  {
    id: 4,
    name: "Sounak Chaudhury",
    department: "EE-2027",
    position: "Joint Secretary-Jyoti",
    image: "assets/SounakChaudhury.jpg",
    link: "https://www.linkedin.com/in/sounak-chaudhury-5b488a301",
  },
  {
    id: 5,
    name: "Sayan Das",
    department: "EE-2027",
    position: "Joint Cashier-Jyoti",
    image: "/assets/SayanDas.jpg",
    link: "https://www.linkedin.com/in/sayan-das-b6b952292",
  },
  {
    id: 6,
    name: "Souradeep Kundu",
    department: "EE-2027",
    position: "Joint Cashier-Jyoti",
    image: "assets/SOURADEEP-KUNDU.png",
    link: "https://www.linkedin.com/in/souradeep-kundu-13b784322",
  },
  {
    id: 7,
    name: "Sanidhya Keshri",
    department: "EE-2027",
    position: "Joint Cashier-Jyoti",
    image: "/assets/SanidhyaKeshri.jpg",
    link: "https://www.linkedin.com/in/sanidhya-keshri-774063288",
  },
  {
    id: 8,
    name: "Ayantika Ghosh",
    department: "CE-2027",
    position: "Manager & Cultural Coordinator-Jyoti",
    image: "/assets/AYANTIKA-GHOSH.jpg",
    link: "https://www.linkedin.com/in/ayantika-ghosh-16666127b",
  },
  {
    id: 9,
    name: "Subhajit Das",
    department: "EE-2027",
    position: "Manager-Jyoti",
    image: "/assets/SubhajitDas.jpg",
    link: "https://www.linkedin.com/in/subhajit-das-80a5342b6",
  },

  {
    id: 10,
    name: "Bipadtaran Mahara ",
    department: "EE-2027",
    position: "Stakeholder-Jyoti",
    image: "/assets/BipadtaranMahara.jpg",
    link: "https://www.linkedin.com/in/bipad-taran-mahara-2aa759290",
  },
  {
    id: 11,
    name: "Prerana Roy Bakshi",
    department: "EE-2027",
    position: "Cultural Coordinator-Jyoti",
    image: "/assets/PRERANA-ROY-BAKSHI.jpg",
    link: "https://www.linkedin.com/in/prerana-roy-bakshi-233008299",
  },
  {
    id: 12,
    name: "Sourav Rakshit",
    department: "EE-2027",
    position: "Cultural Coordinator",
    image: "/assets/SouravRakshit.jpg",
    link: "https://www.linkedin.com/in/sourav-rakshit-1ba46b2a4",
  },

  {
    id: 13,
    name: "Jahanara Parvin",
    department: "EE-2027",
    position: "Cultural Coordinator-Jyoti",
    image: "/assets/JahanaraParvin.jpg",
    link: "https://www.linkedin.com/in/jahanara-parvin-ab69a22a4",
  },

  {
    id: 14,
    name: "Agniva Shee",
    department: "EE-2027",
    position: "Social Media Handler-Jyoti",
    image: "/assets/AgnivaShee.jpeg",
    link: "https://www.linkedin.com/in/agniva-shee-8658aa290/",
  },

  {
    id: 15,
    name: "Nur Alak Mondal",
    department: "ECE-2027",
    position: "Librarian-Jyoti",
    image: "/assets/Nur-Alam-Mondal.jpg",
    link: "https://www.linkedin.com/in/nur-alam-mondal-94a8712a2",
  },

  {
    id: 16,
    name: "Gautam Maity",
    department: "IT-2028",
    position: "Website Handler-Jyoti",
    image: "/assets/GautamMaity.jpeg",
    link: "www.linkedin.com/in/gautam-maity-076526315",
  },
];

const previousYears = [26, 25, 24];

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
        <div className="mt-20">
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-4xl tinos-regular text-[#915f2e]">
              Previous Teams
            </h2>
            <div className="border-[2px] rounded border-amber-700 w-20 mt-2"></div>
            <p className="text-gray-600 mt-3 text-center">
              Explore the Jyoti Core Teams from previous years.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {previousYears.map((year) => (
              <PreviousTeamLink key={year} year={year} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
