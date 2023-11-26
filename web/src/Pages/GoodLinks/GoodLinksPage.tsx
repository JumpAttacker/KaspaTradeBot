import {useTranslation} from "react-i18next";
import PageWrapper from "@/components/PageWrapper.tsx";

const LinkItem = (props: { href: string, text: string }) => {
    return <li><a className={'font-medium text-blue-600 dark:text-blue-500 hover:underline'} href={props.href} target="_blank" rel="noopener noreferrer">{props.text}</a></li>
}

export const GoodLinksPage = () => {
    const {t} = useTranslation();
    return <PageWrapper title={t('goodLinksPage.title')}>
        <ul className="list-disc list-inside">
            <LinkItem href="https://www.mexc.com" text={t('goodLinksPage.mexc')}/>
            <LinkItem href="https://t.me/KaspaTradeBot" text={t('goodLinksPage.bot')}/>
            <LinkItem href="https://t.me/+Dvz77NTzfF05MzEy" text={t('goodLinksPage.botChat')}/>
            <LinkItem href="https://t.me/proton_chatroom" text={t('goodLinksPage.cryptoChat')}/>
            <LinkItem href="https://discord.gg/NnwD7Gh8N4" text={t('goodLinksPage.discord')}/>
        </ul>
    </PageWrapper>
}