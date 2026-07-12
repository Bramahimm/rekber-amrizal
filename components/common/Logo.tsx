import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/Logo.png"
        alt="Logo Amrizal"
        width={48}
        height={48}
        priority
        className="h-10 w-auto"
      />
    </Link>
  );
}