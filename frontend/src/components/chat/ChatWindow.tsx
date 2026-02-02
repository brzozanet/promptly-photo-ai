import { ChatInput } from "./ChatInput";
import { MessageList } from "./MessageList";

export function ChatWindow() {
  return (
    <>
      <h1>ChatWindow</h1>
      <MessageList />
      <ChatInput />
    </>
  );
}
