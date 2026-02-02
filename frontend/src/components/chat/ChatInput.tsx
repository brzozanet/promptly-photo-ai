import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

export function ChatInput() {
  return (
    <>
      <div className="border-t p-4 flex gap-2">
        <Textarea className="min-h-[80px] resize-none" />
        <Button className="self-end" />
      </div>
    </>
  );
}

//TODO:
// Textarea (z shadcn/ui)
// Button  (z shadcn/ui)
// Stan lokalny (useState) dla input value
// Handler onSubmit (wysyłanie wiadomości)
