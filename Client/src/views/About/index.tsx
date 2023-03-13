import { useAppSelector } from "@/hooks/hooks";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import tesla from "@/assets/tesla/Tesla_model3_black.png";
interface IAboutProps {}
interface IAbout {
  name: string;
  email: string;
  avatarUrl: string;
  createTime: string;
}
const people = [
  {
    name: "特斯拉",
    role: "Model 3",
    imageUrl:
      "https://ts1.cn.mm.bing.net/th/id/R-C.4856b769f6e45e10a43437c9547e3cff?rik=iSWY546wjIYbmw&riu=http%3a%2f%2fwww.kuaipng.com%2fUploads%2fpic%2fwater%2f35899%2fgoods_water_35899_698_698_.png&ehk=lmkdFTpu6K0sIAp%2flppbdl5K7c1mKnRrKK0grYlCfI8%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    name: "特斯拉",
    role: "Model 3",
    imageUrl:
      "https://ts1.cn.mm.bing.net/th/id/R-C.4856b769f6e45e10a43437c9547e3cff?rik=iSWY546wjIYbmw&riu=http%3a%2f%2fwww.kuaipng.com%2fUploads%2fpic%2fwater%2f35899%2fgoods_water_35899_698_698_.png&ehk=lmkdFTpu6K0sIAp%2flppbdl5K7c1mKnRrKK0grYlCfI8%3d&risl=&pid=ImgRaw&r=0",
  },
];

const About: React.FunctionComponent<IAboutProps> = (props) => {
  const Selector: any = useAppSelector((state) => {
    return state.users;
  });
  const navigate = useNavigate();
  const { name, email, avatarUrl, createTime } = Selector;

  return (
    <div className="container mx-auto animate-lefttoright relative  ">
      <header className="w-full flex items-center p-3 sticky">
        <div
          onClick={() => navigate("/home")}
          className="w-14 h-14 rounded-full  shadow-lg bg-green-500 flex items-center cursor-pointer hover:scale-125 justify-center"
        >
          <ChevronLeftIcon className=" w-3/5 h-3/5 text-white" />
        </div>
      </header>
      <main className=" w-full h-auto p-2 flex flex-col lg:flex-row justify-around">
        {/* 个人信息 */}
        <div className="  max-w-sm w-full h-auto bg-white  mx-auto lg:shadow-lg lg:rounded-2xl dark:bg-gray-800">
          <img
            alt="profil"
            src="https://bing.com/th?id=OHR.LionessesNap_ZH-CN9240393299_1920x1080.jpg"
            className="w-full hidden lg:block mb-4 lg:rounded-t-lg lg:h-40"
          />
          <div className="flex flex-col items-center justify-center p-4 lg:-mt-16">
            <a href="#" className="relative block">
              <img
                alt="profil"
                src={avatarUrl}
                className="mx-auto object-cover rounded-full h-24 w-24 "
              />
            </a>
            <p className="mt-2 text-xl font-medium text-gray-800 dark:text-white">
              {name.substring(0, [15])}
            </p>
            <p className="flex items-center text-xs text-gray-400 my-2">
              {email}
            </p>
            <p className="text-xs text-white  bg-green-400 p-2 px-3 rounded-full">
              开发者
            </p>
            <div className="flex items-center justify-between w-full gap-4 mt-8">
              <button
                type="button"
                className="py-2 px-4 w-44 mx-auto  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                编辑信息
              </button>
            </div>
          </div>
        </div>
        {/* 卡片 */}
        <div className="flex-1 max-w-4xl p-2  flex flex-wrap bg-white rounded-lg">
          <h1 className=" text-sm font-semibold mb-1">新能源座驾</h1>
          <div className=" flex items-center flex-row-reverse w-full lg:w-96 mx-auto h-auto lg:h-56  p-4  m-1 overflow-hidden bg-white shadow-lg rounded-2xl border">
            <div className=" w-2/3">
              <img alt="moto" src={tesla} className="w-full  h-full" />
            </div>
            <div className=" w-2/6">
              <p className="mb-2 text-lg font-medium text-gray-800">Model 3</p>
              <p className="text-xs text-gray-400 text-left">暂时没有数据</p>
            </div>
          </div>
          <h1 className=" text-sm font-semibold my-3">关注的新能源品牌</h1>
          <div className="w-full">
            <ul
              role="list"
              className="grid gap-x-8 gap-y-3 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
            >
              {people.map((person, index) => (
                <li key={index}>
                  <div className="flex items-center gap-x-6 border bg-white p-3 rounded-xl shadow-lg">
                    <img
                      className="h-16 w-16 rounded-lg"
                      src={person.imageUrl}
                      alt=""
                    />
                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                        {person.name}
                      </h3>
                      <p className="text-sm font-semibold leading-6 text-green-600">
                        {person.role}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
