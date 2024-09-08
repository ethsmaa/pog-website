
type CardProps = {
    content: React.ReactNode;
    backgroundColor: string;
};

export default function PageCard({ content, backgroundColor }: CardProps) {
    return (
        
        <div className="w-fit h-fit py-1 px-5 rounded-full text-white text-base"
            style={{ backgroundColor }} >
            {content}
                    {/* box-shadow: 0px 25px 43px -22px rgba(125,125,125,0.84);*/}

        </div>
        

    );
}