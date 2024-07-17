"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleLogIn() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.log(error);
    }
  }
  async function handleLogOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className=" pt-3 pl-3 h-screen bg-purple-200 text-xl">
      <section>
        {user ? (
          <div>
            <p>
              Welcome, {user.displayName} ({user.email})
            </p>
            <button className="hover:underline" onClick={handleLogOut}>
              Sign Out
            </button>
            <br />
            <Link className="hover:underline" href="/week-8/shopping-list">
              Continue to your Shopping List
            </Link>
          </div>
        ) : (
          <button onClick={handleLogIn}>Sign in with GitHub</button>
        )}
      </section>
    </main>
  );
}
