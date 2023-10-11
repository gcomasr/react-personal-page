import React from "react";
import Section from "../section";
import SectionTitle from "../9-General_Section/sectionTitle/sectionTitle";
import SectionDesc from "../9-General_Section/sectionDesc/sectionDesc";
import HexsImage from "./home_image/hexsImage";
import HomeInfoBox from "./home_info/homeInfoBox";
import DownloadFileBtn from "./downloadFileBtn/downloadFileBtn";

function homeSect() {
  return (
    <Section sect_id="home">
      <>
        <HexsImage
          class_name="home-section__img"
          path="./images/me1.png"
        ></HexsImage>
        <article className="home-section__article">
          <SectionTitle sectId="home" color="text-white">
            Welcome!
          </SectionTitle>
          <SectionDesc sectId="home">
            I am <b>Guillem Comas Rabassa</b>, an <u>automation engineer</u> and
            in my free time a frontend developer.
          </SectionDesc>
          <HomeInfoBox></HomeInfoBox>
          <DownloadFileBtn path="./doc/CV_GuillemComas_esp.pdf">
            Download CV
          </DownloadFileBtn>
        </article>
      </>
    </Section>
  );
}

export default homeSect;
