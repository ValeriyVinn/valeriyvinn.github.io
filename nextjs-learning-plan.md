
# 📘 План вивчення Next.js

## 🔰 Розділ 1: Вступ і базова структура
- Що таке Next.js і чому його використовують
- Встановлення: `npx create-next-app`
- Вибір між **App Router** і **Pages Router**
- Структура проекту:
  - `app/`, `pages/`
  - `layout.tsx`, `page.tsx`
  - `public/`, `styles/`, `next.config.js`

## 🔗 Розділ 2: Маршрутизація (Routing)
- Файлова маршрутизація
- Динамічні маршрути `[slug]`, catch-all `[...slug]`
- Вкладені сторінки та layout-и
- Посилання через `<Link>`
- Навігація через `useRouter` або `usePathname`

## 🧱 Розділ 3: Компоненти та UI
- Server vs Client Components
- Директива `"use client"`
- Використання Tailwind / CSS Modules / SCSS / Emotion
- Глобальні стилі (`globals.css`)
- Створення спільних layout-ів (наприклад, `MainLayout`, `DashboardLayout`)

## 📦 Розділ 4: Завантаження даних
- `fetch` у Server Components
- `getStaticProps`, `getServerSideProps` (у Pages Router)
- `generateStaticParams()` та `generateMetadata()`
- `revalidate` для ISR
- Інтеграція з API / бекендом

## ⚙️ Розділ 5: Рендеринг
- SSR (Server-side rendering)
- SSG (Static site generation)
- ISR (Incremental Static Regeneration)
- CSR (Client-side rendering)
- Гібридний рендеринг

## 🧑‍💻 Розділ 6: API routes / Backend
- Створення `api/hello.ts`
- Робота з `req`, `res`
- Побудова повноцінного бекенду у Next.js
- Інтеграція з базами даних (MongoDB, PostgreSQL)
- Валідація форм (наприклад, Zod, Yup)

## 🧩 Розділ 7: State Management
- React Context API
- React Query / SWR
- Zustand, Redux Toolkit (якщо потрібно)

## 🔐 Розділ 8: Аутентифікація та безпека
- Auth with NextAuth.js
- Middleware: захист сторінок
- Server Actions + cookies
- Хешування, JWT, CSRF

## 🔌 Розділ 9: Оптимізація
- Dynamic Imports
- Image Optimization (`<Image>`)
- Head Optimization (`<Head>`, `metadata`)
- Lazy loading
- SEO

## 🚀 Розділ 10: Деплой та DevOps
- Деплой на Vercel
- Альтернативи: Netlify, Railway, Render
- `.env.local` та секрети
- Production builds: `next build`, `next start`
- Аналітика: Vercel Analytics, Plausible

## 🛠 Розділ 11: Інструменти та налаштування
- ESLint + Prettier
- Husky (Git hooks)
- VS Code extensions
- Псевдоніми імпорту `@/`
- Типізація з TypeScript

## 📚 Розділ 12: Поглиблене
- Middleware та Edge Functions
- App Router API – `notFound`, `redirect`, `metadata`
- Server Actions (`"use server"`)
- Internationalization (i18n)
- Створення власного сервера (custom server)
