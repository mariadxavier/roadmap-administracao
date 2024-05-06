import { LinkC } from "./LinkComplementary";

interface ComplementaryProps {
    itens: Array<
        {
            link: string;
            display: string;
        }
    >;
}

export function Complementary({itens}: ComplementaryProps) {
    return (
        <div className="p-4 flex flex-col items-start w-full">
            <h3 className="font-inter font-bold">Material complementar:</h3>
            <ul className="list-disc w-10/12">
                {itens.map((item) => {
                    return <LinkC link={item.link} display={item.display} />;
                })}
            </ul>
        </div>
    );
}
