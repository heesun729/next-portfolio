import Header from './header';
import Footer from './footer';

export default function Layout({ children }) {
    return (
        <>
            <Header></Header>
            <div>{children}</div>
            <Footer></Footer>
        </>
    );
}

// 레이아웃 안에서 헤더와 푸터를 공통으로 집어넣어서 사용할 것이기 때문에 Layout을 따로 만들어줌
