# Promptly - AI Chat Web Application

## 📋 Opis Projektu

Promptly to aplikacja webowa do rozmowy z AI (ChatGPT), dostępna online. Projekt rozwija się iteracyjnie - zaczynamy od MVP (Minimum Viable Product) z podstawową funkcjonalnością jak w CLI, a następnie stopniowo dodajemy nowe features.

### Fazy Rozwoju

- **Phase 1 (MVP)**: Podstawowy czat AI online (ten dokument)
- **Phase 2** (przyszłość): Systemy kont użytkowników i autoryzacja
- **Phase 3** (przyszłość): Wiele niezależnych czatów z osobną historią

---

## 🛠️ Stack Technologiczny - Phase 1 (MVP)

### Frontend

- **Framework**: React 18 (Vite)
- **Styling**: TailwindCSS + Shadcn/ui (komponenty UI)
- **State Management**: Zustand (prosty i lekki)
- **HTTP Client**: Fetch API (nativny)
- **Build Tool**: Vite

### Backend (Minimalny - Proxy)

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Cel**: Proxy do OpenAI API (ukrywanie klucza API)
- **Rozmiar**: ~200 linii kodu, 1 endpoint

### Baza Danych

- **Brak** (Phase 1 - bez persystencji danych, bez kont użytkowników)

### External Services

- **OpenAI API** (najnowszy dostępny model)

### DevOps & Deployment

- **Frontend**: Vercel (free tier)
- **Backend**: Render (free tier)
- **Version Control**: Git + GitHub
- **Docker**: Nie wymagany dla Phase 1

---

## 📁 Struktura Projektu

```
promptly/
├── frontend/                 # Aplikacja React (Vite)
│   ├── src/
│   │   ├── components/
│   │   │   ├── ChatMessage.tsx
│   │   │   ├── ChatInput.tsx
│   │   │   └── ChatWindow.tsx
│   │   ├── pages/
│   │   │   └── ChatPage.tsx
│   │   ├── services/
│   │   │   └── chatApi.ts (komunikacja z backend proxy)
│   │   ├── store/
│   │   │   └── chatStore.ts (Zustand)
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── index.html
│   ├── package.json
│   ├── vite.config.ts
│   └── tailwind.config.ts
│
├── backend/                  # Micro-service proxy (~200 linii)
│   ├── src/
│   │   ├── routes/
│   │   │   └── chat.ts (proxy endpoint)
│   │   └── index.ts (Express server)
│   ├── .env.example
│   ├── package.json
│   └── tsconfig.json
│
├── .gitignore
└── README.md
```

---

## 📅 Plan Pracy - Phase 1 (MVP - Zoptymalizowany)

### Sprint 1: Setup Frontend (1-2 dni)

- [ ] Inicjalizacja React + Vite
- [ ] Instalacja TailwindCSS + Shadcn/ui
- [ ] Setup Zustand store
- [ ] Struktura folderów komponentów

### Sprint 2: Backend - Micro-proxy (1 dzień)

- [ ] Express server z 1 endpointem
- [ ] Proxy do OpenAI API (`POST /api/chat`)
- [ ] Obsługa `previous_response_id` w requestzie
- [ ] Error handling
- [ ] Environment variables (.env)

### Sprint 3: Frontend - UI & Integracja (2-3 dni)

- [ ] Komponenty UI (ChatMessage, ChatInput, ChatWindow)
- [ ] Layout aplikacji
- [ ] Zustand store do zarządzania historią
- [ ] Integration z backend proxy (chatApi.ts)
- [ ] Obsługa loading i error states

### Sprint 4: Polish & Testowanie (1-2 dni)

- [ ] Responsywny design (mobile-friendly)
- [ ] Edge cases (timeout, error messages)
- [ ] UX improvements (auto-scroll, loading indicators)
- [ ] Local testing (npm run dev)

### Sprint 5: Deployment (1 dzień)

- [ ] Deployment backendu na Render (free tier)
- [ ] Deployment frontendu na Vercel (free tier)
- [ ] Konfiguracja environment variables
- [ ] Testing produkcji

---

## 🚀 Kluczowe Features - MVP

✅ **Podstawowa Funkcjonalność**

- Wysyłanie wiadomości do AI
- Odbieranie odpowiedzi
- Historia rozmowy (w ramach sesji)
- UI podobne do ChatGPT (dark mode, responsywne)

❌ **Poza Scope - Phase 1**

- Konta użytkowników
- Persystencja danych
- Wiele czatów
- Tworzenie/zapisywanie historii czatów

---

## 📦 Instalacja & Uruchomienie (Dev)

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Aplikacja będzie dostępna na `http://localhost:5173`

---

## 🔐 Environment Variables

### Backend (.env)

```
OPENAI_API_KEY=your_key_here
OPENAI_MODEL=gpt-4
PORT=5000
```

### Frontend (.env.local)

```
VITE_API_URL=http://localhost:5000
```

---

## 📝 API Specification - MVP

### Chat Endpoint

```
POST /api/chat

Request Body:
{
  "message": "Cześć! Co potrafisz?",
  "previousResponseId": "chatcmpl-1234..." (optional)
}

Response:
{
  "id": "chatcmpl-5678...",
  "message": "Cześć! Jestem AI asystentem...",
  "timestamp": "2026-01-31T10:00:00Z"
}

Error Response (e.g., 500):
{
  "error": "Failed to connect to OpenAI API"
}
```

---

## 🎨 Design Inspiration

- ChatGPT UI (zmroki interfejs, prosty layout)
- Responsive design (mobile-first approach)
- Smooth animations i transitions

---

## 📚 Techniczne Notatki

1. **State Management**: Historia czatu będzie przechowywana lokalnie w Zustand. W Phase 1 resetuje się po refresh strony.
2. **HTTP Client**: MVP używa Fetch API. **Axios planowany do Sprint 2+** (dodatkowy learning).
3. **Streaming** (opcjonalne): Można dodać streaming odpowiedzi (SSE) zamiast czekania na całą odpowiedź.
4. **Error Handling**: Graceful error handling z user-friendly komunikatami.
5. **CORS**: Backend proxy musi mieć poprawnie skonfigurowany CORS dla frontendu.
6. **Bezpieczeństwo**: API key przechowywany po stronie serwera, nigdy nie trafia do frontendu.

---

## 🚀 Dlaczego Backend (Proxy)?

**Pytanie**: Czy można robić bez backendu?

**Odpowiedź**: ❌ **Nie** - byłoby niebezpieczne.

Jeśli klucz OpenAI byłby w kodzie frontend (JavaScript), każdy mógłby:

- Kopiować klucz z DevTools
- Zniszczyć quota/billing
- Abusować API w Twojej reputacji

**Rozwiązanie**: Minimalny backend (Render) jako proxy - tylko przechowuje API key i przenosi żądania.

---

## ☁️ Deployment - Darmowe Opcje

| Komponent | Platform | Tier | Koszt | Limit                                       |
| --------- | -------- | ---- | ----- | ------------------------------------------- |
| Frontend  | Vercel   | Free | $0    | 100GB/mo bandwidth                          |
| Backend   | Render   | Free | $0    | 0.5GB RAM, auto-sleeps po 15 min inactivity |

**Waga**: Render free tier ma auto-sleep, ale to ok dla MVP (wake up za 30 sekund).

---

## 🔄 Next Steps - Sprint 2+

**Sprint 2 (Backend)**:

- Integracja z OpenAI API
- Express proxy server

**Sprint 3+ (Ulepszenia & Learning)**:

- Wdrożenie Axios (zamiast Fetch API)
- Persystencja czatów (baza danych - PostgreSQL)
- Systemy autoryzacji (JWT)
- Możliwość tworzenia wielu konwersacji
- Historia użytkownika
- Edytowanie/usuwanie wiadomości

---

## 📖 Przydatne Zasoby

- [OpenAI API Docs](https://platform.openai.com/docs)
- [React Best Practices](https://react.dev)
- [Express.js Guide](https://expressjs.com)
- [TailwindCSS](https://tailwindcss.com)
- [Shadcn/ui Components](https://ui.shadcn.com)
- [Zustand State Management](https://github.com/pmndrs/zustand)

---

**Status**: Przygotowanie Phase 1 MVP  
**Ostatnia Aktualizacja**: 31.01.2026
