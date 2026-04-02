import { Button, PatrickUIProvider } from "@patrick-ui/react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from "@patrick-ui/react";
import "@patrick-ui/react/styles.css";

export default function App() {
  return (
    <PatrickUIProvider>
      <Button>Eu sou um botão React.js</Button>

      <Table>
        <TableCaption>Lista de pagamentos</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Status</TableHead>
            <TableHead>Valor</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Pago</TableCell>
            <TableCell>R$ 100,00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </PatrickUIProvider>
  );
}
