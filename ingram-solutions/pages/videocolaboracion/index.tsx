/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Hero } from "../../components/Hero";
import Image from "next/image";

import logovideocolab from "../../public/images/video-colaboracion/logo-videocolaboracion.png";
import titulo_1 from "../../public/images/Ultimas/video-colaboracion/titulo-1.png";
import titulo_2 from "../../public/images/Ultimas/video-colaboracion/titulo-2.png";
import titulo_3 from "../../public/images/Ultimas/video-colaboracion/titulo-3.png";
import titulo_4 from "../../public/images/Ultimas/video-colaboracion/titulo-4.png";
import img1rooms from "../../public/images/Ultimas/video-colaboracion/img-1.png";
import img12rooms from "../../public/images/Ultimas/video-colaboracion/img-1.2.png";
import img2licencia from "../../public/images/Ultimas/video-colaboracion/img-2.jpg";
import img3 from "../../public/images/Ultimas/video-colaboracion/img-3.jpg";
import img4 from "../../public/images/Ultimas/video-colaboracion/img-4.png";

import sponsor_1 from "../../public/images/video-colaboracion/sponsor-1.png";
import sponsor_2 from "../../public/images/video-colaboracion/sponsor-2.png";
import sponsor_3 from "../../public/images/video-colaboracion/sponsor-3.png";
import sponsor_4 from "../../public/images/video-colaboracion/sponsor-4.png";
import sponsor_5 from "../../public/images/video-colaboracion/sponsor-5.png";
import sponsor_6 from "../../public/images/video-colaboracion/sponsor-6.png";
import sponsor_7 from "../../public/images/video-colaboracion/sponsor-7.png";
import sponsor_8 from "../../public/images/video-colaboracion/sponsor-8.png";
import sponsor_9 from "../../public/images/video-colaboracion/sponsor-9.png";
import sponsor_10 from "../../public/images/video-colaboracion/sponsor-10.png";
import sponsor_11 from "../../public/images/video-colaboracion/sponsor-11.png";
import sponsor_12 from "../../public/images/video-colaboracion/sponsor-12.png";
import sponsor_13 from "../../public/images/video-colaboracion/sponsor-13.png";
import sponsor_14 from "../../public/images/Ultimas/video-colaboracion/sponsor-14.png";
import sponsor_15 from "../../public/images/Ultimas/video-colaboracion/sponsor-14.png";

import banner_top from "../../public/images/video-colaboracion/banner-top.jpg";
import styles from "./videocolab.module.css";
import { ButtonOrange, ButtonOrangeBlank } from "../../components/buttons/ButtonOrange";
import { BannerContact } from "../../components/BannerContact";

const Videocolaboracion = () => {
  return (
    <>
      <Hero logo={logovideocolab} backgroundUrl={banner_top}>
        <div>
          <h2 className="display-4 mt-4">
            Soluciones{" "}
            <span className="fw-bold text-blue">de Video Colaboraci??n</span>
          </h2>
        </div>
      </Hero>
      <SectionBannerContact />
      <section className="d-flex flex-column  align-items-center">
        <h3 className="text-blue fw-bold">Una Soluci??n a tu medida</h3>
        <div className="container my-3 text-center ">
          <h4>
            Las soluciones de Ingram Micro para Video-Colaboraci??n permiten a
            las empresas implementar de manera f??cil y sencilla, plataformas de
            alta calidad, para realizar el trabajo remoto desde cualquier lugar.
          </h4>
        </div>

        <div className="container my-5 d-grid gap-5 ">
          <RoomSolutions />
          <LicenciaMicrosoft />
          <Solucionclaseshibridas />
          <SolucionInalambrica />
        </div>
      </section>

      <SectionSponsor />

      <BannerContact
        text="Expande tus oportunidades de
      Video colaboraci??n con Ingram Micro:"
        href_Button="mailto:colaboracion.mx@ingrammicro.com"
        url="mailto:colaboracion.mx@ingrammicro.com"
        url_Text="colaboracion.mx@ingrammicro.com"
      />

      <section className="pt-5">
        <article className="container">
          <div className="fs-5">
            -Las im??genes son de car??cter ilustrativo y pueden diferir del
            producto y/o servicio descrito.
            <br />
            -Los paquetes mostrados pueden cambiar de precio sin previo aviso{" "}
            <br />
            -Precios de implementaci??n sujetos a cobertura geogr??fica
            <br />
            -Precios mostrados antes de IVA
            <br />
          </div>
        </article>
      </section>
    </>
  );
};

const SectionBannerContact = () => {
  return (
    <section id="section_banner_contact">
      <article className="container my-5">
        <div
          className={`${styles.videocolab_banner_sec} py-4 position-relative justify-content-center p-4`}
        >
          <div className="row">
            <div
              style={{ zIndex: "99" }}
              className="training position-relative offset-lg-5 col-lg-7 d-flex flex-column align-items-lg-start align-items-center justify-content-lg-start justify-content-center"
            >
              <p
                className={`fs-5 fw-bold text-bold text-lg-white`}
              >
                Con los recientes cambios laborales, conectar personas en
                ubicaciones diversas para mejorar el trabajo en equipo, la
                innovaci??n y el uso compartido de informaci??n, se ha convertido
                en una prioridad.
                <br />
                <br />
                La colaboraci??n con video es hoy la manera m??s eficiente para
                mantener a las personas conectadas, al permitirle transmitir
                ideas en equipos distribuidos, aumentar la productividad y ayuda
                a las organizaciones a trabajar de forma f??cil e inteligente.{" "}
                <br />
                <br />
                Las soluciones de Ingram Micro para Video-Colaboraci??n permiten
                a las empresas implementar de manera f??cil y sencilla,
                plataformas de alta calidad, que permiten el trabajo remoto
                desde cualquier lugar.
              </p>
              <div className="videoCol text-center mb-4 ">
                <ButtonOrangeBlank
                  text={"Cont??ctanos"}
                  href={
                    "mailto:colaboracion.mx@ingrammicro.com"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

const RoomSolutions = () => {
  return (
    <div className="col-12 ">
      <div className="card border-light">
        <Image
          src={titulo_1}
          objectFit="contain"
          className="img-fluid"
          alt="sponsor"
        />
        <div className="card-body fondo-gradient shadow">
          <div className="px-5 py-4">
            <p className="fs-4 fw-normal">
              Logitech Tap est?? dise??ada para un desempe??o confiable en el
              espacio de trabajo, con caracter??sticas pensadas para entregar una
              excelente experiencia de usuario. Las diversas opciones de montaje
              y la posibilidad de conducir los cables a trav??s de la parte
              trasera o por abajo del equipo vuelven posible la colocaci??n de
              Tap en casi cualquier locaci??n interior. Incluye equipo de c??mputo
              que cuenta con el sistema pre cargado, listo solamente para
              activar la licencia seg??n la versi??n que se elija.
              <br />
              <br />
              - Beneficios: Controlador t??ctil, equipo de c??mputo que administra
              los dem??s elementos de tu sala (pantalla, proyecto, c??mara de
              video conferencia), administraci??n de tus reuniones, iniciar
              reuniones con un solo click, equipo dedicado para iniciar todas
              tus video conferencias.
              <br />
              <br />
              - Condiciones comerciales: Se vende con un equipo de c??mputo
              certificado para Microsoft Teams Room's, Zoom Room's o Google
              Meet. Se requiere licencia para activar el producto, contactar al
              especialista.
              <br />
              <br />
              NOTA: Actualmente Ingram micro solo vende la licencia de Microsoft
              Teams Room's.
            </p>
          </div>
          <div className="text-center mb-3">
            <Image
              src={img1rooms}
              objectFit="contain"
              className="img-fluid"
              alt=""
              layout="responsive"
              width={2000}
              height={300}
            />
          </div>
          <div className="text-center">
            <Image
              src={img12rooms}
              objectFit="contain"
              className="img-fluid"
              alt=""
              layout="responsive"
              width={2000}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const LicenciaMicrosoft = () => {
  return (
    <div className="col-12 ">
      <div className="card border-light">
        <Image
          src={titulo_2}
          objectFit="contain"
          className="img-fluid"
          alt="sponsor"
        />
        <div className="card-body fondo-gradient shadow">
          <div className="px-5 py-4">
            <p className="fs-4 fw-normal">
              Hacer que las reuniones sean inclusivas e interactivas
              satisfaciendo las necesidades en cualquier espacio de colaboraci??n
              con un portafolio amplio de dispositivos certificados.
              <br />
              Licencia por equipo, dos esquemas (anual y mensual) dos versiones
              (est??ndar y premium) Compatible solo con equipos certificados.
              <br />
              <br />
              - Beneficios: Compatibilidad con los principales sistemas de video
              conferencia actuales, versatilidad, c??mara de documentos.
              <br />
              - Im??gen licencia b??sica y premium
              <br />- Condiciones comerciales: se adquiere a trav??s del portal{" "}
              <a href="https://mx.cloud.im/?elqTrackId=f49318f563624e0aa962d2d2dfb6315d&amp;elqaid=912&amp;elqat=2">
                https://mx.cloud.im/
              </a>
            </p>
            <div className="text-center">
              <Image
                src={img2licencia}
                objectFit="contain"
                className="img-fluid"
                alt=""
                layout="responsive"
                width={6}
                height={3}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Solucionclaseshibridas = () => {
  return (
    <div className="col-12 ">
      <div className="card border-light">
        <Image
          src={titulo_3}
          objectFit="contain"
          className="img-fluid"
          alt="sponsor"
        />
        <div className="card-body fondo-gradient shadow">
          <div className="px-5 py-4">
            <p className="fs-4 fw-normal">
              -Descripci??n corta: Crea las clases hibridas sin interrupciones.
              Con esta soluci??n, el profesor podr?? impartir su clase sin
              interrumpir la visibilidad del texto escrito en una pizarra
              convencional. El alumno remoto dentro de la sesi??n de Microsoft
              Teams Room's podr?? ver el texto por encima del profesor, logrando
              que se enfoque 100% en el texto fijado.
              <br />
              <br />
              -Caracter??stica exclusiva de Microsoft Teams Room's.
              <br />
              -Beneficios: Crear clases h??bridas 100% funcionales, enfocadas en
              la atenci??n al contenido.
            </p>
          </div>

          <div className="text-center">
            <Image
              src={img3}
              objectFit="contain"
              className="img-fluid"
              alt=""
              layout="responsive"
              width={1000}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
const SolucionInalambrica = () => {
  return (
    <div className="col-12 ">
      <div className="card border-light">
        <Image
          src={titulo_4}
          objectFit="contain"
          className="img-fluid"
          alt="sponsor"
        />
        <div className="card-body fondo-gradient shadow">
          <div className="px-5 py-4">
            <p className="fs-4 fw-normal">
              -ScreenBeam: Las galardonadas soluciones de ScreenBeam transforman
              los espacios de reuni??n y aprendizaje con soporte agn??stico a
              herramientas de videoconferencia y presentaci??n inal??mbrica sin
              aplicaciones.
              <br />
              -Beneficios: Colaboraci??n inal??mbrica, participaci??n colectiva,
              integraci??n, Software robusto, configurable, conectividad de 4
              dispositivos o m??s al mismo tiempo, Seguridad en las reuniones,
              compatible con sistemas de video conferencia Logitech, Poly y
              Jabra
            </p>
          </div>

          <div className="text-center">
            {/* <img
              src="https://images.LatAm.ingrammicro.com/EloquaImages/clients/IngramMicroLATAM/%7Bf11793d5-0d1f-42b4-89d2-1a8e50a4a01d%7D_img-4.png"
              className="img-fluid"
              alt=""
            /> */}
            <Image
              src={img4}
              objectFit="contain"
              className="img-fluid"
              alt=""
              layout="responsive"
              width={8}
              height={2}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const SectionSponsor = () => {
  return (
    <section id="seccion-sponsor-iot">
      <div className="container my-5">
        <div className="row text-center py-4">
          <div className="col-md-12">
            <h3 className="text-blue fw-bold">Aliados de Negocio</h3>
          </div>
        </div>
        <div className="row wrapper pb-5">
          <div className="col-md-12 text-center">
            <Image
              src={sponsor_1}
              width="150"
              height="150"
              objectFit="contain"
              className="p-3"
              alt="sponsor"
            />
            <Image
              src={sponsor_2}
              width="150"
              height="150"
              objectFit="contain"
              className="p-3"
              alt="sponsor"
            />
            <Image
              src={sponsor_3}
              width="150"
              height="150"
              objectFit="contain"
              className="p-3"
              alt="sponsor"
            />
            <Image
              src={sponsor_4}
              width="150"
              height="150"
              objectFit="contain"
              className="p-3"
              alt="sponsor"
            />
            <Image
              src={sponsor_5}
              width="150"
              height="150"
              objectFit="contain"
              className="p-3"
              alt="sponsor"
            />
            <Image
              src={sponsor_6}
              width="150"
              height="150"
              objectFit="contain"
              className="p-3"
              alt="sponsor"
            />
            <Image
              src={sponsor_7}
              width="150"
              height="150"
              objectFit="contain"
              className="p-3"
              alt="sponsor"
            />
            <Image
              src={sponsor_8}
              width="150"
              height="150"
              objectFit="contain"
              className="p-3"
              alt="sponsor"
            />
            <Image
              src={sponsor_9}
              width="150"
              height="150"
              objectFit="contain"
              className="p-3"
              alt="sponsor"
            />
            <Image
              src={sponsor_10}
              width="150"
              height="150"
              objectFit="contain"
              className="p-3"
              alt="sponsor"
            />
            <Image
              src={sponsor_11}
              width="150"
              height="150"
              objectFit="contain"
              className="p-3"
              alt="sponsor"
            />
            <Image
              src={sponsor_12}
              width="150"
              height="150"
              objectFit="contain"
              className="p-3"
              alt="sponsor"
            />
            <Image
              src={sponsor_13}
              width="150"
              height="150"
              objectFit="contain"
              className="p-3"
              alt="sponsor"
            />
            <Image
              src={sponsor_14}
              width="150"
              height="150"
              objectFit="contain"
              className="p-3"
              alt="sponsor"
            />
            <Image
              src={sponsor_15}
              width="150"
              height="150"
              objectFit="contain"
              className="p-3"
              alt="sponsor"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videocolaboracion;
