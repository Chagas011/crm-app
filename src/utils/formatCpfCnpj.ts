export function formatCpfCnpj(value?: string | null) {
  if (!value) return "";

  const digits = value.replace(/\D/g, "");

  // CPF → 000.000.000-00
  if (digits.length === 11) {
    return digits.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

  // CNPJ → 00.000.000/0000-00
  if (digits.length === 14) {
    return digits.replace(
      /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
      "$1.$2.$3/$4-$5",
    );
  }

  return value;
}
