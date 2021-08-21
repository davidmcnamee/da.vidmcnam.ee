
export const onDesktopQuery = '(min-width: 768px)';
export const onDesktop = `@media${onDesktopQuery}`;
export const onFullDesktopQuery = '(min-width: 1200px)';
export const onFullDesktop = `@media${onFullDesktopQuery}`;

export const HEADER_HEIGHT_DESKTOP = "4rem";
export const HEADER_HEIGHT_MOBILE = "4rem";
export const SECTION_PADDING_VERTICAL_MOBILE = "3rem";
export const RECT_HEIGHT_MOBILE = `12rem`;
export const RECT_HEIGHT_DESKTOP = `30rem`;
export const SECTION_PADDING_VERTICAL_DESKTOP = `calc(50vh - ${RECT_HEIGHT_DESKTOP} / 2 - ${HEADER_HEIGHT_DESKTOP})`;
