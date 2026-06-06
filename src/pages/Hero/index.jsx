import Footer from "../../components/Footer/Footer"
import HeaderScreen from "../../components/Header/index"
import { HeroContent } from "../../components/HeroContent/index"

export default function HeroScreen() {
    return (
        <div>
            <HeaderScreen />
            <HeroContent />
            <Footer />
        </div>
    );
}