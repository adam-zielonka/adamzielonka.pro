/* eslint-disable react/display-name */
/* eslint-disable max-len */

function icon(path: string) {
  return ({ size = 30 }:{ size?: number }) => <svg style={{ height: size }} viewBox="0 0 24 24">
    <path d={path} />
  </svg>;

}

export const BoxMultipleIcon = icon("M16.2999 2.33017C15.461 2.02015 14.539 2.02015 13.7001 2.33017L9.39337 3.92175C8.70625 4.17569 8.25 4.83071 8.25 5.56325V8.35645C9.05071 8.22843 9.87632 8.30674 10.6466 8.59139L14.9533 10.183C16.033 10.582 16.75 11.6113 16.75 12.7625V18.4325C16.75 18.7547 16.6938 19.0674 16.5892 19.3594L20.6066 17.8748C21.2937 17.6208 21.75 16.9658 21.75 16.2333V5.56325C21.75 4.83071 21.2937 4.17569 20.6066 3.92175L16.2999 2.33017ZM11.7692 7.20808C11.3777 7.07275 11.1701 6.64569 11.3054 6.25421C11.4407 5.86272 11.8678 5.65506 12.2593 5.79038L14.9178 6.70934C14.9708 6.72765 15.0284 6.72763 15.0813 6.70928L17.7318 5.79088C18.1232 5.65526 18.5504 5.8626 18.686 6.25398C18.8216 6.64536 18.6143 7.07258 18.2229 7.2082L15.5725 8.1266C15.2017 8.25506 14.7986 8.25521 14.4278 8.12703L11.7692 7.20808ZM7.70008 9.52939C8.53897 9.21937 9.46103 9.21937 10.2999 9.52939L14.6066 11.121C15.2937 11.3749 15.75 12.0299 15.75 12.7625V18.4325C15.75 19.165 15.2937 19.8201 14.6066 20.074L10.2999 21.6656C9.46103 21.9756 8.53897 21.9756 7.70008 21.6656L3.39337 20.074C2.70625 19.8201 2.25 19.165 2.25 18.4325V12.7625C2.25 12.0299 2.70625 11.3749 3.39337 11.121L7.70008 9.52939ZM5.30538 13.7132C5.17006 14.1047 5.37772 14.5317 5.76921 14.6671L8.24989 15.5245V18.2234C8.24989 18.6376 8.58567 18.9734 8.99989 18.9734C9.4141 18.9734 9.74989 18.6376 9.74989 18.2234V15.5241L12.2229 14.6672C12.6143 14.5316 12.8216 14.1043 12.686 13.713C12.5504 13.3216 12.1232 13.1142 11.7318 13.2499L8.99959 14.1966L6.25925 13.2494C5.86776 13.114 5.4407 13.3217 5.30538 13.7132Z");
export const BoxMultipleOutlineIcon = icon("M15.78 3.73716C15.2766 3.55115 14.7234 3.55115 14.22 3.73716L9.91334 5.32875C9.81518 5.36503 9.75 5.4586 9.75 5.56325V8.35645C9.25319 8.27702 8.7468 8.27702 8.25 8.35645V5.56325C8.25 4.83071 8.70625 4.17569 9.39337 3.92175L13.7001 2.33017C14.539 2.02015 15.461 2.02015 16.2999 2.33017L20.6066 3.92175C21.2937 4.17569 21.75 4.83071 21.75 5.56325V16.2333C21.75 16.9658 21.2937 17.6208 20.6066 17.8748L16.5892 19.3594C16.6938 19.0674 16.75 18.7547 16.75 18.4325V17.7009L20.0867 16.4678C20.1848 16.4315 20.25 16.3379 20.25 16.2333V5.56325C20.25 5.4586 20.1848 5.36503 20.0867 5.32875L15.78 3.73716ZM11.7692 7.66706C11.3777 7.53174 11.1701 7.10468 11.3054 6.71319C11.4407 6.32171 11.8678 6.11404 12.2593 6.24936L14.9178 7.16832C14.9708 7.18663 15.0284 7.18661 15.0813 7.16826L17.7318 6.24986C18.1232 6.11424 18.5504 6.32158 18.686 6.71297C18.8216 7.10435 18.6143 7.53157 18.2229 7.66718L15.5725 8.58558C15.2017 8.71404 14.7986 8.7142 14.4278 8.58602L11.7692 7.66706ZM5.76921 14.6671C5.37772 14.5317 5.17006 14.1047 5.30538 13.7132C5.4407 13.3217 5.86776 13.114 6.25925 13.2494L8.99959 14.1966L11.7318 13.2499C12.1232 13.1142 12.5504 13.3216 12.686 13.713C12.8216 14.1043 12.6143 14.5316 12.2229 14.6672L9.74989 15.5241V18.2234C9.74989 18.6376 9.4141 18.9734 8.99989 18.9734C8.58567 18.9734 8.24989 18.6376 8.24989 18.2234V15.5245L5.76921 14.6671ZM10.2999 9.52939C9.46103 9.21937 8.53897 9.21937 7.70008 9.52939L3.39337 11.121C2.70625 11.3749 2.25 12.0299 2.25 12.7625V18.4325C2.25 19.165 2.70625 19.8201 3.39337 20.074L7.70008 21.6656C8.53897 21.9756 9.46103 21.9756 10.2999 21.6656L14.6066 20.074C15.2937 19.8201 15.75 19.165 15.75 18.4325V12.7625C15.75 12.0299 15.2937 11.3749 14.6066 11.121L10.2999 9.52939ZM8.22005 10.9364C8.72338 10.7504 9.27662 10.7504 9.77995 10.9364L14.0867 12.528C14.1848 12.5642 14.25 12.6578 14.25 12.7625V18.4325C14.25 18.5371 14.1848 18.6307 14.0867 18.667L9.77995 20.2586C9.27662 20.4446 8.72338 20.4446 8.22005 20.2586L3.91334 18.667C3.81518 18.6307 3.75 18.5371 3.75 18.4325V12.7625C3.75 12.6578 3.81518 12.5642 3.91334 12.528L8.22005 10.9364Z");
export const CubeIcon = icon("M13.4089 2.51106C12.5053 2.14475 11.4947 2.14475 10.5911 2.51106L3.09252 5.55102C2.43211 5.81876 2 6.4602 2 7.17282V16.8255C2 17.5381 2.43211 18.1796 3.09252 18.4473L10.5911 21.4873C11.4947 21.8536 12.5053 21.8536 13.4089 21.4873L20.9075 18.4473C21.5679 18.1796 22 17.5381 22 16.8255V7.17282C22 6.4602 21.5679 5.81876 20.9075 5.55102L13.4089 2.51106ZM6.04873 7.98306C6.19566 7.59578 6.62872 7.40094 7.016 7.54788L12 9.43876L16.9839 7.54788C17.3712 7.40094 17.8043 7.59578 17.9512 7.98306C18.0981 8.37034 17.9033 8.8034 17.516 8.95033L12.75 10.7585V16.2491C12.75 16.6634 12.4142 16.9991 12 16.9991C11.5858 16.9991 11.25 16.6634 11.25 16.2491V10.7586L6.48392 8.95033C6.09664 8.8034 5.9018 8.37034 6.04873 7.98306Z");
export const CubeOutlineIcon = icon("M6.04873 7.98306C6.19566 7.59578 6.62872 7.40094 7.016 7.54788L12 9.43876L16.9839 7.54788C17.3712 7.40094 17.8043 7.59578 17.9512 7.98306C18.0981 8.37034 17.9033 8.8034 17.516 8.95033L12.75 10.7585V16.2491C12.75 16.6634 12.4142 16.9991 12 16.9991C11.5858 16.9991 11.25 16.6634 11.25 16.2491V10.7586L6.48392 8.95033C6.09664 8.8034 5.9018 8.37034 6.04873 7.98306ZM10.5911 2.51106C11.4947 2.14475 12.5053 2.14475 13.4089 2.51106L20.9075 5.55102C21.5679 5.81876 22 6.4602 22 7.17282V16.8255C22 17.5381 21.5679 18.1796 20.9075 18.4473L13.4089 21.4873C12.5053 21.8536 11.4947 21.8536 10.5911 21.4873L3.09252 18.4473C2.43211 18.1796 2 17.5381 2 16.8255V7.17282C2 6.4602 2.43211 5.81876 3.09252 5.55102L10.5911 2.51106ZM12.8453 3.90116C12.3032 3.68138 11.6968 3.68138 11.1547 3.90116L3.65607 6.94113C3.56173 6.97938 3.5 7.07102 3.5 7.17282V16.8255C3.5 16.9273 3.56173 17.019 3.65607 17.0572L11.1547 20.0972C11.6968 20.317 12.3032 20.317 12.8453 20.0972L20.3439 17.0572C20.4383 17.019 20.5 16.9273 20.5 16.8255V7.17282C20.5 7.07102 20.4383 6.97938 20.3439 6.94113L12.8453 3.90116Z");
