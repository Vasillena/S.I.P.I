<div align="center">
<h1 align="center">S.I.P.I.</h1>
  🍸🎧🍸
  <br/>
 Your Ultimate Bar Experience

## ⭐️  Introduction

Welcome to S.I.P.I. – a destination for bar enthusiasts! S.I.P.I. is your go-to place for exploring, discovering unique drinks, and immersing yourself in the vibrant world of socializing. Whether you're a cocktail connoisseur or a casual drinker, S.I.P.I. is here to elevate your bar-hopping experience. Join us on this exciting journey as we celebrate the art of mixology and the joy of good company. Cheers to S.I.P.I. – where the drinks are real, and the fun is limitless!
This project is built with Next.js

View project at: https://sipi.bg/


## 📜 Table of Contents
[Getting started](#getting-started) •
[Features](#features) •
[Structure and Architecture](#structure-and-architecture) •
[Screenshots](#screenshots)

## 💡 Getting Started
Clone the repository:
```
git clone https://github.com/Vasillena/S.I.P.I.
```
Run the following command to install all required packages and dependencies:
```
npm install
```
Run the following command to start the app in development mode:
```
npm run dev
```
Open http://localhost:3000 in your browser to view the application.

## 🧸 Features

**Key Features**

S.I.P.I. is a real place in Plovdiv and this is soon-to-be it's official website. All visitors can explore the bar, the menu and the contact information

## 🏛️ Structure and Architecture
</div>

- [.env](.env)
- [.eslintrc.json](.eslintrc.json)
- [.gitignore](.gitignore)
- [app](app)
  - [components](app/components)
    - [AboutUs](app/components/AboutUs)
      - [AboutUs.js](app/components/AboutUs/AboutUs.js)
      - [AboutUs.module.css](app/components/AboutUs/AboutUs.module.css)
    - [BackToTop](app/components/BackToTop)
      - [BackToTop.js](app/components/BackToTop/BackToTop.js)
      - [BackToTop.module.css](app/components/BackToTop/BackToTop.module.css)
    - [Contact](app/components/Contact)
      - [Contact.js](app/components/Contact/Contact.js)
      - [Contact.module.css](app/components/Contact/Contact.module.css)
    - [FixedImage](app/components/FixedImage)
      - [FixedImage.js](app/components/FixedImage/FixedImage.js)
      - [FixedImage.module.css](app/components/FixedImage/FixedImage.module.css)
    - [FixedImageText](app/components/FixedImageText)
      - [FixedImageText.js](app/components/FixedImageText/FixedImageText.js)
      - [FixedImageText.module.css](app/components/FixedImageText/FixedImageText.module.css)
    - [Footer](app/components/Footer)
      - [Footer.js](app/components/Footer/Footer.js)
      - [Footer.module.css](app/components/Footer/Footer.module.css)
    - [GoogleMaps](app/components/GoogleMaps)
      - [GoogleMaps.js](app/components/GoogleMaps/GoogleMaps.js)
      - [GoogleMaps.module.css](app/components/GoogleMaps/GoogleMaps.module.css)
    - [LanguageChanger](app/components/LanguageChanger)
      - [LanguageChanger.js](app/components/LanguageChanger/LanguageChanger.js)
      - [LanguageChanger.module.css](app/components/LanguageChanger/LanguageChanger.module.css)
    - [Menu](app/components/Menu)
      - [Menu.js](app/components/Menu/Menu.js)
      - [Menu.module.css](app/components/Menu/Menu.module.css)
    - [Merch](app/components/Merch)
      - [Merch.js](app/components/Merch/Merch.js)
      - [Merch.module.css](app/components/Merch/Merch.module.css)
    - [Navigation](app/components/Navigation)
      - [Navigation.js](app/components/Navigation/Navigation.js)
      - [Navigation.module.css](app/components/Navigation/Navigation.module.css)
    - [Party](app/components/Party)
      - [Party.js](app/components/Party/Party.js)
      - [Party.module.css](app/components/Party/Party.module.css)
    - [Slideshow](app/components/Slideshow)
      - [Slideshow.js](app/components/Slideshow/Slideshow.js)
      - [Slideshow.module.css](app/components/Slideshow/Slideshow.module.css)
    - [Slideshow2](app/components/Slideshow2)
      - [Slideshow2.js](app/components/Slideshow2/Slideshow2.js)
      - [Slideshow2.module.css](app/components/Slideshow2/Slideshow2.module.css)
    - [Socials](app/components/Socials)
      - [Socials.js](app/components/Socials/Socials.js)
      - [Socials.module.css](app/components/Socials/Socials.module.css)
    - [TranslationsProvider.js](app/components/TranslationsProvider.js)
    - [WhoAreWe](app/components/WhoAreWe)
      - [WhoAreWe.js](app/components/WhoAreWe/WhoAreWe.js)
      - [WhoAreWe.module.css](app/components/WhoAreWe/WhoAreWe.module.css)
  - [favicon.ico](app/favicon.ico)
  - [i18n.js](app/i18n.js)
  - [menuList](app/menuList)
    - [menuList.json](app/menuList/menuList.json)
    - [menuListBG.json](app/menuList/menuListBG.json)
  - [locale](app/locale)
    - [about-us](app/locale/about-us)
      - [page.js](app/locale/about-us/page.js)
    - [error.js](app/locale/error.js)
    - [globals.css](app/locale/globals.css)
    - [layout.js](app/locale/layout.js)
    - [loading.js](app/locale/loading.js)
    - [make-a-party](app/locale/make-a-party)
      - [page.js](app/locale/make-a-party/page.js)
    - [menu](app/locale/menu)
      - [page.js](app/locale/menu/page.js)
    - [merch](app/locale/merch)
      - [page.js](app/locale/merch/page.js)
    - [not-found.js](app/locale/not-found.js)
    - [page.js](app/locale/page.js)
    - [page.module.css](app/locale/page.module.css)
    - [reserve](app/locale/reserve)
      - [page.js](app/locale/reserve/page.js)
    - [...rest](app/locale/[...rest])
      - [page.js](app/locale/[...rest]/page.js)
- [i18nConfig.js](i18nConfig.js)
- [jsconfig.json](jsconfig.json)
- [LICENSE](LICENSE)
- [locales](locales)
  - [bg](locales/bg)
    - [about-us.json](locales/bg/about-us.json)
    - [home.json](locales/bg/home.json)
    - [make-a-party.json](locales/bg/make-a-party.json)
    - [menu.json](locales/bg/menu.json)
    - [reserve.json](locales/bg/reserve.json)
  - [en](locales/en)
    - [about-us.json](locales/en/about-us.json)
    - [home.json](locales/en/home.json)
    - [make-a-party.json](locales/en/make-a-party.json)
    - [menu.json](locales/en/menu.json)
    - [reserve.json](locales/en/reserve.json)
- [middleware.js](middleware.js)
- [next.config.js](next.config.js)
- [package-lock.json](package-lock.json)
- [package.json](package.json)
- [public](public)
  - (...)
- [README.md](README.md)


<div align="center">
  
## 📷 Screenshots

-----Mobile Version-----
![Screenshot 01](https://github.com/Vasillena/S.I.P.I./assets/114015792/1c22eb59-e126-4cb3-9898-483bc113318e)
![Screenshot 02](https://github.com/Vasillena/S.I.P.I./assets/114015792/f34c1506-4cea-4e20-92a1-a502cf359817)
![Screenshot 03](https://github.com/Vasillena/S.I.P.I./assets/114015792/874c6717-cab0-40d4-8ae9-5e2dd6a09d38)
![Screenshot 04](https://github.com/Vasillena/S.I.P.I./assets/114015792/0abae396-e865-4d6c-9cc9-3ac38b08df5f)
![Screenshot 05](https://github.com/Vasillena/S.I.P.I./assets/114015792/f40eef93-150c-405d-8579-7c5cb8f8ee90)

------------------------
![Screenshot 1](https://github.com/Vasillena/S.I.P.I./assets/114015792/54054280-a757-40c9-8742-be8903ae27d8)
![Screenshot 2](https://github.com/Vasillena/S.I.P.I./assets/114015792/4ac4795d-1dc2-4621-a382-2cf63a839332)
![Screenshot 3](https://github.com/Vasillena/S.I.P.I./assets/114015792/1a4c97dd-29b0-4941-b2d3-0207c170618c)
![Screenshot 4](https://github.com/Vasillena/S.I.P.I./assets/114015792/f0442d4e-aa5a-4327-8ea6-cd6f7872f236)
![Screenshot 5](https://github.com/Vasillena/S.I.P.I./assets/114015792/3210505a-ae08-4b73-82e7-bbc7281c2b49)
![Screenshot 6](https://github.com/Vasillena/S.I.P.I./assets/114015792/0aaeba2e-be56-4315-b98d-217374d5312d)
![Screenshot 7](https://github.com/Vasillena/S.I.P.I./assets/114015792/ac7e6c52-c0bf-43b6-80b1-92ed1aaaf141)
![Screenshot 8](https://github.com/Vasillena/S.I.P.I./assets/114015792/4b9e747b-3ddd-4729-8f7e-36d9f6dd2878)
![Screenshot 9](https://github.com/Vasillena/S.I.P.I./assets/114015792/9f13ff75-b74c-4b82-82e1-764ddb327165)

</div>
