import React from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Start from "@site/src/components/Start";

export default function Hero(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <article className={clsx("hero", styles.heroBanner)}>
      <div className={`${styles.container}`}>
        <h1 className={`hero__title ${styles.title} ${styles.item}`}>
          {siteConfig.tagline}
        </h1>
        <p className={`${styles.item}`}>
          Juno is an open-source, blockchainless platform that offers developers
          all the necessary features to build any Web3 application. Start
          building your decentralized app with the same ease as Web2.
        </p>
        <p className={`${styles.item}`}></p>
        <div className={`${styles.item} ${styles.actions}`}>
          <Start />

          <Link className="button button--juno" to="/docs/intro">
            Documentation
          </Link>
        </div>
      </div>
    </article>
  );
}
