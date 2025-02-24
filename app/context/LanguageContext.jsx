// app/context/LanguageContext.jsx
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
        description: `Do you fancy motorsport and tinkering? <br /> Do you have team spirit and want to get to know your fellow students? <br /> Want to think outside the box and acquire new skills? <br /> <br /> Simply apply here!`,
        apply_button: "GO TO THE APPLICATION",
      },
    },
  },
  bg: {
    navbar: {
      home: "Начало",
      about: "About",
      f_student: "Formula Student",
      gallery: "Gallery",
      contact: "Contact",
      sponsors: "Sponsors",
      apply: "Apply Now",
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
