import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
import Kaspa from "../assets/kaspa-logo.svg?react";
import {cn} from "@/lib/utils.ts";

export const Header = () => {
    const {t, i18n} = useTranslation()

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return <div className={'bg-primary px-4 py-4'}>
        <div className="container flex flex-row flex-wrap justify-between">
            <div className={cn('text-xl flex flex-row gap-2 items-center')}>
                <Kaspa className={'h-6 w-6'}/>
                Kaspa Trade Bot
            </div>
            <div className={'flex flex-row flex-wrap gap-4'}>
                <NavLink to={'/'}>{t('navigation.aboutBot')}</NavLink>
                <NavLink to={'/commands'}>{t('navigation.commands')}</NavLink>
                <NavLink to={'/faq'}>{t('navigation.faq')}</NavLink>
                <NavLink to={'/tariffs'}>{t('navigation.tariffs')}</NavLink>
                <NavLink to={'/good-links'}>{t('navigation.goodLinks')}</NavLink>
                <NavLink to={'/updates'}>{t('navigation.updates')}</NavLink>
                <div className="relative">
                    <select
                        onChange={(e) => changeLanguage(e.target.value)}
                        defaultValue={i18n.language}
                        className="bg-primary text-secondary-foreground cursor-pointer"
                        style={{border: 'none', outline: 'none'}}
                    >
                        <option value="en" className="text-black bg-white">English</option>
                        <option value="ru" className="text-black bg-white">Русский</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
}