import moment from "moment";

export const BotUpdatesPage = () => {
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
        <div className="p-4">
            <h2 className="text-2xl font-bold text-center mb-6">Bot updates</h2>
            <div className="space-y-4">
                {updates.map((update, index) => (
                    <div key={index} className="bg-white rounded-lg border border-gray-200 shadow-lg p-4">
                        <h3 className="text-lg font-semibold text-primary mb-2">{update.title}</h3>
                        <p className="text-sm text-gray-500 mb-2">{update.date}</p>
                        <p>{update.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
