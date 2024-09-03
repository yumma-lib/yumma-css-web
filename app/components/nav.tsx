import Image from "next/image";

const Navbar = () => {
  return (
    <header
      className="d-f fs-sm fw-w py-3 sm:fw-nw sm:jc-fs w-full"
      style={{ backgroundColor: "#1f212a" }}
    >
      <nav className="mx-auto px-4 sm:ai-c sm:d-f sm:jc-sb w-full">
        <div className="ai-c d-f jc-sb">
          <Image
            alt="Logo"
            className="h-auto"
            height={140}
            src="/logo.png"
            width={140}
          />
        </div>
        <div className="fb-full fg-1 ovf-h">
          <div className="d-f fd-c g-5 sm:ai-c sm:fd-r sm:jc-fe sm:pl-5">
            <p className="fw-700 h:tc-l-gray-6 tc-white">v1.0</p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
