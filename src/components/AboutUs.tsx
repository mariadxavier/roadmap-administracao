import imgDevs from "../assets/img-devs.png";

export function AboutUs() {
  return (
    <div className="w-full px-4 h-fit grid place-items-center">
      <div className=" bg-[#EFBFCC] w-full max-w-[370px] h-[20dvh] max-h-[120px] flex items-end pl-4 rounded-lg gap-1 ">
        <div className="mb-6 xsm:mb-3">
          <h4 className="font-poppins font-extrabold text-white mb-2 text-nowrap text-lg xsm:text-sm">
            Desenvolvido por:
          </h4>
          <button className="px-4 py-2 bg-white rounded-lg text-base xsm:text-sm font-bold text-titlePages-adm">
            Saiba mais
          </button>
        </div>
        <div className=" w-full h-[calc(100%+15px)]  relative flex items-center justify-center">
          <img
            className="rounded-lg bottom-0 w-full h-full absolute"
            src={imgDevs}
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}
