'use client';

import { fallbackLng } from '@/client/providers/utils/i18n.config';
import { useCurrentLocaleContext } from '@/client/ui/providers/LanguageContext';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { ChangeEvent } from 'react';


const LanguageSwitcher = () => {

  const { lang, changeLang } = useCurrentLocaleContext();
  const currentLocale = lang;

  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {

    const newLocale = e.target.value;

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = '; expires=' + date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    changeLang(newLocale)

   // redirect to the new locale path
    if (newLocale === fallbackLng) {
      //router.push(`/${newLocale}/${currentPathname}` as any);
      router.push(`/${currentPathname}` as any);

    } else {
      router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)  as any);
    }

   // router.refresh();
  };


    return (
      <select onChange={e => handleChange(e)} value={currentLocale}>
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="ar">Arabic</option>
      </select>
    )

  }

export default LanguageSwitcher