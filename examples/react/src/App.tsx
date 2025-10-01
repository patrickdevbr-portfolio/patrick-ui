import { Button, PatrickUIProvider } from "@patrick-ui/react";
import "@patrick-ui/react/styles.css";

export default function App() {
  return (
    <PatrickUIProvider>
      <Button variant="primary">Eu sou um botão</Button>
    </PatrickUIProvider>
  );
}
