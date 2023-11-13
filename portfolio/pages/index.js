import style from "../styles/Home.module.css";
//import "../styles/globals.css";

export default function Home() {
  return (
    <div className={style.wrapper}>
      <div className={style.contacts}>
        <div className={style.imgfoto}></div>
        <div className={style.info}>
          <h1>Ivan Grinko</h1>
          <p>Belarus</p>
          <p>phone: +37529 1097745</p>
          <p>E-mail: grinko.work.1982@mail.ru</p>
        </div>
      </div>
    </div>
  );
}
