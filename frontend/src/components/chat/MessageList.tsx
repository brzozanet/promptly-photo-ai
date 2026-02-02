import { Message } from "./Message";

export function MessageList() {
  return (
    <>
      <h2>MessageList</h2>
      <Message />
    </>
  );
}

//TODO:
// Pobieranie messages z useChatStore
// Mapowaanie tablicy Message
// ScrollArea (scrollowanie wiadomości)
// Obsługa pustej listy
