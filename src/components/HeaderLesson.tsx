interface HeaderProps {
    title: string,  
    icon: string
}

export function Header({title, icon}: HeaderProps) {
    return(
        <div className="w-full bg-backgroundMedium-adm rounded-b-[40px] p-6 flex flex-col  lg:max-w-[90%] ">
                <img
                    src={icon}
                    alt="imagem ilustrativa"
                    className="size-64 sm:size-72 self-center"
                />
                <h1 className="font-poppins text-white font-bold text-4xl sm:text-5xl sm:px-6 lg:self-start">
                    {title}
                </h1>
        </div>
    )
}