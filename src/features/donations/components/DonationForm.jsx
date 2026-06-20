import PropTypes from "prop-types";
import Input from "../../../shared/ui/Input";
import Button from "../../../shared/ui/Button";

export default function DonationForm({
    input,
    formError,
    onChange,
    onSave,
    onCancel,
    isEditing,
}) {
    return (
        <>
            <h2 className="text-xl font-bold mb-4">
                {isEditing
                    ? "Editar Doação"
                    : "Adicionar Doação"}
            </h2>

            {formError && (
                <p className="text-red-500 mb-3">
                    {formError}
                </p>
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

            <div className="flex gap-2 mt-4">
                <Button
                    variant="primary"
                    onClick={onSave}
                >
                    {isEditing
                        ? "Salvar Alterações"
                        : "Salvar"}
                </Button>

                <Button
                    variant="danger"
                    onClick={onCancel}
                >
                    Cancelar
                </Button>
            </div>
        </>
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