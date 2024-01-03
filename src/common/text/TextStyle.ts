import Styled from "@emotion/styled";
import { Typography } from "@mui/joy";

type TextProps = {
    textheight?: string;
    textspacing?: string;
    textcolor?: string;
    size?: "xxs" | "xs" | "sm" | "md" | "xl" | "lg";
    textsize?: string;
    textweight?: string;
};

export const HeadingText = Styled(Typography)<TextProps>`
    font-family: Inter !important;
    font-size: 60px !important;
    font-style: normal !important;
    line-height: ${(props) => props.textheight || "72px"} !important;
    letter-spacing:  ${(props) => props.textspacing || "-1.2px"}  !important;
    color: ${(props) => props.textcolor || "#101828"}  !important;
    ${(props) =>
        props.size === "xl" &&
        `font-size: 60px !important;
    `};
    ${(props) =>
        props.size === "lg" &&
        `font-size: 48px !important;
    `};
    ${(props) =>
        props.size === "md" &&
        `
    font-size: 38px !important;
    `};
    ${(props) =>
        props.size === "sm" &&
        `font-size: 30px !important;
    `};
    ${(props) =>
        props.size === "xs" &&
        `font-size: 24px !important;
    `};
    ${(props) =>
        props.size === "xxs" &&
        `font-size: 10px !important;
    `};
    ${(props) =>
        props.textsize &&
        `font-size: ${props.textsize} !important;
    `};
    ${(props) =>
        props.textweight === "regular" &&
        `font-weight: 400 !important;
    `};
    ${(props) =>
        props.textweight === "medium" &&
        `font-weight: 500 !important;
    `};
    ${(props) => props.textweight === "semiBold" && `font-weight: 600 !important;`};
    ${(props) => props.textweight === "bold" && `font-weight: 700 !important;`};
    
    ${(props) => props.textweight === "extraBold" && `font-weight: 800 !important;`};
`;

export const Text = Styled(Typography)<TextProps>`
    color: ${(props) => props.textcolor || "#101828"}  !important;
    font-family: Inter !important;
    font-size: 16px !important;
    font-style: normal !important;
    line-height: 24px !important;
    font-weight: 400 !important;
    ${(props) =>
        props.size === "xl" &&
        `font-size: 20px !important;
    `};
    ${(props) =>
        props.size === "lg" &&
        `font-size: 18px !important;
    `};
    ${(props) =>
        props.size === "md" &&
        `
    font-size: 16px !important;
    `};
    ${(props) =>
        props.size === "sm" &&
        `font-size: 14px !important;
    `};
    ${(props) =>
        props.size === "xs" &&
        `font-size: 12px !important;
    `};
    ${(props) =>
        props.textweight === "regular" &&
        `font-weight: 400 !important;
    `};
    ${(props) =>
        props.textweight === "medium" &&
        `font-weight: 500 !important;
    `};
    ${(props) => props.textweight === "semiBold" && `font-weight: 600 !important;`};
    ${(props) => props.textweight === "bold" && `font-weight: 700 !important;`};
    
    ${(props) => props.textweight === "extraBold" && `font-weight: 800 !important;`};
`;
