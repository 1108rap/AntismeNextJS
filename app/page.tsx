import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1> Dashboard Main</h1>
      <Link href="/auth">Login Pages</Link>
      <br></br>
      <Link href="/dashboard">dashboard Pages</Link>
    </div>
  );
}
