import Link from "next/link";
import { auth } from "../firebase";
export default function NavBar({ user }) {
  return (
    <div className="bg-[#040720] h-screen ">
      <div className="  bg-[#040720] pt-[80px]">
        <Link href="/">
          <div className="flex flex-col justify-center items-center brand-logo font-bold">
            Admin Panel
          </div>
        </Link>
        <ul
          id="nav-mobile"
          className="m-7 mt-5 space-y-4 border rounded-xl h-[200px] flex items-center justify-center flex-col"
        >
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
              {/* <li>
                <Link href="/signup">
                  <div>Signup</div>
                </Link>
              </li> */}
              <li className="border w-[120px] flex items-center justify-center h-[50px] rounded-xl">
                <Link href="/login">
                  <div>Login</div>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
