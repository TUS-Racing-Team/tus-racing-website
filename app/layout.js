import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>TU Sofia Racing Team</title>
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
