import { createContext, ReactNode, useState } from 'react';
import { Post } from '../types/post';

type PostContextType = {
    posts:Post[];
}
// Ciação do contexto do post
export const PostContext = createContext<PostContextType | null>(null);

// Criação do Provider
export const PostProvider = ({children}: {children: ReactNode}) => {
    // criando o state
    const [posts, setPosts] = useState<Post[]>([]);
    return(
        <PostContext.Provider value={{posts}}>{children}</PostContext.Provider>
    );
}