interface SubtitleLessonProps {
    text?: string
}

export function Subtitle({text, ...props}: SubtitleLessonProps) {
    return (
        <div className="w-full flex justify-center py-4">
            <h3 className="w-11/12 flex flex-col font-inter font-bold text-2xl after:content-[''] after:w-full after:h-1.5 after:bg-title-adm/30 after:rounded-sm" {...props}>{text}</h3>            
        </div>
    );
}
