import { ScrollArea } from "../ui/scroll-area";
import { Message } from "./Message";

export function MessageList() {
  return (
    <>
      <ScrollArea className="h-full px-4 py-6">
        <ul className="space-y-4">
          <li>
            <Message />
          </li>
          <li>
            <Message />
          </li>
          <li>
            <Message />
          </li>
          <li>
            <Message />
          </li>
          <li>
            <Message />
          </li>
        </ul>
      </ScrollArea>
    </>
  );
}

//TODO:
// Pobieranie messages z useChatStore
// Mapowaanie tablicy Message
// ScrollArea (scrollowanie wiadomości)
// Obsługa pustej listy
