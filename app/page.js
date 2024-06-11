import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen bg-pink-100">
      <h1 className="text-2xl mb-2 px-4"><b>CPRG 306: Web Development2-Assignments</b></h1>
      <div className="px-4">
      <Link href="./week-2">Week 2 Assignment</Link><br />
      <Link href="./week-3">Week 3 Assignment</Link><br />
      <Link href="./week-4">Week 4 Assignment</Link>
      </div>
    </main>
  );
}
