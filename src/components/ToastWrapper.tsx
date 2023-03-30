"use client";
import { Toaster } from "react-hot-toast";

export default function ToastWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Toaster position="bottom-center" />
      {children}
    </>
  );
}
