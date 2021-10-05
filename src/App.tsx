import { useState } from "react";
import * as Componontens from './App.styles'
import { item } from "./types/item";
import { ListItem } from "./components/ListItens";
import { ImportItens } from "./components/ImportItens";

const App = () => {
  const [list, setList] = useState<item[]>([])


  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  }
  
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
        <ImportItens onEnter={handleAddTask} />

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
