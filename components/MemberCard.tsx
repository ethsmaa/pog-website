import React from "react";
import Image from "next/image";
import LinkedinIcon from "../public/icons/logo-linkedin.svg";

type MemberProps = {
  member: {
    memberID: number;
    name: string;
    role: string;
    content: string;
    image: string;
    linkedinUrl: string;
  };
};

export const MemberCard: React.FC<MemberProps> = ({ member }) => {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 p-2  rounded-md">
    
      <div className="flex justify-between">
        <div>
          <p className="text-[10px] md:text-sm text-black dark:text-white">
            {member.name}
          </p>
          <p className="text-[8px] md:text-xs text-textGray dark:text-gray-300 font-light italic">
            {member.role}
          </p>
        </div>

        <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer">
          <Image
            src={LinkedinIcon}
            alt="Linkedin"
            width={30}
            height={30}
            className="w-[20px] h-[20px] md:w-[30px] md:h-[30px]"
          />
        </a>
      </div>
    </div>
  );
};
