import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>Home</div>
      <Link href="/contacts">
        <div>Contacts</div>
      </Link>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p>Welcome to Next.js</p>
      </div>
    </main>
  );
}
