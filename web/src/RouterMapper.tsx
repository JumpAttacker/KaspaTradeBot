import {useRoutes} from "react-router-dom";
import {RouteObject} from "react-router/dist/lib/context";
import {BaseWrapper} from "@/layout/BaseWrapper.tsx";
import {MainPage} from "@/Pages/Main/MainPage.tsx";
import {BotCommandsPage} from "@/Pages/Commands/BotCommandsPage.tsx";
import {FaqPage} from "@/Pages/Faq/FaqPage.tsx";
import {TariffsPage} from "@/Pages/Tariffs/TariffsPage.tsx";
import {GoodLinksPage} from "@/Pages/GoodLinks/GoodLinksPage.tsx";
import {BotUpdatesPage} from "@/Pages/Updates/BotUpdatesPage.tsx";

export const RouterMapper = () => {
    const routeObjects: RouteObject[] = [
        {
            path: '',
            element: <BaseWrapper/>,
            children: [
                {
                    path: '',
                    element: <MainPage/>
                },
                {
                    path: 'commands',
                    element: <BotCommandsPage/>
                },
                {
                    path: 'faq',
                    element: <FaqPage/>
                },
                {
                    path: 'tariffs',
                    element: <TariffsPage/>
                },
                {
                    path: 'good-links',
                    element: <GoodLinksPage/>
                },
                {
                    path: 'updates',
                    element: <BotUpdatesPage/>
                }
            ]
        }
    ]
    return useRoutes(routeObjects);
}

