import React from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";
import SoftwareList from "./software.yml";
import CartoonList from "./cartoon.yml";
import RecentList from "./recent.yml";
import Link from "@docusaurus/Link";
import Admonition from "@theme/Admonition";
import WebBookmark from "@site/src/components/Markdown/WebBookmark";
import Highlight from "@site/src/components/Markdown/Highlight";
import isInternalUrl from "@docusaurus/isInternalUrl";
import Translate from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

type SoftwareDescription = {
  [index: string]: string;
  ja: string;
  en: string;
};

type SoftwareInfo = {
  name: string;
  version: string;
  url: string;
  description: SoftwareDescription;
};

type BlogInfo = {
  name: string;
  date: Date;
  title: string;
};

function BlogItem({ name, date, title }: BlogInfo) {
  const dateStr = name.slice(0, 11).replaceAll("-", "/");
  const url = "/blog/" + dateStr + name.slice(11);
  return (
    <li>
      {date.toLocaleDateString()} : <Link to={url}> {title}</Link>
    </li>
  );
}

type RecentItemTitle = {
  [index: string]: string;
  ja: string;
  en: string;
};

type RecentListProps = {
  name: string;
  date: Date;
  title: RecentItemTitle;
};

function BlogResentList() {
  const { i18n } = useDocusaurusContext();
  return RecentList.map((props: RecentListProps) => {
    return {
      name: props.name,
      title: props.title[i18n.currentLocale] ?? props.title[i18n.defaultLocale],
      date: props.date,
    };
  });
}

function Blog() {
  return (
    <div className="col col--6 margin-bottom--lg">
      <h2 className={styles.head}>Blog</h2>
      <ul>
        {BlogResentList().map((props: BlogInfo, idx: number) => (
          <BlogItem key={idx} {...props} />
        ))}
      </ul>
    </div>
  );
}

function Announce() {
  return (
    <div className="col col--6 margin-bottom--lg">
      <h2 className={styles.head}>
        <Translate>お知らせ</Translate>
      </h2>
      <p>{/* <Translate>このサイトはまだ未完成です。</Translate> */}</p>
      <Admonition type="caution">
        <Translate>
          このサイトはまだ未完成です。なので、ダミーデータが入力されています。
        </Translate>
      </Admonition>
    </div>
  );
}

function SoftwareItem({ name, version, url, description }: SoftwareInfo) {
  const { i18n } = useDocusaurusContext();
  const newUrl = isInternalUrl(url) ? "/docs/software" + url : url;
  const image = `img/${name}.ico`;
  return (
    <article className="col col--6">
      <WebBookmark
        name={name}
        url={newUrl}
        description={
          description[i18n.currentLocale] ?? description[i18n.defaultLocale]
        }
        image={image}
      />
    </article>
  );
}

function CartoonItem({ name, version, url, description }: SoftwareInfo) {
  const { i18n } = useDocusaurusContext();
  const newUrl = isInternalUrl(url) ? "/docs/software" + url : url;
  // const image = `img/${name}.ico`;
  const image = `img/${name}.svg`;
  return (
    <article className="col col--6">
      <WebBookmark
        name={name}
        url={newUrl}
        description={
          description[i18n.currentLocale] ?? description[i18n.defaultLocale]
        }
        image={image}
      />
    </article>
  );
}

function Cartoon() {
  return (
    <div className="col margin-bottom--lg">
      <h2 className={styles.head}>
        <Translate>カートゥーン</Translate>
      </h2>
      <div className="row">
        {CartoonList.map((props: SoftwareInfo, idx: number) => (
          <CartoonItem key={idx} {...props} />
        ))}
      </div>
    </div>
  );
}

function Support() {
  return (
    <div className={clsx("col col--6 margin-bottom--lg")}>
      <h2 className={styles.head}>
        <Translate>サポート</Translate>
      </h2>
      <p>
        <Translate
          id="homepage.support"
          values={{
            // highlight: <Highlight>ishikawa-masashi[at]gmail[dot]com</Highlight>,
            highlight: <Highlight>ishikawa-masashi@outlook.jp</Highlight>,
          }}
        >
          {"{highlight}までご連絡ください。"}
        </Translate>
      </p>
    </div>
  );
}

function Donation() {
  return (
    <div className={clsx("col col--6 margin-bottom--lg")}>
      <h2 className={styles.head}>
        <Translate>寄付</Translate>
      </h2>
      <p>
        <Translate>
          新規開発やサポート継続などのため、ご協力をお願い致します。
        </Translate>
      </p>
      <p>
        <Translate
          id="homepage.donation"
          values={{
            highlight: (
              <Highlight>ishikawa-masashi[at]outlook[dot].jp</Highlight>
            ),
          }}
        >
          {"Amazon ギフト券の場合、{highlight}にお願いします。"}
        </Translate>
      </p>
    </div>
  );
}

export default function Homepage(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <img src="img/タイトルロゴ.png" />
        <div className="row">
          <Cartoon />
          <Blog />
          <Announce />
          <Support />
          {/* <Donation /> */}
        </div>
      </div>
    </section>
  );
}