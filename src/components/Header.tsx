import { LoggedUserContext } from "@/contexts/LoggedUser";
import { useContext, useState } from "react";

export const Header = () => {
  const[titleInput, setTitleInput] = useState('');
  const[bodyInput, setBodyInput] = useState('');

  const handleAddButton = () => {
    if(titleInput && bodyInput) {
      
    }
  }

  // const loggedUserCtx = useContext(LoggedUserContext);

  // const handleLogout = () => {
  //   loggedUserCtx?.setName("");
  // };
  return (
    <header>
      <h1 className="text-3xl">Título da Página</h1>

      <div className="max-w-xl flex flex-col gap-3 border border-dotted border-gray-400 p-3 my-4">
        <input 
          type="text" 
          placeholder="Titulo do Post"
          className="border border-gray-300 p-2 text-black text-xl"
          value={titleInput}
          onChange={e => setTitleInput(e.target.value)}
        />
        <textarea 
          placeholder="Corpo do post"
          className="h-24 border border-gray-300 p-2 text-black text-xl"
          value={bodyInput}
          onChange={e => setBodyInput(e.target.value)}
        ></textarea>
        <button onClick={handleAddButton} className="bg-blue-500 p-3 text-white rounded-md">Adicionar</button>
      </div>
      {/* {loggedUserCtx?.name && (
        <>
          <p>Usuário Logado: {loggedUserCtx?.name} </p>
          <button onClick={handleLogout}>Sair</button>
        </>
      )}
      {(!loggedUserCtx || loggedUserCtx?.name === '') && 
        <p>Usuário Deslogado</p>} */}
    </header>
  );
};



