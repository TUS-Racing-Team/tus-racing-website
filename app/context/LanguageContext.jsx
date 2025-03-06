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
      sponsor: {
        be: "Be one of our sponsors",
        sf: "Sponsorship Form",
        th: "Thank you for your interest in sponsoring our event. Please fill out the form below to get started!", 
        des: "Sponsorship Description:",
        des_p: "Please describe your sponsorship plans...",
        des_t: "Description",
        company_name: "Company Name",
        company_p: "Your Company",
        company_t: "Company Name",
        contact: "Contact Person",
        contact_t: "Full Name",
        email: "E-mail",
        phone: "Phone Number",
        phone_t: "Phone number must be in the format: +359 888888888 or 0888888888",
        ss: "Submit Sponsorship",
      }
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


    },
    cars: {
      content: "Welcome to the race cars section of our Formula Student team! Here, you will find information about all our cars – from our earliest projects to our latest innovations, combining engineering precision and cutting-edge technology. We are currently working on updating our website to provide you with details, photos, and technical specifications of our cars. Soon, you will be able to explore each car in detail and follow the evolution of our team over the years. Stay tuned for more updates! 🚗💨"
    },

    formula_student: {
      "title": "Welcome to Formula Student",
      "description": "Formula Student is an international engineering design competition that inspires the engineers of tomorrow to push the limits of technology and innovation.",
      "sections": {
        "what_is": {
          "title": "What is Formula Student?",
          "content": {
            "paragraph1": "Formula Student is the world’s largest engineering competition, challenging students to design, build, test, and race their own single-seat formula-style car.",
            "paragraph2": "Teams from universities around the globe compete not only on the track but also in business and engineering design presentations.",
            "paragraph3": "The competition emphasizes engineering excellence, teamwork, and innovation, offering students a platform to apply their academic knowledge to real-world engineering challenges.",
            "paragraph4": "Each car is judged on its design, performance, cost analysis, and overall presentation."
          }
        },
        "history": {
          "title": "History of Formula Student",
          "content": {
            "paragraph1": "Formula Student was founded in 1981 by the Society of Automotive Engineers (SAE) in the United States as Formula SAE. Its mission was to create a learning experience where students could apply their engineering skills in a competitive and creative environment.",
            "paragraph2": "The competition expanded to Europe in 1998 with the launch of Formula Student UK, organized by the Institution of Mechanical Engineers (IMechE). Today, Formula Student competitions are held worldwide, with events in Germany, Italy, Japan, and Australia, to name a few.",
            "paragraph3": "Over the years, the competition has grown significantly, attracting thousands of participants annually. It has become a prestigious event where the best and brightest future engineers showcase their talents."
          }
        },
        "importance": {
          "title": "Why is Formula Student Important?",
          "content": {
            "paragraph1": "Formula Student is more than just a competition; it’s an opportunity for students to gain hands-on experience in engineering, project management, and teamwork. Participants learn to:",
            "key_points": [
              "Work collaboratively in multidisciplinary teams.",
              "Develop innovative solutions to technical challenges.",
              "Manage budgets and timelines effectively.",
              "Present their ideas professionally to judges and sponsors."
            ],
            "paragraph2": "Many alumni of Formula Student have gone on to work in leading automotive companies, motorsport teams, and other cutting-edge industries.",
            "paragraph3": "It’s a stepping stone to a successful career in engineering and beyond."
          }
        }
      }
    },
    sponsors: {
      no: "No sponsors"
    },
    history: {
      title: "Our History",
      content: `  In 2015, the first Bulgarian Formula Student team was created at the
        Technical University of Sofia. A year later, in 2016, the team completed
        the design and construction of Bolide 1, which successfully debuted at
        the competition in Italy, completing all rounds of the endurance event.
        With the accumulated experience and knowledge, the following year, the
        development of Bolide 2 began - a new model, optimized with almost 30%
        reduced mass. The successes continued, and in 2019 Bolide 2 performed
        outstandingly at a regional competition in Croatia, winning Third Place.
        The team's achievements to date show its dedication and innovation. The
        students who are part of the Formula Student team do not stop being
        inspired and working hard, eagerly awaiting the next performances.
      `
    },

    "footer": {
      "quick_links": {
        "title": "Quick links",
        "link1": "Home",
        "link2": "About us",
        "link3": "Formula student",
        "link4": "Gallery",
        "link5": "Contact us",
        "link6": "Sponsors",
        "link7": "Apply now"
      },
      "social_media": {
        "title": "Social medias",
        "email_tooltip": "formulastudentbg@gmail.com",
        "discord": "Discord",
        "facebook": "Facebook",
        "instagram": "Instagram"
      },
      "contact": {
        "map": "Google Map"
      },
      "privacy_policy": {
        "text": "© {year} TU Sofia Racing Team. All rights reserved."
      }
    },
    "work": {
      "title": "Our Work",
      "description": "We are currently working hard on our designs and engineering reports. Stay tuned for updates! Once we finalize our work, we will share our progress and insights here.",
      "subtext": "Follow us for more updates as we continue developing our Formula Student car."
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
      },
      "sponsor": {
        "be": "Станете един от нашите спонсори",
        "sf": "Форма за спонсорство",
        "th": "Благодарим ви за интереса към спонсорирането на нашето събитие. Моля, попълнете формуляра по-долу, за да започнем!",
        "des": "Описание на спонсорството:",
        "des_p": "Моля, опишете вашите планове за спонсорство...",
        "des_t": "Описание",
        "company_name": "Име на компанията",
        "company_p": "Вашата компания",
        "company_t": "Име на компанията",
        "contact": "Лице за контакт",
        "contact_t": "Пълно име",
        "email": "Електронна поща",
        "phone": "Телефонен номер",
        "phone_t": "Телефонният номер трябва да бъде във формат: +359 888888888 или 0888888888",
        "ss": "Изпратете заявка за спонсорство"
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
    },
    cars: {
      content: "Добре дошли в секцията за състезателните автомобили на нашия Formula Student отбор! Тук ще можете да откриете информация за всички наши болиди – от първите ни проекти до най-новите ни разработки, съчетаващи инженерна прецизност и високи технологии. В момента работим усилено върху обновяването на нашия уебсайт, за да ви предоставим подробности, снимки и технически спецификации на нашите автомобили. Скоро ще имате възможност да разгледате всяка кола в детайли и да проследите развитието на нашия екип през годините. Очаквайте скоро още информация! 🚗💨"
    },

    formula_student: {
      "title": "Добре дошли в Formula Student",
      "description": "Formula Student е международно състезание по инженерство, което вдъхновява инженерите на бъдещето да разширяват границите на технологиите и иновациите.",
      "sections": {
        "what_is": {
          "title": "Какво е Formula Student?",
          "content": {
            "paragraph1": "Formula Student е най-голямото инженерно състезание в света, което предизвиква студентите да проектират, изградят, тестват и състезават със собствен едноместен болид.",
            "paragraph2": "Отбори от университети по целия свят се съревновават не само на пистата, но и в бизнес и инженерни презентации.",
            "paragraph3": "Състезанието поставя акцент върху инженерното съвършенство, работата в екип и иновациите, като предоставя платформа за прилагане на академични знания в реални инженерни предизвикателства.",
            "paragraph4": "Всеки болид се оценява според неговия дизайн, производителност, анализ на разходите и цялостна презентация."
          }
        },
        "history": {
          "title": "История на Formula Student",
          "content": {
            "paragraph1": "Formula Student е основано през 1981 г. от Обществото на автомобилните инженери (SAE) в САЩ като Formula SAE. Неговата мисия е да създаде учебна среда, в която студентите да прилагат инженерните си умения в конкурентна и креативна среда.",
            "paragraph2": "Състезанието се разширява в Европа през 1998 г. с пускането на Formula Student UK, организирано от Института на машинните инженери (IMechE). Днес състезания по Formula Student се провеждат по целия свят, включително в Германия, Италия, Япония и Австралия.",
            "paragraph3": "През годините състезанието нараства значително, привличайки хиляди участници ежегодно. То се е превърнало в престижно събитие, където най-добрите бъдещи инженери демонстрират своите таланти."
          }
        },
        "importance": {
          "title": "Защо Formula Student е важен?",
          "content": {
            "paragraph1": "Formula Student е повече от просто състезание; това е възможност за студентите да придобият практически опит в инженерството, управлението на проекти и работата в екип. Участниците се научават да:",
            "key_points": [
              "Работят съвместно в мултидисциплинарни екипи.",
              "Разработват иновативни решения на технически предизвикателства.",
              "Управляват бюджети и срокове ефективно.",
              "Презентират своите идеи професионално пред съдии и спонсори."
            ],
            "paragraph2": "Много от бившите участници във Formula Student продължават кариерата си в водещи автомобилни компании, отбори от моторните спортове и други високотехнологични индустрии.",
            "paragraph3": "Това е важна стъпка към успешна кариера в инженерството и извън него."
          }
        }
      }
    },
    sponsors: {
      "no": "Няма спонсори"
    },
    "history": {
      "title": "Нашата история",
      "content": "През 2015 г. бе създаден първият български отбор Formula Student в Техническия университет в София. Година по-късно, през 2016 г., отборът завърши проектирането и изграждането на Bolide 1, който успешно дебютира на състезанието в Италия, завършвайки всички етапи на състезанието за издръжливост. С натрупания опит и знания, през следващата година започна разработката на Bolide 2 - нов модел, оптимизиран с почти 30% намалено тегло. Успехите продължиха, а през 2019 г. Bolide 2 представи изключително представяне на регионално състезание в Хърватия, спечелвайки трето място. Постиженията на отбора до момента показват неговата отдаденост и иновации. Студентите, които са част от екипа Formula Student, не спират да бъдат вдъхновени и да работят усилено, нетърпеливи да очакват следващите си изпълнения."
    },

    "footer": {
      "quick_links": {
        "title": "Бързи линкове",
        "link1": "Начало",
        "link2": "За нас",
        "link3": "Формула Студент",
        "link4": "Галерия",
        "link5": "Контакт",
        "link6": "Спонсори",
        "link7": "Подай кандидатура"
      },
      "social_media": {
        "title": "Социални медии",
        "email_tooltip": "formulastudentbg@gmail.com",
        "discord": "Discord",
        "facebook": "Facebook",
        "instagram": "Instagram"
      },
      "contact": {
        "map": "Google Map"
      },
      "privacy_policy": {
        "text": "© {year} TU Sofia Racing Team. Всички права запазени."
      }
    },
    "work": {
      "title": "Нашата работа",
      "description": "В момента работим усилено върху нашите дизайни и инженерни доклади. Останете на линия за новини! След като финализираме работата си, ще споделим напредъка и прозорците тук.",
      "subtext": "Следвайте ни за още актуализации, докато продължаваме да развиваме нашия автомобил за Формула Студент."
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
