import Footer from "../../components/Footer/index"
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