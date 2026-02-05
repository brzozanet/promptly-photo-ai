import { useState } from "react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { useChatStore } from "@/store/chatStore";
import { nanoid } from "nanoid";
import { loremIpsum } from "lorem-ipsum";

export function ChatInput() {
  const [input, setInput] = useState<string>("");
  const { addMessage } = useChatStore();
  const isLoading = false;

  const randomText = loremIpsum({ count: 7, units: "sentences" });

  const sendPrompt = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    addMessage({
      id: nanoid(),
      role: "user",
      content: input.trim(),
      timestamp: new Date().toISOString(),
    });
    console.log("click + send:", input);
    setInput("");
    fakeAssistantReply();
  };

  const fakeAssistantReply = () => {
    setTimeout(() => {
      addMessage({
        id: nanoid(),
        role: "assistant",
        content: randomText,
        timestamp: new Date().toISOString(),
      });
    }, 2000);
  };

  return (
    <>
      <form className="p-4 flex gap-2" onSubmit={sendPrompt}>
        <Textarea
          className="min-h-30 resize-none backdrop-blur text-white"
          placeholder="Pytaj o fotografię... (Shift+Enter = nowa linia)"
          disabled={isLoading}
          value={input}
          onChange={(event) => setInput(event?.target.value)}
        />
        <Button
          className="w-24 bg-blue-500 shadow-lg shadow-blue-500/50 px-4 py-2 rounded-md font-bold self-end"
          type="submit"
        >
          {isLoading ? "Czekam..." : "Wyślij"}
        </Button>
      </form>
    </>
  );
}

//TODO: npm uninstall lorem-ipsum

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//   const handleSend = () => {
//     if (input.trim()) {
//       onSend(input);
//       setInput("");
//     }
//   };

// const handleKeyPress = (event) => {
//   if (event.key === "Enter" && !event.shiftKey) {
//     e.preventDefault();
//     handleSend();
//   }
// };
