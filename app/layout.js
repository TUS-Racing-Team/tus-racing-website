// app/layout.js
import "./globals.css";
import { LanguageProvider } from './context/LanguageContext';

export default function RootLayout({ children, title }) {
  return (
    <html lang="en">
      <head>
        <title>{title ?? "TU Sofia Racing Team"}</title>
        <link rel="icon" type="image/x-icon" href="icon.ico" />
      </head>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        </body>
    </html>
  );
}
