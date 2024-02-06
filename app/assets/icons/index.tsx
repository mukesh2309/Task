import React from 'react';
import Svg, {Path, G} from 'react-native-svg';

interface IProps {
  fillColor?: string;
}

export const HomeIcon = ({fillColor}: IProps) => (
  <Svg width="18" height="20" viewBox="0 0 18 20" fill="none">
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.7248 1.42988C10.2441 -0.143295 7.74392 -0.143291 6.26329 1.42988L1.26925 6.73605C0.614552 7.43167 0.25 8.35091 0.25 9.30617V15.2981C0.25 17.2783 1.7897 18.9173 3.76608 19.0408L9 19.3679L14.2322 19.0409C16.2095 18.9173 17.7495 17.2771 17.7483 15.296L17.7447 9.31099C17.7442 8.35651 17.3797 7.43816 16.7255 6.74311L11.7248 1.42988ZM8.86918 11.0769C8.94943 11.0276 9.05057 11.0276 9.13082 11.0769L11.1308 12.3049C11.2049 12.3504 11.25 12.4311 11.25 12.518V15.1164C11.25 15.5307 11.5858 15.8664 12 15.8664C12.4142 15.8664 12.75 15.5307 12.75 15.1164V12.518C12.75 11.9097 12.4341 11.345 11.9157 11.0267L9.91571 9.79862C9.35396 9.45368 8.64604 9.45368 8.08429 9.79862L6.08429 11.0267C5.5659 11.345 5.25 11.9097 5.25 12.518V15.1164C5.25 15.5307 5.58579 15.8664 6 15.8664C6.41421 15.8664 6.75 15.5307 6.75 15.1164V12.518C6.75 12.4311 6.79513 12.3504 6.86918 12.3049L8.86918 11.0769Z"
      // fill={fillColor || '#959595'}
    />
  </Svg>
);

export const CategoryIcon = ({fillColor}: IProps) => (
  <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19.0004 4.6738C19.0004 6.7024 17.3552 8.3476 15.3266 8.3476C13.298 8.3476 11.6537 6.7024 11.6537 4.6738C11.6537 2.6452 13.298 1 15.3266 1C17.3552 1 19.0004 2.6452 19.0004 4.6738Z"
      stroke="black"
      stroke-opacity="0.2"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill={fillColor || '#959595'}
    />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.3467 4.6738C8.3467 6.7024 6.7024 8.3476 4.6729 8.3476C2.6452 8.3476 1 6.7024 1 4.6738C1 2.6452 2.6452 1 4.6729 1C6.7024 1 8.3467 2.6452 8.3467 4.6738Z"
      stroke="#3E4554"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.3467 4.6738C8.3467 6.7024 6.7024 8.3476 4.6729 8.3476C2.6452 8.3476 1 6.7024 1 4.6738C1 2.6452 2.6452 1 4.6729 1C6.7024 1 8.3467 2.6452 8.3467 4.6738Z"
      stroke="black"
      stroke-opacity="0.2"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill={fillColor || '#959595'}
    />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19.0004 15.2619C19.0004 17.2905 17.3552 18.9348 15.3266 18.9348C13.298 18.9348 11.6537 17.2905 11.6537 15.2619C11.6537 13.2333 13.298 11.5881 15.3266 11.5881C17.3552 11.5881 19.0004 13.2333 19.0004 15.2619Z"
      stroke="#3E4554"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill={fillColor || '#959595'}
    />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19.0004 4.6738C19.0004 6.7024 17.3552 8.3476 15.3266 8.3476C13.298 8.3476 11.6537 6.7024 11.6537 4.6738C11.6537 2.6452 13.298 1 15.3266 1C17.3552 1 19.0004 2.6452 19.0004 4.6738Z"
      stroke="#3E4554"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill={fillColor || '#959595'}
    />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19.0004 15.2619C19.0004 17.2905 17.3552 18.9348 15.3266 18.9348C13.298 18.9348 11.6537 17.2905 11.6537 15.2619C11.6537 13.2333 13.298 11.5881 15.3266 11.5881C17.3552 11.5881 19.0004 13.2333 19.0004 15.2619Z"
      stroke="black"
      stroke-opacity="0.2"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill={fillColor || '#959595'}
    />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.3467 15.2619C8.3467 17.2905 6.7024 18.9348 4.6729 18.9348C2.6452 18.9348 1 17.2905 1 15.2619C1 13.2333 2.6452 11.5881 4.6729 11.5881C6.7024 11.5881 8.3467 13.2333 8.3467 15.2619Z"
      stroke="#3E4554"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill={fillColor || '#959595'}
    />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.3467 15.2619C8.3467 17.2905 6.7024 18.9348 4.6729 18.9348C2.6452 18.9348 1 17.2905 1 15.2619C1 13.2333 2.6452 11.5881 4.6729 11.5881C6.7024 11.5881 8.3467 13.2333 8.3467 15.2619Z"
      stroke="black"
      stroke-opacity="0.2"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill={fillColor || '#959595'}
    />
  </Svg>
);

export const FavoriteIcon = ({fillColor}: IProps) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.87187 11.5983C1.79887 8.24832 3.05287 4.41932 6.56987 3.28632C8.41987 2.68932 10.4619 3.04132 11.9999 4.19832C13.4549 3.07332 15.5719 2.69332 17.4199 3.28632C20.9369 4.41932 22.1989 8.24832 21.1269 11.5983C19.4569 16.9083 11.9999 20.9983 11.9999 20.9983C11.9999 20.9983 4.59787 16.9703 2.87187 11.5983Z"
      stroke="#3E4554"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill={fillColor || '#959595'}
    />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.87187 11.5983C1.79887 8.24832 3.05287 4.41932 6.56987 3.28632C8.41987 2.68932 10.4619 3.04132 11.9999 4.19832C13.4549 3.07332 15.5719 2.69332 17.4199 3.28632C20.9369 4.41932 22.1989 8.24832 21.1269 11.5983C19.4569 16.9083 11.9999 20.9983 11.9999 20.9983C11.9999 20.9983 4.59787 16.9703 2.87187 11.5983Z"
      stroke="black"
      stroke-opacity="0.2"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill={fillColor || '#959595'}
    />
    <G opacity="0.4">
      <Path
        d="M16 6.70001C17.07 7.04601 17.826 8.00101 17.917 9.12201"
        stroke="#3E4554"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill={fillColor || '#959595'}
      />
      <Path
        d="M16 6.70001C17.07 7.04601 17.826 8.00101 17.917 9.12201"
        stroke="black"
        stroke-opacity="0.2"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill={fillColor || '#959595'}
      />
    </G>
  </Svg>
);

export const MoreIcon = ({fillColor}: IProps) => (
  <Svg width="4" height="16" viewBox="0 0 4 16" fill={fillColor || '#959595'}>
    <Path
      d="M2 16C0.89543 16 0 15.1046 0 14C0 12.8954 0.89543 12 2 12C3.10457 12 4 12.8954 4 14C4 15.1046 3.10457 16 2 16ZM2 10C0.89543 10 0 9.10457 0 8C0 6.89543 0.89543 6 2 6C3.10457 6 4 6.89543 4 8C4 8.53043 3.78929 9.03914 3.41421 9.41421C3.03914 9.78929 2.53043 10 2 10ZM2 4C0.89543 4 0 3.10457 0 2C0 0.89543 0.89543 0 2 0C3.10457 0 4 0.89543 4 2C4 2.53043 3.78929 3.03914 3.41421 3.41421C3.03914 3.78929 2.53043 4 2 4Z"
      fill={fillColor || '#959595'}
    />
    <Path
      d="M2 16C0.89543 16 0 15.1046 0 14C0 12.8954 0.89543 12 2 12C3.10457 12 4 12.8954 4 14C4 15.1046 3.10457 16 2 16ZM2 10C0.89543 10 0 9.10457 0 8C0 6.89543 0.89543 6 2 6C3.10457 6 4 6.89543 4 8C4 8.53043 3.78929 9.03914 3.41421 9.41421C3.03914 9.78929 2.53043 10 2 10ZM2 4C0.89543 4 0 3.10457 0 2C0 0.89543 0.89543 0 2 0C3.10457 0 4 0.89543 4 2C4 2.53043 3.78929 3.03914 3.41421 3.41421C3.03914 3.78929 2.53043 4 2 4Z"
      fill={fillColor || '#959595'}
    />
  </Svg>
);
