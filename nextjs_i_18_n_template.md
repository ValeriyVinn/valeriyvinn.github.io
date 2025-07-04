/* === next.config.js === */

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['uk', 'en'],
    defaultLocale: 'uk',
  },
};

module.exports = nextConfig;

/* === middleware.ts === */

import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['uk', 'en'],
  defaultLocale: 'uk',
});

export const config = {
  matcher: ['/', '/(uk|en)/:path*'],
};

/* === app/[locale]/layout.tsx === */

import { NextIntlClientProvider, useMessages } from 'next-intl';
import { ReactNode } from 'react';

export default function LocaleLayout({ children, params }: { children: ReactNode; params: { locale: string } }) {
  const messages = useMessages();

  return (
    <html lang={params.locale}>
      <body>
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

/* === app/[locale]/page.tsx === */

import { useTranslations } from 'next-intl';
import SwitchLang from '@/components/SwitchLang/SwitchLang';

export default function HomePage() {
  const t = useTranslations();

  return (
    <main>
      <SwitchLang />
      <h1>{t('name')}</h1>
      <h2>{t('profession')}</h2>
      <p>{t('summary')}</p>
    </main>
  );
}

/* === src/components/SwitchLang/SwitchLang.tsx === */

'use client';

import Link from 'next-intl/link';
import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';

const locales = [
  { code: 'uk', label: '🇺🇦 Українська' },
  { code: 'en', label: '🇬🇧 English' },
];

export default function SwitchLang() {
  const currentLocale = useLocale();
  const pathname = usePathname();

  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      {locales.map(({ code, label }) => (
        <Link
          key={code}
          href={pathname}
          locale={code}
          style={{
            fontWeight: currentLocale === code ? 'bold' : 'normal',
            textDecoration: currentLocale === code ? 'underline' : 'none',
          }}
        >
          {label}
        </Link>
      ))}
    </div>
  );
}

/* === messages/en.json === */
{
  "name": "Valeriy Svystun",
  "profession": "Full Stack Developer",
  "summary": "Experienced developer with a passion for building apps."
}

/* === messages/uk.json === */
{
  "name": "Валерій Свистун",
  "profession": "Фулстек розробник",
  "summary": "Досвідчений розробник, захоплений створенням додатків."
}
