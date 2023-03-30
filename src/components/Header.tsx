import Image from "next/image";
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
        <a
          className="px-2"
          href={"https://github.com/kratos-respawned/OpenAI-ImageGenerator"}
        >
          Source Code
        </a>
        <a className="px-2" href={"https://itsgaurav.co"}>
          Me
        </a>
      </nav>
    </header>
  );
}

export default Header;
