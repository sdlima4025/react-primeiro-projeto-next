import { createContext, ReactNode, useState } from 'react';
import { Post } from '../types/post';

type PostContextType = {
    posts:Post[];
    addPost: (title: string, body: string) => void;
}
// Ciação do contexto do post
export const PostContext = createContext<PostContextType | null>(null);

// Criação do Provider
export const PostProvider = ({children}: {children: ReactNode}) => {
    // criando o state
    const [posts, setPosts] = useState<Post[]>([]);

    const addPost = (title: string, body: string) => {
        setPosts([...posts, {id: posts.length, title, body}])
    }
    return(
        <PostContext.Provider value={{posts, addPost}}>{children}</PostContext.Provider>
    );
}