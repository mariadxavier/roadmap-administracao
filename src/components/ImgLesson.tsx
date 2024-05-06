interface ImgLessonProps {
    src: string
}

export function ImgLesson({src, ...props} : ImgLessonProps){
    return(
        <img {...props} className="w-11/12 max-w-72" src={src} alt="" />
    )
}