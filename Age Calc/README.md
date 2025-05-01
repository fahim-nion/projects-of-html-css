# 🧮 Age Calculator

This is a simple **Age Calculator Web App** built with HTML, CSS, and JavaScript. It calculates a user's exact age in years, months, and days based on the birthdate selected from an input field.

---

## 🚀 Features

- Select your birthdate using a date picker
- Displays precise age: years, months, and days
- Automatically prevents selecting future dates
- Fully responsive and interactive UI

---

## 📸 Visual Preview

### ✅ How it looks:

![Age Calculator UI Preview](./imga/Screenshot%202025-05-02%20045219.png)

---

## 🧾 How It Works

1. The user selects a birthdate from the calendar input.
2. When "Calculate" is clicked, JavaScript:
   - Extracts the selected date
   - Compares it with today’s date
   - Calculates the difference in years, months, and days
3. The result is shown below the button in this format:
   > "You are 23 years, 4 months and 15 days Old !!"

---

## 💡 Technologies Used

- **HTML** — Page structure and layout
- **CSS** — Styling the input, button, and result
- **JavaScript** — Calculating the exact age

---

## 📁 Project Structure


---

## 🔧 Setup and Usage

1. Clone the repository or download the files.
2. Open `index.html` in any modern browser.
3. Select your birthdate and click **Calculate**.
4. Your age will be displayed below.

---

## 📌 Notes

- The date input is automatically limited to prevent selecting future dates (`max = today`).
- The logic handles edge cases like:
  - Borrowing days or months when needed
  - Leap years and month-end transitions

---

## 📜 License

This project is open-source and free to use under the [MIT License](LICENSE).

---

## 🙋‍♂️ Author

Made by [Fahim Morshed] — feel free to improve, customize, and share!

