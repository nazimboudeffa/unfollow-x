import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-5xl space-y-5 px-3 py-5">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div className="space-y-2">
            <p className="text-lg font-bold">Unfollow X</p>
            <p className="text-sm text-muted-foreground">
              For a better social medias experience.
            </p>
          </div>
          <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
            <Link href="https://github.com/nazimboudeffa/unfollow-x" target="_blank" className="hover:underline">
              GitHub
            </Link>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </div>
        </div>
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
}