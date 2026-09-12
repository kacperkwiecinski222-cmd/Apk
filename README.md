# mDowód - Generator Mobilnego Dowodu Osobistego

Aplicja webowa do generowania wirtualnego dowodu osobistego (mDowód) wzorowanego na polski mobilny dowód osobisty.

## Funkcjonalności

✨ **Główne cechy:**
- 📱 1:1 odwzorowanie interfejsu mDowodu z aplikacji mObywatel
- 🖼️ Wgrywanie własnego zdjęcia
- 👤 Personalizacja: imię, nazwisko, data urodzenia
- 🔢 Automatyczne generowanie numeru PESEL na podstawie daty urodzenia
- 📄 Automatyczne generowanie numeru dokumentu
- 📅 Automatyczne obliczanie dat wydania i ważności (10 lat)
- 🔳 Generowanie kodu QR do weryfikacji danych
- 📱 Pełna responsywność (mobile-first design)

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Bezpieczeństwo typów
- **Vite** - Build tool
- **CSS3** - Stylizacja z animacjami
- **qrcode.react** - Generowanie kodów QR

## Instalacja

```bash
npm install
```

## Uruchomienie

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Preview
```bash
npm run preview
```

## Użytkowanie

1. Wgrań swoje zdjęcie (opcjonalnie)
2. Wpisz imię i nazwisko
3. Wybierz datę urodzenia
4. Kliknij "Generuj mDowód"
5. System automatycznie wygeneruje:
   - Numer PESEL (zgodny z algorytmem)
   - Numer dokumentu
   - Daty wydania i ważności
6. Zeskanuj kod QR aby sprawdzić dane

## Algorytm PESEL

Aplikacja generuje prawdziwą strukturę PESEL:
- YY - ostatnie 2 cyfry roku urodzenia
- MM - miesiąc (z kodowaniem dla wieku)
- DD - dzień
- XXX - numer seryjny (losowy)
- S - cyfra płci (parzysta/nieparzysta)
- C - cyfra kontrolna (wyliczana)

## Licencja

MIT
