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

    const memberImageSize = window.innerWidth < 640 ? 90 : 130;
    const LinkedinIconSize = window.innerWidth < 640 ? 20 : 30;



    return (
        <div className="bg-white border-black border p-1 md:p-3 w-fit rounded-md">
            <Image src={member.image} alt={member.name} width={memberImageSize} height={memberImageSize} />

            <div className="flex justify-between mt-1 md:mt-2">
                <div>
                    <p className="text-[8px] md:text-xs">{member.name}</p>
                    <p className="text-[8px] md:text-xs text-textGray font-light italic color ">{member.role}</p>
                </div>

                <a href={member.linkedinUrl}>
                    <Image src={LinkedinIcon} alt="Linkedin" width={LinkedinIconSize} height={LinkedinIconSize} />
                </a>
                



            </div>


        </div>
    );
};