import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Zap, Shield, Coins } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
          Instant Micropayments on{" "}
          <span className="text-primary">Hive Blockchain</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Fast, secure, and gas-free transactions for the digital economy
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/dashboard">
            <Button size="lg" className="flex items-center">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/about">
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </Link>
        </div>
      </div>

      <div className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="p-6">
          <Zap className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
          <p className="text-muted-foreground">
            Experience instant transactions with sub-second confirmation times on
            the Hive blockchain.
          </p>
        </Card>

        <Card className="p-6">
          <Shield className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Secure & Simple</h3>
          <p className="text-muted-foreground">
            Protected by blockchain technology with an easy-to-use interface for
            everyone.
          </p>
        </Card>

        <Card className="p-6">
          <Coins className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Zero Fees</h3>
          <p className="text-muted-foreground">
            No gas fees or transaction costs. Keep more of what you earn with
            fee-free transfers.
          </p>
        </Card>
      </div>
    </div>
  );
}