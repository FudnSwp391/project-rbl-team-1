# SEHub Frontend

React + Vite frontend với cấu trúc feature-based.

## Cấu trúc thư mục

```
src/
├── app/          # Redux store, routing, route guards
├── shared/       # Components, layouts, hooks, utils, context dùng chung
├── features/     # Module theo domain (auth, community, exam, ...)
├── assets/       # images, icons, logos, illustrations
└── styles/       # reset, variables, global CSS
```

## Chạy dev

```bash
cd fe
npm install
npm run dev
```

Mở trang pricing: **http://localhost:5173/pricing**

> **Lưu ý:** Nếu chưa chạy `npm install`, thư mục `node_modules` sẽ không tồn tại và app không khởi động được.

## Biến môi trường

Copy `.env` và chỉnh `VITE_API_URL` trỏ tới backend API.
