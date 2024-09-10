
type CardProps = {
    content: React.ReactNode;
    backgroundColor: string;
};

export const PageCard: React.FC<CardProps> = ({ content, backgroundColor }) => {
    return (
        <div 
            className="w-fit h-fit py-1 px-5 rounded-full text-white text-sm md:text-base shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
            style={{ backgroundColor }}
        >
            {content}
        </div>
    );
}