import WebsiteFooter from "../Components/WebsiteFooter";
import WebsiteHeader from "../Components/WebsiteHeader";

const DesignYourTickets = () => {
  return (
    <div>
      <WebsiteHeader />

      <div className="w-full relative bg-whitesmoke-200 h-[1129px] overflow-hidden text-left text-xl text-bisque font-inter">
        <div className="absolute top-[77px] left-[54px] rounded-xl bg-midnightblue w-[650px] h-[901px] overflow-hidden">
          <b className="absolute top-[564px] left-[51px] inline-block w-[494px]">
            {" "}
            Add an Image for your Ticket and Select Color
          </b>
          <img
            className="absolute top-[495px] left-[58px] w-[250px] h-3 object-contain"
            alt=""
            src="/admit-one@2x.png"
          />
          <b className="absolute top-[424px] left-[57px] inline-block w-[494px]">
            You can Admit more than one if you use group chat - /shrug
          </b>
          <div className="absolute top-[279px] right-[125px] flex flex-col items-center justify-start text-base text-white">
            <b className="relative opacity-[0.6]">Thursday</b>
            <b className="relative text-41xl opacity-[0.8]">30</b>
            <b className="relative text-center opacity-[0.6]">November 2021</b>
          </div>
          <div className="absolute top-[349px] left-[55px] flex flex-row items-center justify-start gap-[0px_8px] text-white">
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0 opacity-[0.8]"
              alt=""
              src="/mdclock.svg"
            />
            <div className="relative font-semibold opacity-[0.8]">
              19:30 BST - 23:00 BST
            </div>
          </div>
          <div className="absolute top-[297px] left-[58px] flex flex-row items-center justify-start gap-[0px_8px] text-white">
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0 opacity-[0.8]"
              alt=""
              src="/mdlocationmarker.svg"
            />
            <div className="relative font-semibold opacity-[0.8]">Location</div>
          </div>
          <b className="absolute top-[234px] left-[54px] inline-block w-[525px]">
            Add Location, Time and Date in each component
          </b>
          <b className="absolute top-[134px] left-[calc(50%_-_270px)] inline-block w-[372px] opacity-[0.8]">
            Optional Guests / Info *
          </b>
          <div className="absolute top-[42px] left-[54px] font-semibold inline-block w-[492px] h-[37px]">
            Enter Event Name *
          </div>
          {/* <div className=" flex-1 w-full px-4 py-2  appearance-none absolute top-[79px] left-[55px] bg-gray-200 box-border w-[517px] h-11 border-[1px] border-solid border-white" /> */}

          <label class="text-gray-700" for="name">
            <textarea
              class="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-transparent absolute top-[79px] left-[55px] bg-gray-200 box-border w-[499px] h-11 border-[1px] border-solid border-white"
              id="comment"
              placeholder="Enter your comment"
              name="comment"
              rows="1"
              cols="4"
            ></textarea>
          </label>

          <div className="absolute top-[169px] left-[55px] box-border w-[517px] h-11 border-[1px] border-solid border-white" />
          <div className="absolute h-[27.87%] w-[76.92%] top-[67.59%] right-[14.15%] bottom-[4.54%] left-[8.92%] text-sm text-white">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full opacity-[0.4] mix-blend-normal"
              alt=""
              src="/uploadbackgroundrectangle.svg"
            />
            <div className="absolute h-[67.98%] w-[58.4%] top-[16.01%] right-[20.8%] bottom-[16.01%] left-[20.8%] rounded-xl box-border overflow-hidden flex flex-col items-center justify-center py-10 px-6 border-[1px] border-dashed border-typography-200">
              <div className="self-stretch flex flex-col items-center justify-start gap-[16px_0px]">
                <img
                  className="w-8 relative h-8 overflow-hidden shrink-0"
                  alt=""
                  src="/paper-upload.svg"
                />
                <div className="flex flex-col items-center justify-start gap-[8px_0px]">
                  <div className="relative font-semibold">
                    <span>choose</span>
                    <span className="text-gray-100">{` `}</span>
                    <span className="text-whitesmoke-100">file to upload</span>
                  </div>
                  <div className="relative text-gray-300">Select image</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[77px] left-[743px] rounded-xl bg-white box-border w-[648px] h-[860px] border-[1px] border-solid border-black" />
        <div className="absolute top-[330px] left-[817px] w-[500px] h-[250px] text-xs text-white">
          <img
            className="absolute top-[0px] left-[0px] w-[500px] h-[250px]"
            alt=""
            src="/asset.svg"
          />
          <div className="absolute bottom-[16px] left-[64px] flex flex-col items-start justify-start gap-[8px_0px]">
            <div className="w-[232px] flex flex-row items-center justify-start gap-[0px_8px]">
              <img
                className="w-6 relative h-6 overflow-hidden shrink-0 opacity-[0.8]"
                alt=""
                src="/mdlocationmarker.svg"
              />
              <div className="flex-1 relative font-semibold opacity-[0.8]">
                Location
              </div>
            </div>
            <div className="w-[232px] flex flex-row items-center justify-start gap-[0px_8px]">
              <img
                className="w-6 relative h-6 overflow-hidden shrink-0 opacity-[0.8]"
                alt=""
                src="/mdclock.svg"
              />
              <div className="flex-1 relative font-semibold opacity-[0.8]">
                19:30 BST - 23:00 BST
              </div>
            </div>
          </div>
          <div className="absolute top-[138px] right-[64px] flex flex-col items-center justify-start text-base">
            <b className="relative opacity-[0.6]">Thursday</b>
            <b className="relative text-[48px] opacity-[0.8]">30</b>
            <b className="relative text-center opacity-[0.6]">November 2021</b>
          </div>
          <div className="absolute top-[24px] left-[64px] w-[372px] flex flex-col items-start justify-start gap-[8px_0px] text-13xl text-bisque">
            <b className="self-stretch relative">Event Name Here</b>
            <b className="self-stretch relative text-lg opacity-[0.8]">
              Optional Guests / Info
            </b>
          </div>
          <div className="absolute top-[0px] left-[452px] w-6 h-[250px]">
            <img
              className="absolute top-[0px] left-[12px] w-3 h-[250px] object-contain"
              alt=""
              src="/admit-one@2x.png"
            />
            <img
              className="absolute top-[0px] left-[0px] w-0 h-[250px]"
              alt=""
              src="/stubby.svg"
            />
          </div>
          <div className="absolute top-[0px] left-[24px] w-6 h-[250px] text-center text-[10px] text-gray-400">
            <div className="absolute top-[0px] left-[0px] w-3 h-[250px]">
              <b className="absolute w-[2083.33%] top-[100%] left-[0%] tracking-[0.05em] uppercase inline-block [transform:_rotate(-90deg)] [transform-origin:0_0]">
                Admit One
              </b>
            </div>
            <img
              className="absolute top-[0px] left-[24px] w-0 h-[250px]"
              alt=""
              src="/stubby.svg"
            />
          </div>
        </div>

        <button
          type="button"
          class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg  absolute top-[958px] left-[1046px] rounded-xl w-[333px] h-[71px]"
        >
          Download Ticket
        </button>
      </div>

      <WebsiteFooter />
    </div>
  );
};

export default DesignYourTickets;
