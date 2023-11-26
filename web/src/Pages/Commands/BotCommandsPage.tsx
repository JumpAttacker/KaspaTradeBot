import PageWrapper from "@/components/PageWrapper.tsx";
import {useTranslation} from "react-i18next";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion.tsx";

export const BotCommandsPage = () => {
    const {t} = useTranslation();
    return <PageWrapper title={t('botCommandsPage.title')}>
        <Accordion type="single" collapsible>
            <AccordionItem value="start">
                <AccordionTrigger>{t('botCommandsPage.startCommand')}</AccordionTrigger>
                <AccordionContent>
                    {t('botCommandsPage.startDescription')}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </PageWrapper>
}