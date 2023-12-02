import {BrowserRouter} from "react-router-dom";
import {RouterMapper} from "@/RouterMapper.tsx";
import './translation/i18n.ts';
function App() {
    return (
        <main className={'flex flex-col min-h-screen min-w-full dark font-sans"'}>
            <BrowserRouter basename={'/KaspaTradeBot/'}>
                <RouterMapper/>
            </BrowserRouter>
        </main>
    )
}

export default App;