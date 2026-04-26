# 🚀 React Virtualized List App

This project demonstrates how to efficiently render a large list (5000+ items) using **react-virtualized** in React. It improves performance by only rendering visible items instead of the entire list.

---

## 📌 Features

- ⚡ High-performance list rendering with virtualization
- 📏 Auto responsive sizing using `AutoSizer`
- 🧠 Efficient rendering using `List` component
- 📝 Dynamic content generation using `lorem-ipsum`
- 🖼️ Image + text list items
- 🔄 Smooth scrolling with overscan optimization

---

## 🛠️ Tech Stack

- React
- react-virtualized
- lorem-ipsum
- CSS

---

## 📂 Project Structure
src/
│
├── components/
│ └── ListItem.jsx
│
├── App.js
├── App.css
└── index.js

```bash

---

## 📦 Installation

# Clone the repository
git clone https://github.com/your-username/react-virtualized-list.git

# Navigate into the project
cd react-virtualized-list

# Install dependencies
npm install

```

## ▶️ Run the App

```Bash
npm start
```
App will run at: 
```
http://localhost:5173
```

## 🧠 How It Works
- `react-virtualized` renders only the visible rows in the viewport.
- `AutoSizer` automatically adjusts width and height based on the container.
- `List` component handles rendering large datasets efficiently.

## 📌 Key Code Example

```JavaScript

<AutoSizer>
  {({ width, height }) => (
    <List
      width={width}
      height={height}
      rowHeight={50}
      rowCount={5000}
      rowRenderer={renderRow}
      overscanRowCount={5}
    />
  )}
</AutoSizer>

```
## ⚠️ Performance Tips
- Use `useMemo` to avoid recreating large datasets on every render.
- Use `React.memo` for list items to prevent unnecessary re-renders.
- Keep row height fixed for better performance.

## 🧩 Dependencies

```Bash
npm install react-virtualized lorem-ipsum
```

## 📸 Demo Data
- 👤 Name
- 🖼️ Image (placeholder)
- 📝 Random sentence (generated via lorem-ipsum)

## 📈 Use Cases

- Chat applications
- Infinite scrolling feeds
- Large data tables
- Logs viewer
- Social media feeds

## 🤝 Contributing

Contributions are welcome!
Feel free to fork this repo and submit a pull request.

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

```

---

If you want, I can also:
- :contentReference[oaicite:0]{index=0}
- :contentReference[oaicite:1]{index=1}
- Or :contentReference[oaicite:2]{index=2} 🚀
```