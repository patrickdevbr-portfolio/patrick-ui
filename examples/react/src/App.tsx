import { Button, PatrickUIProvider } from "@patrick-ui/react";
import "@patrick-ui/react/styles.css";

export default function App() {
  return (
    <PatrickUIProvider>
      <Button>Eu sou um botão React.js</Button>
    </PatrickUIProvider>
  );
}
