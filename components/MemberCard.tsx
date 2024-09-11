import React from "react";
import Image from 'next/image';

import LinkedinIcon from '../public/icons/logo-linkedin.svg';

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
        <div className="bg-white border-black border p-2 md:p-4 w-fit rounded-md">
            <Image 
                src={member.image} 
                alt={member.name} 
                width={130} 
                height={130} 
                className="w-[90px] h-[90px] md:w-[130px] md:h-[130px]"
            />

            <div className="flex justify-between mt-2 md:mt-3">
                <div>
                    <p className="text-[10px] md:text-sm">{member.name}</p>
                    <p className="text-[8px] md:text-xs text-textGray font-light italic">{member.role}</p>
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