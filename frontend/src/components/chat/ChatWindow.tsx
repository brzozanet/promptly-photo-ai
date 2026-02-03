import { ChatInput } from "./ChatInput";
import { MessageList } from "./MessageList";

export function ChatWindow() {
  return (
    <>
      <div className="w-full max-w-5xl rounded-xl border bg-transparent shadow-sm flex flex-col">
        <MessageList />
        <ChatInput />
      </div>
    </>
  );
}
