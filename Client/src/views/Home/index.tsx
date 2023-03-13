import * as React from "react";
import Curtain from "./components/Curtain";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import TeaslaCar from "@/assets/tesla/Tesla_model3_black.png";
import Navigation from "@/components/Navigation";
import { useAppSelector } from "@/hooks/hooks";
import Pageone from "./components/page/Pageone";
interface IHomeProps {}

const curtainContent: any = [
  {
    id: 1,
    name: "特斯拉",
    data: {
      propaganda: "设计以安全为先，卓越的加速性能。",
      propagandaContent:
        "卓越的加速性能，百公里加速最快仅需 3.3 秒,通过操控性与空气动力的提升，最高时速可达 261 公里/小时，双电机全轮驱动实现对牵引力和扭矩的全天候精准控制",
      carUrl: TeaslaCar,
      jumpLink: "#",
    },
  },
  {
    id: 2,
    name: "奔驰",
    data: {
      propaganda: "感性纯粹，一见倾心,安心出发，安全抵达,科技出众，装备超前",
      propagandaContent:
        "是经典设计的数字化体现，更是艺术与功能的完美融合。是先锋的豪华，亦是电动的未来。",
      carUrl:
        "https://www.mercedes-benz.com.cn/content/dam/mb-cn/vehicles1/engine-list-reno/eq/EQC-350-4MATIC-%E7%BA%AF%E7%94%B5-SUV.png",
      jumpLink: "#",
    },
  },
];

const Home: React.FunctionComponent<IHomeProps> = (props) => {

  return (
    <div className="">
      <Navigation className="w-full" />
      <div className="w-full">
        <Swiper
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          spaceBetween={30}
          modules={[Autoplay, EffectFade]}
          effect="fade"
        >
          {curtainContent.map((item: any) => (
            <SwiperSlide key={item.id}>
              <Curtain config={item.data} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Pageone />
      </div>
    </div>
  );
};
export default Home;
