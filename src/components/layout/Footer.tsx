import Image from "next/image";
import Link from "next/link";
import { classNames } from "@/libs";

export default function Footer() {
  return (
    <footer className="mt-8">
      <div className="bg-secondary dark:bg-gray-800 pt-9">
        <div className="w-full max-w-screen px-4 xl:px-0">
          <div className="flex flex-col justify-between sm:px-[18px] md:flex-row md:px-10">
            <div className="md:w-2/5">
              <div className="flex justify-center md:justify-start">
                <Link href={"/"}>
                <Image
                  priority
                  src="/logo-light.png"
                  alt="Logo"
                  width={320}
                  height={198}
                  className="dark:hidden h-16 w-auto hover:opacity-75"
                />
                <Image
                  priority
                  src="/logo-dark.png"
                  alt="Logo Dark"
                  width={320}
                  height={198}
                  className="hidden dark:block h-16 w-auto hover:opacity-75"
                  />
                </Link>
              </div>
              <p className="mt-[18px] text-[13px] md:text-[14px] text-justify text-neutral-900 dark:text-neutral-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                fugit non. Incidunt dolorum adipisci, tempore asperiores nemo
                odio facere officiis enim animi placeat eaque nesciunt alias
                beatae id, at dicta.
              </p>
              <div className="mt-[18px] flex gap-4 justify-center md:justify-start">
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className={classNames(
                    "text-neutral-900",
                    "transition",
                    "hover:opacity-75",
                    "dark:text-neutral-200"
                  )}
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>

                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className={classNames(
                    "text-neutral-900",
                    "transition",
                    "hover:opacity-75",
                    "dark:text-neutral-200"
                  )}
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className={classNames(
                    "text-neutral-900",
                    "transition",
                    "hover:opacity-75",
                    "dark:text-neutral-200"
                  )}
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="mt-[15px] border-b border-neutral-600 dark:border-neutral-400"></div>
            <div className="w-full md:w-2/5 flex flex-col lg:pl-12 lg:ml-12">
              <div className="mt-[23px] flex text-neutral-900 dark:text-neutral-200">
                <div className="flex h-[38px] w-[38px] items-center justify-start lg:justify-center rounded-[75%] dark:invert">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.8472 14.8554L16.4306 12.8764L16.4184 12.8707C16.1892 12.7727 15.939 12.7333 15.6907 12.7562C15.4424 12.7792 15.2037 12.8636 14.9963 13.002C14.9718 13.0181 14.9484 13.0357 14.9259 13.0545L12.6441 14.9998C11.1984 14.2976 9.70595 12.8164 9.00376 11.3895L10.9519 9.07294C10.9706 9.0495 10.9884 9.02606 11.0053 9.00075C11.1407 8.79384 11.2229 8.55667 11.2445 8.31035C11.2661 8.06402 11.2264 7.81618 11.1291 7.58887V7.57762L9.14438 3.15356C9.0157 2.85662 8.79444 2.60926 8.51362 2.44841C8.2328 2.28756 7.9075 2.22184 7.58626 2.26106C6.31592 2.42822 5.14986 3.05209 4.30588 4.01615C3.4619 4.98021 2.99771 6.21852 3.00001 7.49981C3.00001 14.9436 9.05626 20.9998 16.5 20.9998C17.7813 21.0021 19.0196 20.5379 19.9837 19.6939C20.9477 18.85 21.5716 17.6839 21.7388 16.4136C21.7781 16.0924 21.7125 15.7672 21.5518 15.4864C21.3911 15.2056 21.144 14.9843 20.8472 14.8554ZM16.5 19.4998C13.3185 19.4963 10.2682 18.2309 8.01856 15.9813C5.76888 13.7316 4.50348 10.6813 4.50001 7.49981C4.49648 6.58433 4.82631 5.69887 5.42789 5.00879C6.02947 4.3187 6.86167 3.87118 7.76907 3.74981C7.7687 3.75355 7.7687 3.75732 7.76907 3.76106L9.73782 8.16731L7.80001 10.4867C7.78034 10.5093 7.76247 10.5335 7.74657 10.5589C7.60549 10.7754 7.52273 11.0246 7.5063 11.2825C7.48988 11.5404 7.54035 11.7981 7.65282 12.0307C8.5022 13.7679 10.2525 15.5051 12.0084 16.3536C12.2428 16.465 12.502 16.5137 12.7608 16.495C13.0196 16.4762 13.2692 16.3907 13.485 16.2467C13.5091 16.2305 13.5322 16.2129 13.5544 16.1942L15.8334 14.2498L20.2397 16.2232C20.2397 16.2232 20.2472 16.2232 20.25 16.2232C20.1301 17.1319 19.6833 17.9658 18.9931 18.5689C18.3028 19.172 17.4166 19.5029 16.5 19.4998Z"
                      fill="black"
                    ></path>
                  </svg>
                </div>
                <div className="lg:ml-[18px]">
                  <a
                    href="tel:+33123456789"
                    className="text-[13px] md:text-[14px] text-neutral-900 hover:underline underline-offset-4 dark:text-neutral-200 dark:hover:underline-neutral-200"
                  >
                    +33 (0)1 23 45 67 89
                  </a>
                  <p className="text-[10px] md:text-[12px]">
                    Support Number
                  </p>
                </div>
              </div>
              <div className="mt-[23px] flex">
                <div className="flex h-[38px] w-[38px] items-center justify-start lg:justify-center rounded-[75%] dark:invert">
                  <svg
                    width="20"
                    height="15"
                    viewBox="0 0 20 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 0H1C0.801088 0 0.610322 0.0790178 0.46967 0.21967C0.329018 0.360322 0.25 0.551088 0.25 0.75V13.5C0.25 13.8978 0.408035 14.2794 0.68934 14.5607C0.970644 14.842 1.35218 15 1.75 15H18.25C18.6478 15 19.0294 14.842 19.3107 14.5607C19.592 14.2794 19.75 13.8978 19.75 13.5V0.75C19.75 0.551088 19.671 0.360322 19.5303 0.21967C19.3897 0.0790178 19.1989 0 19 0ZM10 7.98281L2.92844 1.5H17.0716L10 7.98281ZM7.25406 7.5L1.75 12.5447V2.45531L7.25406 7.5ZM8.36406 8.51719L9.48906 9.55312C9.62743 9.68014 9.80842 9.75062 9.99625 9.75062C10.1841 9.75062 10.3651 9.68014 10.5034 9.55312L11.6284 8.51719L17.0659 13.5H2.92844L8.36406 8.51719ZM12.7459 7.5L18.25 2.45438V12.5456L12.7459 7.5Z"
                      fill="black"
                    ></path>
                  </svg>
                </div>
                <div className="lg:ml-[18px]">
                  <a
                    href="mailto:email@lorem.com"
                    className="text-[13px] md:text-[14px] text-neutral-900 hover:underline underline-offset-4 dark:text-neutral-200 dark:hover:underline-neutral-200"
                  >
                    email@lorem.com
                  </a>
                  <p className="text-[10px] md:text-[12px]">Support Email</p>
                </div>
              </div>
              <div className="mt-[23px] flex">
                <div className="flex h-[38px] w-[38px] items-center justify-start lg:justify-center rounded-[75%] dark:invert">
                  <svg
                    width="18"
                    height="21"
                    viewBox="0 0 18 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 4.5C8.25832 4.5 7.5333 4.71993 6.91661 5.13199C6.29993 5.54404 5.81928 6.12971 5.53545 6.81494C5.25162 7.50016 5.17736 8.25416 5.32205 8.98159C5.46675 9.70902 5.8239 10.3772 6.34835 10.9017C6.8728 11.4261 7.54098 11.7833 8.26841 11.9279C8.99584 12.0726 9.74984 11.9984 10.4351 11.7145C11.1203 11.4307 11.706 10.9501 12.118 10.3334C12.5301 9.7167 12.75 8.99168 12.75 8.25C12.75 7.25544 12.3549 6.30161 11.6517 5.59835C10.9484 4.89509 9.99456 4.5 9 4.5ZM9 10.5C8.55499 10.5 8.11998 10.368 7.74997 10.1208C7.37996 9.87357 7.09157 9.52217 6.92127 9.11104C6.75097 8.6999 6.70642 8.2475 6.79323 7.81105C6.88005 7.37459 7.09434 6.97368 7.40901 6.65901C7.72368 6.34434 8.12459 6.13005 8.56105 6.04323C8.9975 5.95642 9.4499 6.00097 9.86104 6.17127C10.2722 6.34157 10.6236 6.62996 10.8708 6.99997C11.118 7.36998 11.25 7.80499 11.25 8.25C11.25 8.84674 11.0129 9.41903 10.591 9.84099C10.169 10.2629 9.59674 10.5 9 10.5ZM9 0C6.81273 0.00248131 4.71575 0.872472 3.16911 2.41911C1.62247 3.96575 0.752481 6.06273 0.75 8.25C0.75 11.1938 2.11031 14.3138 4.6875 17.2734C5.84552 18.6108 7.14886 19.8151 8.57344 20.8641C8.69954 20.9524 8.84978 20.9998 9.00375 20.9998C9.15772 20.9998 9.30796 20.9524 9.43406 20.8641C10.856 19.8147 12.1568 18.6104 13.3125 17.2734C15.8859 14.3138 17.25 11.1938 17.25 8.25C17.2475 6.06273 16.3775 3.96575 14.8309 2.41911C13.2843 0.872472 11.1873 0.00248131 9 0ZM9 19.3125C7.45031 18.0938 2.25 13.6172 2.25 8.25C2.25 6.45979 2.96116 4.7429 4.22703 3.47703C5.4929 2.21116 7.20979 1.5 9 1.5C10.7902 1.5 12.5071 2.21116 13.773 3.47703C15.0388 4.7429 15.75 6.45979 15.75 8.25C15.75 13.6153 10.5497 18.0938 9 19.3125Z"
                      fill="black"
                    ></path>
                  </svg>
                </div>
                <div className="lg:ml-[18px]">
                  <a
                    href="#"
                    className="text-[13px] md:text-[14px] text-neutral-900 hover:underline underline-offset-4 dark:text-neutral-200 dark:hover:underline-neutral-200"
                  >
                    CESI, Saint-Etienne-du-Rouvray, 76000
                  </a>
                  <p className="text-[10px] md:text-[12px]">Address</p>
                </div>
              </div>
            </div>
            <div className="hidden md:mt-6 md:flex md:flex-col md:items-start md:items-center md:justify-end sm:flex-row md:mt-0 md:w-1/5">
            <div>
              <p className="font-bold text-[16px] text-neutral-900 dark:text-neutral-200">
                Pages
              </p>
              <ul className="text-[13px] md:text-[14px]">
                <li className="mt-[15px]">
                  <a
                    href="#"
                    rel="noreferrer"
                    className={classNames(
                      "text-neutral-900",
                      "transition",
                      "hover:underline",
                      "underline-offset-4",
                      "dark:text-neutral-200",
                      "dark:hover:underline-neutral-200"
                    )}
                  >
                    Lorem
                  </a>
                </li>
                <li className="mt-[15px]">
                  <a
                    href="#"
                    rel="noreferrer"
                    className={classNames(
                      "text-neutral-900",
                      "transition",
                      "hover:underline",
                      "underline-offset-4",
                      "dark:text-neutral-200",
                      "dark:hover:underline-neutral-200"
                    )}
                  >
                    Ipsum
                  </a>
                </li>
                <li className="mt-[15px]">
                  <a
                    href="#"
                    rel="noreferrer"
                    className={classNames(
                      "text-neutral-900",
                      "transition",
                      "hover:underline",
                      "underline-offset-4",
                      "dark:text-neutral-200",
                      "dark:hover:underline-neutral-200"
                    )}
                  >
                    Dolor
                  </a>
                </li>
                <li className="mt-[15px]">
                  <a
                    href="#"
                    rel="noreferrer"
                    className={classNames(
                      "text-neutral-900",
                      "transition",
                      "hover:underline",
                      "underline-offset-4",
                      "dark:text-neutral-200",
                      "dark:hover:underline-neutral-200"
                    )}
                  >
                    Sit
                  </a>
                </li>
                <li className="mt-[15px]">
                  <a
                    href="#"
                    rel="noreferrer"
                    className={classNames(
                      "text-neutral-900",
                      "transition",
                      "hover:underline",
                      "underline-offset-4",
                      "dark:text-neutral-200",
                      "dark:hover:underline-neutral-200"
                    )}
                  >
                    Amet
                  </a>
                </li>
                <li className="mt-[15px]">
                  <a
                    href="#"
                    rel="noreferrer"
                    className={classNames(
                      "text-neutral-900",
                      "transition",
                      "hover:underline",
                      "underline-offset-4",
                      "dark:text-neutral-200",
                      "dark:hover:underline-neutral-200"
                    )}
                  >
                    Privacy policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          </div>
          <div className="mt-[15px] border-b border-neutral-600 dark:border-neutral-400"></div>
          <div className="w-min-screen flex items-center justify-center py-[15px] md:py-6">
            <p className="text-[11px] md:text-[14px] text-neutral-900 dark:text-neutral-200">
              © 2024 Boujou-Normandie. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
