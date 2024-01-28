import Image from "next/image";

import classes from "./AboutUs.module.css";

import image1 from "@/public/17.png";
import image2 from "@/public/18.png";
import image3 from "@/public/19.jpg";
import image4 from "@/public/20.jpg";
import image5 from "@/public/21.png";
import image6 from "@/public/22.png";

import trail1 from "@/public/trail.png";
import trail2 from "@/public/trail-2.png";

import initTranslations from "@/app/i18n";

export default async function AboutUs({ locale }) {
  const { t } = await initTranslations(locale, ["about-us"]);
  return (
    <div className={classes["about-us"]}>
      <h1>{t("title")}</h1>
      {/* <p>{t("text")}</p> */}
      <div className={classes["paragraph-container"]}>
        <Image src={image1} alt="About us" />
        <p>
          С.И.П.И. е #party локация в Капана, в която Hip Hop и приятен
          #houseMusic срещат свежите коктейли и неповторима атмосфера.
          Разположено на &quot;Тихата улица&quot;, заведението предлага
          забавления в приятна обстановка и френдли персонал.
        </p>
      </div>
      <div className={classes.trail}>
        <Image src={trail1} alt="Trail" />
      </div>
      <div className={`${classes["paragraph-container"]} ${classes.even}`}>
        <Image src={image2} alt="About us" />
        <p>
          Всяка седмица се наслаждаваме на гостувания от известни диджеи от Hip
          Hop сцената на България, както и на тематични партита, които
          трансформират клуба в сцена с разнообразни концепции.
        </p>
      </div>
      <div className={classes.trail}>
        <Image src={trail2} alt="Trail" />
      </div>
      <div className={classes["paragraph-container"]}>
        <Image src={image3} alt="About us" />
        <p>
          Празнувай специални моменти в С.И.П.И. с твоите приятели или колеги.
          Довери ни се за своето фирмено парти, рожден ден или частно събитие,
          за което ще се разказват истории.
        </p>
      </div>
      <div className={classes.trail}>
        <Image src={trail1} alt="Trail" />
      </div>
      <div className={`${classes["paragraph-container"]} ${classes.even}`}>
        <Image src={image4} alt="About us" />
        <p>
          Ние се грижим за музиката, храната и напитките според твоите
          предпочитания, а ти се наслаждаваш на доброто настроение и компанията
          на твоите хора.
        </p>
      </div>
      <div className={classes.trail}>
        <Image src={trail2} alt="Trail" />
      </div>
      <div className={classes["paragraph-container"]}>
        <Image src={image5} alt="About us" />
        <p>
          Разполагаме с 60 места на закрито, просторна вътрешна лятна градина
          със собствен бар и две отделни тераси на ниво 2, които могат да бъдат
          наети отделно.
        </p>
      </div>
      <div className={classes.trail}>
        <Image src={trail1} alt="Trail" />
      </div>
      <div className={`${classes["paragraph-container"]} ${classes.even}`}>
        <Image src={image6} alt="About us" />
        <p>
          Ние вярваме, че музиката е езикът, който ни обединява, и затова не
          просто сме създали място за срещи и напитки - създали сме истински
          оазис, където хората се събират, за да изразят себе си.
        </p>
      </div>
      <div className={classes.trail}>
        <Image src={trail2} alt="Trail" />
      </div>
      <div className="go-green-bottom">
        <h2>Стани част от нашата история! Очакваме те в Капана!</h2>
      </div>
      {/* <div className={classes["paragraph-container"]}>
        <p>Стани част от нашата история! Очакваме те в Капана!</p>
      </div> */}
    </div>
  );
}
