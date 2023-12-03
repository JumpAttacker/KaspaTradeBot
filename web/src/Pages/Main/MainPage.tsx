import {useTranslation} from "react-i18next";
import {motion, Variants} from "framer-motion";
import {useState} from "react";
import {useSearchParams} from "react-router-dom";
import StatsWrapper from "@/components/StatsWrapper.tsx";


const container = {
    hidden: {
        opacity: 1,
        y: 20, // Начальное положение ниже на 20px
        scale: 0
    },
    visible: {
        y: 0, // Конечное положение
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: {y: 20, opacity: 0},
    visible: {
        y: 0,
        opacity: 1
    }
};


const FeatureItem = ({title, body}: { title: string, body: string }) => {
    return <motion.div className="bg-white p-4 shadow rounded" variants={item}>
        <h3 className="font-semibold mb-2">{title}</h3>
        <p>{body}</p>
    </motion.div>
}

const FeaturesBlock = () => {
    const {t} = useTranslation()
    return <div className="p-10">
        <h2 className="text-2xl font-semibold text-center">{t('mainPage.featuresTitle')}</h2>
        <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4"
        >

            <FeatureItem
                title={t('mainPage.features.exchangeTrading')} body={t('mainPage.features.exchangeTradingDesc')}/>
            <FeatureItem
                title={t('mainPage.features.oneTimeTrading')} body={t('mainPage.features.oneTimeTradingDesc')}/>
            <FeatureItem
                title={t('mainPage.features.autoTradeOnRise')} body={t('mainPage.features.autoTradeOnRiseDesc')}/>
            <FeatureItem
                title={t('mainPage.features.autoBuyOnFall')} body={t('mainPage.features.autoBuyOnFallDesc')}/>
            <FeatureItem
                title={t('mainPage.features.configurableSettings')} body={t('mainPage.features.configurableSettingsDesc')}/>
            <FeatureItem
                title={t('mainPage.features.telegramControl')} body={t('mainPage.features.telegramControlDesc')}/>
            <FeatureItem
                title={t('mainPage.features.freeTrial')} body={t('mainPage.features.freeTrialDesc')}/>
        </motion.div>
    </div>
}

const heroVariants: Variants = {
    hidden: {
        scale: 1.5,
        opacity: 0,
        marginTop: '30%'
    },
    visible: {
        scale: 1,
        opacity: 1,
        marginTop: '0',
        transition: {
            duration: 0.5,
            marginTop: {
                duration: 0.5,
                delay: 1.5,
            },
            opacity: {
                duration: 0.5,
                delay: 0,
                type: 'spring',
                stiffness: 100
            },
            scale: {
                duration: 0.5,
                delay: 0.8,
                type: 'spring',
                stiffness: 100
            }
        },
    }
};


const HeroSection = ({setShowFeatures}: { setShowFeatures: (show: boolean) => void }) => {
    const {t} = useTranslation()
    return <motion.div
        className="bg-accent text-white text-center p-10"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        onAnimationComplete={() => setShowFeatures(true)}
    >
        <h1 className="text-3xl font-bold">{t('mainPage.heroTitle')}</h1>
        <p className="text-xl mt-4">{t('mainPage.heroSubtitle')}</p>
    </motion.div>
}

const callToActionVariants: Variants = {
    hidden: {
        y: 20, // Начальное положение ниже на 20px
        opacity: 0
    },
    visible: {
        y: 0, // Конечное положение
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: 0.5 // Задержка после появления FeaturesBlock
        }
    }
};

const CallToActionSection = () => {
    const {t} = useTranslation()
    return <motion.div
        className="bg-foreground text-center p-10 mt-6"
        variants={callToActionVariants}
        initial="hidden"
        animate="visible"
    >
        <h3 className="text-2xl font-semibold text-primary-foreground">{t('mainPage.callToActionTitle')}</h3>
        <p className="mt-2 text-primary-foreground">{t('mainPage.callToActionSubtitle')}</p>
        <a href="https://t.me/JumpAttacker" target="_blank" rel="noopener noreferrer"
           className="mt-4 inline-block bg-primary text-secondary-foreground py-2 px-4 rounded-full font-semibold hover:bg-primary-dark">
            {t('mainPage.contactUsOnTelegram')}
        </a>
    </motion.div>
}

export const MainPage = () => {
    const [showFeatures, setShowFeatures] = useState(false);
    const [searchParams] = useSearchParams();
    const mode = searchParams.get("mode");
    if (mode === 'screen') {
        const type = searchParams.get("type");
        if (type === 'stats') {
            const dailyDeals = Number(searchParams.get("dailyDeals"));
            const dailyProfit = Number(searchParams.get("dailyProfit"))!;
            // const dailyPotentialLosses = Number(searchParams.get("dailyPotentialLosses"))!;
            const totalProfit = Number(searchParams.get("totalProfit"))!;
            // const totalPotentialLosses = Number(searchParams.get("totalPotentialLosses"))!;
            const totalCancelledOrders = Number(searchParams.get("totalCancelledOrders"))!;
            const dailyCancelledOrders = Number(searchParams.get("dailyCancelledOrders"))!;
            const dailyTradesMoreThen = Number(searchParams.get("dailyTradesMoreThen"))!;
            const dailyTradesMorePercent = Number(searchParams.get("dailyTradesMorePercent"))!;
            const dailyProfitMorePercent = Number(searchParams.get("dailyProfitMorePercent"))!;
            const dailyProfitMoreThen = Number(searchParams.get("dailyProfitMoreThen"))!;
            const lang = searchParams.get("lang") as 'ru' | 'en';

            // example of url with parameters
            // http://localhost:5173/KaspaTradeBot/?mode=screen&type=stats&dailyDeals=100&dailyProfit=1000&dailyTradesMoreThen=200&totalProfit=2000&dailyTradesMorePercent=300&totalCancelledOrders=300&dailyCancelledOrders=300&lang=ru&dailyProfitMorePercent=300&dailyProfitMoreThen=300
            // http://localhost:5173/KaspaTradeBot/?mode=screen&type=stats&dailyDeals=11&dailyProfit=2.53223&dailyTradesMoreThen=8&totalProfit=20.81581&dailyTradesMorePercent=300&totalCancelledOrders=0&dailyCancelledOrders=0&lang=ru&dailyProfitMorePercent=0.5223064516129032258064516129&dailyProfitMoreThen=2.0099235483870967741935483871

            return <div className={''}>
                <StatsWrapper
                    dailyDeals={dailyDeals}
                    dailyProfit={dailyProfit}
                    totalProfit={totalProfit}
                    totalCancelledOrders={totalCancelledOrders}
                    dailyCancelledOrders={dailyCancelledOrders}
                    lang={lang}
                    dailyTradesMoreThen={dailyTradesMoreThen}
                    dailyTradesMorePercent={dailyTradesMorePercent}
                    dailyProfitMorePercent={dailyProfitMorePercent}
                    dailyProfitMoreThen={dailyProfitMoreThen}
                />
            </div>

        }

    }
    return <div className="flex flex-col">
        <HeroSection setShowFeatures={setShowFeatures}/>
        {showFeatures && <FeaturesBlock/>}
        {showFeatures && <CallToActionSection/>}
    </div>
}