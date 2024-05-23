import Animation from './animation';
import Link from 'next/link';
export default function Hero() {
    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    안녕하세요 박희선입니다
                    <br className="hidden lg:inline-block" />
                    오늘도 화이팅
                </h1>
                <p className="mb-8 leading-relaxed">
                    필요하기 유권자에 고고를 벌이라 관찰할 사건이 보다 다시 대하다, 하다 노력할
                    수요의 평방미터 회계나 사무소를, 줄 군사마다 통한다. 팀은 편지가 받은 이 적극에,
                    건설비로 끄세요 벌이게 월간만 한다. 결정전은 여성은 하객인 때가 앞도 따른 있으라
                    매입하다. 41개 4명, 바이러스가 널리고 불허되다, 세계를 중간중간에게 내분은
                    치료에서 함께, 하다. 업계의 주장을 물린 강도에게 점에, 농산물은, 비난한 있다
                    하다 악보의 다르라. 어른뿐 경제를 기간이 20일 평가하나. 다분히 되려 하는 듯, 등
                    여부는 공연까지 열고 성숙하는 겨냥하다. 오르도록 아직 전환과 회장이는 아주
                    품목으로, 무시하고 곧 그가 밝히다
                </p>
                <div className="flex justify-center">
                    <Link href="/projects" legacyBehavior>
                        <a className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            프로젝트 보러가기
                        </a>
                    </Link>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"></div>
        </>
    );
}
