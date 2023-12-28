'use client';

import { LocaleTypes, fallbackLng } from "@/client/providers/utils/i18n.config";
import { createContext, useContext, PropsWithChildren, FC, useState } from "react";


const CurrentLocaleContext = createContext({lang: fallbackLng, changeLang: (lang: LocaleTypes) => {}});


const LanguageContext: FC<PropsWithChildren<{lng: LocaleTypes}>> = ({ children, lng }) => {

    const [lang, setLang] = useState<LocaleTypes>(lng)
    
    const changeLang = (lang: LocaleTypes) => setLang(lang)

    return (
        <CurrentLocaleContext.Provider value={{lang, changeLang}}>
            {children}
        </CurrentLocaleContext.Provider>
    )

}

export const useCurrentLocaleContext = () => useContext(CurrentLocaleContext);

export default LanguageContext