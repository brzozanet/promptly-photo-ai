import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

export function ChatInput() {
  return (
    <>
      <h2>ChatInput</h2>
      <Textarea />
      <Button />
    </>
  );
}

//TODO:
// Textarea (z shadcn/ui)
// Button  (z shadcn/ui)
// Stan lokalny (useState) dla input value
// Handler onSubmit (wysyłanie wiadomości)
