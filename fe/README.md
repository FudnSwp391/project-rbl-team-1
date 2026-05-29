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
npm install
npm run dev
```

## Biến môi trường

Copy `.env` và chỉnh `VITE_API_URL` trỏ tới backend API.
