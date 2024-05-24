import Link from 'next/link';
export default function Hero() {
    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    Hello, I&apos;m Front-End Developer, Heeseon
                </h1>
                <p className="mb-8 leading-relaxed">
                    <ul class="card-txt">
                        <li>
                            <span class="underlines">
                                <span id="strong">문제</span>에 대해 항상 고민하고,
                            </span>
                            <br />
                            <span>해결을 통한 성취감을 좋아합니다.</span>
                        </li>
                        <li>
                            <span>열정과 창의력으로 </span>
                            <br />
                            <span class="underlines">
                                <span id="strong">새로운 디지털 경험을 그리는</span>
                            </span>
                            <br />
                            <span>프론트엔드 개발자입니다. </span>
                        </li>
                    </ul>
                </p>
                <div className="flex justify-center">
                    <Link href="/about" legacyBehavior>
                        <a className="btn-project mr-4">About Projects</a>
                    </Link>
                    <Link href="/me" legacyBehavior>
                        <a className="btn-project2">About Me</a>
                    </Link>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"></div>
        </>
    );
}
