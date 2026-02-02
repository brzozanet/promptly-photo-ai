import { ChatWindow } from "@/components/chat/ChatWindow";

export function HomePage() {
  return (
    <>
      <div className="flex w-full flex-col items-center gap-6 text-center">
        <h1>Porozmawiajmy o fotografi. W czym moge pomóc?</h1>
        <ChatWindow />
      </div>
    </>
  );
}
