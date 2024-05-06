interface LinkComplementaryProps {
    link: string;
    display?: string;
}

export function LinkC({ link, display }: LinkComplementaryProps) {
    return (
        <li className="ml-6 w-full"  >
            <a className="w-full underline font-inter  text-wrap" href={link}>
            {display ? display : link}</a>
        </li>
    );
}
