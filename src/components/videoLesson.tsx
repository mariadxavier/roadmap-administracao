interface VideoYTProps{
    src: string;
    title: string;
    frameborder: string;
    allow: string;
    referrerpolicy: string;
    allowfullscreen: boolean;
}

export function VideoYT({ src, title, frameborder, allow, referrerpolicy, allowfullscreen, ...props }: VideoYTProps) {
    return (
        <div className="w-full flex-col flex items-center my-3 sm:gap-2">
            <h4 className="font-inter font-bold">Vídeo complementar:</h4>
            <iframe className="w-full sm:w-9/12 min-h-52 sm:min-h-72 lg:min-h-96 lg:w-10/12 xl:min-h-[500px]"
                {...props}
                src={src}
                title={title}
                data-frameborder={frameborder}
                allow={allow}
                data-referrerpolicy={referrerpolicy}
                data-allowfullscreen
            ></iframe>
        </div>
    );
}
