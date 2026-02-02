# Graf komponentów + przepływ props/state (MVP)

## Graf komponentów

```
┌─────────────────────────────────────────────────────────────────┐
│                            Layout                               │
│  props: brak                                                    │
│  state: brak                                                    │
│  ├─ Header                                                      │
│  └─ Outlet (React Router)                                       │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                          HomePage                               │
│  props: brak                                                    │
│  state: brak                                                    │
│  └─ ChatWindow                                                  │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                         ChatWindow                              │
│  props: brak                                                    │
│  state: brak                                                    │
│  ├─ MessageList                                                 │
│  └─ ChatInput                                                   │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                        MessageList                              │
│  props: brak                                                    │
│  state: useChatStore() → messages[]                             │
│  └─ Message (x wiele)                                           │
│      ↓ props: { id, role, content, timestamp }                  │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                          Message                                │
│  props: { id, role, content, timestamp }                        │
│  state: brak                                                    │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                         ChatInput                               │
│  props: brak                                                    │
│  state lokalny: useState(inputValue)                            │
│  state Zustand: useChatStore() → addMessage()                   │
│  └─ <Textarea> + <Button>                                       │
└─────────────────────────────────────────────────────────────────┘
```

---

## Przepływ danych (szczegółowo)

### **Zustand State (`useChatStore`)**

```typescript
{
  messages: Message[],        // ← MessageList czyta
  isLoading: boolean,
  error: string | null,
  addMessage: (msg) => void,  // ← ChatInput wywołuje
  clearMessages: () => void,
  setLoading: (bool) => void,
  setError: (err) => void
}
```

---

## Komponenty używające **Zustand**:

| Komponent       | Co czyta z Zustand | Co zapisuje do Zustand |
| --------------- | ------------------ | ---------------------- |
| **MessageList** | `messages`         | -                      |
| **ChatInput**   | -                  | `addMessage()`         |

---

## Komponenty używające **props**:

| Komponent   | Props                              | Skąd                                    |
| ----------- | ---------------------------------- | --------------------------------------- |
| **Message** | `{ id, role, content, timestamp }` | MessageList (spread z `messages.map()`) |

---

## Komponenty używające **lokalnego state**:

| Komponent     | Stan                                               | Do czego               |
| ------------- | -------------------------------------------------- | ---------------------- |
| **ChatInput** | `const [inputValue, setInputValue] = useState("")` | Kontrolowanie textarea |

---

## Przepływ wiadomości (krok po kroku):

```
1. User pisze w ChatInput (textarea)
   → useState(inputValue) - lokalny stan

2. User klika "Wyślij"
   → ChatInput wywołuje: useChatStore().addMessage({ ... })

3. Zustand dodaje wiadomość do `messages[]`
   → Stan globalny się zmienia

4. MessageList czyta: const { messages } = useChatStore()
   → Re-renderuje listę

5. MessageList mapuje: messages.map(msg => <Message {...msg} />)
   → Przekazuje props do Message

6. Message renderuje bąbelek z danymi z props
```

---

## Podsumowanie (kto używa czego):

```
Layout         → brak props/state
Header         → brak props/state
HomePage       → brak props/state
ChatWindow     → brak props/state

MessageList    → Zustand (messages)
Message        → Props (id, role, content, timestamp)
ChatInput      → Zustand (addMessage) + Local State (inputValue)
```

---

**TL;DR**: Tylko **MessageList** i **ChatInput** łączą się z Zustand. Reszta to "głupie" komponenty (presentational).
