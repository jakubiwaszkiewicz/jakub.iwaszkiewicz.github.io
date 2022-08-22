import  lejczak  from "./backgrounds/imgs/lejczak.png"

export default function WhyPage () {
    return (
        <main id="WhyPage">
            <a className="scroll-top" itemID="scroll-4" href="#KrzychuPage">
                <div className="top-bar bar"></div>
                <div className="middle-bar bar"></div>
                <div className="bottom-bar bar"></div>
            </a>
            <div className="content--container">
                <img src={lejczak}/>
                <p>
                    Czemu chce zostać Baby Memberem?
                    Sam nie wiem, troche się tu już zadomowiłem i jakoś mi się stąd nie śpieszy.
                    Poznałem troche zajebistych ludzi którzy mnie zmotywowali do jakiegokolwiek progresowania.
                    Dobra chwila powagi za mną, lejczak też jest dla mnie jak rodzina, więc też wlatuje na apke.
                </p>
            </div>
            <a className="scroll-bottom" href="#">
                <div className="top-bar bar"></div>
                <div className="middle-bar bar"></div>
                <div className="bottom-bar bar"></div>
            </a>
        </main>
    );
}