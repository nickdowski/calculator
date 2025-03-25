# 🔢 Simple JavaScript Calculator

A basic web calculator built with **HTML**, **CSS**, and **JavaScript**. It supports basic arithmetic operations and includes custom logic for divide-by-zero errors with a fun twist!

---

## 🚀 Features

- Addition, subtraction, multiplication, and division
- Clickable number and operator buttons
- Clear (`C`) button to reset the display
- Decimal support
- Division-by-zero protection with a custom message: _"Nice try, buddy boy!"_
- Simple layout using **Flexbox**
- Display auto-updates on button clicks

---

## 🧠 How It Works

- Button clicks are captured using `addEventListener`.
- Button text is appended to the display unless the display shows `"0"` (then it's replaced).
- When `=` is pressed:
  - If the expression contains `/0`, a custom message is shown.
  - Otherwise, the expression is evaluated using `eval()`.

---

## 📁 Project Structure


---

## 🛠️ Getting Started

1. Clone or download the repository.
2. Open `index.html` in your browser.
3. Click the buttons and enjoy calculating!

---

## 📌 Future Improvements (Optional Ideas)

- Keyboard input support
- Multiple-operation parsing (e.g., `2 + 3 * 4`)
- Backspace (`←`) button functionality
- Use a safe expression parser instead of `eval()`
- Dark mode toggle 🌙

---

## 💬 Credits

Made by Nicky J — built for fun and learning!
