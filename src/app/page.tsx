import Link from "next/link";

const apps = [
  {
    name: "Friends Wrapped",
    description:
      "A social app for teenagers to play to play anonymous polls with  their friends.",
    link: "https://apps.apple.com/gb/app/friend-wrapped/id6475646063",
  },
  {
    name: "WDYT",
    description:
      "A social app for teenagers to share compliments among their friends.",
  },
];
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between bg-white dark:bg-black px-8 pt-8 pb-4">
      <div>
        <h1 className="text-[4rem] font-bold leading-[1.15] pt-8 text-center">
          Parklane, Inc.
        </h1>
        <p className="text-[1.5rem] text-center mt-10 my-16 max-w-[600px] mx-auto">
          A small team making{" "}
          <span className="font-bold bg-gradient-to-r from-pink-600 via-blue-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            games
          </span>{" "}
          and{" "}
          <span className="font-bold bg-gradient-to-r from-pink-600 via-blue-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            social
          </span>{" "}
          apps. We hope you have fun using our apps.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-[800px] mx-auto">
          {apps.map((app) => (
            <Link
              key={app.name}
              href={app.link ? app.link : "/"}
              className="block bg-white dark:bg-black  shadow-md border border-gray-200 dark:border-gray-800 rounded-[10px] p-[24px]  group-hover:shadow-lg hover:border-blue-600 transition-all duration-200 ease-in-out group"
            >
              <div className="flex justify-between items-center  mb-4">
                <h2 className="text-xl font-bold group-hover:text-blue-500 transition-all duration-200 ease-in-out">
                  {app.name} →
                </h2>
                {!app.link && (
                  <div className="text-xs bg-blue-500 px-2 py-1 rounded-lg text-white">
                    Coming Soon
                  </div>
                )}
              </div>
              <p className="text-lg group-hover:text-blue-500 transition-all duration-200 ease-in-out">
                {app.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <footer className="p-8 border-gray-200 dark:border-gray-500  border-t">
        <p className="text-center">
          Made with ❤️ in London - {""}
          <Link href="mailto:team@parklane.xyz" className="hover:text-blue-500">
            team@parklane.xyz
          </Link>
        </p>
      </footer>
    </main>
  );
}