# 🔍 Autofill Search (Frontend)

This is a frontend assignment built with **React + Vite**, showcasing an intelligent autofill input with debounced search, highlighting, and LRU caching for performance optimization.

---

## 📌 Features

- 🔎 Dynamic search filtering from a dummy dataset
- ⏱️ 300ms debounce to reduce unnecessary re-renders
- ✨ Highlight matching substrings in **bold**
- 💾 LRU (Least Recently Used) Cache storing up to 10 items
- 🖥️ Responsive UI without white background
- ⚛️ Built using React (Vite) and CSS Modules

---

## 🧠 Technologies Used

- React + Vite
- JavaScript
- CSS
- Custom Debounce Logic
- Custom LRU Cache Class

---

## 📁 Project Structure

```
autofill-assignment/
├── public/
├── src/
│   ├── components/
│   │   ├── SearchInput.jsx
|   |───|style
|   |     |──SearchInput.css      
│   ├── data.js
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

---

## 🚀 Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/RohanKumar63/autofill-Frontend.git
cd autofill-Frontend
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

4. **Open in browser**

Go to [http://localhost:5173](http://localhost:5173)

---

## 🧪 Example Input

**User Input:** `react`

**Search Results:**

- **React** Query  
- **React** Hooks  
- **React** Router  

---

## 📸 Preview

![image](https://github.com/user-attachments/assets/48471e89-5615-49d3-b681-76c93ad71e01)


## 🙋‍♂️ Author

- [Rohan Kumar](https://github.com/RohanKumar63)
