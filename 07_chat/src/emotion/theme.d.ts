import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    white: string;
    background: string;
    text: string;
    main: string;
    link: string;
    gray1: string;
    gray2: string;
    spinner: string;
    error: string;
  }
}