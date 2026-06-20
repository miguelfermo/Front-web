import PropTypes from "prop-types";
import Input from "@/shared/ui/Input";
import Subtitle from "@/shared/ui/Subtitle";
import Paragraph from "@/shared/ui/Paragraph";
import ActionButtons from "@/shared/ui/ActionButtons";

export default function DonationForm({
    input,
    formError,
    onChange,
    onSave,
    onCancel,
    isEditing,
}) {
    return (
        <div>
            <Subtitle className="text-xl font-bold mb-4">
                {isEditing
                    ? "Editar Doação"
                    : "Adicionar Doação"}
            </Subtitle>

            {formError && (
                <Paragraph className="text-red-500 mb-3">
                    {formError}
                </Paragraph>
            )}

            <Input
                label="Título"
                name="title"
                value={input.title}
                onChange={onChange}
            />

            <Input
                label="Localização"
                name="location"
                value={input.location}
                onChange={onChange}
            />

            <Input
                label="Descrição"
                name="description"
                value={input.description}
                onChange={onChange}
            />

            <Input
                label="Empresa"
                name="company"
                value={input.company}
                onChange={onChange}
            />

            <Input
                label="Valor"
                name="value"
                type="number"
                value={input.value}
                onChange={onChange}
            />

            <ActionButtons
                primaryText="Salvar"
                secondaryText="Cancelar"
                onPrimaryClick={onSave}
                onSecondaryClick={onCancel}
            />
        </div>
    );
}

DonationForm.propTypes = {
    input: PropTypes.object.isRequired,
    formError: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    isEditing: PropTypes.bool.isRequired,
};