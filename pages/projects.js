import Layout from '../components/layout';
import Head from 'next/head';
import Image from 'next/image';
import EveryBuddy from '../public/EveryBuddy.gif';
import Uoms from '../public/uoms.png';
import { useEffect } from 'react';
import Heeseon from '../public/Heeseon.gif';
import { TOKEN, DATABASE_ID } from '../config';

export default function Projects({ projectNames }) {
    useEffect(() => {
        function showBox(index) {
            const projectAboutBoxes = document.getElementsByClassName('project-about-box');

            // 모든 project-about-box 숨기기
            for (let i = 0; i < projectAboutBoxes.length; i++) {
                projectAboutBoxes[i].style.display = 'none';
            }

            // 클릭한 인덱스에 해당하는 project-about-box 보이게 하기
            const selectedProjectAboutBox = document.getElementById('box' + (index + 1));
            if (selectedProjectAboutBox) {
                selectedProjectAboutBox.style.display = 'flex';
            }
        }

        // 클릭 이벤트 추가
        const boxes = document.querySelectorAll('.boxes');
        boxes.forEach((box, index) => {
            box.addEventListener('click', () => {
                showBox(index);
            });
        });
    }, []);

    return (
        <Layout>
            <div className="flex flex-col items-center justify-center min-h-screen px-3 mb-10">
                <Head>
                    <title>My Portfolio</title>
                    <meta name="description" content="pkkheesun'\s portfolio" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <section className="projects-container">
                    <h1 className="subject-header">PROJECTS</h1>
                    <p id="click-text">
                        <span>클</span>
                        <span>릭</span>
                        하면 프로젝트를 더 자세히 볼 수 있습니다
                    </p>
                    <div className="project-box">
                        <div className="boxes box2" onclick="showBox(0)">
                            <Image src={Uoms} width={500} alt="project1" />
                            <h1 id="box-h">UOMS</h1>
                            <p>Team Project</p>
                            <p>
                                서울시립대학교 2021-2 소프트웨어공학 과목 팀 프로젝트. 여러 OTT
                                플랫폼 서비스를 함께 이용하는 그룹을 위한 웹사이트입니다. 사용자들이
                                사람들과 함께 각 OTT 플랫폼 요금을 공유하고 싶을 때 효율적으로
                                그룹을 묶어주는 기능을 제공합니다.
                            </p>
                            <p className="project-stack">STACK</p>

                            <p>Node.js, React, DjangoRestFramework</p>
                        </div>
                        <div className="boxes box3" onclick="showBox(1)">
                            <Image src={EveryBuddy} width={500} alt="project1" />
                            <h1 id="box-h">EveryBuddy</h1>
                            <p>Team Project</p>
                            <p>
                                서울시립대학교 2024-1 컴퓨터과학종합설계 팀 프로젝트. 학교 내
                                서울메이트와 버디를 위한 매칭 플랫폼으로, 다문화 교류를 촉진하고
                                서울시립대학교의 커뮤니티를 더욱 다양하게 만들기 위한 특별한 웹 앱
                                서비스입니다.
                            </p>
                            <p className="project-stack">STACK</p>
                            <p>React, TypeScript, Spring, Docker ..</p>
                        </div>
                        <div className="boxes box4" onclick="showBox(2)">
                            <Image src={EveryBuddy} width={500} alt="project1" />
                            <h1 id="box-h">ToDoApp</h1>
                            <p>Solo Project</p>
                            <p>
                                여러 OTT 플랫폼 서비스를 함께 이용하는 그룹을 위한 웹사이트입니다.
                                사용자들이 사람들과 함께 각 OTT 플랫폼 요금을 공유하고 싶을 때
                                효율적으로 그룹을 묶어주는 기능을 제공합니다.
                            </p>
                            <p className="project-stack">STACK</p>
                            <p>Html, Css, JavaScript</p>
                        </div>
                    </div>
                    <section className="projects-about-container">
                        <div className="project-about-box" id="box0">
                            <div className="project-left">
                                <Image src={EveryBuddy} width={1000} alt="project1" />
                                <p id="project-name">포트폴리오</p>
                                <p className="project-stack">Repository</p>
                                <a
                                    href="https://github.com/heesun729/projects/tree/main/Portfolio"
                                    id="repo-url"
                                    target="_blank"
                                >
                                    https://github.com/heesun729/projects/tree/main/Portfolio
                                </a>
                            </div>
                            <div className="project-right">
                                <h2>프로젝트 소개</h2>
                                <p>
                                    프론트엔드 개발자로서의 역량을 소개하는 포트폴리오 웹사이트를
                                    제작했습니다. 각 메뉴를 선택할 때마다 자연스럽게 이동하는 스크롤
                                    기능을 통해 사용자에게 직관적이고 매끄러운 경험을 제공합니다. 각
                                    섹션은 기술, 경험, 프로젝트 등을 명확하게 구분하여 나의 역량을
                                    강조하고 있습니다. 또한, 디자인적인 부분에서는 세련된 색상과
                                    조화로운 레아웃을 선택하여 전문적인 인상을 전달하고자
                                    노력했습니다.
                                </p>
                                <h2>후기&교훈</h2>
                                <p>
                                    학습 내용안에서 최적의 UI와 기능을 제공하기 위해 노력했습니다.
                                    혼자서 진행하는 웹사이트 개발로, 일정 내에서 레이아웃 디자인의
                                    중요성을 경험할 수 있었습니다. 추후 이미지 스프라이트 기법 등을
                                    적용해 개선할 예정입니다.
                                </p>
                                <h3>구현 기능</h3>
                                <p>스크롤 이동, 간편 이메일</p>
                                <h3>기술 스택</h3>
                                <p>Html, Css, JavaScript</p>
                            </div>
                        </div>
                        <div className="project-about-box" id="box1">
                            <div className="project-left">
                                <Image src={Heeseon} width={500} alt="project1" />
                                <p id="project-name">UOMS</p>
                                <p className="project-stack">Repository</p>
                                <a
                                    href="https://github.com/heesun729/matchingOTT"
                                    id="repo-url"
                                    target="_blank"
                                >
                                    https://github.com/heesun729/matchingOTT
                                </a>
                            </div>
                            <div className="project-right">
                                <h2>프로젝트 소개</h2>
                                <p>
                                    프론트엔드 개발자로서의 역량을 소개하는 포트폴리오 웹사이트를
                                    제작했습니다. 각 메뉴를 선택할 때마다 자연스럽게 이동하는 스크롤
                                    기능을 통해 사용자에게 직관적이고 매끄러운 경험을 제공합니다. 각
                                    섹션은 기술, 경험, 프로젝트 등을 명확하게 구분하여 나의 역량을
                                    강조하고 있습니다. 또한, 디자인적인 부분에서는 세련된 색상과
                                    조화로운 레아웃을 선택하여 전문적인 인상을 전달하고자
                                    노력했습니다.
                                </p>
                                <h2>후기&교훈</h2>
                                <p>
                                    학습 내용안에서 최적의 UI와 기능을 제공하기 위해 노력했습니다.
                                    혼자서 진행하는 웹사이트 개발로, 일정 내에서 레이아웃 디자인의
                                    중요성을 경험할 수 있었습니다. 추후 이미지 스프라이트 기법 등을
                                    적용해 개선할 예정입니다.
                                </p>
                                <h3>구현 기능</h3>
                                <p>스크롤 이동, 간편 이메일</p>
                                <h3>기술 스택</h3>
                                <p>Html, Css, JavaScript</p>
                            </div>
                        </div>
                        <div className="project-about-box" id="box2">
                            <div className="project-left">
                                <Image src={Uoms} width={500} alt="project1" />
                                <p id="project-name">MyCard</p>
                                <p className="project-stack">Repository</p>
                                <a
                                    href="https://github.com/heesun729/projects/tree/main/card"
                                    id="repo-url"
                                    target="_blank"
                                >
                                    https://github.com/heesun729/projects/tree/main/card
                                </a>
                            </div>
                            <div className="project-right">
                                <h2>프로젝트 소개</h2>
                                <p>
                                    프론트엔드 개발자로서의 역량을 소개하는 포트폴리오 웹사이트를
                                    제작했습니다. 각 메뉴를 선택할 때마다 자연스럽게 이동하는 스크롤
                                    기능을 통해 사용자에게 직관적이고 매끄러운 경험을 제공합니다. 각
                                    섹션은 기술, 경험, 프로젝트 등을 명확하게 구분하여 나의 역량을
                                    강조하고 있습니다. 또한, 디자인적인 부분에서는 세련된 색상과
                                    조화로운 레아웃을 선택하여 전문적인 인상을 전달하고자
                                    노력했습니다.
                                </p>
                                <h2>후기&교훈</h2>
                                <p>
                                    학습 내용안에서 최적의 UI와 기능을 제공하기 위해 노력했습니다.
                                    혼자서 진행하는 웹사이트 개발로, 일정 내에서 레이아웃 디자인의
                                    중요성을 경험할 수 있었습니다. 추후 이미지 스프라이트 기법 등을
                                    적용해 개선할 예정입니다.
                                </p>
                                <h3>구현 기능</h3>
                                <p>스크롤 이동, 간편 이메일</p>
                                <h3>기술 스택</h3>
                                <p>Html, Css, JavaScript</p>
                            </div>
                        </div>
                        <div className="project-about-box" id="box3">
                            <div className="project-left">
                                <Image src={Heeseon} width={500} alt="project1" />
                                <p id="project-name">ToDoApp</p>
                                <p className="project-stack">Repository</p>
                                <a
                                    href="https://github.com/heesun729/projects/tree/main/Portfolio"
                                    id="repo-url"
                                    target="_blank"
                                >
                                    https://github.com/heesun729/projects/tree/main/Portfolio
                                </a>
                            </div>
                            <div className="project-right">
                                <h2>프로젝트 소개</h2>
                                <p>
                                    프론트엔드 개발자로서의 역량을 소개하는 포트폴리오 웹사이트를
                                    제작했습니다. 각 메뉴를 선택할 때마다 자연스럽게 이동하는 스크롤
                                    기능을 통해 사용자에게 직관적이고 매끄러운 경험을 제공합니다. 각
                                    섹션은 기술, 경험, 프로젝트 등을 명확하게 구분하여 나의 역량을
                                    강조하고 있습니다. 또한, 디자인적인 부분에서는 세련된 색상과
                                    조화로운 레아웃을 선택하여 전문적인 인상을 전달하고자
                                    노력했습니다.
                                </p>
                                <h2>후기&교훈</h2>
                                <p>
                                    학습 내용안에서 최적의 UI와 기능을 제공하기 위해 노력했습니다.
                                    혼자서 진행하는 웹사이트 개발로, 일정 내에서 레이아웃 디자인의
                                    중요성을 경험할 수 있었습니다. 추후 이미지 스프라이트 기법 등을
                                    적용해 개선할 예정입니다.
                                </p>
                                <h3>구현 기능</h3>
                                <p>스크롤 이동, 간편 이메일</p>
                                <h3>기술 스택</h3>
                                <p>Html, Css, JavaScript</p>
                            </div>
                        </div>
                    </section>
                </section>
                {/* <h1 className="text-4xl font-bold sm:text-6xl">
                    총 프로젝트 : {projectNames.length}
                </h1>
                <div className="grid grid-cols-1 gap-8 p-12 m-4 md:grid-cols-2">
                    {projectNames.map((name, index) => (
                        <div key={index} className="p-4 bg-white rounded shadow-md">
                            {name}
                        </div>
                    ))}
                </div>*/}
            </div>
        </Layout>
    );
}

// export async function getServerSideProps() {
//     const options = {
//         method: 'POST',
//         headers: {
//             Accept: 'application/json',
//             'Notion-Version': '2022-02-22',
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${TOKEN}`,
//         },
//         body: JSON.stringify({
//             sorts: [
//                 {
//                     property: '이름', // 속성 이름을 '이름'으로 변경
//                     direction: 'ascending',
//                 },
//             ],
//             page_size: 100,
//         }),
//     };

//     const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options);

//     const projects = await res.json();

//     const projectNames = projects.results.map(
//         (aProject) => aProject.properties['이름'].title[0].plain_text
//     );

//     console.log(`projectNames : ${projectNames}`);

//     return {
//         props: { projectNames }, // will be passed to the page component as props
//     };
// }
