import {BrowserRouter, useOutlet, useRoutes} from "react-router-dom";
import {RouteObject} from "react-router/dist/lib/context";
import './App.css'

const Header = () => {
    return <div className={'bg-primary px-4 py-4'}>
        <div className="container flex flex-row flex-nowrap justify-between">
            <div className={'text-xl'}>
                Kaspa Trade Bot
            </div>
            <div className={'flex flex-row flex-nowrap gap-4'}>
                <div>Бот</div>
                <div>Команды</div>
                <div>FAQ</div>
                <div>Тарифы</div>
                <div>Полезные ссылки</div>
            </div>
        </div>
    </div>
}

const BodyContent = () => {
    const outlet = useOutlet();
    return <div className={'flex-grow container text-black'}>
        {outlet}
    </div>
}
const Footer = () => {
    return <div className={'bg-primary px-4 py-1'}>
        <div className="container flex flex-row flex-nowrap justify-between">
            <div>
                Kaspa Trade Bot @ 2024
            </div>
            <div>
                <svg className="h-6 w-6 text-white" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"/>
                    <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"/>
                </svg>
            </div>
        </div>
    </div>
}

const BaseWrapper = () => {
    return <main className={'flex flex-col min-h-screen min-w-full dark'}>
        <Header/>
        <BodyContent/>
        <Footer/>
    </main>;
}

const MainPage = () => {
    return <div>
        MAIN PAGE
    </div>
}

const RouterMapper = () => {
    const routeObjects: RouteObject[] = [
        {
            path: '',
            element: <BaseWrapper/>,
            children: [
                {
                    path: '/main',
                    element: <MainPage/>
                }
            ]
        }
    ]
    return useRoutes(routeObjects);
}

function App() {
    return (
        <main className={'flex flex-col min-h-screen min-w-full dark'}>
            <BrowserRouter>
                <RouterMapper/>
            </BrowserRouter>
        </main>
    )
}

export default App
