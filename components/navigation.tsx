"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Wallet2, Send, History, QrCode, CircleDollarSign } from "lucide-react";

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <Wallet2 className="h-6 w-6 text-primary" />
              <span className="ml-2 text-xl font-bold">HivePay</span>
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link href="/dashboard">
              <Button
                variant={isActive("/dashboard") ? "default" : "ghost"}
                className="flex items-center"
              >
                <CircleDollarSign className="h-4 w-4 mr-2" />
                Dashboard
              </Button>
            </Link>
            <Link href="/send">
              <Button
                variant={isActive("/send") ? "default" : "ghost"}
                className="flex items-center"
              >
                <Send className="h-4 w-4 mr-2" />
                Send
              </Button>
            </Link>
            <Link href="/transactions">
              <Button
                variant={isActive("/transactions") ? "default" : "ghost"}
                className="flex items-center"
              >
                <History className="h-4 w-4 mr-2" />
                History
              </Button>
            </Link>
            <Link href="/qr-pay">
              <Button
                variant={isActive("/qr-pay") ? "default" : "ghost"}
                className="flex items-center"
              >
                <QrCode className="h-4 w-4 mr-2" />
                QR Pay
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}