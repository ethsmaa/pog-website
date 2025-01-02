export const ABOUT_US_DATA = {
  title: "Hakkımızda",
  mainParagraph:
    "Proje ve Oyun Geliştirme Topluluğu, teknoloji ve yaratıcılığı bir araya getiren dinamik bir topluluktur. Amacımız, oyun geliştirme ve proje yönetimi alanlarında kendini geliştirmek isteyen bireyleri bir araya getirerek bilgi paylaşımını teşvik etmek, ortak projeler oluşturmak ve inovasyonu desteklemektir. ",
  secondaryParagraph:
    "Üyelerimiz, yazılım geliştirme, oyun tasarımı, grafik sanatları ve proje yönetimi gibi geniş bir yelpazede deneyime sahip olup, her seviyeden katılımcıya açıktır. Topluluğumuzda düzenli olarak atölyeler, seminerler ve etkinlikler düzenleyerek üyelerimizin profesyonel becerilerini artırmalarına ve ilham verici projeler üretmelerine olanak sağlıyoruz. Sizinle birlikte, oyun ve proje geliştirme dünyasında yeni ufuklar keşfetmeyi dört gözle bekliyoruz.",
  pogLogo: "/images/about-pog.png",
  cardContent: "Biz kimiz?",
};

{
  /* burayi airtable'dan ya da notiondan cekicez ilerleyen kisimlarda ben mock data olusturdum */
}
export const EVENTS_DATA = {
  title: "Etkinliklerimiz",
  cardContent: "Neler oluyor?",
  eventsArray: [
    {
      eventID: 1,
      title: "Event 1",
      date: "01.01.2022",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      eventID: 2,
      title: "Event 2",
      date: "02.02.2022",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      eventID: 3,
      title: "Event 3",
      date: "03.03.2022",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      eventID: 4,
      title: "Event 4",
      date: "04.04.2022",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ],
};

export const MEMBERS_DATA = {
  title: "Üyelerimiz",
  cardContent: "Takımla Tanışın",
  membersArray: [
    {
      memberID: 1,
      name: "Okan Devrim Karabulut",
      role: "Başkan",
      content: "Organizasyonun genel yönetimini ve stratejik kararlarını üstlenmektedir.",
      image: "/images/unknown-member.svg",
      linkedinUrl: "https://www.linkedin.com/in/o-devrim-karabulut/",
    },
    {
      memberID: 2,
      name: "Zafer Berk Karayol",
      role: "Başkan Yardımcısı",
      content: "Başqan'a destek olarak organizasyonun işleyişine katkı sağlar.",
      image: "/images/unknown-member.svg",
      linkedinUrl: "https://www.linkedin.com/in/zafer-berk-karayol/",
    },
    {
      memberID: 3,
      name: "Safa Gök",
      role: "Koordinasyon Lideri",
      content: "Etkinliklerin düzenlenmesi ve ekiplerin koordinasyonu konusunda liderlik yapmaktadır.",
      image: "/images/unknown-member.svg",
      linkedinUrl: "https://www.linkedin.com/in/safa-gök-5590431b2/",
    },
    {
      memberID: 4,
      name: "Emir Firdevs",
      role: "Prodüksiyon Ekibi Lideri",
      content: "Prodüksiyon süreçlerinin planlanması ve yürütülmesinden sorumludur.",
      image: "/images/unknown-member.svg",
      linkedinUrl: "https://www.linkedin.com/in/emir-firdevs-650340238/",
    },
    {
      memberID: 9,
      name: "Agahcan Su",
      role: "Prodüksiyon Ekibi Üyesi",
      content: "Prodüksiyon ekibinin çeşitli projelerinde aktif rol alır.",
      image: "/images/unknown-member.svg",
      linkedinUrl: "https://www.linkedin.com/in/agahcansu/",
    },
    {
      memberID: 5,
      name: "Elif Başer",
      role: "Prodüksiyon Ekibi Üyesi",
      content: "Tasarım süreçlerinde ekip çalışmalarına katkıda bulunur.",
      image: "/images/unknown-member.svg",
      linkedinUrl: "https://www.linkedin.com/in/elif-başer-5576bb246/",
    },
    {
      memberID: 6,
      name: "Esma Oruç",
      role: "Prodüksiyon Ekibi Üyesi",
      content: "Tasarım projelerinde yaratıcı çözümler sunar.",
      image: "/images/unknown-member.svg",
      linkedinUrl: "https://www.linkedin.com/in/esma-oruç-3a537525a/",
    },
    {
      memberID: 7,
      name: "Sude Delen",
      role: "Tasarım Ekibi Üyesi",
      content: "Grafik ve görsel tasarımlar üzerinde çalışmaktadır.",
      image: "/images/unknown-member.svg",
      linkedinUrl: "https://www.linkedin.com/in/sude-delen-3ab32324a/,"
    },
    {
      memberID: 8,
      name: "Ferhat Aybergüler",
      role: "Tasarım Ekibi Üyesi",
      content: "Tasarım ekibine destek sağlar ve projelere katkıda bulunur.",
      image: "/images/unknown-member.svg",
      linkedinUrl: "https://www.linkedin.com/in/ferhat-aybergüler/",
    },
  ],
};

export const SOCIAL_DATA = {
  socials: [
    {
      name: "Instagram",
      src: "/icons/logo-instagram.svg",
      href: "https://www.instagram.com/deupog/",
    },

    {
      name: "LinkedIn",
      src: "/icons/logo-linkedin.svg",
      href: "https://www.linkedin.com/company/deupog",
    },
    {
      name: "Youtube",
      src: "/icons/logo-youtube.svg",
      href: "https://www.youtube.com/@POGDEU",
    },
  ],
};

export const CONTACT_INFO_DATA = {
  follow_us: "Bizi takip edin",
  socials: SOCIAL_DATA.socials,
  contact_us: "Bize ulaşın",
  contact_address: [
    "iletisim.pog@gmail.com",
    "linktr.ee/deupog",
    "Dokuz Eyül Üniversitesi, İzmir, Türkiye",
  ],
};

export const TEAM_LINKS_DATA = {
  contributors: [
    {
      name: "esma",
      href: "https://github.com/ethsmaa",
    },
    {
      name: "elif",
      href: "https://github.com/elffba",
    },
  ],
};

export const NAVBAR_MENU_DATA = {
  menuItems: [
    {
      name: "Hakkımızda",
      href: "#about",
    },

    {
      name: "Etkinlikler",
      href: "#events",
    },
    {
      name: "Üyeler",
      href: "#members",
    },
  ],
};
