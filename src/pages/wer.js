import css from "styled-jsx/css";
import { graphql } from "gatsby";
import React from "react";

import Header from "../components/header";
import Person from "../components/person";
import What from "../components/what";
import withLayout from "../components/with-layout";

import { mq } from "../tokens";

const style = css`
  @media ${mq.tabletLandscape} {
    .persons-container {
      margin-top: -7rem;
    }
  }
`;

export default withLayout(() => (
  <>
    <style jsx>{style}</style>

    <Header />

    <What
      theme="white"
      small={true}
      paragraphs={[
        `
          Wir existieren als kollektiver Betrieb seit 2018. Während sich Laura
          und Susanne zuvor bereits in Bildargumente zusammentaten um sich
          intensiv mit der Wirkung von Bildern auseinander zu setzen, wirkte
          Pierre noch gestalterisch als Teil von Ça ira! und Gustav war
          journalistisch im jib collective unterwegs. Im Rahmen der Lausitzer
          Straße trafen wir alle aufeinander.
        `
      ]}
    />

    <What
      theme="red"
      small={true}
      paragraphs={[
        `
          Als Kollektiv arbeiten weiterhin nicht für, sondern auf Augenhöhe.
          Anstelle von Dienstleistung setzen wir Kooperation. Wir verstehen uns
          auch außerhalb des Büros als ein solidarischer Zusammenschluss, in
          dem wir uns gegenseitig unterstützen, gemeinsam arbeiten und gemeinsam
          von- und miteinander lernen. Was uns antreibt ist die Vision, dass
          radikaler gesellschaftlicher Wandel möglich ist. Uns interessiert
          dabei vor allem die soziale Funktion unserer Produkte.
        `
      ]}
    />

    <div className="persons-container">
      <Person
        name="Laura Maikowski"
        email="laura@zoff-kollektiv.net"
        description=""
        imageSrc="/images/laura-maikowski.png"
      />

      <Person
        name="Susanne Beer"
        email="susanne@zoff-kollektiv.net"
        description=""
        direction="rtl"
        imageSrc="/images/susanne-beer.jpg"
      />

      <Person
        name="Pierre Maite"
        email="pierre@zoff-kollektiv.net"
        description=""
        imageSrc="/images/pierre-maite.jpg"
      />

      <Person
        name="Gustav Pursche"
        email="gustav@zoff-kollektiv.net"
        description=""
        direction="rtl"
        imageSrc="/images/gustav-pursche.jpg"
      />
    </div>
  </>
));

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        email
        description
      }
    }
  }
`;
