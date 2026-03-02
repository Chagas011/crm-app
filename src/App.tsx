import { Toaster } from "sonner";
import { Router } from "./Router";

function App() {
  return (
    <>
      <Router />
      <Toaster richColors position="top-right" />
    </>
  );
}

export default App;
