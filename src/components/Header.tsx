import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex shadow-md justify-between p-5 items-center sticky top-0 bg-white z-50">
      <div className="flex space-x-2 items-center">
        <Image src="/openAi.png" width={30} height={30} alt="OpenAi Logo" />
        <div>
          <h1>
            DALLE <span className="text-violet-500">AI</span> Image Generator
          </h1>
          <h2 className="text-xs">Powered by OpenAI & Azure</h2>
        </div>
      </div>
      <nav className="flex divide-x items-center text-xs md:text-base font-light">
        <Link
          className="px-2"
          href={"https://github.com/kratos-respawned/OpenAI-ImageGenerator"}
        >
          Source Code
        </Link>
        <Link className="px-2" href={"www.itsgaurav.co"}>
          Me
        </Link>
      </nav>
    </header>
  );
}

export default Header;
