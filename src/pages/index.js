import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import clsx from "clsx";
import styles from "./index.module.css";

const ALIF_STUDIO_VERSION_WINDOWS = "2.0.14";
const ALIF_STUDIO_VERSION_LINUX = "2.0.11";
const ALIF_STUDIO_VERSION_MAC = "1.22";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="لغة البرمجة العربية ألف - The Alif Arabic Programming Language"
      author="مجتمع ألف - Alif Community"
      keywords="ألف, لغة, البرمجة, عربية, مجتمع, مطوري, تحميل, مترجم, ستوديو, alif, programming, language, arabic"
    >
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
    </Layout>
  );
}

function Header() {
  return (
    <header id={clsx(styles["banner"])}>
      <h1>لغة البرمجة العربية ألف 2.0</h1>
      <p>
        مفتوحة المصدر، متعددة المنصات بواجهة احترافية، تدعم البايثون، جافا
        سكريبت، و سي بلاس بلاس
      </p>
    </header>
  );
}

function Section1() {
  return (
    <section id={clsx(styles["one"])} class={clsx(styles["wrapper"])}>
      <div class={clsx(styles["inner"])}>
        <div class={clsx(styles["flex"], styles["flex-2"])}>
          <article>
            <div class={clsx(styles["image"], styles["fit"])}>
              <img src="images/alif_education.jpg" alt="لغة ألف" />
            </div>
          </article>

          <article>
            <div class={clsx(styles["image"], styles["fit"])}>
              <img src="images/alif_calc.png" alt="لغة ألف" />
            </div>
          </article>
        </div>

        <div class={clsx(styles["flex"], styles["flex-2"])}>
          <article>
            <header>
              <p
                style={{
                  fontSize: "24px",
                  color: "#5385c1",
                  textAlign: "right",
                }}
              >
                لماذا لغة برمجة عربية ؟
              </p>
            </header>
            <p style={{ fontSize: "20px", textAlign: "right" }}>
              منذ ظهور أولى لغات البرمجة العربية سنة 1978، توالت محاولات تصميم
              لغات عربية لاكن كلها توقفت مند سنين، حتى ظهرت لغة ألف سنة 2018،
              مفتوحة المصدر، واضحة الفلسفة و الأهداف، فمؤسسها يقول أن الهدف هو
              تعليمي و ليس منافسة لغات البرمجة العالمية، و فلسفتها البدء من حيث
              انتهى الآخرون
            </p>
          </article>

          <article>
            <header>
              <p
                style={{
                  fontSize: "24px",
                  color: "#5385c1",
                  textAlign: "right",
                }}
              >
                ماهي لغة ألف ؟
              </p>
            </header>
            <p style={{ fontSize: "20px", textAlign: "right" }}>
              لغة ألف (حرف أ)، هي لغة برمجة عربية مفتوحة المصدر
              <a
                href="https://ar.wikipedia.org/wiki/%D9%84%D8%BA%D8%A9_%D8%A8%D8%B1%D9%85%D8%AC%D8%A9_%D8%B9%D8%A7%D9%84%D9%8A%D8%A9_%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D9%88%D9%89"
                target="_blank"
              >
                عالية المستوى
              </a>
              من
              <a
                href="https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D8%AC%D9%8A%D9%84_%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB_%D9%85%D9%86_%D9%84%D8%BA%D8%A7%D8%AA_%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9"
                target="_blank"
              >
                الجيل الثالث
              </a>
              ، صممت من طرف
              <a href="https://twitter.com/dragahassan" target="_blank">
                حسن دراكة
              </a>
              في كندا سنة 2018، و هي لغة برمجة تعليمية الأهداف، حيث توفر للطلبة
              الناطقين بالعربية أرضية سهلة لتعلم أسس البرمجة باللغة العربية
            </p>
          </article>
        </div>

        <hr class={clsx(styles["major"])} />

        <header style={{ textAlign: "center" }}>
          <blockquote>
            في سنة 2010، اتخذت قرار تطوير لغة برمجة عربية، من أجل تسهيل على
            الطلاب العرب تعلم مبادئ البرمجة بلغتهم الأم، فكرت في البداية بتطوير
            لغة برمجة حقيقية مستقلة بذاتها، أي أنها تترجم مباشرة إلى لغة
            التجميع، لكن هذا سيتطلب سنين طويلة من العمل و دعم من مؤسسات حكومية و
            فريق متكامل، فبدأت رحلة البحث عن أفظل طريقة ممكنة لتحقيق الهدف، في
            سنة 2017 قررت أن ابدأ من حيث انتهى الآخرون باستعمال لغة سي++، فشرعت
            لمدة سنة و نصف في تصميم لغة ألف ( أ )، عربية، سهلت القواعد، متعددة
            المنصات، و اليوم أضع هذا العمل المتواضع بين أيدي الطلاب العرب، و
            أتمنى أن تتحقق منه الفائدة، والله من وراء القصد
            <br />
            <a href="https://twitter.com/dragahassan" target="_blank">
              حسن دراكة
            </a>
            -
          </blockquote>
        </header>

        <hr class={clsx(styles["major"])} />

        <div class={clsx(styles["flex"], styles["flex-3"])}>
          <article>
            <header style={{ textAlign: "center" }}>
              <img src="images/win.png" alt="" />
              <h2>
                ويندوز
                <br />
                ألف {ALIF_STUDIO_VERSION_WINDOWS}
              </h2>
            </header>

            <p style={{ fontSize: "18px" }}>
              ألف ستوديو (ويندوز)، هو عبارة عن مجموعة من التطبيقات مفتوحة
              المصدر، تعمل على نظام التشغيل ويندوز اكس بي فما فوق، هته التطبيقات
              تشكل بيئة تطوير متكاملة خاصة بلغة ألف، تسهل على المبرمجين كتابة
              تطبيقات و تحرير ملفات شيفرة ألف، و كذالك عملية تثبيت مترجم ألف، و
              القيام بالتحديث عبر الانترنت
            </p>

            <footer>
              <a
                href="download"
                class={clsx(
                  styles["button"],
                  styles["special"],
                  styles["icon"],
                  styles["fa-download"]
                )}
              >
                تحميل ألف ستوديو - Windows
              </a>
            </footer>
          </article>

          <article>
            <header style={{ textAlign: "center" }}>
              <img src="images/linux.png" alt="" />
              <h2>
                لينكس
                <br />
                ألف {ALIF_STUDIO_VERSION_LINUX}
              </h2>
            </header>

            <p style={{ fontSize: "18px" }}>
              ألف ستوديو (كنو/لينكس)، هو عبارة عن مجموعة من التطبيقات مفتوحة
              المصدر، 32 و 64 بت، تعمل على نظام التشغيل جنو/لينكس، هته التطبيقات
              تشكل بيئة تطوير متكاملة خاصة بلغة ألف، تسهل على المبرمجين كتابة
              تطبيقات و تحرير ملفات شيفرة ألف، و كذالك عملية تثبيت مترجم ألف، و
              القيام بالتحديث عبر الانترنت
            </p>

            <footer>
              <a
                href="download"
                class={clsx(
                  styles["button"],
                  styles["special"],
                  styles["icon"],
                  styles["fa-download"]
                )}
              >
                تحميل ألف ستوديو - Linux
              </a>
            </footer>
          </article>

          <article>
            <header style={{ textAlign: "center" }}>
              <img src="images/mac.png" alt="" />
              <h2>
                ماك أوس
                <br />
                ألف {ALIF_STUDIO_VERSION_MAC}
              </h2>
            </header>

            <p style={{ fontSize: "18px" }}>
              ألف ستوديو (ماك أوس)، هو عبارة عن مجموعة من التطبيقات مفتوحة
              المصدر، تعمل على نظام التشغيل ماك أوس 10.9 فما فوق، هته التطبيقات
              تشكل بيئة تطوير متكاملة خاصة بلغة ألف، تسهل على المبرمجين كتابة
              تطبيقات و تحرير ملفات شيفرة ألف، و كذالك عملية تثبيت مترجم ألف، و
              القيام بالتحديث عبر الانترنت
            </p>

            <footer>
              <a
                href="download"
                class={clsx(
                  styles["button"],
                  styles["special"],
                  styles["icon"],
                  styles["fa-download"]
                )}
              >
                تحميل ألف ستوديو - Mac OS
              </a>
            </footer>
          </article>
        </div>

        <hr class={clsx(styles["major"])} />

        <header>
          <h2 style={{ textAlign: "center" }}>تعليم</h2>
        </header>

        <div class={clsx(styles["row"])}>
          <div class={clsx(styles["6u"], styles["12u$(small)"])}>
            <div class={clsx(styles["image"], styles["fit"])}>
              <a href="learn">
                <img src="images/alif_book_shot.png" alt="PDF لغة ألف" />
              </a>
            </div>

            <div
              style={{ fontSize: "24px", color: "#5385c1", textAlign: "right" }}
            >
              وثائق لغة البرمجة العربية ألف
            </div>
            <p
              style={{ fontSize: "20px", textAlign: "right", color: "#8C8C8C" }}
            >
              الوثائق الرسمية لغة ألف، حيث يثم تحديثها باستمرار، تحتوي على كل ما
              يجتاحه المبرمج لتعلم البرمجة باستعمال لغة البرمجة العربية ألف
            </p>
            <div style={{ align: "center", textAlign: "center" }}>
              <a href="docs" class={clsx(styles["button"], styles["special"])}>
                الوثائق
              </a>
            </div>
          </div>

          <div class={clsx(styles["6u$"], styles["12u$(small)"])}>
            <div class={clsx(styles["image"], styles["fit"])}>
              <a href="learn">
                <img src="images/alif_youtube_shot.png" alt="لغة ألف" />
              </a>
            </div>

            <div
              style={{ fontSize: "24px", color: "#5385c1", textAlign: "right" }}
            >
              يوتوب : سلسلة تعليم لغة ألف
            </div>
            <p
              style={{ fontSize: "20px", textAlign: "right", color: "#8C8C8C" }}
            >
              هذه سلسلة مرئية تعليمية لكيفية البرمجة بلغة ألف، باستعمال بيئة
              التطوير المتكاملة ألف ستوديو
            </p>
            <div style={{ align: "center", textAlign: "center" }}>
              <a
                href="https://www.youtube.com/channel/UCPIieSaqaSh6dL5dmYxZ6hg/playlists"
                class={clsx(
                  styles["button"],
                  styles["special"],
                  styles["icon"],
                  styles["fa-download"]
                )}
              >
                مشاهدة على اليوتوب
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section2() {
  return (
    <section
      id={clsx(styles["two"])}
      class={clsx(styles["wrapper"], styles["style1"], styles["special"])}
    >
      <div class={clsx(styles["inner"])}>
        <header>
          <h2>! التعاون</h2>
          <p style={{ fontSize: "24px" }}>
            إدا أعجبك مشروع لغة البرمجة العربية ألف، يمكنك المساهمة من أجل
            إزدهار و تقدم لغة ألف
            <br />
            حتى يستفيد منه أكبر عدد من الناس حول العالم
          </p>
        </header>

        <div class={clsx(styles["flex"], styles["flex-4"])}>
          <div class={clsx(styles["box"], styles["person"])}>
            <div class={clsx(styles["image"], styles["round"])}>
              <img src="images/twitter_128.png" alt="Person 1" />
            </div>
            <h3>مساهمة إعلامية</h3>
            <p style={{ fontSize: "18px" }}>
              إدا اعجبك مشروع لغة البرمجة العربية ألف، يمكنك أن تساهم في نشره من
              أجل تقدم لغة ألف، حتى يستفيد منه أكبر عدد من الناس حول العالم، عن
              طريق كتابة نبدة عن المشروع في صفحتك على الفيسبوك، تويتر، أو موقعك
              الخاص
            </p>
          </div>

          <div class={clsx(styles["box"], styles["person"])}>
            <div class={clsx(styles["image"], styles["round"])}>
              <img src="images/cpp_128.png" alt="Person 2" />
            </div>
            <h3>مساهمة تقنية</h3>
            <p style={{ fontSize: "18px" }}>
              مجتمع ألف يرحب بالمبرمجين المتطوعين الجدد اللدين يرغبون في
              الانظمام اليه من اجل تطوير مكتبات لغة ألف، عن طريق المساهمة
              بخبراتهم في البرمجة بلغة
              <a
                href="https://ar.wikipedia.org/wiki/%D8%B3%D9%8A%2B%2B_(%D9%84%D8%BA%D8%A9_%D8%A8%D8%B1%D9%85%D8%AC%D8%A9)"
                target="_blank"
              >
                سي++
              </a>
              و مكتبات
              <a href="http://wxwidgets.org" target="_blank">
                وكس ويدجيتز
              </a>
            </p>
            <a
              href="https://www.aliflang.org/community"
              class={clsx(styles["button"], styles["special"], styles["fit"])}
            >
              مجتمع ألف
            </a>
          </div>

          <div class={clsx(styles["box"], styles["person"])}>
            <div class={clsx(styles["image"], styles["round"])}>
              <img src="images/paypal_128.png" alt="Person 3" />
            </div>
            <h3>مساهمة مادية</h3>
            <p style={{ fontSize: "18px" }}>
              مجتمع ألف، هو مجتمع منظم غير ربحي، مهمته هي حماية الحقوق الملكية
              الفكرية للغة ألف، و ادارة الموقع الرسمي و المنتدى على الانترنت، و
              تمويل ما يحتاجه المشروع للاستمرار، و كذالك تطوير اللغة و البرمجيات
            </p>
            <a
              href="donations"
              class={clsx(styles["button"], styles["special"], styles["fit"])}
            >
              مساهمة
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section3() {
  return (
    <section
      id={clsx(styles["three"])}
      class={clsx(styles["wrapper"], styles["special"])}
    >
      <div class={clsx(styles["inner"])}>
        <header style={{ textAlign: "center" }}>
          <h2>! تعرف أكثر</h2>
          <p style={{ fontSize: "22px" }}>
            تعرف أكثر على لغة البرمجة العربية ألف
          </p>
        </header>

        <div class={clsx(styles["flex"], styles["flex-2"])}>
          <article>
            <div class={clsx(styles["image"], styles["fit"])}>
              <img src="images/alif_hello_world.png" alt="لغة ألف" />
            </div>
            <header>
              <p style={{ fontSize: "24px", color: "#5385c1" }}>لغة ألف</p>
            </header>
            <p style={{ fontSize: "20px" }}>
              لغة ألف (حرف أ)، هي لغة برمجة عربية مفتوحة المصدر،
              <a
                href="https://ar.wikipedia.org/wiki/%D8%A8%D8%B1%D9%85%D8%AC%D8%A9_%D9%83%D8%A7%D8%A6%D9%86%D9%8A%D8%A9_%D8%A7%D9%84%D8%AA%D9%88%D8%AC%D9%87"
                target="_blank"
              >
                كائنية
              </a>
              ،
              <a
                href="https://ar.wikipedia.org/wiki/%D9%85%D8%AD%D9%88%D9%84_%D8%A8%D8%B1%D9%85%D8%AC%D9%8A"
                target="_blank"
              >
                مصرفة
              </a>
              ،
              <a
                href="https://ar.wikipedia.org/wiki/%D9%84%D8%BA%D8%A9_%D8%A8%D8%B1%D9%85%D8%AC%D8%A9_%D8%B9%D8%A7%D9%84%D9%8A%D8%A9_%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D9%88%D9%89"
                target="_blank"
              >
                عالية المستوى
              </a>
              من
              <a
                href="https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D8%AC%D9%8A%D9%84_%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB_%D9%85%D9%86_%D9%84%D8%BA%D8%A7%D8%AA_%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9"
                target="_blank"
              >
                الجيل الثالث
              </a>
              ، تتميز بالبساطة و السهولة في استخدامها، صممت من طرف
              <a href="https://twitter.com/dragahassan" target="_blank">
                حسن دراكة
              </a>
              في كندا سنة 2018، و هي لغة برمجة تعليمية الأهداف، حيث توفر للطلبة
              الناطقين بالعربية أرضية سهلة لتعلم أسس البرمجة باللغة العربية
            </p>
          </article>

          <article>
            <div class={clsx(styles["image"], styles["fit"])}>
              <img src="images/alif_code.png" alt="لغة ألف" />
            </div>
            <header>
              <p style={{ fontSize: "24px", color: "#5385c1" }}>
                لماذا هدا المشروع ؟
              </p>
            </header>
            <p style={{ fontSize: "20px" }}>
              منذ ظهور أولى لغات البرمجة العربية سنة 1978، توالت محاولات تصميم
              لغات برمجة عربية، لاكن جل هته المشاريع توقفت مند سنين، حتى ظهرت
              لغة ألف سنة 2018، مفتوحة المصدر، واضحة الفلسفة و الأهداف، فمؤسسها
              يقول أن الهدف هو تعليمي و ليس منافسة لغات البرمجة العالمية، و
              فلسفتها البدء من حيث انتهى الآخرون
            </p>
          </article>

          <article>
            <header>
              <p style={{ fontSize: "24px", color: "#5385c1" }}>
                الهدف هو تعليمي
              </p>
            </header>
            <p style={{ fontSize: "20px" }}>
              إن تعليم الطلبة الغير الناطقين باللغة الإنجليزية مبادئ البرمجة
              يزيد من صعوبة التعليم، و قد يتسبب في مشاعر غضب نحو لغات البرمجة
              تلك، لذالك يجب أن تقوم لغة البرمجة المصممة لتعليم الطلبة بإزالة أي
              حاجز لغوي، و ما لغة ألف إلا واحدة من مئات لغات البرمجة التعليمية
              الغير إنجليزية في العالم <br />
              <br />
              <a
                href="https://en.wikipedia.org/wiki/List_of_educational_programming_languages"
                target="_blank"
              >
                Educational Programming Languages
              </a>
              <img src="images/link_16.png" alt="" />
              <br />
              <a
                href="https://ar.wikipedia.org/wiki/%D9%84%D8%BA%D8%A7%D8%AA_%D8%A8%D8%B1%D9%85%D8%AC%D8%A9_%D8%BA%D9%8A%D8%B1_%D8%A5%D9%86%D8%AC%D9%84%D9%8A%D8%B2%D9%8A%D8%A9"
                target="_blank"
              >
                لغات البرمجة الغير إنجليزية
              </a>
              <img src="images/link_16.png" alt="" />
            </p>
          </article>

          <article>
            <header>
              <p style={{ fontSize: "24px", color: "#5385c1" }}>
                البدء من حيث انتهى الآخرون
              </p>
            </header>
            <p style={{ fontSize: "20px" }}>
              إدا أردنا صناعة لغة برمجة من الصفر، لتوجب علينا صناعة لغة تترجم من
              لغة
              <a
                href="https://ar.wikipedia.org/wiki/%D9%84%D8%BA%D8%A9_%D8%A8%D8%B1%D9%85%D8%AC%D8%A9_%D8%B9%D8%A7%D9%84%D9%8A%D8%A9_%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D9%88%D9%89"
                target="_blank"
              >
                عالية المستوى
              </a>
              (لغة ألف) إلى لغة
              <a
                href="https://ar.wikipedia.org/wiki/%D9%84%D8%BA%D8%A9_%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9_%D9%85%D9%86%D8%AE%D9%81%D8%B6%D8%A9_%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D9%88%D9%89"
                target="_blank"
              >
                منخفضة المستوى
              </a>
              (
              <a
                href="https://ar.wikipedia.org/wiki/%D9%84%D8%BA%D8%A9_%D8%AA%D8%AC%D9%85%D9%8A%D8%B9"
                target="_blank"
              >
                لغة التجميع
              </a>
              )، و هذا يتطلب سنين طويلة من العمل و دعم من مؤسسات حكومية و فريق
              متكامل من خبراء عرب <br />
              <br />
              بما أن المشروع بدأ بمجهود فردي، فظل مؤسس لغة ألف عدم اختراع العجلة
              و البدء من حيث انتهى الآخرون، حيث صمم لغة ألف لتترجم من لغة
              <a
                href="https://ar.wikipedia.org/wiki/%D9%84%D8%BA%D8%A9_%D8%A8%D8%B1%D9%85%D8%AC%D8%A9_%D8%B9%D8%A7%D9%84%D9%8A%D8%A9_%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D9%88%D9%89"
                target="_blank"
              >
                عالية المستوى
              </a>
              (لغة ألف) إلى لغة
              <a
                href="https://ar.wikipedia.org/wiki/%D9%84%D8%BA%D8%A9_%D8%A8%D8%B1%D9%85%D8%AC%D8%A9_%D8%B9%D8%A7%D9%84%D9%8A%D8%A9_%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D9%88%D9%89"
                target="_blank"
              >
                عالية المستوى
              </a>
              أخرى (
              <a
                href="https://ar.wikipedia.org/wiki/%D8%B3%D9%8A%2B%2B_(%D9%84%D8%BA%D8%A9_%D8%A8%D8%B1%D9%85%D8%AC%D8%A9)"
                target="_blank"
              >
                سي++
              </a>
              ) ثم إلى لغة
              <a
                href="https://ar.wikipedia.org/wiki/%D9%84%D8%BA%D8%A9_%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9_%D9%85%D9%86%D8%AE%D9%81%D8%B6%D8%A9_%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D9%88%D9%89"
                target="_blank"
              >
                منخفضة المستوى
              </a>
              (
              <a
                href="https://ar.wikipedia.org/wiki/%D9%84%D8%BA%D8%A9_%D8%AA%D8%AC%D9%85%D9%8A%D8%B9"
                target="_blank"
              >
                لغة التجميع
              </a>
              )، و استغرق هذا ثلاثة سنوات من العمل
            </p>
          </article>

          <article>
            <header>
              <p style={{ fontSize: "24px", color: "#5385c1" }}>
                هل لغة ألف هي مجرد ترجمة حرفية ؟
              </p>
            </header>
            <p style={{ fontSize: "20px" }}>
              رغم أن لغة ألف مكتوبة بشكل كامل بلغة
              <a
                href="https://ar.wikipedia.org/wiki/%D8%B3%D9%8A%2B%2B_(%D9%84%D8%BA%D8%A9_%D8%A8%D8%B1%D9%85%D8%AC%D8%A9)"
                target="_blank"
              >
                سي++
              </a>
              ، لن نجد أي علاقة بين لغة ألف و لغة
              <a
                href="https://ar.wikipedia.org/wiki/%D8%B3%D9%8A%2B%2B_(%D9%84%D8%BA%D8%A9_%D8%A8%D8%B1%D9%85%D8%AC%D8%A9)"
                target="_blank"
              >
                سي++
              </a>
              في الشكل، فمثلا لغة ألف تنتهي أوامرها بنهاية السطر، بينما لغة
              <a
                href="https://ar.wikipedia.org/wiki/%D8%B3%D9%8A%2B%2B_(%D9%84%D8%BA%D8%A9_%D8%A8%D8%B1%D9%85%D8%AC%D8%A9)"
                target="_blank"
              >
                سي++
              </a>
              تنتهي بـ ' ؛ '، كذالك لا يمكن نقل المعلومات بين متغيرين مختلفين،
              أو إنشاء
              <a
                href="https://ar.wikipedia.org/wiki/%D9%88%D8%A7%D8%AC%D9%87%D8%A9_%D9%85%D8%B3%D8%AA%D8%AE%D8%AF%D9%85_%D8%B1%D8%B3%D9%88%D9%85%D9%8A%D8%A9"
                target="_blank"
              >
                واجهة رسومية
              </a>
              في
              <a
                href="https://ar.wikipedia.org/wiki/%D8%B3%D9%8A%2B%2B_(%D9%84%D8%BA%D8%A9_%D8%A8%D8%B1%D9%85%D8%AC%D8%A9)"
                target="_blank"
              >
                سي++
              </a>
              إلا باستعمال مكتبات خاصة، بينما هي ممكنة و موجودة سلفا في لغة ألف،
              هذا كله لأن لغة ألف ليست ترجمة حرفية للغة
              <a
                href="https://ar.wikipedia.org/wiki/%D8%B3%D9%8A%2B%2B_(%D9%84%D8%BA%D8%A9_%D8%A8%D8%B1%D9%85%D8%AC%D8%A9)"
                target="_blank"
              >
                سي++
              </a>
              أو أية لغة أخرى، بل صممت بشكل خاص و متميز حتى يسهل على الطلبة
              تعلمها بسهولة
              <br />
              <br />
              <a
                href="https://sourceforge.net/projects/mppproj/"
                target="_blank"
              >
                مثال عن لغة برمجة عربية تعتبر ترجمة حرفية للغة سي
              </a>
              <img src="images/link_16.png" alt="" />
            </p>
          </article>

          <article>
            <header>
              <p style={{ fontSize: "24px", color: "#5385c1" }}>
                هل يصح مقارنة لغة ألف بلغات إنجليزية عالمية ؟
              </p>
            </header>
            <p style={{ fontSize: "20px" }}>
              لا يصح ذالك، و إلا ستكون مقارنة غير عادلة، لأن لغة ألف بدأت بمجهود
              فردي و هي في طور التطوير، بينما اللغات الإنجليزية العالمية صممت
              بمجهود عالمي من مختلف المؤسسات، الأصح هو مقارنة لغة ألف بلغات
              البرمجة العربية الأخرى، أو بلغات الغير إنجليزية العالمية
              <br />
              <br />
              <a href="http://ebda3lang.blogspot.com/" target="_blank">
                لغة البرمجة العربية إبداع (2015)
              </a>
              <img src="images/link_16.png" alt="" />
              <br />
              <a
                href="https://sourceforge.net/projects/phoenix/"
                target="_blank"
              >
                لغة البرمجة العربية العنقاء (2014)
              </a>
              <img src="images/link_16.png" alt="" />
              <br />
              <a href="https://github.com/nasser/---" target="_blank">
                لغة البرمجة العربية قلب (2012)
              </a>
              <img src="images/link_16.png" alt="" />
              <br />
              <a href="http://supernova.sourceforge.net/" target="_blank">
                لغة البرمجة العربية سوبر نوفا (2010)
              </a>
              <img src="images/link_16.png" alt="" />
              <br />
              <a href="http://ammoria.sourceforge.net/" target="_blank">
                لغة البرمجة العربية عمورية (2008)
              </a>
              <img src="images/link_16.png" alt="" />
              <br />
              <a href="http://jeemlang.com/" target="_blank">
                لغة البرمجة العربية ج (2007)
              </a>
              <img src="images/link_16.png" alt="" />
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Non-English-based_programming_languages"
                target="_blank"
              >
                Non-English-based Programming Languages
              </a>
              <img src="images/link_16.png" alt="" />
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
