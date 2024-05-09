import imgMadu from "../assets/img_madu.png";
import imgAndre from "../assets/img_andre-.png";
import imgJoao from "../assets/img_joao.png";

export function AboutUs() {
  return (
    <div className="w-full px-4 h-fit grid place-items-center ">
      <div className=" bg-[#EFBFCC] w-full max-w-[370px] h-[20dvh] max-h-[120px] flex items-end pl-4 rounded-lg gap-4">
        <div className="mb-6 xsm:mb-3">
          <h4 className="font-poppins font-extrabold text-white mb-2 text-nowrap xsm:text-sm">
            Desenvolvido por:
          </h4>
          <button className="px-2 py-1 bg-white rounded-lg text-sm xsm:text-xs">
            Saiba mais
          </button>
        </div>
        <div className="w-full bg-yellow-500 h-full relative flex items-center justify-center">
          <img src={imgAndre} className="w-[80%] absolute -left-1/3" />
          <img src={imgMadu} className="w-[80%] absolute z-10 ml-1" />
          <img src={imgJoao} className="w-[100%] absolute -right-2/4 " />
        </div>
      </div>
    </div>
  );
}
