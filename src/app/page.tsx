import Link from "next/link";

const apps = [
  {
    name: "Friends Wrapped",
    description:
      "A social app for teenagers to share compliments among their friends.",
    link: "https://apps.apple.com/gb/app/friend-wrapped/id6475646063",
  },
  {
    name: "WDYT",
    description: "🥷",
  },
];
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between bg-white dark:bg-black px-8 pt-8  ">
      <div>
        <h1 className="text-[3rem] md:text-[4rem] font-bold leading-[1.15] pt-8 text-center">
          Parklane, Inc.
        </h1>
        <p className="text-[1.5rem] text-center mt-10 my-16 max-w-[600px] mx-auto">
          A small team making{" "}
          <span className="font-bold bg-gradient-to-r from-pink-600 via-blue-500 to-indigo-400 inline-block text-transparent bg-clip-text ">
            games
          </span>{" "}
          and{" "}
          <span className="font-bold bg-gradient-to-r from-pink-600 via-blue-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            social apps.
          </span>{" "}
          <br /> We hope you have fun using our apps.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-[800px] mx-auto ">
          {apps.map((app) => (
            <Link
              key={app.name}
              href={app.link ? app.link : "/"}
              className="block bg-white dark:bg-black  shadow-md border border-gray-200 dark:border-white-800 rounded-[10px] p-[24px]  group-hover:shadow-lg hover:border-blue-600 transition-all duration-200 ease-in-out group"
            >
              <div className="flex justify-between items-center  mb-4">
                <h2 className="text-xl font-bold transition-all duration-200 ease-in-out">
                  {app.name} →
                </h2>
                {!app.link && (
                  <div className="text-xs bg-blue-500 px-2 py-1 rounded-lg text-white">
                    Coming Soon
                  </div>
                )}
              </div>
              <p className="text-lg  transition-all duration-200 ease-in-out">
                {app.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <footer className=" py-6 border-gray-200 dark:border-gray-500  border-t sm:text-base text-sm">
        <div className="max-w-[800px] mx-auto flex items-center justify-between flex-wrap gap-3">
          <p>
            Made with ❤️ in London by {""}
            <Link
              href="mailto:team@parklane.xyz"
              className="hover:text-blue-500 underline text-gray-400 dark:text-white"
            >
              team@parklane.xyz
            </Link>
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://scarce-work-4ba.notion.site/Terms-3c76ed5450e540ac8286a37a7240110e?pvs=4"
              className="hover:text-blue-500 transition-all duration-200 ease-in-out underline text-gray-400 dark:text-white"
            >
              Terms
            </Link>
            <Link
              href="https://scarce-work-4ba.notion.site/Privacy-Policy-c3758eab953240a7afa862b30309af85?pvs=4"
              className="hover:text-blue-500 transition-all duration-200 ease-in-out underline text-gray-400 dark:text-white"
            >
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
