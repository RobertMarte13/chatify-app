import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

export const useChatContext = () => {
    const context = useContext(ChatContext)
    if(!context) throw new Error('Debes envolver con el TaskContextProvaider los componentes los cuales quires que tenga unas propiedades globales.')
    return context
}