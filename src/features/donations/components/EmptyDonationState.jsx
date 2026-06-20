import Paragraph from "@/shared/ui/Paragraph";
import Subtitle from "@/shared/ui/Subtitle";

export default function EmptyDonationState() {
    return (
        <div className="empty-donation-state">
            <Subtitle>Ainda não há doações</Subtitle>
            <Paragraph>Seja o primeiro a fazer uma doação e apoiar nossa causa!</Paragraph>
        </div>
    );
}