import { useCallback } from "react";

const CreateAccountPage = () => {
  const onHomeTextClick = useCallback(() => {
    // Please sync "Event Landing Page" to the project
  }, []);

  return (
    <div className="w-full relative bg-white h-[958px] overflow-hidden text-left text-base text-dimgray-100 font-poppins">
      <div className=" w-full absolute top-[132px] left-[391px] bg-white box-border w-[659px] h-[701px] overflow-hidden border-[2px] border-solid border-midnightblue" />
      <div className="absolute top-[1702px] left-[1618px] flex flex-row items-start justify-start gap-[0px_16px]">
        <img className="w-5 relative h-5" alt="" src="/div.svg" />
        <img className="w-5 relative h-5" alt="" src="/div1.svg" />
        <img className="w-5 relative h-5" alt="" src="/div2.svg" />
      </div>
      <div className="absolute top-[0px] left-[0px] bg-midnightblue w-[1440px] h-[118px] overflow-hidden text-center text-xl text-black font-plus-jakarta-sans">
        <b className="absolute top-[9px] left-[27px] text-6xl leading-[24px] flex font-inknut-antiqua text-midnightblue text-left items-center w-[458px] h-[99px]">
          FESTIVE nest . COM
        </b>
        <div className="absolute top-[37px] left-[1086px] bg-midnightblue w-[121px] h-11" />
        <div className="absolute top-[47px] left-[1102px] text-lgi leading-[24px] font-semibold text-white text-left">
          List Event
        </div>
        <div className="absolute top-[37px] left-[1224px] bg-midnightblue w-48 h-11" />
        <div className="absolute top-[47px] left-[1251px] text-lgi leading-[24px] font-semibold text-white text-left">
          Login/Registor
        </div>
        <div className="absolute top-[47px] left-[calc(50%_-_117px)] leading-[24px] font-semibold">{`About `}</div>
        <div className="absolute top-[47px] left-[calc(50%_-_26px)] leading-[24px] font-semibold">
          Find Events
        </div>
        <div className="absolute top-[47px] left-[calc(50%_-_227px)] leading-[24px] font-semibold">{`Contact `}</div>
        <div
          className="absolute top-[47px] left-[calc(50%_+_115px)] leading-[24px] font-semibold cursor-pointer"
          onClick={onHomeTextClick}
        >
          Home
        </div>
      </div>
      <div className="absolute top-[151px] left-[510px] text-13xl font-medium text-darkslategray text-center flex items-center justify-center w-[420px] h-11">
        Create an account
      </div>
      <div className="absolute top-[195px] left-[586px] w-[247px] h-[39px] flex flex-row items-start justify-start p-0.5 box-border text-gray-100">
        <div className="relative">
          <span className="text-darkslategray">Already have an ccount?</span>
          <span className="text-dimgray-100">{` `}</span>
          <span className="[text-decoration:underline] whitespace-pre-wrap">{`Log in  `}</span>
        </div>
      </div>
      <div className="absolute top-[431px] left-[462px] w-[529px] h-[103px] flex flex-col items-start justify-start gap-[4px_0px]">
        <div className="self-stretch relative h-[27px]">
          <div className="absolute top-[0px] left-[0px]">Create a password</div>
          <div className="absolute top-[0px] right-[8.9px] w-[73px] h-[27px] text-right text-lg text-dimgray-200">
            <img
              className="absolute top-[3px] right-[49px] w-6 h-6 overflow-hidden"
              alt=""
              src="/icon.svg"
            />
            <div className="absolute top-[0px] right-[0px]">Hide</div>
          </div>
        </div>
        <div className="self-stretch relative rounded-xl box-border h-14 overflow-hidden shrink-0 text-dimgray-300 border-[1px] border-solid border-dimgray-400">
          <div className="absolute top-[15px] left-[24px] flex flex-row items-center justify-start">
            <div className="relative">Enter your password</div>
            <div className="w-px relative bg-gray-100 h-6 hidden" />
          </div>
          <img
            className="absolute top-[40px] right-[24px] w-6 h-6 overflow-hidden hidden"
            alt=""
            src="/icons.svg"
          />
        </div>
        <div className="relative text-sm">{`Use 8 or more characters with a mix of letters, numbers & symbols`}</div>
      </div>
      <div className="absolute top-[234px] left-[462px] w-[529px] h-[103px] flex flex-col items-start justify-start gap-[4px_0px]">
        <div className="self-stretch relative h-[27px]">
          <div className="absolute top-[0px] left-[0px]">
            What’s your email?
          </div>
          <div className="absolute top-[0px] right-[8.9px] w-[73px] h-[27px] hidden text-right text-lg text-dimgray-200">
            <img
              className="absolute top-[3px] right-[49px] w-6 h-6 overflow-hidden"
              alt=""
              src="/icon.svg"
            />
            <div className="absolute top-[0px] right-[0px]">Hide</div>
          </div>
        </div>
        <div className="self-stretch relative rounded-xl box-border h-14 overflow-hidden shrink-0 text-dimgray-300 border-[1px] border-solid border-dimgray-400">
          <div className="absolute top-[15px] left-[24px] flex flex-row items-center justify-start">
            <div className="relative">Enter your email address</div>
            <div className="w-px relative bg-gray-100 h-6 hidden" />
          </div>
          <img
            className="absolute top-[40px] right-[24px] w-6 h-6 overflow-hidden hidden"
            alt=""
            src="/icons.svg"
          />
        </div>
        <div className="w-[101px] relative text-sm text-crimson hidden">
          Error message
        </div>
      </div>
      <div className="absolute top-[337px] left-[462px] w-[529px] h-[103px] flex flex-col items-start justify-start gap-[4px_0px]">
        <div className="self-stretch relative h-[27px]">
          <div className="absolute top-[0px] left-[0px]">
            What should we call you?
          </div>
          <div className="absolute top-[0px] right-[8.9px] w-[73px] h-[27px] hidden text-right text-lg text-dimgray-200">
            <img
              className="absolute top-[3px] right-[49px] w-6 h-6 overflow-hidden"
              alt=""
              src="/icon.svg"
            />
            <div className="absolute top-[0px] right-[0px]">Hide</div>
          </div>
        </div>
        <div className="self-stretch relative rounded-xl box-border h-14 overflow-hidden shrink-0 text-dimgray-300 border-[1px] border-solid border-dimgray-400">
          <div className="absolute top-[15px] left-[24px] flex flex-row items-center justify-start">
            <div className="relative">Enter your profile name</div>
            <div className="w-px relative bg-gray-100 h-6 hidden" />
          </div>
          <img
            className="absolute top-[40px] right-[24px] w-6 h-6 overflow-hidden hidden"
            alt=""
            src="/icons.svg"
          />
        </div>
        <div className="w-[101px] relative text-sm text-crimson hidden">
          Error message
        </div>
      </div>
      <div className="absolute top-[559px] left-[463px] w-[529px] h-[103px] flex flex-row items-start justify-start py-2 pr-2 pl-0 box-border text-sm text-gray-100">
        <div className="relative">
          <span className="text-darkslategray">{`By creating an account, you agree to the `}</span>
          <span className="[text-decoration:underline]">Terms of use</span>
          <span className="text-dimgray-100">{` `}</span>
          <span className="text-darkslategray">and</span>
          <span className="text-dimgray-100">{` `}</span>
          <span className="[text-decoration:underline]">
            <span>Privacy Policy.</span>
            <span className="text-dimgray-100">{` `}</span>
          </span>
        </div>
      </div>
      <div className="absolute top-[682px] left-[616px] text-5xl font-avenir flex items-center w-[186px] h-[30px]">
        OR Continue with
      </div>
      <div className="absolute top-[720px] left-[599px] rounded-21xl bg-white box-border w-[219px] h-[58px] overflow-hidden text-3xl text-darkslategray font-avenir border-[1px] border-solid border-darkslategray">
        <div className="absolute top-[calc(50%_-_15.5px)] left-[calc(50%_-_56.5px)] flex flex-row items-center justify-center gap-[0px_16px]">
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0"
            alt=""
            src="/social-media-logo.svg"
          />
          <div className="relative">Google</div>
        </div>
      </div>
      <div className="absolute h-[calc(100%_-_895px)] w-[calc(100%_-_911px)] top-[611px] right-[449px] bottom-[284px] left-[462px] rounded-21xl bg-gray-100 overflow-hidden opacity-[0.25] text-center text-3xl text-white">
        <div className="absolute top-[calc(50%_-_16.5px)] left-[calc(50%_-_104px)] flex flex-row items-center justify-center gap-[0px_8px]">
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
            alt=""
            src="/icons.svg"
          />
          <div className="relative font-medium">Create an account</div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountPage;
