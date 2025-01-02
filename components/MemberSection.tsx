import leftGradient from "../public/images/member-lb.svg";
import rightGradient from "../public/images/member-rb.svg";

import { MEMBERS_DATA } from "@/utils/constants";
import { MemberCard } from "./MemberCard";
import { PageCard } from "./PageCard";

export default function MemberSection() {
  return (
    <div
      id="members"
      className="relative w-screen h-screen overflow-hidden bg-white dark:bg-gray-900"
    >
      <div
        className="absolute top-[30%] right-0 w-[700px] h-[800px] bg-no-repeat bg-contain opacity-60 md:opacity-75 z-0"
        style={{
          backgroundImage: `url(${rightGradient.src})`,
        }}
      />

      <div
        className="absolute bottom-[-7%] left-[0%] w-[750px] h-[700px] bg-no-repeat bg-contain opacity-65 z-0"
        style={{
          backgroundImage: `url(${leftGradient.src})`,
        }}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-start md:justify-center">
        <div className="relative z-10 flex flex-col items-center w-full max-w-7xl p-2 md:px-24">
          <div className="flex flex-col self-center items-center md:self-start md:items-start mb-8">
            <PageCard
              content={MEMBERS_DATA.cardContent}
              backgroundColor="#e1b790" 
            />
            <h1 className="text-3xl font-bold mt-2 md:mt-6 sm:text-5xl text-black dark:text-white">
              {MEMBERS_DATA.title}
            </h1>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:w-full">
            {MEMBERS_DATA.membersArray.map((member, index) => (
              <MemberCard key={index} member={member} />
            ))}
          </div>

          <div className="flex w-full mt-4"></div>
        </div>
      </div>
    </div>
  );
}
