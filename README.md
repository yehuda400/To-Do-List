# 📝 Tasks App

A simple and clean to-do list app built with React + Vite.

## 🔍 Features

- Add tasks via input (`useRef`) and a clearly visible **Add** button
- Tasks stored as objects with unique `id` and `taskName`
- Display a styled task list with **delete** and **edit** options
- Edit tasks in-place with an input field and **save** button
- Automatic focus on input when editing (`useRef + useEffect`)
- Uses `useState` for local state management
- Global state handled via `useContext` with a custom provider
- Utility function for generating unique task IDs
- Modular and maintainable component structure
- Custom CSS styling in `index.css`

## 🚀 Tech Stack

- React
- Vite
- CSS

## 💻 Run locally

```bash
npm install
npm run dev
```
