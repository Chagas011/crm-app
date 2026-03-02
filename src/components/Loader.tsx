export function Loader({ text = "Carregando..." }: { text?: string }) {
  return (
    <div className="w-full flex flex-col items-center justify-center py-10 gap-3">
      {/* Spinner */}
      <div className="w-8 h-8 border-4 border-gray-300 border-t-primary rounded-full animate-spin"></div>

      {/* Text */}
      <p className="text-sm text-muted-foreground">{text}</p>
    </div>
  );
}
