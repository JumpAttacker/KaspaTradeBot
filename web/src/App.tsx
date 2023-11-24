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
    return <div className={'flex-grow container'}>Body</div>
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

function App() {
    return (
        <main className={'flex flex-col min-h-screen min-w-full dark'}>
            <Header/>
            <BodyContent/>
            <Footer/>
        </main>
    )
}

export default App
