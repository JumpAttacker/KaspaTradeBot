import {useTranslation} from "react-i18next";
import PageWrapper from "@/components/PageWrapper.tsx";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger,} from "@/components/ui/accordion"

export const FaqPage = () => {
    const {t} = useTranslation();
    return <PageWrapper title={t('faqPage.title')}>
        <Accordion type="single" collapsible>
            <AccordionItem value="item-2">
                <AccordionTrigger>{t('faqPage.isThisTheMoneyButton')}</AccordionTrigger>
                <AccordionContent>
                    {t('faqPage.isThisTheMoneyButtonAnswer')}
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
                <AccordionTrigger>{t('faqPage.howToConnect')}</AccordionTrigger>
                <AccordionContent>
                    {t('faqPage.howToConnectAnswer')}
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
                <AccordionTrigger>{t('faqPage.botTradingPrinciple')}</AccordionTrigger>
                <AccordionContent>
                    {t('faqPage.botTradingPrincipleAnswer')}
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
                <AccordionTrigger>{t('faqPage.canBotDrainDeposit')}</AccordionTrigger>
                <AccordionContent>
                    {t('faqPage.canBotDrainDepositAnswer')}
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
                <AccordionTrigger>{t('faqPage.useBotYourself')}</AccordionTrigger>
                <AccordionContent>
                    {t('faqPage.useBotYourselfAnswer')}
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
                <AccordionTrigger>{t('faqPage.connectionCost')}</AccordionTrigger>
                <AccordionContent>
                    {t('faqPage.connectionCostAnswer')}
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
                <AccordionTrigger>{t('faqPage.canITradeManually')}</AccordionTrigger>
                <AccordionContent>
                    {t('faqPage.canITradeManuallyAnswer')}
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
                <AccordionTrigger>{t('faqPage.whatIfICancelledOrderManually')}</AccordionTrigger>
                <AccordionContent>
                    {t('faqPage.whatIfICancelledOrderManuallyAnswer')}
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
                <AccordionTrigger>{t('faqPage.canIStoreAssetsInColdWallet')}</AccordionTrigger>
                <AccordionContent>
                    {t('faqPage.canIStoreAssetsInColdWalletAnswer')}
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-11">
                <AccordionTrigger>{t('faqPage.canYouMakeBotForFuturesTrading')}</AccordionTrigger>
                <AccordionContent>
                    {t('faqPage.canYouMakeBotForFuturesTradingAnswer')}
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-12">
                <AccordionTrigger>{t('faqPage.canYouCreateBotForOtherCoins')}</AccordionTrigger>
                <AccordionContent>
                    {t('faqPage.canYouCreateBotForOtherCoinsAnswer')}
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-13">
                <AccordionTrigger>{t('faqPage.whyMEXC')}</AccordionTrigger>
                <AccordionContent>
                    {t('faqPage.whyMEXCAnswer')}
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-14">
                <AccordionTrigger>{t('faqPage.whyKASPA')}</AccordionTrigger>
                <AccordionContent>
                    {t('faqPage.whyKASPAAnswer')}
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-15">
                <AccordionTrigger>{t('faqPage.canYouWithdrawMoneyFromMyExchangeAccount')}</AccordionTrigger>
                <AccordionContent>
                    {t('faqPage.canYouWithdrawMoneyFromMyExchangeAccountAnswer')}
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-16">
                <AccordionTrigger>{t('faqPage.doYouGuaranteeProfitability')}</AccordionTrigger>
                <AccordionContent>
                    {t('faqPage.doYouGuaranteeProfitabilityAnswer')}
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-17">
                <AccordionTrigger>{t('faqPage.canICancelOrdersManually')}</AccordionTrigger>
                <AccordionContent>
                    {t('faqPage.canICancelOrdersManuallyAnswer')}
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-18">
                <AccordionTrigger>{t('faqPage.cancelledOrderManuallyOnExchange')}</AccordionTrigger>
                <AccordionContent>
                    {t('faqPage.cancelledOrderManuallyOnExchangeAnswer')}
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-19">
                <AccordionTrigger>{t('faqPage.whyThisStrategyIsBetter')}</AccordionTrigger>
                <AccordionContent>
                    {t('faqPage.whyThisStrategyIsBetterAnswer')}
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-20">
                <AccordionTrigger>{t('faqPage.whereToAskQuestions')}</AccordionTrigger>
                <AccordionContent>
                    {t('faqPage.whereToAskQuestionsAnswer')}
                </AccordionContent>
            </AccordionItem>

        </Accordion>
    </PageWrapper>
}