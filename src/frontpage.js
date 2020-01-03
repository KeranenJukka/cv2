import React from 'react';
import './frontpage.css';

import { gsap } from 'gsap';

import mina from "./pictures/mina.jpg";
import mina2 from "./pictures/mina2.jpg";
import line from "./pictures/line.png";
import line2 from "./pictures/line2.png";

class FrontPage extends React.Component {




componentDidMount () {

    window.scrollTo(0, 0);

    setTimeout(() => {
        gsap.to(orangebox, 1, {width: "50%"})
    }, 1500);


    var wrapperHeight = document.getElementById("wrapper").clientHeight;

    console.log(wrapperHeight)

    document.documentElement.style.setProperty('--wrapper-height', wrapperHeight + "px");


    var orangebox = document.getElementById("orangebox");


    window.onscroll = () => {

        // Orangebox animation

        if (window.pageYOffset > 50) {

            gsap.to(orangebox, 1, {width: "0%"})

        }

        else {
            gsap.to(orangebox, 1, {width: "50%"})
        }


        // Opacity animations

        var speed = 1;

        var me = document.getElementById("mewrap2");
        
        if (window.pageYOffset > me.offsetTop - window.innerHeight + 100) {
            gsap.to(me, speed, {opacity: 1, top: 0})
        }

        else {gsap.to(me, 0, {opacity: 0, top: "50px"})}

        /*------------------*/

        var mewide = document.getElementById("mewide");
        
        if (window.pageYOffset > mewide.offsetTop - window.innerHeight + 100) {
            gsap.to(mewide, speed, {opacity: 1, top: 0})
        }

        else {gsap.to(mewide, 0, {opacity: 0, top: "50px"})}

        /*------------------*/

        var skills = document.getElementById("skillstext");
        
        if (window.pageYOffset > skills.offsetTop - window.innerHeight + 100) {
            gsap.to(skills, speed, {opacity: 1, top: 0})
        }

        else {gsap.to(skills, 0, {opacity: 0, top: "50px"})}

        /*------------------*/

        var cv = document.getElementById("cvtext");
        
        if (window.pageYOffset > cv.offsetTop - window.innerHeight + 100) {
            gsap.to(cv, speed, {opacity: 1, top: 0})
        }

        else {gsap.to(cv, 0, {opacity: 0, top: "50px"})}


       /*------------------*/

        var interests = document.getElementById("interestswrap2");
        
        if (window.pageYOffset > interests.offsetTop - window.innerHeight + 100) {
            gsap.to(interests, speed, {opacity: 1, top: 0})
        }

        else {gsap.to(interests, 0, {opacity: 0, top: "50px"})}


        /*------------------*/

        var contact = document.getElementById("contacttext");
        
        if (window.pageYOffset > contact.offsetTop - window.innerHeight + 100) {
            gsap.to(contact, speed, {opacity: 1, top: 0})
        }

        else {gsap.to(contact, 0, {opacity: 0, top: "50px"})}


    }

}


render () {

return (

    <div id="wrapper">

    <div style={{position: "absolute", top: "-100px"}} id="jk"></div>


    <div id="start">
    

    <div id="startwrap">

        <div id="orangebox">

        </div>

        <div id="startcontwrap">

            <div id="startcont">

            <h1>Jukka Keränen<span style={{color: 'var(--color2)'}}>.</span></h1>
            <p>Ansioluettelo</p>

            <div id="minäcont">
            <img id="minä" alt="Jukka Keränen" src={mina}></img>
            
            </div>

            </div>


        </div>


    </div>

    </div>

    <div style={{position: "relative", top: "-50px"}} id="mina"></div>
    <div id="mewrap">
    

        <div id="mewrap2">
        <div id="metitle">
            <img className="theline" alt="line" src={line}></img>
            <h2 id="metitleh2">Minä<span style={{color: 'var(--color2)'}}>.</span></h2>
        </div>

        <div id="metext">
            <p>Terve! Vaimoni sanoi, että olen luonteeltani puoliksi insinööri ja puoliksi taiteilija. Väite saattaa pitää paikkansa, sillä olen työskennellyt esimerkiksi kirjanpidon ja musiikin parissa, sekä kiinnostukseni ulottuvat ohjelmoinnista elokuviin. Best of both worlds niin kuin sanonta kuuluu. Vaikka olen liikkunut näiden kahden puolen välillä, olen aina suhtautunut intohimoisesti siihen, mitä teen.</p>
            <p>Nyt kun kerran eksyit tänne sivuille, niin käypä lukemassa minusta lisää alempaa ja mukavaa, että pistäydyit!</p>
            <p><span style={{'color': 'var(--color2)', 'fontStyle': "italic"}}>- Jukka</span></p>
        </div>
        </div>

        </div>

        <div id="mewidewrap">
        <img id="mewide" alt="Jukka Keränen" src={mina2}></img>
        <div id="mewideorange"></div>
        </div>

        
        <div style={{position: "relative", top: "-50px"}} id="taidot"></div>
        <div id="skillswrap">

        
        <div id="skillstext">
        

            <img className="theline" alt="line" src={line}></img>
            <h3 id="skillstitle">Taidot<span style={{color: 'var(--color2)'}}>.</span></h3>
            <div id="skillstextwrap">
            <p className="skillssub">Projektinhallinta</p>
            <p>Hoidin läpi useita julkisivuremontteja perheyrityksessämme. Vastuullani oli esimerkiksi projektien eteneminen, tarvikkeiden hankinta ja työntekijöiden ohjaaminen. Langat pysyvät siis käsissä isommissakin projekteissa.</p>

            <p className="skillssub">Ohjelmointi</p>
            <p>Koodasin tämän nettisivun itse. Ja olen koodannut paljon muutakin! Tsekkaa koodiportfolioni <a id="portfolio-link" href="http://portfolio.jkeranen.com" target="_blank" rel="noopener noreferrer">täältä</a>.</p>

            <p className="skillssub">Talousosaaminen</p>
            <p>Sen lisäksi, että olin vastuussa perheyrityksemme kirjanpidosta ja tilinpäätöksestä, tykkään myös sijoittaa ja tehdä exceleitä tarpeen tullen. Numerot siis sujuu.</p>

            <p className="skillssub">Viestintä</p>
            <p>Pääaineeni yliopistossa oli mediatutkimus ja olen tehnyt hieman alan töitäkin. Tekstin tuottaminen ja yleismaailmallinen viestintä ovat siis hyvin hallinnassa.</p>

            
        </div>
        </div>

        </div>


        <div style={{position: "relative", top: "-50px"}} id="cv"></div>
        <div id="cvwrap">
        

                <div id="cvtext">
                
                     <img className="theline" alt="line" src={line}></img>
        
                    <h4 id="cvtitle">Valikoitu työhistoria<span style={{color: 'var(--color2)'}}>.</span></h4>
        
                    <div className="jobtext">
                    <p className="cvyear">2012 - 2019</p>
                    <div className="jobtext2">
                    <p>Julkisivupinnoitus Keränen Oy</p>
                    <p className="jobtitle">Projektipäällikkö / Talousvastaava</p>
                    <p>Olin vastuussa useista julkisivuremonttien toteuttamisesta ja perheyrityksemme kirjanpidosta sekä tilinpäätöksestä. Tein myös hieman markkinointia. Nämä tehtävät eivät vieneet koko työaikaani, joten toimin myös samalla rakennusmiehenä.</p>
                    </div>
                    </div>
        
                    <div className="jobtext">
                            <p className="cvyear">2003 – 2019</p>
                            <div className="jobtext2">
                            <p>Julkisivupinnoitus Keränen Oy</p>
                            <p className="jobtitle">Rakennusmies</p>
                            <p>Olen kokenut rakennusmies.</p>
                            </div>
                    </div>
        
                    <div className="jobtext">
                            <p className="cvyear">2013 – 2018</p>
                            <div className="jobtext2">
                            <p>Freelancer</p>
                            <p className="jobtitle">Kirjanpitäjä</p>
                            <p>Minulla oli asiakkaina muutamia pienyrityksiä, joille tein kirjanpidon ja tilinpäätöksen. Avustin myös muissa taloushallintoon liittyvissä asioissa.</p>
                            </div>
                    </div>
        
                    <div className="jobtext">
                            <p className="cvyear">2015 – 2018</p>
                            <div className="jobtext2">
                            <p>KameraOne / Freelancer</p>
                            <p className="jobtitle">Videotoimittaja</p>
                            <p>Käänsin englanninkielisiä viihdeuutisia suomen kielelle ja tein niihin voiceoverit. Uutisia julkaistiin Iltalehden, Ilta-sanomien ja MSN-portaalin verkkosivuilla. Työ oli satunnaista.</p>
                            </div>
                    </div>
        
                    <div className="jobtext">
                            <p className="cvyear">2004 - 2015</p>
                            <div className="jobtext2">
                            <p>Freelancer</p>
                            <p className="jobtitle">Musiikkiteknologi ja musiikkituottaja</p>
                            <p>Olen tehnyt äänityksiä ja miksauksia, sekä tuottanut musiikkia useille artisteille ja kokoonpanoille. Yhteistyökumppaneita ovat olleet esimerkiksi Cheek, Herrasmiesliiga, Brädi ja Ideaali & Jay Who.</p>
                            </div>
                    </div>
        
                    <div id="education">
                    <img className="theline" alt="line" src={line}></img>
                        <h4>Koulutus</h4>
        
                        
                    <div className="jobtext">
                            <p className="cvyear">2007 – 2014</p>
                            <div className="jobtext2">
                            <p className="jobtitle">Filosofian maisteri, Turun yliopisto</p>
                            <p>Pääaine mediatutkimus, sivuaineet laskentatoimi (laaja) ja musiikkitiede (laaja).</p>
                    </div>
                    </div>
        
                    </div>
        
                    <p id="downloadcv">Lataa koko CV <a id="cvlink" href="assets/jukkakeranen.pdf" target="_blank" >täältä</a>.</p>
        
                </div>

            </div>

            <div style={{position: "relative", top: "-50px"}}  id="kiinnostukset"></div>
            <div id="interestswrap">

                <div id="interestswrap2">
                <img className="theline" alt="line" src={line2}></img>
                <h5 id="intereststitle">Kiinnostukset<span style={{color: 'var(--color6)'}}>.</span></h5>

                <div id="intereststext">
                    <p>Olen pelannut videopelejä 7-vuotiaasta asti ja pelaan edelleen. Tällä hetkellä työn alla ovat God of War ja Company of Heroes 2.</p>
                    <p>Myös elokuvat ovat kiinnostaneet kauan. Seuraavaksi aion mennnä katsomaan Underwaterin.</p>
                    <p>Musiikki on kuulunut elämääni aina. Vaikka en ole enää niin aktiivinen muusikko, kuuntelen edelleen paljon musiikkia ja ajoittain puuhailen pienten musiikkiprojektien kanssa.</p>
                    <p>Pidän sijoittamisesta, joten seuraan osakemarkkinoita jonkin verran.</p>
                    
                </div>
                </div>

                </div>

                <div  id="yhteys"></div>
                <div id="contactwrap">
            
            <div id="contacttext">
                <div id="contacttext2">
                <p>keranen.jukkapetteri@gmail.com</p>
                <p>050 344 0852</p>
            </div>
            </div>
    
        </div>
    

        <div id="lines">
        <div id="linebox1" className="linebox"><p className="linetext" id="linetext1">scroll down >></p><p className="linetext" id="linetext2">scroll down >></p><p className="linetext" id="linetext3">scroll down >></p><p className="linetext" id="linetext4">scroll down >></p></div>
        <div className="linebox"></div>
        <div id="middleline" className="linebox"></div>
        <div className="linebox"></div>
        <div className="linebox"><p className="linetext" id="linetext5">scroll down >></p><p className="linetext" id="linetext6">scroll down >></p><p className="linetext" id="linetext7">scroll down >></p><p className="linetext" id="linetext8">scroll down >></p></div>
        
        </div>


      </div>

)


}



}


export default FrontPage;