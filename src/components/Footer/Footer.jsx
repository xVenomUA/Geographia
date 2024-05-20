import clsx from "clsx";
import css from "./Footer.module.css";

export const Foooter = () => {
  return (
    <footer className={css.footer}>
      <div className={clsx("container", css.container)}>
        <p className="footer__text">© 2024. All rights reserved</p>
        <address className={css.address}>
          <a href="mailto:gpkrsogjgmrdkgkdr@gmail.com" className={css.link}>
            gpkrsogjgmrdkgkdr@gmail.com
          </a>
          <a href="tel:+380204924032945" className={css.link}>
            +380204924032945
          </a>
          <a
            href="https://www.google.com/maps/place/Ukraine/@49.2563299,29.0868229,6.94z/data=!4m6!3m5!1s0x40d1d9c154700e8f:0x1068488f64010!8m2!3d48.379433!4d31.1655799!16zL20vMDd0MjE?entry=ttu"
            target="_blank"
            className={css.link}
          >
            Ukraine{" "}
          </a>
        </address>
      </div>
    </footer>
  );
};
