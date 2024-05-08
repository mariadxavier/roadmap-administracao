import { TextLesson } from "../components/TextLesson";
import { Subtitle } from "../components/SubtitleLesson";
import { AccessButton } from "../components/AccessButton";
import { VideoYT } from "../components/VideoLesson"
import { Header } from "../components/HeaderLesson";
import imgTeste from "../assets/iconTeste.png";
import { ImgLesson } from "../components/ImgLesson";
import { Complementary } from "../components/Complementary";

export function Lesson() {
  return (
    <div className="flex flex-col gap-4 justify-center lg:items-center lg:px-10">
      <Header icon={imgTeste.toString()} title="Planilha" />
      <main className="flex flex-col gap-4 items-center px-2 pb-4 lg:w-11/12">
        <TextLesson />
        <ImgLesson src={imgTeste.toString()} />
        <Subtitle text="Subtítulo" />
        <TextLesson />
        <VideoYT
          src="https://www.youtube.com/embed/kPtTguJlRFY?si=IX5AJ9p6UOhw9ZTx"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        />
        <Complementary
          itens={[
            {
              link: "https://tailwindcss.com/docs/list-style-type",
              display: "Link 1",
            },
            { link: "", display: "LInk 2" },
            { link: "", display: "Link 3" },
          ]}
        />
        <div className="flex justify-center xsm:w-full w-9/12 sm:w-6/12 lg:self-end lg:w-4/12">
          <AccessButton text="Próximo" color="bg-buttonLesson-adm" />
        </div>
      </main>
    </div>
  );
}
