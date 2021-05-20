import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  arrayMenu: { title: string, description: string, url: string, urlToImage: string }[];
  title: string;

  constructor() {
    this.title = "Food Delivery";
    this.ngOnInit();
  }

  ngOnInit() {
    this.arrayMenu = [
      {
        "title": "Un exjefe militar de EE.UU. detalló la tecnología del OVNI Tic-Tac: “Nos llevan 1000 años” - LA NACION",
        "description": "La frase corresponde a Sean Cahill, exresponsable de armas del portaaviones de la armada estadounidense USS Princeton",
        "url": "https://www.lanacion.com.ar/lifestyle/un-exjefe-militar-de-eeuu-detallo-la-tecnologia-del-ovni-tic-tac-nos-llevan-1000-anos-nid19052021/",
        "urlToImage": "https://resizer.glanacion.com/resizer/0zPot7uNGBSOuv8eRDm-U4Hqe8Y=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/XOH6MCNTPJEQDEPE7GX65YQFJU.png"

      },
      {
        "title": "Inversores huyen del riesgo: cayó Wall Street y se desplomaron las criptomonedas - ámbito.com",
        "description": "Los tres principales índices de Nueva York tocaron mínimos de la sesión en las operaciones de la mañana. En tanto las criptomonedas se hundieron.",
        "url": "https://www.ambito.com/finanzas/criptomonedas/inversores-huyen-del-riesgo-cayo-wall-street-y-se-desplomaron-las-n5193748",
        "urlToImage": "https://media.ambito.com/p/95824d60fd829aa014cdd69ac31449fa/adjuntos/239/imagenes/038/853/0038853261/1200x675/smart/economia-mercados-inversiones-bonos-adrs-indices-cotizacion.jpg"
      },
      {
        "title": "Justicia Federal: la Asociación de Fiscales pidió seguridad para el fiscal Dante Vega - MDZ Online",
        "description": "Mientras la causa de las presuntas coimas sacude a la provincia, la Asociación Argentina de Fiscales y Funcionarios de la Nación expresó su alarma. Es por las amenazas que ha recibido el magistrado que investiga el caso en los Tribunales Federales de Mendoza.…",
        "url": "https://www.mdzol.com/sociedad/modus-operandi/2021/5/19/justicia-federal-la-asociacion-de-fiscales-pidio-seguridad-para-el-fiscal-dante-vega-160316.html",
        "urlToImage": "https://www.mdzol.com/u/fotografias/m/2021/5/5/f1280x720-1052599_1184274_5050.jpg"
      },
      {
        "title": "Por qué el Bitcoin se desplomó un 30 por ciento - Página 12",
        "description": null,
        "url": "https://news.google.com/__i/rss/rd/articles/CBMiUmh0dHBzOi8vd3d3LnBhZ2luYTEyLmNvbS5hci8zNDI2MzctcG9yLXF1ZS1lbC1iaXRjb2luLXNlLWRlc3Bsb21vLXVuLTMwLXBvci1jaWVudG_SAVJodHRwczovL3d3dy5wYWdpbmExMi5jb20uYXIvMzQyNjM3LXBvci1xdWUtZWwtYml0Y29pbi1zZS1kZXNwbG9tby11bi0zMC1wb3ItY2llbnRv?oc=5",
        "urlToImage": null
      },
      {

        "title": "Argentina celebra el Bitcoin Pizza Day con proyecto solidario - CriptoNoticias",
        "description": "La ONG Bitcoin Argentina, Rappi y la Asociación de Propietarios de Pizzerías se suman a una iniciativa solidaria este sábado 22 de mayo.",
        "url": "https://www.criptonoticias.com/comunidad/argentina-celebra-bitcoin-pizza-day-proyecto-solidario/",
        "urlToImage": "https://mk0criptonoticijjgfa.kinstacdn.com/wp-content/uploads/2021/05/bitcoin-pizza-day.jpg"

      },
      {
        "title": "Whatsapp: trucos para volverte “invisible” en el mensajero - LA NACION",
        "description": "Las apps de mensajería pueden tener su lado negativo, ya que los grupos de familia o amigos pueden llegar a ser abrumadores, pero existe una opción para hacerte invisible dentro de la app",
        "url": "https://www.lanacion.com.ar/tecnologia/whatsapp-trucos-para-volverte-invisible-en-el-mensajero-nid19052021/",
        "urlToImage": "https://resizer.glanacion.com/resizer/oqRqjM8NgITUXBKMSuxE9ti1wpI=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/5PMLSFDLINDBXH37X5IFOJTN2A.jpg"
      },
      {
        "title": "Cuáles son las apps en tu celular que más batería y memoria consumen: Facebook, Instagram y Tinder, en el top 10 - infobae",
        "description": "La lista de las aplicaciones “asesinas de smartphones” que utilizan demasiada energía y espacio",
        "url": "https://www.infobae.com/america/tecno/2021/05/19/cuales-son-las-apps-en-tu-celular-que-mas-bateria-y-memoria-consumen-facebook-instagram-y-tinder-en-el-top-10/",
        "urlToImage": "https://www.infobae.com/new-resizer/kVxYi_nvVm6MkFhesa0gIUf9pPc=/1200x628/filters:format(jpg):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/2QTUJVYZLNBV3DGO7H6BHEAFKI.jpg"

      },
      {

        "title": "Cómo será la nueva MacBook Pro que presentará Apple - infobae",
        "description": "El nuevo procesador será más potente que el M1 que integra los equipos lanzados en 2020",
        "url": "https://www.infobae.com/america/tecno/2021/05/19/como-sera-la-nueva-macbook-pro-que-presentara-apple/",
        "urlToImage": "https://www.infobae.com/new-resizer/oEK6L9t8xLXGHjwXv5jQRPmIh2c=/1200x628/filters:format(jpg):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/G3CBNXAWWFFCRKUYDIIIKBT2MU.jpg"

      },
      {
        "title": "Qué es OnlyFans, la app de contenido adulto cada vez más popular - La Capital (Rosario)",
        "description": "Se creó en 2016 como espacio para que los famosos pudieran \"vender\" su imagen, pero su propuesta dio un giro y ahora se presenta más \"picante\"",
        "url": "https://www.lacapital.com.ar/informacion-general/que-es-onlyfans-la-aplicacion-contenido-adulto-cada-vez-mas-popular-n2661902.html",
        "urlToImage": "https://media.lacapital.com.ar/p/1c3fbd581a30774ae38f2b9ad686f917/adjuntos/203/imagenes/030/001/0030001660/onlyfansjpg.jpg"

      },
      {
        "title": "Bitso: cómo funciona la primera fintech del mundo cripto en convertirse en unicornio - ámbito.com",
        "description": "En menos de una década, la plataforma de monedas digitales alcanzó una valuación de u$s2.200 millones. Andrés Ondarra, country manager de Bitso en Argentina, analiza el fenómeno.",
        "url": "https://www.ambito.com/negocios/fintech/bitso-como-funciona-la-primera-del-mundo-cripto-convertirse-unicornio-n5193252",
        "urlToImage": "https://media.ambito.com/p/fe1c514f0bee5bb9bbf739990411e8f5/adjuntos/239/imagenes/038/873/0038873838/1200x675/smart/bitso.jpg"
      },
      {
        "title": "Comenzó la gran migración de mineros en China: ¿cómo afectan las lluvias a Bitcoin? - ámbito.com",
        "description": "El gigante asiático es el país con el mayor poder de procesamiento en la red BTC, con alrededor del 65% del minado o hash rate.",
        "url": "https://www.ambito.com/negocios/bitcoin/comenzo-la-gran-migracion-mineros-china-como-afectan-las-lluvias-n5193720",
        "urlToImage": "https://media.ambito.com/p/53305cf8fcf796ae2b0faf95f69907c4/adjuntos/239/imagenes/038/550/0038550180/1200x675/smart/los-pools-minar-bitcoins-precisan-grandes-cantidades-energia.jpg"
      },
      {
        "title": "Cómo combinar diferentes PDFs en un mismo documento - TN - Todo Noticias",
        "description": "Revisamos el funcionamiento de dos herramientas online y gratuitas que permiten trabajar con estos archivos.",
        "url": "https://tn.com.ar/tecno/paso-paso/2021/05/19/como-combinar-diferentes-pdfs-en-un-mismo-documento/",
        "urlToImage": "https://artear-tn-prod.cdn.arcpublishing.com/resizer/P_VPD1o2j8scT35D-DRO7VlA0_U=/1023x0/smart/filters:quality(60)/cloudfront-us-east-1.images.arcpublishing.com/artear/RGI45XXKNHYLDPSZWWXNFUXCJY.jpg"
      },
      {
        "title": "Ahora también vas a poder controlar tu piel con el teléfono celular - infobae",
        "description": "Se trata de una aplicación basada en la web que requiere que el usuario suba algunas imágenes  con su teléfono",
        "url": "https://www.infobae.com/america/tecno/2021/05/19/ahora-tambien-vas-a-poder-controlar-tu-piel-con-el-telefono-celular/",
        "urlToImage": "https://www.infobae.com/new-resizer/ofeJZauKnuKpSJenjuJjDvp1YNM=/1200x628/filters:format(jpg):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/HSFLUPJTQFDLVDSSHYC5L6G4N4.jpg"
      },
      {


        "title": "Windows 10 cuenta con un bloqueador de Ransomware incorporado, mirá como habilitarlo - HD Tecnología",
        "description": "Windows 10 cuenta con varias características de seguridad, incluyendo una solución antivirus integrada. Sin embargo, lo que muchos no sabían es que SO también incluye una función que permite a los usuarios proteger archivos importantes de ataques de ransomwar…",
        "url": "https://www.hd-tecnologia.com/windows-10-cuenta-con-un-bloqueador-de-ransomware-incorporado-mira-como-habilitarlo/",
        "urlToImage": "https://www.hd-tecnologia.com/imagenes/articulos/2021/05/Windows-10-cuenta-con-un-bloqueador-de-Ransomware-incorporado-mira-como-habilitarlo.jpg"
      },
      {
        "title": "El espíritu de BlackBerry revive en un nuevo teléfono con Android - TN - Todo Noticias",
        "description": "Titan Pocket es un celular con teclado físico completo; inicia su recorrido en una plataforma de financiamiento colectivo.",
        "url": "https://tn.com.ar/tecno/f5/2021/05/19/el-espiritu-de-blackberry-revive-en-un-nuevo-telefono-con-android/",
        "urlToImage": "https://artear-tn-prod.cdn.arcpublishing.com/resizer/njgdjwBixxKc_g78Zvqth_RGmVU=/1023x0/smart/filters:quality(60)/thumbs.vodgc.net/1-398-GjsbWJ1621428493172-1621428653.jpg"
      },
      {
        "title": "Bitcoin, en caída libre: se acerca a u$s30.000 y hunde a las cripto - ámbito.com",
        "description": "La mayor criptomoneda toma algo de aire luego de una fuerte baja en la que arrastró a las otras monedas digitales.",
        "url": "https://www.ambito.com/negocios/bitcoin/frena-la-debacle-caer-us31000-y-recupera-terreno-n5193691",
        "urlToImage": "https://media.ambito.com/p/f4a027256013a12687a728ed5520248f/adjuntos/239/imagenes/038/879/0038879390/1200x675/smart/bitcoin-cayo-picada-su-maximo-historico.jpg"
      },
      {
        "title": "Hugo Barra, hombre fuerte en Facebook, abandona la compañía y se va al negocio de la salud - TN - Todo Noticias",
        "description": "El exejecutivo de Google y Xiaomi se desempeñó por más de cuatro años como vicepresidente de la división de realidad virtual en la empresa de Mark Zuckerberg.",
        "url": "https://tn.com.ar/tecno/f5/2021/05/19/hugo-barra-hombre-fuerte-en-facebook-abandona-la-compania-y-se-va-al-negocio-de-la-salud/",
        "urlToImage": "https://artear-tn-prod.cdn.arcpublishing.com/resizer/O7bU3VV90A4N59RJFrNsZOLEv9o=/1023x0/smart/filters:quality(60)/cloudfront-us-east-1.images.arcpublishing.com/artear/GPNO4OTVIFBYJG6KLTEGEA7GQM.jpg"
      },
      {
        "title": "¿Se pinchó la burbuja? Bitcoin se derrumbó y arrastró consigo al resto de las criptomonedas - infobae",
        "description": "A pocas semanas de haber rondado USD 65.000 por unidad, la criptomoneda más famosa llegó a tocar hoy los USD 31.663. Para los especialistas, se trata de movimientos propios de activos nuevos que todavía no gozan de la confianza de los inversores",
        "url": "https://www.infobae.com/economia/2021/05/19/se-pincho-la-burbuja-bitcoin-se-derrumbo-y-arrastro-consigo-al-resto-de-las-criptomonedas/",
        "urlToImage": "https://www.infobae.com/new-resizer/h29bFCAyBgHwVcv7TS-ASWn5rvM=/1200x628/filters:format(jpg):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/2PVFP7XFPRCXDBRUG3K2SWLEDY.jpg"
      },
      {
        "title": "Qué puede pasar con las criptomonedas en Argentina - MDZ Online",
        "description": "Víctor Atila Castillejo Arias, abogado enfocado en aspectos tecnológicos, afirmó que el mercado de criptomonedas ya se encuentra maduro como para intentar algunas regulaciones.",
        "url": "https://www.mdzol.com/dinero/2021/5/19/que-puede-pasar-con-las-criptomonedas-en-argentina-160172.html",
        "urlToImage": "https://www.mdzol.com/u/fotografias/m/2021/4/29/f1280x720-1050214_1181889_5050.jpg"
      },
      {
        "title": "Bitcoin, en caída libre: cotiza por debajo de u$s40.000 y pone a las cripto en alerta máxima - ámbito.com",
        "description": "La mayor criptomoneda toma algo de aire luego de una fuerte baja en la que arrastró a las otras monedas digitales.",
        "url": "https://www.ambito.com/negocios/bitcoin/freno-la-debacle-caer-us31000-y-criptomonedas-recuperan-terreno-n5193691",
        "urlToImage": "https://media.ambito.com/p/f4a027256013a12687a728ed5520248f/adjuntos/239/imagenes/038/879/0038879390/1200x675/smart/bitcoin-cayo-picada-su-maximo-historico.jpg"
      }
    ];
  }

}














