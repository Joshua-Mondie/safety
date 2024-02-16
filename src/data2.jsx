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
        text2: "Granted to persons who have who have at least five years working experience in safety related functions. They must have participated in at least three Annual General Meetings organized by ISPON.",
        
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
        header: 'General Requirements for Individual Membership Registration',
        content:[
            {
                text:'HND or BSc degree in relevant discipline from NUC or ISPON approved Institutions'
            },
            {
                text:'General Health, Safety and Environment (General HSE) and HSE Level 3 training certificates awarded by ISPON'
            },
            {
                text:'Updated CV showing relevant industry experience in safety functions'
            },
            {
                text:'A project report on any safety related topic of your choice'
            },
            {
                text:'A referee who must be MISPN (electronic reference using ISPON membership number)'
            },
            {
                text:'A recommendation letter from employer where applicable'
            },
            {
                text:'Evidence of payment for membership registration'
            },
            {
                text:'A successful participation in the professional examination and screening'
            },
        ]
    }
]
