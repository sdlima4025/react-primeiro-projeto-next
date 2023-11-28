"use client";

import {listReducer} from "@/reducers/listReducer";
import {useReducer, useState} from 'react';
import { Item } from '../types/Item';

const Page = () => {
const [list, dispatch] = useReducer(listReducer, []);
const [addField, setAddField] = useState('');

const handleAddButton = () => {
  if(addField.trim() === '') return false;

  dispatch({
    type: 'add',
    payload: {
      text: addField.trim()
    }
  });

  setAddField('');
}

const handleDoneCheckbox = (id: number) => {
  dispatch({
    type: 'toggleDone',
    payload: {id}
  });
} 



  return (
    <div className="container mx-auto">
      <h1 className="text-center text-4xl my-4">Lista de Tarefas</h1>
      <div className=" max-w-2xl mx-auto flex rounded-md border border-gray-400 p-4 my-4 bg-gray-900">
        <input 
        type="text"
        className=" flex-1 rounded-md border border-white p-3 bg-transparent text-white outline-none" 
        placeholder="Digite um item"
        value={addField}
        onChange={e => setAddField(e.target.value)}
        />
        <button 
        className="p-4"
        onClick={handleAddButton}
        >ADICIONAR</button>
      </div>
      <ul className="max-w-2xl mx-auto">
        {list.map(item =>(
          <li 
          key={item.id}
          className="flex items-center p-3 my-3 border-b border-gray-700"
          >
            <input 
            type="checkbox" 
            className="w-6 h-6 mr-4"
            defaultChecked={item.done}
            onClick={() => handleDoneCheckbox(item.id)}
            />
          <p className="flex-1 text-lg">{item.text}</p>
          <button className="mx-4 text-white hover:text-gray-500">Editar</button>  
          <button className="mx-4 text-white hover:text-gray-500">Excluir</button>  
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Page;