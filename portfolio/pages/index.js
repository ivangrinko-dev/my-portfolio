import style from "../styles/Home.module.css";

export default function Home() {
  const array = [
    {
      Должность: "Ученик",
      Компания: "JavaScriptCompany",
      период: "2015 - 2018",
      Обязанности: "Верстальщик",
    },
    {
      Должность: "Менеджер",
      Компания: "GoodCompany",
      период: "2018 - 2019",
      Обязанности: "Архитектор баз данных",
    },
    {
      Должность: "Старший менеджер",
      Компания: "HSCompany",
      период: "2019 - 2020",
      Обязанности: "Маркетинг",
    },
    {
      Должность: "Преподаватель",
      Компания: "HSCompany+",
      период: "2020 - 2023",
      Обязанности: "Обучение персонала",
    },
  ];

  const result = array.map((elem) => (
    <div className={style.wrapper2}>
      <h2 className={style.work_name}>{elem.Должность}</h2>
      <p className={style.company}>{elem.Компания}</p>
      <p className={style.time}>{elem.период}</p>
      <p className={style.time}>{elem.Обязанности}</p>
    </div>
  ));

  return (
    <div className={style.wrapper}>
      <div className={style.contacts}>
        <div className={style.imgfoto}></div>
        <div className={style.info}>
          <h1>Иван Гринько</h1>
          <p>Беларусь</p>
          <p>телефон: +37529 1097745</p>
          <p>эл. почтаА: grinko.work.1982@mail.ru</p>
        </div>
      </div>

      <h1 className={style.work}>Опыт работы</h1>

      <div className={style.list}>{result}</div>

      <h1 className={style.work}>НАВЫКИ</h1>

      <div className={style.skills}>
        <div className={style.container}>
          <p>Вайрфрейминг</p>
          <p>Прототипирование</p>
          <p>Дизайн мобильных приложений</p>
          <p>Адаптивный веб-дизайн</p>
        </div>
        <div className={style.container}>
          <p>Автоматический макет</p>
          <p>Умная анимация</p>
          <p>Дизайн презентации</p>
          <p>Работа с дизайн-системами.</p>
        </div>

      </div>
        <div className={style.box}>
          <div className={style.block_1}>
            <div className={style.imgfoto}></div>
            <div>
              
            </div>
          </div>

          <div className={style.block_2}>
            <div className={style.imgfoto_1}></div>
            <div></div>
          </div>
        </div>
    </div>
  );
}
