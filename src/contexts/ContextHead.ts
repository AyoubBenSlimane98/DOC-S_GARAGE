// ContextHead.tsx
import { createContext, Dispatch, SetStateAction } from 'react';

interface BgContextType {
  bgColor: string | undefined;
  setBgColor: Dispatch<SetStateAction<string | undefined>>;
}

export const BgContext = createContext<BgContextType | undefined>(undefined);

interface DarkVideo {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

export const darkModeVideo = createContext<DarkVideo | undefined>(undefined);

interface LightModeCard {
  lightMode: boolean;
  setLightMode: Dispatch<SetStateAction<boolean>>;
}

export const LightModeCard = createContext<LightModeCard | undefined>(
  undefined
);

interface GetIDPage {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}
export const getNumberPage = createContext<GetIDPage | null>(null);
