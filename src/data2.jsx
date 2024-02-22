import { MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CiLink } from "react-icons/ci";
import bgimg2 from "./assets/membershipbg.avif";

// import { Router } from "react-router-dom";

export const contact = [
  {
    text: "Visit Us Here",
    text2:
      "Dominic Aigbogun House46 Ikotun/Isolo Road by Bolorunpelu Bus-stop Ikotun Lagos State Nigeria.",
    icon: <MdLocationOn />,
  },
  {
    text: "Reach Us On Our Email",
    text2:
      "info@safetyprofessionals.gov.ng President@safetyprofessionals.gov.ng",
    icon: <MdEmail />,
  },
  {
    text: "Contact Us",
    text2: (
      <span>
        +234 813 629 4444 <br />
        +234 703 762 8888 <br />
        +234 818 117 9033{" "}
      </span>
    ),
    icon: <FaPhoneAlt />,
  },
  {
    text: "Visit Us On our Website",
    text2: (
      <Link to="/" className=" underline">
        Safetyprofessionals.gov.ng
      </Link>
    ),
    icon: (
      <span className="text-3xl">
        <CiLink />
      </span>
    ),
  },
];

export const individualMembership = [
  {
    bgImage: bgimg2,
    text: "Admission to individual membership is subject to meeting the specified qualifications, rules, regulations and conditions of the Institute's constitution and General Policy Guidelines.",
    header: "CATEGORIES",
    content: [
      {
        text1: <span className="ml-10">Student Member:</span>,
        text2:
          "Granted to students in NUC accredited institutions or other institutions approved by ISPON.",
      },
      {
        text1: "Graduate member (GISPN):",
        text2:
          "Granted to holders of Higher National Diploma (HND) or Bachelor degree in relevant disciplines.",
      },
      {
        text1: "Associate member (AISPN):",
        text2:
          "Granted to persons who have who have at least five years working experience in safety related functions. They must have participated in at least three Annual General Meetings organized by ISPON.",
      },
      {
        text1: <span className="ml-10">Member (MISPN):</span>,
        text2:
          "Granted to persons who have minimum of 10 years industry experience in safety related functions. They must have attended three Annual General Meetings of the Institute.",
      },
      {
        text1: <span className="ml-16">Fellow (FISPN):</span>,
        text2:
          "Granted to persons who have been a member for minimum of 10 years and who have contributed remarkably to the advancement of safety profession and the Institute. Must have attended at least five Annual General Meetings of the Institute.",
      },
      {
        text1: <span className="ml-10">Honourary Fellow:</span>,
        text2:
          "Granted to persons who are not safety practitioners but have contributed remarkably towards the advancement of safety in Nigeria. This is awarded based on nomination.",
      },
      {
        text1: "Life member (LISPN):",
        text2:
          "Granted to highly deserving Fellows based on their contributions to safety profession and the Institute.",
      },
    ],
  },
];

export const individualMembershipRequirements = [
  {
    header: "General Requirements for Individual Membership Registration",
    content: [
      {
        text: "HND or BSc degree in relevant discipline from NUC or ISPON approved Institutions",
      },
      {
        text: "General Health, Safety and Environment (General HSE) and HSE Level 3 training certificates awarded by ISPON",
      },
      {
        text: "Updated CV showing relevant industry experience in safety functions",
      },
      {
        text: "A project report on any safety related topic of your choice",
      },
      {
        text: "A referee who must be MISPN (electronic reference using ISPON membership number)",
      },
      {
        text: "A recommendation letter from employer where applicable",
      },
      {
        text: "Evidence of payment for membership registration",
      },
      {
        text: "A successful participation in the professional examination and screening",
      },
    ],
  },
];

export const divisionsandspecialization = [
  {
    num: 1,
    text: "PUBLIC SAFETY DIVISIONS",
  },
  {
    num: 2,
    text: "PROCESS SAFETY DIVISION",
  },
  {
    num: 3,
    text: "OIL AND GAS SAFETY DIVISION",
  },
  {
    num: 4,
    text: "MINING AND QUARRY SAFETY DIVISION",
  },
  {
    num: 5,
    text: "AVIATION SAFETY DIVISION",
  },
  {
    num: 6,
    text: "MARINE/MARITIME AND PORTS SAFETY DIVISION",
  },
  {
    num: 7,
    text: "TRANSPORTION AND LOGISTICS (ROAD AND RAILWAYS) SAFETY DIVISION",
  },
  {
    num: 8,
    text: "AGRICULTURE AND AGRO-ALLIED SAFETY DIVISION",
  },
  {
    num: 9,
    text: "DISASTER/ EMERGENCY MANAGEMENT SAFETY DIVISION",
  },
  {
    num: 10,
    text: "FIRE AND EXPLOSION SAFETY DIVISION",
  },
  {
    num: 11,
    text: "MANUFACTURING AND PLANT'S SAFETY DIVISION",
  },
  {
    num: 12,
    text: "ENVIRONMENTAL MANAGEMENT AND SUSTAINABLE DEVELOPMENT DIVISION",
  },
  {
    num: 13,
    text: "OCCUPATIONAL HEALTH AND INDUSTRIAL HYGIENE DIVISION ",
  },
  {
    num: 14,
    text: "POWER SAFETY DIVISION",
  },
  {
    num: 15,
    text: "SECURITY DIVISION",
  },
  {
    num: 16,
    text: "FOOD AND DRUG SAFETY DIVISION",
  },
  {
    num: 17,
    text: "INFORMATION & COMMUNICATION TECHNOLOGIES SAFETY DIVISION",
  },
  {
    num: 18,
    text: "EDUCATIONAL INSTITUTIONS AND RELATED FACILITY SAFETY DIVISION",
  },
  {
    num: 19,
    text: "19.MEDICAL/BIOMEDICAL, HEALTH FACILITY AND LABORATORIES SAFETY DIVISION",
  },
  {
    num: 20,
    text: "RADIATION, RADIOACTIVITY AND NUCLEAR POWER SAFETY DIVISION",
  },
  {
    num: 21,
    text: "CONSRUCTION AND STRUCTURAL SAFETY DIVISION",
  },
  {
    num: 22,
    text: "ERGONOMICS AND SPORT SAFETY DIVISION",
  },
  {
    num: 23,
    text: "TOURISM AND HOSPITALITY SAFETY DIVISION",
  },
  {
    num: 24,
    text: "MATERIALS /CHEMICALS SAFETY DIVISION",
  },
  {
    num: 25,
    text: "PSYCHOSOCIALS (CARE-GIVING AND ANTHROPOGENIC) SAFETY DIVISION",
  },
];

export const instituteFunctions = [ 
  {
    num: <span className="bg-green-500 text-white  h-10 w-10 rounded-full flex justify-center items-center">1</span>,
    text: "Conduct examinations and award certificates and diplomas in the area of safety management." ,
  },
  {
    num: <span className="bg-green-500 text-white h-10 w-10 rounded-full flex justify-center items-center"> 2 </span>,
    text: "Advise employers on matters relating to qualifications for the practice of safety in Nigeria.", 
  },
  {
    num: <span className="bg-green-500 text-white h-10 w-10 rounded-full flex justify-center items-center"> 3 </span>,
    text: <span>Conduct resarch in all aspects of safety management.</span> ,
  },
  {
    num: <span className="bg-green-500 text-white h-10 w-10 rounded-full flex justify-center items-center"> 4 </span>,
    text: <span>Organize lectures, seminars, workshops and provide training for persons aspiring to qualify and practice as safety professionals</span> ,
  },
  {
    num: <span className="bg-green-500 text-white h-10 w-10 rounded-full flex justify-center items-center"> 5 </span>,
    text: <span>Establish and maintain list of persons registered as safety professionals in Nigeria and publish from time to time those so registered</span>,
  },
  {
    num: <span className="bg-green-500 text-white h-10 w-10 rounded-full flex justify-center items-center"> 6 </span>,
    text: <span>Perform such other functions as may be necessary for the advancement of the Institute and the safety management profession in Nigeria.</span> ,
  },
];
