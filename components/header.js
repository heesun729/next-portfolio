import Link from 'next/link';
import DarkModeToggleButton from './dark-mode-toggle-button';
export default function Header() {
    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href="/" legacyBehavior>
                        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                            <svg
                                class="w-6 h-6 text-gray-800 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M12 8a1 1 0 0 0-1 1v10H9a1 1 0 1 0 0 2h11a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-8Zm4 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
                                    clip-rule="evenodd"
                                />
                                <path
                                    fill-rule="evenodd"
                                    d="M5 3a2 2 0 0 0-2 2v6h6V9a3 3 0 0 1 3-3h8c.35 0 .687.06 1 .17V5a2 2 0 0 0-2-2H5Zm4 10H3v2a2 2 0 0 0 2 2h4v-4Z"
                                    clip-rule="evenodd"
                                />
                            </svg>

                            <span className="ml-3 text-xl">Heeseon</span>
                        </a>
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link href="/" legacyBehavior>
                            <a className="mr-5 hover:text-gray-900">홈</a>
                        </Link>

                        <Link href="/about" legacyBehavior>
                            <a className="mr-5 hover:text-gray-900">프로젝트</a>
                        </Link>

                        <Link href="/projects" legacyBehavior>
                            <a className="mr-5 hover:text-gray-900">연락하기</a>
                        </Link>
                    </nav>
                    {/* 다크모드 토글 버튼 작업 */}
                    <DarkModeToggleButton />
                </div>
            </header>
        </>
    );
}
