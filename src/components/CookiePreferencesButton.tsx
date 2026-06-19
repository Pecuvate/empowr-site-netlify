import Link from "next/link";

export default function CookiePreferencesButton() {
  return (
    <Link
      href="/cookie-preferences"
      className="text-sm text-muted hover:text-white transition-colors"
    >
      Cookie Preferences
    </Link>
  );
}
