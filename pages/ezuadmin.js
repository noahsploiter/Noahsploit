import Link from "next/link";
import { auth } from "../firebase";
export default function NavBar({ user }) {
  return (
    <nav>
      <div className="nav-wrapper ml-[-200px] md:l-5  bg-[#746a83] mt-[80px]">
        <Link href="/">
          <div className="brand-logo font-bold">Admin Panel</div>
        </Link>
        <ul id="nav-mobile" className="right">
          {user ? (
            <>
              <li>
                <Link href="/createblog">
                  <div>Create Blog</div>
                </Link>
              </li>
              <li className="pr-2 rounded-sm">
                {" "}
                <button className="btn red" onClick={() => auth.signOut()}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/signup">
                  <div>Signup</div>
                </Link>
              </li>
              <li>
                <Link href="/login">
                  <div>Login</div>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
