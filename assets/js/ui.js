'use strict';

var THEME_KEY = 'fssm-theme';
var LANG_KEY = 'fssm-lang';
var LANGS = ['fr', 'en', 'ar'];

function mergeClubI18n(base) {
  var extra = window.CLUB_I18N;
  if (!extra) return base;
  LANGS.forEach(function (lang) {
    if (extra[lang]) {
      Object.keys(extra[lang]).forEach(function (key) {
        base[lang][key] = extra[lang][key];
      });
    }
  });
  return base;
}

var I18N = mergeClubI18n({
  fr: {
    'title.home': 'Clubs FSSM - Découvrir les clubs',
    'nav.home': 'Accueil',
    'nav.clubs': 'Clubs',
    'home.title': 'Découvrir les clubs FSSM',
    'home.desc': 'Découvrez les différents clubs de la FSSM pour enrichir votre vie étudiante',
    'seeMore': 'Voir plus',
    'register': "S'inscrire à ce club",
    'comingSoon': 'Les réseaux sociaux seront bientôt disponibles.',
    'footer.rights': 'Tous droits réservés.',
    'followInstagram': 'Suivez-nous sur Instagram',
    'followWhatsapp': 'Suivez-nous sur WhatsApp',
    'gallery': 'Galerie Photos',
    'theme.toggle': 'Changer de thème',
    'lang.label': 'Langue',
    'club.it': 'Rejoignez le club informatique pour développer vos compétences en programmation et technologies.',
    'club.eves': "Club d'environnement pour sensibiliser à l'écologie et organiser des actions durables.",
    'club.chess': "Développez votre stratégie et participez aux compétitions d'échecs inter-universitaires.",
    'club.enactus': "Club d'entrepreneuriat social pour développer des projets à impact positif.",
    'club.hepac': "Explorez les mystères de l'univers avec le club d'astronomie et d'astrophysique.",
    'club.sport': 'Participez aux activités sportives et aux compétitions pour rester en forme.',
    'club.empreinte': 'Et si la scène devenait votre terrain de jeu ? Le Club Théâtre FSSM transforme des étudiants en acteurs, en auteurs, en metteurs en scène.',
    'club.raic': "Club de robotique et intelligence artificielle pour les passionnés de technologies avancées.",
    'club.opus': 'Club de musique et des arts vivants : chant, instruments, scène et projets artistiques.',
    'club.soutien': 'Entraide et accompagnement des étudiants dans leur parcours académique.',
    'club.vitalis': 'Promotion du bien-être et de la santé mentale et physique des étudiants.',
    'club.alumni': "Réseau des anciens étudiants pour le mentoring et l'orientation professionnelle.",
    'club.hult': "Participez à la plus grande compétition d'entrepreneuriat social au monde.",
    'club.noi': 'Innovation et créativité pour développer des solutions technologiques disruptives.',
    'club.agora': "Espace d'échange, de culture et de prise de parole pour les étudiants de la FSSM.",
    'club.fluventa': "Débat, podcast et public speaking : développez votre confiance et votre aisance à l'oral.",
    'club.debat': "Un espace pour débattre, parler, réfléchir et voir les choses autrement.",
    'club.meraki': 'Danse, expression artistique et passion : mettez du meraki dans chaque mouvement.',
    'club.civilis': 'Club BTP & Génie Civil : ateliers pratiques, conférences, mini-projets et visites de chantiers.',
    'club.ayadi': 'Solidarité et actions humanitaires : des mains au service du bien commun.',
    'club.mindup': "Bien-être psychologique à l'université : MindUp rend la psychologie accessible aux étudiants.",
    'club.esports': "Gaming compétitif, tournois et esprit d'équipe autour des sports électroniques.",
    'club.pixellum': 'Photographie, création visuelle et arts numériques à la FSSM.',
    'club.rize': 'Langues, échange culturel et prise de parole en public.',
    'fluventa.aboutTitle': 'À propos du Club Fluventa',
    'fluventa.about': "Fluventa est un club dédié au débat, au podcast et au public speaking. Il offre un espace pour développer la confiance en soi et améliorer ses compétences oratoires. Les membres échangent leurs idées, partagent leurs opinions et apprennent à mieux communiquer. Fluventa encourage la créativité, l'expression libre et la prise de parole en public.",
    'fluventa.openTitle': "L'ouverture du club Fluventa",
    'fluventa.open': "L'ouverture du club Fluventa marque le début d'une nouvelle aventure autour du débat, du podcast et du public speaking. Un espace où chacun peut exprimer ses idées, développer sa confiance et améliorer sa prise de parole.",
    'fluventa.integTitle': "Journée d'intégration",
    'fluventa.integ': "La journée d'intégration a été remplie de jeux interactifs, de joie et de bonne humeur. Elle nous a permis de mieux nous connaître et de créer de nouvelles amitiés. À travers différentes activités, chacun a pu participer, échanger et s'amuser.",
    'fluventa.debateTitle': 'Interclub debate competition',
    'fluventa.debate': "La première compétition de débat a réuni six équipes issues de différentes universités de l'Université Cadi Ayyad. Organisée en collaboration avec le CLC Centre Américain, elle a offert une véritable plateforme d'échange et d'expression. Les participants ont démontré leurs compétences en argumentation, en communication et en esprit critique.",
    'fluventa.speakTitle': 'Atelier de public speaking',
    'fluventa.speak': "À la fin des six semaines, une compétition de pratique a été organisée. Les participants ont mis en application les compétences acquises. Une occasion de développer leur confiance et leur aisance à l'oral. Une belle clôture pour un atelier riche en apprentissage.",
    'fluventa.joinTitle': 'Rejoignez-nous',
    'fluventa.join': 'Rejoignez Fluventa pour le débat, le podcast et le public speaking : exprimez vos idées, gagnez en confiance et apprenez à mieux communiquer.'
  },
  en: {
    'title.home': 'FSSM Clubs - Discover the clubs',
    'nav.home': 'Home',
    'nav.clubs': 'Clubs',
    'home.title': 'Discover FSSM clubs',
    'home.desc': 'Explore the different FSSM clubs and make the most of student life',
    'seeMore': 'See more',
    'register': 'Join this club',
    'comingSoon': 'Social media links will be available soon.',
    'footer.rights': 'All rights reserved.',
    'followInstagram': 'Follow us on Instagram',
    'followWhatsapp': 'Follow us on WhatsApp',
    'gallery': 'Photo gallery',
    'theme.toggle': 'Toggle theme',
    'lang.label': 'Language',
    'club.it': 'Join the IT club to grow your programming and technology skills.',
    'club.eves': 'An environment club that raises ecological awareness and organizes sustainable actions.',
    'club.chess': 'Sharpen your strategy and take part in inter-university chess competitions.',
    'club.enactus': 'A social entrepreneurship club that builds projects with a positive impact.',
    'club.hepac': 'Explore the universe with the astronomy and astrophysics club.',
    'club.sport': 'Join sports activities and competitions to stay active.',
    'club.empreinte': 'What if the stage became your playground? Club Théâtre FSSM turns students into actors, playwrights, and directors.',
    'club.raic': 'Robotics and artificial intelligence for students passionate about advanced tech.',
    'club.opus': 'Music and performing arts club: singing, instruments, stage performance, and artistic projects.',
    'club.soutien': 'Peer support and academic guidance for students.',
    'club.vitalis': 'Promoting students’ mental and physical health and well-being.',
    'club.alumni': 'An alumni network for mentoring and career orientation.',
    'club.hult': 'Take part in the world’s largest social entrepreneurship competition.',
    'club.noi': 'Innovation and creativity to build disruptive technology solutions.',
    'club.agora': 'A space for exchange, culture and public speaking at FSSM.',
    'club.fluventa': 'Debate, podcasting and public speaking: grow your confidence and oral skills.',
    'club.debat': 'A space to debate, speak, think and see things differently.',
    'club.meraki': 'Dance, artistic expression and passion in every movement.',
    'club.civilis': 'Civil Engineering & BTP club: practical workshops, conferences, mini-projects, and site visits.',
    'club.ayadi': 'Solidarity and humanitarian action in service of the common good.',
    'club.mindup': 'Psychological well-being at university: MindUp makes psychology accessible to students.',
    'club.esports': 'Competitive gaming, tournaments and teamwork around esports.',
    'club.pixellum': 'Photography, visual creation and digital arts at FSSM.',
    'club.rize': 'Languages, cultural exchange and public speaking.',
    'fluventa.aboutTitle': 'About Fluventa Club',
    'fluventa.about': 'Fluventa is a club dedicated to debate, podcasting and public speaking. It offers a space to build self-confidence and improve speaking skills. Members exchange ideas, share opinions and learn to communicate better. Fluventa encourages creativity, free expression and speaking in public.',
    'fluventa.openTitle': 'Fluventa club opening',
    'fluventa.open': 'The opening of Fluventa Club marked the start of a new journey around debate, podcasting and public speaking. A space where everyone can share ideas, build confidence and improve their speaking.',
    'fluventa.integTitle': 'Integration day',
    'fluventa.integ': 'Integration day was full of interactive games, joy and good energy. It helped us get to know each other and make new friends. Through different activities, everyone could take part, talk and have fun.',
    'fluventa.debateTitle': 'Interclub debate competition',
    'fluventa.debate': 'The first debate competition brought together six teams from different institutions of Cadi Ayyad University. Organized with the American CLC Centre, it offered a real platform for exchange and expression. Participants showed their skills in argumentation, communication and critical thinking.',
    'fluventa.speakTitle': 'Public speaking workshop',
    'fluventa.speak': 'At the end of the six weeks, a practice competition was organized. Participants put their new skills into action. It was a chance to grow confidence and ease when speaking. A strong close to a workshop rich in learning.',
    'fluventa.joinTitle': 'Join us',
    'fluventa.join': 'Join Fluventa for debate, podcasting and public speaking: share your ideas, gain confidence and learn to communicate better.'
  },
  ar: {
    'title.home': 'أندية كلية العلوم السملالية - اكتشف الأندية',
    'nav.home': 'الرئيسية',
    'nav.clubs': 'الأندية',
    'home.title': 'اكتشف أندية كلية العلوم السملالية',
    'home.desc': 'تعرّف على أندية الكلية وأثْرِ حياتك الطلابية',
    'seeMore': 'المزيد',
    'register': 'التسجيل في هذا النادي',
    'comingSoon': 'حسابات التواصل الاجتماعي ستكون متاحة قريباً.',
    'footer.rights': 'جميع الحقوق محفوظة.',
    'followInstagram': 'تابعونا على إنستغرام',
    'followWhatsapp': 'تابعونا على واتساب',
    'gallery': 'معرض الصور',
    'theme.toggle': 'تغيير المظهر',
    'lang.label': 'اللغة',
    'club.it': 'انضم إلى نادي المعلوماتية لتطوير مهاراتك في البرمجة والتكنولوجيا.',
    'club.eves': 'نادي البيئة للتوعية الإيكولوجية وتنظيم أنشطة مستدامة.',
    'club.chess': 'طوّر استراتيجيتك وشارك في مسابقات الشطرنج بين الجامعات.',
    'club.enactus': 'نادي ريادة الأعمال الاجتماعية لتطوير مشاريع ذات أثر إيجابي.',
    'club.hepac': 'اكتشف أسرار الكون مع نادي الفلك والفيزياء الفلكية.',
    'club.sport': 'شارك في الأنشطة والمسابقات الرياضية للحفاظ على لياقتك.',
    'club.empreinte': 'ماذا لو أصبحت الخشبة ملعبكم؟ نحول في نادي المسرح FSSM الطلاب إلى ممثلين وكتاب ومخرجين.',
    'club.raic': 'نادي الروبوتات والذكاء الاصطناعي لعشاق التقنيات المتقدمة.',
    'club.opus': 'نادي الموسيقى والفنون الحية: غناء وعزف وأداء مسرحي ومشاريع فنية.',
    'club.soutien': 'دعم ومرافقة الطلاب في مسارهم الأكاديمي.',
    'club.vitalis': 'تعزيز الصحة النفسية والجسدية ورفاهية الطلاب.',
    'club.alumni': 'شبكة الخريجين للإرشاد والتوجيه المهني.',
    'club.hult': 'شارك في أكبر مسابقة لريادة الأعمال الاجتماعية في العالم.',
    'club.noi': 'الابتكار والإبداع لتطوير حلول تكنولوجية رائدة.',
    'club.agora': 'فضاء للتبادل والثقافة والتعبير أمام الجمهور.',
    'club.fluventa': 'مناظرة وبودكاست وخطابة: عزّز ثقتك وطلاقتك في الكلام.',
    'club.debat': 'فضاء للنقاش والكلام والتفكير ورؤية الأمور من زاوية أخرى.',
    'club.meraki': 'رقص وتعبير فني وشغف في كل حركة.',
    'club.civilis': 'نادي الهندسة المدنية والبناء: ورش تطبيقية ومؤتمرات ومشاريع مصغرة وزيارات ميدانية.',
    'club.ayadi': 'تضامن وعمل إنساني في خدمة الخير العام.',
    'club.mindup': 'رفاه نفسي في الجامعة: مايند أب يجعل علم النفس في متناول الطلاب.',
    'club.esports': 'ألعاب تنافسية وبطولات وروح الفريق حول الرياضات الإلكترونية.',
    'club.pixellum': 'تصوير فوتوغرافي وإبداع بصري وفنون رقمية.',
    'club.rize': 'لغات وتبادل ثقافي وحديث أمام الجمهور.',
    'fluventa.aboutTitle': 'حول نادي فلوينتا',
    'fluventa.about': 'فلوينتا نادي مخصص للمناظرة والبودكاست والخطابة. يوفّر فضاءً لتعزيز الثقة بالنفس وتحسين مهارات الحديث. يتبادل الأعضاء أفكارهم وآراءهم ويتعلمون التواصل بشكل أفضل. يشجّع النادي الإبداع والتعبير الحر والحديث أمام الجمهور.',
    'fluventa.openTitle': 'افتتاح نادي فلوينتا',
    'fluventa.open': 'شكّل افتتاح نادي فلوينتا بداية مغامرة جديدة حول المناظرة والبودكاست والخطابة. فضاء يمكن فيه لكل شخص التعبير عن أفكاره وتعزيز ثقته وتحسين حديثه.',
    'fluventa.integTitle': 'يوم الإدماج',
    'fluventa.integ': 'كان يوم الإدماج مليئاً بالألعاب التفاعلية والفرح والأجواء الطيبة. ساعدنا على التعارف وبناء صداقات جديدة. ومن خلال أنشطة متنوعة شارك الجميع وتبادلوا واستمتعوا.',
    'fluventa.debateTitle': 'مسابقة المناظرة بين الأندية',
    'fluventa.debate': 'جمعت أول مسابقة مناظرة ست فرق من مؤسسات مختلفة بجامعة القاضي عياض. نُظّمت بالتعاون مع المركز الأمريكي CLC ووفّرت منصة حقيقية للتبادل والتعبير. أظهر المشاركون مهاراتهم في الحجاج والتواصل والتفكير النقدي.',
    'fluventa.speakTitle': 'ورشة الخطابة',
    'fluventa.speak': 'في نهاية الأسابيع الستة نُظّمت مسابقة تطبيقية. وضع المشاركون المهارات المكتسبة موضع التنفيذ. كانت فرصة لتعزيز الثقة والطلاقة في الحديث. ختام جميل لورشة غنية بالتعلم.',
    'fluventa.joinTitle': 'انضم إلينا',
    'fluventa.join': 'انضم إلى فلوينتا للمناظرة والبودكاست والخطابة: عبّر عن أفكارك، اكتسب الثقة، وتعلّم التواصل بشكل أفضل.'
  }
});

function getTheme() {
  try {
    return localStorage.getItem(THEME_KEY) || 'light';
  } catch (e) {
    return 'light';
  }
}

function getLang() {
  try {
    var lang = localStorage.getItem(LANG_KEY) || 'fr';
    return LANGS.indexOf(lang) !== -1 ? lang : 'fr';
  } catch (e) {
    return 'fr';
  }
}

function t(key) {
  var lang = getLang();
  return (I18N[lang] && I18N[lang][key]) || I18N.fr[key] || '';
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  var icon = document.querySelector('[data-theme-icon]');
  if (icon) {
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }
  var toggle = document.querySelector('[data-theme-toggle]');
  if (toggle) {
    toggle.setAttribute('aria-label', t('theme.toggle'));
  }
}

function applyLang(lang) {
  if (window.CLUB_I18N) {
    mergeClubI18n(I18N);
  }
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var value = t(el.getAttribute('data-i18n'));
    if (value) el.textContent = value;
  });
  var titleKey = document.documentElement.getAttribute('data-i18n-title');
  if (titleKey && t(titleKey)) {
    document.title = t(titleKey);
  }
  document.querySelectorAll('[data-set-lang]').forEach(function (btn) {
    btn.classList.toggle('is-active', btn.getAttribute('data-set-lang') === lang);
  });
  var switcher = document.querySelector('.lang-switcher');
  if (switcher) {
    switcher.setAttribute('aria-label', t('lang.label'));
  }
}

function setTheme(theme) {
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch (e) {}
  applyTheme(theme);
}

function setLang(lang) {
  try {
    localStorage.setItem(LANG_KEY, lang);
  } catch (e) {}
  applyLang(lang);
}

function initUi() {
  applyTheme(getTheme());
  applyLang(getLang());
  document.documentElement.classList.remove('i18n-pending');

  var toggle = document.querySelector('[data-theme-toggle]');
  if (toggle) {
    toggle.addEventListener('click', function () {
      setTheme(getTheme() === 'dark' ? 'light' : 'dark');
    });
  }

  document.querySelectorAll('[data-set-lang]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setLang(btn.getAttribute('data-set-lang'));
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initUi);
} else {
  initUi();
}
