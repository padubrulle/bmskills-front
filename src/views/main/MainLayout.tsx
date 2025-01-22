import { Header } from "../common/Header";
import { Footer } from "../common/Footer";
import { SkillListPage } from "./SkillListPage";

export function MainLayout({pageContent}){
    return <>
        <Header />
        {pageContent}
        <Footer />
    </>
}