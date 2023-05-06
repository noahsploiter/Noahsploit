import Image from "next/image";
import { db } from "../firebase";
import Link from "next/link";
import back from "../public/b.png";
import { useState } from "react";

export default function Home({ Allblogs }) {
  const [blogs, setblogs] = useState(Allblogs);
  const [end, setEnd] = useState(false);
  const loadMore = async () => {
    const last = blogs[blogs.length - 1];
    const res = await db
      .collection("blogs")
      .orderBy("createdAt", "desc")
      .startAfter(new Date(last.createdAt))
      .limit(3)
      .get();
    const newblogs = res.docs.map((docSnap) => {
      return {
        ...docSnap.data(),
        createdAt: docSnap.data().createdAt.toMillis(),
        id: docSnap.id,
      };
    });
    setblogs(blogs.concat(newblogs));

    if (newblogs.length < 3) {
      setEnd(true);
    }
  };
  return (
    <div className="bg-[#040720] bg-[length:500px_500px] bg-right bg-[url('../public/b.png')] bg-no-repeat   h-full md:h-screen pt-[80px] ">
      <div className="pt-[150px] pl-[20px] h-full">
        <h1 className="text-4xl md:text-5xl font-bold w-screen pr-10">
          Providing{" "}
          <span className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
            {" "}
            the best
          </span>{" "}
          building experience
        </h1>
        <p className="pt-5 text-xl text-gray-400 w-screen pr-10">
          All the best and most modern projects. Access online courses,
          projects, blogs, coding examples, tutorials and much more. All in one
          place
        </p>
      </div>
      <div className="bg-[#040720] pl-[60px] md:pl-[105px] pt-[100px]">
        <h1 className="text-[#3a59e4] text-2xl font-bold">PROJECTS</h1>
        <h1 className="pt-2 text-4xl md:text-5xl font-extrabold">
          Featured Projects
        </h1>
      </div>
      <div
        key={""}
        className="bg-[#040720] center flex flex-wrap gap-8 justify-center items-center "
      >
        {blogs.map((blog) => {
          return (
            <div key={blog.createdAt}>
              <Link href={`/blogs/${blog.id}`}>
                <div
                  className="bg-[#27273a75] hover:bg-[#bebcbc77] cursor-pointer flex flex-col items-center justify-center  rounded-3xl  w-[350px] h-[400px] mt-10 md:w-[400px]"
                  key={blog.createdAt}
                >
                  <div className="w-[300px] md:w-[360px]">
                    <Image
                      className="rounded-xl"
                      src={blog.imageUrl}
                      alt=""
                      width={500}
                      height={500}
                      quality={100}
                    />
                    <div>
                      <span className="card-title  mt-5 flex items-center">
                        {" "}
                        <div className="font-bold text-xl">{blog.title}</div>
                      </span>
                    </div>
                  </div>

                  <div className="card-content">
                    <p className="text-xl text-gray-400 mt-1">{blog.body}</p>
                  </div>
                  <div className="card-action mt-4"></div>
                </div>
              </Link>
            </div>
          );
        })}

        <style jsx>
          {`
            .card {
              max-width: 200px;
              margin: 22px auto;
            }
            p {
              display: -webkit-box;
              overflow: hidden;
              -webkit-line-clamp: 1;
              -webkit-box-orient: vertical;
            }
          `}
        </style>
      </div>
      <div className="bg-[#040720] flex justify-center items-center pt-5">
        {end == false ? (
          <button
            className="btn #fb8c00 orange darken-1"
            onClick={() => loadMore()}
          >
            Load more
          </button>
        ) : (
          <h3>You have reached end</h3>
        )}
      </div>
      <div className="pt-10 bg-[#040720]">
        <h1></h1>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const querySnap = await db
    .collection("blogs")
    .orderBy("createdAt", "desc")
    .limit(3)
    .get();
  const Allblogs = querySnap.docs.map((docSnap) => {
    return {
      ...docSnap.data(),
      createdAt: docSnap.data().createdAt.toMillis(),
      id: docSnap.id,
    };
  });

  return {
    props: { Allblogs }, // will be passed to the page component as props
  };
}
