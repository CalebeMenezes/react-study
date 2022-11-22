import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import HeaderImg from "../assets/img/";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRate = ["web Developer, programador"];
    const[text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta )


        return ( => {clearInterval(ticker)});
    },[text])

    const tick = () => {
        let i = loopNum % toRate.length;
        let fullText = toRotate(i);
        let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting){
            setDelta(preDelta => preDelta /2)
        }

        if(isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum +1);
            setDelta(500);
        }
    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to may Portfolio</span>
                        <h1>{'Hi i´m webcoded'}<span className="wrap">{text}r</span></h1>
                        <p>paragrafo</p>
                        <button onClick={() => console.log('connect')}>let´s connect <ArrowRightCircle size={25} /></button>
                    </col>
                    <col xs={12 md={6} xl={5}}>
                        <img src={} alt="Header img" />
                    </col>
                </Row>
            </Container>
        </section>
    )
}