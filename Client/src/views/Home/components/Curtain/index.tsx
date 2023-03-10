import * as React from "react";
import TeaslaCar from "@/assets/tesla/Tesla_model3_black.png";
interface ICurtainProps {
  config: {
    propaganda: string;
    propagandaContent: string;
    carUrl: string;
    jumpLink: string;
  };
}
// 大幕
const Curtain: React.FC<ICurtainProps> = ({ config }) => {
  return (
    <div className="bg-white h-auto dark:bg-gray-800 ">
      <div className="mx-auto max-w-7xl lg:py-16">
        <div className="relative isolate overflow-hidden p-12 lg:flex lg:items-center lg:gap-x-20 lg:pt-0">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl dark:text-white">
              {config.propaganda}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-400 dark:text-gray-300">
              {config.propagandaContent}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#"
                className="rounded-md  bg-green-500 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-green-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                立即下单
              </a>
              <a
                href={config.jumpLink}
                className="text-base font-semibold leading-7 text-black dark:text-white"
              >
                了解更多 <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative mt-16">
            <img
              className=" mx-auto w-full  max-w-none"
              src={config.carUrl}
              alt="App screenshot"
              width="1824"
              height="1080"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curtain;
