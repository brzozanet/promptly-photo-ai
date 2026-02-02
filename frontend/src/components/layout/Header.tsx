export function Header() {
  return (
    <>
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <div>Promptly Photo AI</div>
        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          <ul>
            <li>
              <a href="#">O projekcie</a>
            </li>
            <li>
              <a href="#">Jak działa</a>
            </li>
            <li>
              <a href="#">Kontakt</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
