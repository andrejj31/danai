import React from "react";

export default function Application({ app }) {
  const { name, address, number, mail, CV } = app;
  return (
    <article className="application">
      <ul className="application__about">
        <div className="career__subtitle">Информации за апликантот</div>
        <li>Име и презиме: {name}</li>
        <li>Адреса на живеење: {address}</li>
        <li>Е-пошта: {mail}</li>
        <li>Телефон за контакт: {number}</li>
      </ul>
      <a href={CV} rel="noreferrer" target="_blank" className="cta-classic">
        Погледни CV &gt;
      </a>
    </article>
  );
}
