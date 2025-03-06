"use client";

import React, { createContext, useState, useContext, useEffect } from "react";

const LanguageContext = createContext();

const translations = {
  en: {
    navbar: {
      home: "Home",
      about: "About",
      f_student: "Formula Student",
      gallery: "Gallery",
      contact: "Contact",
      sponsors: "Sponsors",
      apply: "Apply Now",
    },

    forms: {
      apply: {
        title: "Formula Student Application",
        th: "  Thank you for your interest in applying to join our Formula Student team! Please fill out the application form below.",
        name: "Name",
        f_name: "First Name",
        l_name: "Last Name",
        email: "E-mail",
        uni: "University",
        uni_name: "University Name",
        c_s: "Course of Study",
        c_s_n: "e.g., Mechanical Engineering",
        y_s: "Year of Study",
        rs: "Relevant Skills and Experience",
        rs_d: "Describe your skills, relevant coursework, or any hands-on experience related to Formula Student.",
        rs_t: "Personal Skill",
        why: "Why do you want to join the Formula Student team?",
        why_p: "Explain why you are passionate about Formula Student and what you hope to contribute to the team.",
        why_t: "Motivations",
        git: "Portfolio or GitHub Link (Optional)",
        git_p: "e.g., https://github.com/yourusername",
        git_t: "Portfolio Link",
        apply: "Apply"
      },
      contact: {
        title: "Contact Us",
        feed: "Feedback Form",
        desc: "  We would love to hear your thoughts, suggestions, concerns, or problems with anything so we can improve!",
        ft: "Feedback Type",
        ftt: "Feedback Options",
        comments: "Comments",
        sugg: "Suggestions",
        q: "Questions",
        dyf: "Describe Your Feedback:",
        dyf_p: "Your opinion, suggestions and questions...",
        dyf_t: "Description",
        name: "Name",
        f_name: "First Name",
        l_name: "Last Name",
        email: "E-mail",
        sf: "Submit Feedback"
      },
    },

    home: {
      Eng: "Explore Our Engineering!",
      work_btn: "See Our Work",
      welcome_section: {
        title: "WELCOME TO TUS RACING TEAM",
        subtitle: "Formula Student in Sofia",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem ut commodi delectus aspernatur, doloribus quam veritatis repellendus.",
        more_about: "More about formula student",
      },
      team_section: {
        title: "We are searching for new talent in the following areas:",
        Mechanical: ["Suspension", "Aerodynamics", "Chassis", "Ergonomics"],
        Electrical: ["LV-System", "HV-System", "Accumulator", "Drivetrain"],
        Media: ["IT", "Programming", "TV", "Journalist"],
        Business: ["Marketing", "Accounting", "Sponsoring", "Test"],
      },
      application_section: {
        title: "Apply now!",
        description: `Do you fancy motorsport and tinkering?<br/>Do you have team spirit and want to get to know your fellow students? <br /> Want to think outside the box and acquire new skills? <br /> <br /> Simply apply here!`,
        apply_button: "GO TO THE APPLICATION",
      },
    },

    about: {
      title: "Here you can find out everything about us: our cars, our sub-teams and our milestones. Just click through!",
      options: {
        option1: {
          title: "Our Race Cars",
          desc: "Our race cars are the result of cutting-edge engineering and meticulous design. Each car is built to perform at the highest level, combining speed, agility, and precision on the track."
        },
        option2: {
          title: "Our Team",
          desc: "Our team is made up of passionate individuals dedicated to excellence in engineering and motorsport. Together, we combine diverse skills to build high-performance racecars and push the boundaries of innovation."
        },
        option3: {
          title: "Our History",
          desc: "Our team began with a shared passion for motorsport and innovation. Over the years, we’ve grown into a respected force in Formula Student, continuously advancing our engineering capabilities."
        },
        option4: {
          title: "Your Application",
          desc: "Apply now to join our Formula Student team and showcase your engineering skills. Be part of a dynamic project that combines innovation, teamwork, and racing."
        },
      }
    },
    our_team: {
      title: "Meet Our Team",
      desc: "We are a passionate group of students dedicated to pushing the limits of engineering and innovation in Formula Student.",
      text1: `TUS Racing Team is a team that, since 2015, has
          brought together a group of students and engineers working on the
          development and construction of race cars. We are young and ambitious
          individuals united by our passion for motorsports and engineering
          design.`,
      text2: `As part of the Formula Student initiative, we design, construct, and
          compete with specially built race cars. Our work involves various
          aspects of automotive engineering, including race car design,
          mechanics, electronics, programming, and team management.
        `,
      text3: `Our goal is to create an innovative and competitive car that can
          compete in international Formula Student competitions. The project not
          only allows us to apply and develop our academic knowledge but also to
          face the challenges of real motorsport. Beyond Formula Student
          competitions, we also participate in and support various automotive
          and charity events.
        `,
      text4: `As a team, we work together, exchange ideas and knowledge, learn from
          our mistakes, and grow in the process of creating our car. We strive
          for excellence, push the boundaries of what’s possible, and promote
          innovation in automotive engineering.
        `,
      text5: `  We are committed to sharing our passion and love for cars and
          engineering design while expanding our knowledge and experience in the
          thrilling world of motorsport.
        `,
      text6: `  We believe that together we can create something unique and inspiring.`,


    }
  },
  bg: {
    navbar: {
      home: "Начало",
      about: "За нас",
      f_student: "Формула Студент",
      gallery: "Галерия",
      contact: "Контакт",
      sponsors: "Спонсори",
      apply: "Заявление",
    },

    forms: {
      apply: {
        title: "Кандидатстване за Formula Student",
        th: "Благодарим ви за интереса към нашия отбор Formula Student! Моля, попълнете формуляра за кандидатстване по-долу.",
        name: "Име",
        f_name: "Собствено име",
        l_name: "Фамилно име",
        email: "E-mail",
        uni: "Университет",
        uni_name: "Име на университета",
        c_s: "Специалност",
        c_s_n: "например, Машиностроене",
        y_s: "Година на обучение",
        rs: "Релевантни умения и опит",
        rs_d: "Опишете вашите умения, съответните курсове или практическия си опит, свързан с Formula Student.",
        rs_t: "Лични умения",
        why: "Защо искате да се присъедините към отбора на Formula Student?",
        why_p: "Обяснете защо сте страстни към Formula Student и какво се надявате да допринесете за отбора.",
        why_t: "Мотивация",
        git: "Портфолио или GitHub линк (по избор)",
        git_p: "например, https://github.com/yourusername",
        git_t: "Линк към портфолио",
        apply: "Кандидатствай"
      },
      contact: {
        title: "Свържете се с нас",
        feed: "Формуляр за обратна връзка",
        desc: "Ще се радваме да чуем вашите мнения, предложения, притеснения или проблеми, за да можем да се подобрим!",
        ft: "Тип обратна връзка",
        ftt: "Опции за обратна връзка",
        comments: "Коментари",
        sugg: "Предложения",
        q: "Въпроси",
        dyf: "Опишете вашата обратна връзка:",
        dyf_p: "Вашето мнение, предложения и въпроси...",
        dyf_t: "Описание",
        name: "Име",
        f_name: "Собствено име",
        l_name: "Фамилно име",
        email: "E-mail",
        sf: "Изпрати обратна връзка"
      }
    },


    home: {
      Eng: "Разгледайте нашето инженерство!",
      work_btn: "Вижте нашата работа",
      welcome_section: {
        title: "ДОБРЕ ДОШЛИ В TUS RACING TEAM",
        subtitle: "Formula Student в София",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem ut commodi delectus aspernatur, doloribus quam veritatis repellendus.",
        more_about: "Повече за Formula Student",
      },
      team_section: {
        title: "Търсим нови таланти в следните области:",
        Mechanical: ["Окачване", "Аеродинамика", "Шаси", "Ергономика"],
        Electrical: [
          "Нисковолтова система",
          "Високоволтова система",
          "Акумулатор",
          "Задвижване",
        ],
        Media: ["ИТ", "Програмиране", "Телевизия", "Журналистика"],
        Business: ["Маркетинг", "Счетоводство", "Спонсорство", "Тестове"],
      },
      application_section: {
        title: "Кандидатствайте сега!",
        description:
          "Харесвате моторните спортове и обичате да майсторите? <br /> Имате екипен дух и искате да опознаете своите колеги? <br /> Искате да мислите извън рамките и да придобиете нови умения? <br /> <br /> Просто кандидатствайте тук!",
        apply_button: "ОТИДЕТЕ КЪМ КАНДИДАТУРАТА",
      },
    },
    about: {
      title: "Тук можете да научите всичко за нас: нашите коли, нашите под-отбори и нашите постижения. Просто разгледайте!",
      options: {
        option1: {
          title: "Нашите коли",
          desc: "Нашите състезателни коли са резултат от авангардно инженерство и прецизен дизайн. Всяка кола е създадена за върхова производителност, комбинирайки скорост, пъргавина и прецизност на пистата."
        },
        option2: {
          title: "Нашият екип",
          desc: "Нашият екип се състои от страстни личности, посветени на инженерното съвършенство и моторния спорт. Заедно съчетаваме разнообразни умения, за да създаваме високопроизводителни състезателни автомобили и да разширяваме границите на иновациите."
        },
        option3: {
          title: "Нашата история",
          desc: "Нашият отбор започна със споделена страст към моторния спорт и иновациите. През годините се превърнахме в уважавана сила във Formula Student, като непрекъснато усъвършенстваме инженерните си възможности."
        },
        option4: {
          title: "Вашата кандидатура",
          desc: "Кандидатствайте сега, за да се присъедините към нашия отбор във Formula Student и да покажете инженерните си умения. Бъдете част от динамичен проект, който съчетава иновации, работа в екип и състезания."
        },
      }
    },
    our_team: {
      title: "Запознайте се с нашия екип",
      desc: "Ние сме група от страстни студенти, посветени на разширяването на границите на инженерството и иновациите във Formula Student.",
      text1: `TUS Racing Team е отбор, който от 2015 г. обединява студенти и инженери, работещи върху разработката и изграждането на състезателни автомобили. Ние сме млади и амбициозни личности, обединени от нашата страст към моторния спорт и инженерния дизайн.`,
      text2: `Като част от инициативата Formula Student, ние проектираме, конструираме и се състезаваме със специално създадени състезателни автомобили. Нашата работа обхваща различни аспекти на автомобилното инженерство, включително проектиране на състезателни автомобили, механика, електроника, програмиране и управление на екипа.`,
      text3: `Нашата цел е да създадем иновативен и конкурентоспособен автомобил, който да се състезава на международни Formula Student състезания. Проектът не само ни позволява да прилагаме и развиваме академичните си знания, но и да се изправяме пред предизвикателствата на реалния моторен спорт. Освен състезанията на Formula Student, ние също така участваме и подкрепяме различни автомобилни и благотворителни събития.`,
      text4: `Като екип работим заедно, обменяме идеи и знания, учим се от грешките си и растем в процеса на създаване на нашия автомобил. Стремим се към съвършенство, разширяваме границите на възможното и насърчаваме иновациите в автомобилното инженерство.`,
      text5: `Ние сме ангажирани да споделяме своята страст и любов към автомобилите и инженерния дизайн, като същевременно разширяваме своите знания и опит в завладяващия свят на моторния спорт.`,
      text6: `Вярваме, че заедно можем да създадем нещо уникално и вдъхновяващо.`
    }

  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  // Load language from localStorage on mount
  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    if (storedLang && ["en", "bg"].includes(storedLang)) {
      setLanguage(storedLang);
    } else {
      // Set default language if none exists
      localStorage.setItem("lang", "en");
      setLanguage("en");
    }
  }, []);

  // Save language to localStorage when changed
  const changeLanguage = () => {
    const newLang = language === "en" ? "bg" : "en";
    setLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <LanguageContext.Provider
      value={{ language, changeLanguage, t: translations[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
