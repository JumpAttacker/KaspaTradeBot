import {Header} from "@/layout/Header.tsx";
import {BodyContent} from "@/layout/BodyContent.tsx";
import {Footer} from "@/layout/Footer.tsx";

export const BaseWrapper = () => {
    return <main className={'flex flex-col min-h-screen min-w-full dark'}>
        <Header/>
        <BodyContent/>
        <Footer/>
    </main>;
}