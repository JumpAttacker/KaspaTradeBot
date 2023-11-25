import { useTranslation } from "react-i18next";

export const TariffsPage = () => {
    const { t } = useTranslation();

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold text-center mb-6">{t('tariffsPage.title')}</h2>
            <div className="flex flex-row flex-wrap gap-4 justify-center">
                {/* Блок о бесплатном пробном периоде */}
                <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-lg p-6 hover:-translate-y-1 transition duration-300">
                    <h3 className="text-xl font-semibold text-primary mb-4 text-center">{t('tariffsPage.trialTitle')}</h3>
                    <div className="text-center mb-4">
                        <span className="text-lg font-medium">{t('tariffsPage.trialDuration')}</span> -
                        <span className="text-lg font-medium text-accent"> {t('tariffsPage.free')}</span>
                    </div>
                    <p className="text-center mb-4">{t('tariffsPage.trialDescription')}</p>
                    <a href="https://t.me/JumpAttacker" target="_blank" rel="noopener noreferrer"
                       className="block bg-secondary text-white text-center py-2 px-4 rounded-full font-semibold hover:bg-secondary-dark transition duration-300">
                        {t('tariffsPage.trialButton')}
                    </a>
                </div>
                {/* Блок тарифа Premium */}
                <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-lg p-6 hover:-translate-y-1 transition duration-300">
                    <h3 className="text-xl font-semibold text-primary mb-4 text-center">{t('tariffsPage.premiumTitle')}</h3>
                    <div className="text-center mb-4">
                        <span className="text-lg font-medium">{t('tariffsPage.premiumDuration')}</span> -
                        <span className="text-lg font-medium text-accent"> {t('tariffsPage.premiumPrice')}</span>
                    </div>
                    <p className="text-center mb-4">{t('tariffsPage.premiumDescription')}</p>
                    <a href="https://t.me/JumpAttacker" target="_blank" rel="noopener noreferrer"
                       className="block bg-primary text-white text-center py-2 px-4 rounded-full font-semibold hover:bg-primary-dark transition duration-300">
                        {t('tariffsPage.premiumButton')}
                    </a>
                </div>
            </div>
        </div>
    );
};
