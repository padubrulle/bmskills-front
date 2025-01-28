import { Header } from "../common/Header";
import { Footer } from "../common/Footer";
import { ReactElement } from "react";

interface MainLayoutProps{
    pageContent: ReactElement;
}

export function MainLayout({pageContent}: MainLayoutProps): ReactElement{
    return <>
        <Header />
        {pageContent}
        <Footer />
    </>
}