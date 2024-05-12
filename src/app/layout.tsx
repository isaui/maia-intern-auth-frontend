"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../redux/store/Store';

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
        </PersistGate>
        </Provider>
        </body>
    </html>
  );
}
