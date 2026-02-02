import { ChatInput } from "./ChatInput";
import { MessageList } from "./MessageList";

export function ChatWindow() {
  return (
    <>
      <div className="w-full max-w-3xl rounded-xl border bg-card shadow-sm flex h-150 flex-col">
        <MessageList />
        <ChatInput />
      </div>
    </>
  );
}
