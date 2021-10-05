import { useState } from "react";
import * as Componontens from './App.styles'
import { item } from "./types/item";
import { ListItem } from "./components/ListItens";

const App = () => {
  const [list, setList] = useState<item[]>([])
  
  return (
    <Componontens.Container>
      <Componontens.Area>
        <Componontens.Header>Lista de Tarefas de Danilo</Componontens.Header>

        {list.map((item, index) => {
          <ListItem key={index} itemProps={item}/>
        })}
      </Componontens.Area>
    </Componontens.Container>
  );
}

export default App
