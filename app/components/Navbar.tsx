const Navbar = () => {
  return (
    <header className="bb-1 bc-l-silver-6 bg-white d-f fs-sm fw-w py-3 sm:fw-nw sm:jc-fs w-full">
      <nav className="mx-auto px-4 sm:ai-c sm:d-f sm:jc-sb w-full">
        <div className="ai-c d-f jc-sb">
          <p className="f-none fs-xl fw-600">
            Yumma CSS Play
          </p>
          <div className="sm:d-none">
            <button className="c-p ai-c b-1 bc-l-silver-6 bg-white bs-sm cg-2 d-if jc-c p-2 rad-2 tc-d-silver-6">
              <svg
                className="dim-4 fs-0"
                width="24px"
                height="24px"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 5H21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M3 12H21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M3 19H21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="d-none fb-full fg-1 ovf-h sm:d-b">
          <div className="d-f fd-c g-5 sm:ai-c sm:fd-r sm:jc-fe sm:pl-5">
            <a
              className="fw-500 h:tc-red tc-lead"
              href="https://www.yummacss.com/docs/installation"
            >
              Docs
            </a>
            <a
              className="fw-500 h:tc-pink tc-lead"
              href="https://www.yummacss.com/components"
            >
              Components
            </a>
            <a
              className="fw-500 h:tc-pink tc-lead"
              href="https://www.yummacss.com/blog"
            >
              Blog
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
