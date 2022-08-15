import "./App.css";
import Strobe from "./output2.gif";
import Moose from "./moose.gif";
import Music from "./musik2.mp3";
import { useState } from "react";

const audio = new Audio(Music);
audio.preload = "auto";

function App() {
  const [audioPlaying, setAudioPlaying] = useState(false);
  return (
    <div className="App">
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          overflow: "hidden",
          left: 0,
          right: 0,
          zIndex: 0,
          display: "flex",
        }}
      >
        <img
          style={{
            minWidth: "100%",
            minHeight: "100%",
            alignSelf: "center",
            opacity: 0.5,
          }}
          src={Strobe}
          alt="This is an animated gif image, but it does not move"
        />
      </div>
      <div
        style={{
          flex: 1,
          width: "100vw",
          flexDirection: "column",
          alignItems: "center",
          display: "flex",
          overflow: "scroll",
        }}
      >
        <div
          style={{
            zIndex: 5,
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            paddingBottom: "200px",
            justifyContent: "center",
          }}
        >
          <marquee
            behavior="scroll"
            style={{
              position: "absolute",
              top: 0,
              zIndex: 1000,
              left: 0,
              right: 0,
              fontFamily: "IBM Plex Mono",
              padding: "1vh",
              color: "rgb(200,60,60)",
              backgroundColor: "rgb(240,180,90)",
            }}
          >
            Tobobobbobobobobobobbobobobobobobobobobobobobo | Allt kommer att bli
            bra | In a galaxy far far away there is a place called... Tobo
            | Tobobobbobobobobobobbobobobobobobobobobobobobo | Allt kommer att
            bli bra | Allt kommer att bli bra
          </marquee>
          <div className="Title">TOBO</div>
          <div className="Date">27 augusti</div>
          <div
            style={{ maxWidth: "1000px", alignSelf: "center", padding: "5vw" }}
          >
            <span className="Intro">
              En gång ingen gång, två gånger en vana, tre gånger en tradition!
              Sagolika Tobo är tillbaka för EP. III!
            </span>
            <span className="Intro">
              Ta med er vänner och skåla in den ljuva sensommaren bland goda
              vänner, skogskonst och konstanta good vibes!
            </span>
            <div style={{ padding: "10px", paddingTop: "50px" }}>
              <span className="IntroTitleRed">MUSIK</span>
            </div>
            <span className="Intro">
              Dansvänlig musik kommer att spelas, allt som flyger! Från solig
              eftermiddag till midnatt och in på småtimmarna.
            </span>
            <div style={{ padding: "10px", paddingTop: "50px" }}>
              <span className="IntroTitle">PLATS</span>
            </div>
            <span className="Intro">Tobo Bruksmuseum.</span>
            <div style={{ padding: "10px", paddingTop: "50px" }}>
              <span className="IntroTitleRed">FÄRDMEDEL</span>
            </div>
            <span className="Intro">
              Tåg till Tobo från Uppsala tar ca 30 min och promenad till festen
              tar max 5 min från stationen.
            </span>
            <div style={{ padding: "10px", paddingTop: "50px" }}>
              <span className="IntroTitle">MAT UNDER DAGEN</span>
            </div>
            <span className="Intro">
              Det finns en pizzeria som gör bra ”sunkpizza” och kebab, eller vad
              som nu floats your boat.
            </span>
            <div style={{ padding: "10px", paddingTop: "50px" }}>
              <span className="IntroTitleRed">SOVPLATS</span>
            </div>
            <span className="Intro">
              Plats för tält och luftmadrass kan lösas. Hör av er innan vid
              intresse! Frukost & kaffe dagen efter.
            </span>
          </div>
        </div>
      </div>
      {!audioPlaying ? (
        <div
          style={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "rgb(240,180,90)",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => {
            if (!audioPlaying) {
              setAudioPlaying(true);
              audio.play();
            }
          }}
        >
          <div className="OpenButton">Klicka inte på tigerälgen!!!</div>
          <img
            style={{
              height: "30vh",
              alignSelf: "center",
              borderRadius: "3vh",
              boxShadow: "3vh 3vh rgb(200,60,60)",
            }}
            src={Moose}
            alt="This is an animated gif image, but it does not move"
          />
          {/* <div
            style={{
              width: "20vh",
              height: "20vh",
              borderRadius: "20vw",
              backgroundColor: "rgb(200,60,60)",
            }}
          ></div>
          <div
            style={{
              width: "20vh",
              height: "20vh",
              borderRadius: "20vw",
              backgroundColor: "rgb(45, 105, 155)",
            }}
          ></div> */}
        </div>
      ) : null}
    </div>
  );
}

export default App;
