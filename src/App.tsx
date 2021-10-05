import { useState } from "react";
import * as Componontens from './App.styles'
import { item } from "./types/item";

const App = () => {
  const [list, setList] = useState<item[]>([])
  
  return (
    <Componontens.Container>
      <Componontens.Area>
        <Componontens.Header>Lista de Tarefas de Danilo</Componontens.Header>
      </Componontens.Area>
    </Componontens.Container>
  );
}

export default App
