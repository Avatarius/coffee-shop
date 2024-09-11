import { IconType } from "./types";

const iconData = {
  [IconType.Back]: {
    path: (
      <>
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z"
            fill=""
          ></path>
        </g>
      </>
    ),
    viewBox: "0 0 1024 1024",
    size: 40,
  },
  [IconType.Remove]: {
    path: (
      <>
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M4.917 14.889c0 .468.687 1.111 1.146 1.111h6.875c.458 0 1.145-.643 1.145-1.111V6H4.917v8.889ZM15 3.465h-2.444L11.333 2H7.667L6.444 3.465H4V4.93h11V3.465Z"
        />
      </>
    ),
    viewBox: "-0.5 0 19 19",
    size: 35,
  },
  [IconType.Basket]: {
    path: (
      <path
        fill="#fff"
        d="M60.53 18.71A2 2 0 0 0 59 18H48.85A15 15 0 0 0 34 5h-4a15 15 0 0 0-14.85 13H5a2 2 0 0 0-1.53.71A2 2 0 0 0 3 20.35l5.33 30.3A6.51 6.51 0 0 0 14.77 56h34.46a6.51 6.51 0 0 0 6.41-5.36L61 20.35a2 2 0 0 0-.47-1.64ZM30 9h4a11 11 0 0 1 10.81 9H19.19A11 11 0 0 1 30 9Zm21.71 40.94A2.52 2.52 0 0 1 49.23 52H14.77a2.5 2.5 0 0 1-2.47-2L7.38 22h49.24Z"
      />
    ),
    viewBox: "0 0 64 64",
    size: 32,
  },
  [IconType.Close]: {
    path: (
      <g
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <path d="m3 21.32 18-18M3 3.32l18 18" />
      </g>
    ),
    viewBox: "-0.5 0 25 25",
    size: 35,
  },
  [IconType.LeftArrow]: {
    path: (
      <path d="M768 903.232 717.568 960 256 512 717.568 64 768 120.768 364.928 512z" />
    ),
    viewBox: "0 0 1024 1024",
    size: 50,
  },
  [IconType.RightArrow]: {
    path: (
      <path d="M256 120.768 306.432 64 768 512 306.432 960 256 903.232 659.072 512z" />
    ),
    viewBox: "0 0 1024 1024",
    size: 50,
  },
  [IconType.Success]: {
    path: (
      <path d="M78.049 19.015 29.458 67.606a1.094 1.094 0 0 1-1.548 0L.32 40.015a1.094 1.094 0 0 1 0-1.547l6.704-6.704a1.095 1.095 0 0 1 1.548 0l20.113 20.112 41.113-41.113a1.095 1.095 0 0 1 1.548 0l6.703 6.704a1.094 1.094 0 0 1 0 1.548z" />
    ),
    viewBox: "0 0 78.369 78.369",
    size: 350,
  },
};


export { iconData };
