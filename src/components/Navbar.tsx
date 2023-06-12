import { Comic_Neue } from "next/font/google";
import Link from "next/link";

const font = Comic_Neue({
  weight: "400",
  subsets: ["latin"],
});

export function Navbar() {
  return (
    <div className="flex items-center justify-between h-16 bg-white px-8 py-3 shadow">
      {/* logo */}
      <div className="aspect-square rounded-lg bg-orange-600 p-2 px-3 text-xl font-semibold italic text-white">
        <span className={font.className}>S</span>
        <span className={font.className}>b</span>
      </div>

      {/* links */}
      <div className="flex  items-center gap-6">
        <Link href="/">
          <span className="rounded-full border-2 border-orange-500 px-5 py-1 font-semibold">
            Home
          </span>
        </Link>

        <Link href="/new">
          <span className="rounded-full border-2 border-orange-500 px-5 py-1 font-semibold">
            Create
          </span>
        </Link>
      </div>
    </div>
  );
}
