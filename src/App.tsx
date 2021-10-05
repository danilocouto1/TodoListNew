import { useState } from "react";
import * as Componontens from './App.styles'
import { item } from "./types/item";
import { ListItem } from "./components/ListItens";

const App = () => {
  const [list, setList] = useState<item[]>([])
  
  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }
  
  return (
    <Componontens.Container>
      <Componontens.Area>
        <Componontens.Header>Lista de Tarefas de Danilo</Componontens.Header>

        {list.map((item, index)=>(
            <ListItem
              key={index}
              itemProps={item}
              onChange={handleTaskChange}
            />
          ))}
      </Componontens.Area>
    </Componontens.Container>
  );
}

export default App
