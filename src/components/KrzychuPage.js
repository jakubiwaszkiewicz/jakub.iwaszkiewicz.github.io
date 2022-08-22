import krzychu from './backgrounds/imgs/krzychu.png'
import kinia from './backgrounds/imgs/kinia.png'

export default function KrzychuPage () {
    return (
        <section id="KrzychuPage">
            <a className="scroll-top" id="scroll-2" href="#HelloPage">
                <div className="top-bar bar"></div>
                <div className="middle-bar bar"></div>
                <div className="bottom-bar bar"></div>
            </a>
            <div className="krzychu--container">
                <div className="text">
                    <p>Taki o slajdzik żeby się rodzinką pochwalić, zabrakło tylko dziadzia,
                        który jest najlepszy jak coś
                    </p>
                </div>
                <div className="content">
                    <img src={krzychu} alt="no to krzychu generalnie" />
                    <div className="text">
                        <p>tutaj wiecznie poryty Krzychu, złoty człowiek, po prostu, dla mnie jest jak stary</p>
                    </div>
                </div>
                <div className="content">
                    <img src={kinia} alt="no to krzychu generalnie" />
                    <div className="text">
                        <p>Kinia - zajebista stara co pomaga, doradza  i chleje żeby
                            dobre imie rodziny niszczyć, ale jest GigaChadem</p>
                    </div>
                </div>
            </div>
            <a className="scroll-bottom" id="scroll-3" href="#WhyPage">
                <div className="top-bar bar"></div>
                <div className="middle-bar bar"></div>
                <div className="bottom-bar bar"></div>
            </a>
        </section>
    );
}