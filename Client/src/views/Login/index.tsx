import { LockClosedIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";
import {
  Create_Post as CreateUser,
  Login_Post as LoginUser,
} from "./api/index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { debounce } from "lodash";
import React, { useCallback, useEffect, useState } from "react";
import Modals from "@/components/Modals";
import { useNavigate } from "react-router-dom";
import Logo from "@/assets/logo.png";
interface ILoginProps {}

type Inputs = {
  email: string;
  password: string;
  rememberme: boolean;
};

const Login: React.FC<ILoginProps> = () => {
  const [opneModal, setOpenModal] = useState<boolean>(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<Inputs>();

  const login = async (user: Inputs) => {
    const requestResults = await LoginUser(user);
    const { data } = requestResults;
    if (data.success) {
      localStorage.setItem("token", data.data.access_token);
      toast.success(`ζ¬’θΏεζ₯~π`, {
        autoClose: 2000,
        pauseOnFocusLoss: false,
      });
      navigate("/home");
    }
    if (data.message === "η¨ζ·δΈε­ε¨" && !data.success) {
      setOpenModal(true);
    }
    if (data.message === "ε―η ιθ――" && !data.success) {
      toast.error(data.message, {
        autoClose: 2000,
        pauseOnFocusLoss: false,
      });
    }
  };
  const Create = async () => {
    const user = getValues();
    const { email, password } = user;

    const { data }: any = await CreateUser({
      email,
      password,
    });
    if (!data.success) {
      return toast.error(data.message, {
        autoClose: 2000,
        pauseOnFocusLoss: false,
      });
    }
    toast.success(`ζ³¨εζεοΌ`, {
      autoClose: 2000,
      pauseOnFocusLoss: false,
    });
    login(user);
    setOpenModal(false);
  };
  /**ι²ζε€η */
  const onSubmit = useCallback(debounce(login, 1000), []);

  return (
    <div className="w-full  h-screen flex flex-col lg:flex-row justify-between bg-slate-100 ">
      <ToastContainer position="top-center" />
      <Modals
        state={opneModal}
        type="error"
        onOK={Create}
        onClose={() => setOpenModal(false)}
        onCancel={async () => setOpenModal(false)}
        title={"η¨ζ·εε»Ίζι"}
        content={"ζ­€θ΄¦ζ·ζ²‘ζθ’«ζ³¨εθΏζ³θ¦η¨ζ­€ι?η?±εε»Ίη¨ζ·εοΌ"}
      />
      <div className=" lg:hidden"></div>
      <div className=" w-full p-4 rounded-t-3xl lg:rounded-none bg-white h-auto shadow-xl">
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <div className=" text-left lg:text-center ">
              <img
                className=" ml-2 lg:mx-auto w-auto h-12 scale-150"
                src={Logo}
                alt="Your Company"
              />
              <h2 className="mt-6  text-3xl font-bold tracking-tight text-gray-900">
                η»ε½ζ¨ηεΈζ·
              </h2>
              <p className="mt-2  text-sm text-gray-600">
                <a
                  href="#"
                  className="font-medium text-green-500 hover:text-green-600"
                >
                  εΌε§ζ¨ηθ΄­θ½¦ηζ΄»,δΉ°ε°εΏη±ηζ°θ½ζΊζ±½θ½¦
                </a>
              </p>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="-space-y-px rounded-md shadow-sm">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    ι?η?±
                  </label>
                  <input
                    type="email"
                    autoComplete="email"
                    required
                    {...register("email", {
                      required: true,
                      pattern:
                        /^[a-zA-Z0-9][a-zA-Z0-9_]+\@[a-zA-Z0-9]+\.(com|cn|net|com.cn)$/i,
                    })}
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
                    placeholder="η΅ε­ι?δ»Άε°ε"
                  />
                </div>
                <div>
                  <label id="password" className="sr-only">
                    ε―η 
                  </label>
                  <input
                    type="password"
                    autoComplete="current-password"
                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
                    placeholder="ε―η "
                    required
                    {...register("password", {
                      required: true,
                      pattern:
                        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[`~!@#$%^&*()_+<>?:"{},.\/\\;'[\]])[A-Za-z\d`~!@#$%^&*()_+<>?:"{},.\/\\;'[\]]{8,}$/,
                    })}
                  />
                </div>
              </div>
              <div className=" text-red-400 text-center -translate-y-3">
                <span>
                  {errors.email && "ι?η?±ζ ΌεΌζι?η?±ιθ――θ―·ζ£ζ₯ειθ―οΌ"}
                  {errors.password && "ε―η ζ ΌεΌζε―η ιθ――θ―·ζ£ζ₯ειθ―οΌ"}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    {...register("rememberme")}
                    className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    θ?°δ½η»ε½
                  </label>
                </div>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-green-600 hover:text-green-500"
                  >
                    εΏθ?°ε―η ?
                  </a>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-xl border border-transparent bg-green-600 py-4 px-4 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <LockClosedIcon
                      className="h-5 w-5 text-white group-hover:text-green-400"
                      aria-hidden="true"
                    />
                  </span>
                  η»ε½
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
