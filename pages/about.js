import Layout from '../components/layout';
import Image from 'next/image';
import EveryBuddy from '../public/EveryBuddy.png';
import Uoms from '../public/uoms.png';
export default function About() {
    return (
        <Layout>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        <div class="p-4 md:w-1/3">
                            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <Image
                                    src={Uoms}
                                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                                    alt="blog"
                                />
                                <div class="p-6">
                                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                        Team Project
                                    </h2>
                                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                                        UOMS
                                    </h1>
                                    <p class="leading-relaxed mb-3">
                                        서울시립대학교 2021-2 소프트웨어공학 팀프로젝트.<br></br>{' '}
                                        여러 OTT 플랫폼 서비스를 함께 이용하는 그룹을 위한
                                        웹사이트로, 사용자들이 함께 각 플랫폼 요금을 공유하고 싶을때
                                        효율적으로 그룹을 묶어주는 기능을 제공합니다.
                                    </p>
                                    <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                        STACK
                                    </span>
                                    <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                                        Node.js, Reack, DjangoRestFramework..
                                    </span>
                                    <div class="flex items-center flex-wrap ">
                                        <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                                            Go to GitHubs
                                            <svg
                                                class="w-4 h-4 ml-2"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                fill="none"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            >
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="p-4 md:w-1/3">
                            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <Image
                                    src={EveryBuddy}
                                    className="lg:h-48 md:h-36  object-cover object-center"
                                    alt="blog"
                                />
                                <div class="p-6">
                                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                        Team Project
                                    </h2>
                                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                                        EveryBuddy
                                    </h1>
                                    <p class="leading-relaxed mb-3">
                                        서울시립대학교 2024-1 컴퓨터과학종합설계 팀프로젝트.
                                        <br></br>
                                        수정중
                                    </p>
                                    <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                        STACK
                                    </span>
                                    <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                                        Node.js, Reack, DjangoRestFramework..
                                    </span>
                                    <div class="flex items-center flex-wrap">
                                        <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                                            Go to GitHubs
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/3">
                            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <div class="p-6">
                                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                        Solo Projects
                                    </h2>
                                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                                        portfolio
                                    </h1>
                                    <p class="leading-relaxed mb-3">
                                        Photo booth fam kinfolk cold-pressed sriracha leggings
                                        jianbing microdosing tousled waistcoat.
                                    </p>
                                    <div class="flex items-center flex-wrap ">
                                        <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                                            Go to GitHubs
                                            <svg
                                                class="w-4 h-4 ml-2"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                fill="none"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            >
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
