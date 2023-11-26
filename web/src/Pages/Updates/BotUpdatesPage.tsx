import moment from "moment";
import {useTranslation} from "react-i18next";
import PageWrapper from "@/components/PageWrapper.tsx";

export const BotUpdatesPage = () => {
    const {t} = useTranslation();
    // Здесь можно импортировать данные об обновлениях, если они хранятся где-то внешне
    const updates = [
        {
            date: moment("2022-11-25", "YYYY-MM-DD").format("L"),
            title: "Update 0.1. Alpha-testing",
            description: "First public release"
        },
        // Другие обновления...
    ];

    return (
        <PageWrapper title={t('navigation.updates')}>
            {updates.map((update, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200 shadow-lg p-4">
                    <h3 className="text-lg font-semibold text-primary mb-2">{update.title}</h3>
                    <p className="text-sm text-gray-500 mb-2">{update.date}</p>
                    <p>{update.description}</p>
                </div>
            ))}
        </PageWrapper>
    );
};
