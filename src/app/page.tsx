"use client";

import {listReducer} from "@/reducers/listReducer";
import {Item} from "@/types/Item";
import {useReducer, useState} from 'react';

const Page = () => {
const [list, dispach] = useReducer(listReducer, []);
const [addField, setAddField] = useState('');
const handleAddButton = () => {
  
}
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-4xl my-4">Lista de Tarefas</h1>
      <div className="max-w-2xl mx-auto flex rounded-md border border-gray-400 p-4 my-4 bg-gray-800">
        <input  
        type="text" 
        className="flex-1 rounded-md border border-white p-3 bg-transparent text-white outline-none"
        placeholder="Digite um Item"
        value={addField}
        onChange={e => setAddField(e.target.value)}
        />
        <button className="p-4"
        onClick={handleAddButton}
        >ADICIONAR</button>
      </div>
      <ul>
        {list.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default Page;