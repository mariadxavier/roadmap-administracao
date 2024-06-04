import imgChildren from '../assets/3d-business-children-at-a-laptop-with-a-robot-assistant 1.png';

export function FormOpinion() {
  return (
    <div className="w-full px-4 h-fit grid place-items-center">
      <div className=" bg-[#EFBFCC] w-full max-w-[370px] h-[20dvh] max-h-[120px] flex items-end pl-4 rounded-2xl gap-1 ">
        <div className="mb-6 xsm:mb-3">
          <h4 className="font-poppins font-extrabold text-white mb-2 text-nowrap text-lg xsm:text-sm">
            Sua opinião importa!
          </h4>
          <button className="px-4 py-2 bg-white rounded-lg text-base xsm:text-sm font-bold text-titlePages-adm">
            Saiba mais
          </button>
        </div>
        <div className=" w-full h-full relative flex items-center justify-center">
          {/* <img
            className="rounded-lg bottom-0 w-full h-full absolute"
            src={imgDevs}
            draggable={false}
          /> */}
          <img className="rounded-lg absolute"
            src={imgChildren}
            draggable={false}/>
        </div>
      </div>
    </div>
  );
}
