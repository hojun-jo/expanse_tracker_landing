export type Locale = 'ko' | 'en' | 'ja' | 'zh-cn' | 'fr' | 'es' | 'de' | 'pt-br';

type ScreenshotPrefix = 'kr' | 'us' | 'jp' | 'cn' | 'fr' | 'es' | 'de' | 'br';

export const supportEmail = 'etialmoon@gmail.com';

const koreanPrivacyHref =
  'https://etialmoon.notion.site/37cd6b2371ba80529767e86a058e6cb0?source=copy_link';
const englishPrivacyHref =
  'https://etialmoon.notion.site/Privacy-Policy-37cd6b2371ba8020830dfeae95325b87?source=copy_link';

export interface Metric {
  value: string;
  label: string;
}

export interface Screenshot {
  src: string;
  alt: string;
  caption: string;
}

export interface Feature {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  screenshot: Screenshot;
}

export interface PageContent {
  metaTitle: string;
  metaDescription: string;
  brandLine: string;
  nav: {
    features: string;
    flow: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    availability: string;
    availabilityNote: string;
    highlights: string[];
    metrics: Metric[];
  };
  sectionTitles: {
    features: string;
    flow: string;
  };
  featureIntro: string;
  features: Feature[];
  flow: {
    title: string;
    description: string;
    screenshots: Screenshot[];
  };
  footer: {
    availability: string;
    support: string;
    privacyLabel: string;
  };
}

export interface LocaleInfo {
  htmlLang: string;
  label: string;
  screenshotPrefix: ScreenshotPrefix;
  privacyHref: string;
}

export const localeOrder: Locale[] = ['ko', 'en', 'ja', 'zh-cn', 'fr', 'es', 'de', 'pt-br'];

export const secondaryLocales = localeOrder.filter((locale) => locale !== 'ko') as Exclude<
  Locale,
  'ko'
>[];

export const localeInfo: Record<Locale, LocaleInfo> = {
  ko: {
    htmlLang: 'ko-KR',
    label: '한국어',
    screenshotPrefix: 'kr',
    privacyHref: koreanPrivacyHref,
  },
  en: {
    htmlLang: 'en-US',
    label: 'English',
    screenshotPrefix: 'us',
    privacyHref: englishPrivacyHref,
  },
  ja: {
    htmlLang: 'ja-JP',
    label: '日本語',
    screenshotPrefix: 'jp',
    privacyHref: englishPrivacyHref,
  },
  'zh-cn': {
    htmlLang: 'zh-CN',
    label: '简体中文',
    screenshotPrefix: 'cn',
    privacyHref: englishPrivacyHref,
  },
  fr: {
    htmlLang: 'fr-FR',
    label: 'Français',
    screenshotPrefix: 'fr',
    privacyHref: englishPrivacyHref,
  },
  es: {
    htmlLang: 'es-ES',
    label: 'Español',
    screenshotPrefix: 'es',
    privacyHref: englishPrivacyHref,
  },
  de: {
    htmlLang: 'de-DE',
    label: 'Deutsch',
    screenshotPrefix: 'de',
    privacyHref: englishPrivacyHref,
  },
  'pt-br': {
    htmlLang: 'pt-BR',
    label: 'Português (Brasil)',
    screenshotPrefix: 'br',
    privacyHref: englishPrivacyHref,
  },
};

export function getLocaleHref(locale: Locale) {
  return locale === 'ko' ? '' : `${locale}/`;
}

export function getLocaleOptions(currentLocale: Locale) {
  return localeOrder.map((locale) => ({
    locale,
    label: localeInfo[locale].label,
    href: getLocaleHref(locale),
    active: locale === currentLocale,
  }));
}

function screenshots(prefix: ScreenshotPrefix) {
  return [1, 2, 3, 4].map((index) => ({
    src: `screenshot/${prefix}${index}.png`,
    index,
  }));
}

const koShots = screenshots('kr');
const enShots = screenshots('us');
const jaShots = screenshots('jp');
const zhCnShots = screenshots('cn');
const frShots = screenshots('fr');
const esShots = screenshots('es');
const deShots = screenshots('de');
const ptBrShots = screenshots('br');

export const pages: Record<Locale, PageContent> = {
  ko: {
    metaTitle: 'Pennymint | 매일 쉽게 쓰는 지출 가계부',
    metaDescription:
      '빠르게 기록하고, 나만의 카테고리로 정리하고, 달력과 차트로 다시 확인하는 개인용 지출 기록 앱.',
    brandLine: '심플한 지출 기록',
    nav: {
      features: '기능',
      flow: '화면 흐름',
    },
    hero: {
      eyebrow: 'Pennymint',
      title: '작은 기록이, 좋은 소비를 만듭니다.',
      description:
        'Pennymint는 복잡한 자산 관리 도구가 아니라, 매일 빠르게 지출을 기록하고 다시 돌아보기 쉬운 개인용 가계부입니다.',
      availability: 'App Store 출시 예정',
      availabilityNote: '앱스토어 링크는 공개 준비가 끝나는 대로 이 페이지에 추가됩니다.',
      highlights: ['빠른 지출 기록', '2뎁스 카테고리', '월간 달력 검토', '카테고리 분석 차트'],
      metrics: [
        {
          value: '10초',
          label: '지출 기록에 집중한 간결한 입력 흐름',
        },
        {
          value: '2단계',
          label: '부모-하위 구조로 정리하는 맞춤 카테고리',
        },
        {
          value: '기기 내',
          label: '개인 기록을 내 기기에 머무르게 하는 구조',
        },
      ],
    },
    sectionTitles: {
      features: '핵심 기능',
      flow: '앱 흐름',
    },
    featureIntro:
      '기록, 달력, 차트까지 이어지는 3개 탭 구조로 매일의 소비를 가볍게 남기고 다시 확인할 수 있습니다.',
    features: [
      {
        eyebrow: '빠른 기록',
        title: '오늘 쓴 돈을 바로 남기기',
        description:
          '금액과 메모, 카테고리만 빠르게 선택하면 기록이 끝납니다. 복잡한 설정 없이도 하루 중 여러 번 자연스럽게 사용할 수 있습니다.',
        bullets: [
          '짧은 입력 단계로 한 손 사용에 맞춘 흐름',
          '기록 자체에 집중할 수 있는 단순한 화면 구성',
          '매일 여러 번 써도 부담이 적은 개인 가계부 경험',
        ],
        screenshot: {
          src: koShots[0].src,
          alt: 'Pennymint 빠른 지출 기록 화면',
          caption: '빠른 지출 기록',
        },
      },
      {
        eyebrow: '카테고리',
        title: '나만의 분류 체계로 정리하기',
        description:
          '기본 카테고리로 바로 시작하고, 필요할 때 부모-하위 2단계 구조로 커스터마이징할 수 있습니다.',
        bullets: [
          '이름, 색상, 아이콘을 내 사용 방식에 맞게 수정',
          '지나치게 깊지 않은 2뎁스 구조로 빠른 탐색 유지',
          '반복되는 소비 패턴을 더 명확하게 분류',
        ],
        screenshot: {
          src: koShots[1].src,
          alt: 'Pennymint 카테고리 관리 화면',
          caption: '맞춤 카테고리 관리',
        },
      },
      {
        eyebrow: '달력 검토',
        title: '월간 기록을 한 화면에서 되짚기',
        description:
          '달력 기반 히스토리로 어느 날에 얼마나 썼는지 빠르게 확인하고, 지난 기록도 쉽게 다시 열어볼 수 있습니다.',
        bullets: [
          '월간 흐름을 한눈에 보는 달력 중심 검토',
          '기록한 날과 비어 있는 날의 패턴 파악',
          '과거 소비를 다시 찾아 수정하거나 확인하기 쉬운 구조',
        ],
        screenshot: {
          src: koShots[2].src,
          alt: 'Pennymint 월간 달력 기록 화면',
          caption: '월간 달력 검토',
        },
      },
      {
        eyebrow: '분석',
        title: '차트로 소비 패턴 이해하기',
        description:
          '카테고리별 지출을 시각적으로 확인해 어디에 돈이 자주 쓰이는지 빠르게 파악할 수 있습니다.',
        bullets: [
          '카테고리 비중을 직관적으로 읽을 수 있는 차트',
          '복잡한 예산 기능 없이도 충분한 회고 정보 제공',
          '일상적인 소비 습관을 더 잘 이해하도록 돕는 요약 화면',
        ],
        screenshot: {
          src: koShots[3].src,
          alt: 'Pennymint 카테고리 분석 차트 화면',
          caption: '카테고리 분석',
        },
      },
    ],
    flow: {
      title: '기록에서 분석까지 자연스럽게 이어지는 흐름',
      description:
        '빠르게 기록하고, 카테고리로 정리하고, 달력으로 되돌아보고, 차트로 패턴을 확인하는 흐름을 한 앱 안에 담았습니다.',
      screenshots: [
        {
          src: koShots[0].src,
          alt: 'Pennymint 지출 기록 화면',
          caption: '1. 기록',
        },
        {
          src: koShots[1].src,
          alt: 'Pennymint 카테고리 관리 화면',
          caption: '2. 정리',
        },
        {
          src: koShots[2].src,
          alt: 'Pennymint 달력 화면',
          caption: '3. 검토',
        },
        {
          src: koShots[3].src,
          alt: 'Pennymint 분석 차트 화면',
          caption: '4. 이해',
        },
      ],
    },
    footer: {
      availability: 'App Store 링크는 출시 시점에 추가됩니다.',
      support: `지원 연락처: ${supportEmail}`,
      privacyLabel: '개인정보 처리방침',
    },
  },
  en: {
    metaTitle: 'Pennymint | Simple Expense Tracker',
    metaDescription:
      'A personal expense tracker built for quick daily entries, custom categories, monthly review, and simple spending charts.',
    brandLine: 'Simple Expense Tracker',
    nav: {
      features: 'Features',
      flow: 'Flow',
    },
    hero: {
      eyebrow: 'Pennymint',
      title: 'Small records make better spending decisions.',
      description:
        'Pennymint is a personal expense tracker for people who want to log spending quickly and look back without dealing with heavyweight finance tools.',
      availability: 'Coming Soon to the App Store',
      availabilityNote: 'The App Store link will be added here before public release.',
      highlights: ['Fast expense entry', 'Two-level categories', 'Monthly calendar review', 'Category analytics'],
      metrics: [
        {
          value: '10 sec',
          label: 'A streamlined flow built around quick daily logging',
        },
        {
          value: '2 levels',
          label: 'Parent and child categories without unnecessary depth',
        },
        {
          value: 'On-device',
          label: 'Personal records designed to stay on your phone',
        },
      ],
    },
    sectionTitles: {
      features: 'Core features',
      flow: 'Product flow',
    },
    featureIntro:
      'Three focused tabs guide you from entry to review so the app stays lightweight enough for everyday use.',
    features: [
      {
        eyebrow: 'Quick Entry',
        title: 'Capture spending while it is still fresh',
        description:
          'Amount, note, and category are kept front and center so logging a purchase feels fast enough to do in the moment.',
        bullets: [
          'A short entry flow designed for one-handed daily use',
          'A calm screen that keeps attention on the record itself',
          'Simple enough to use several times a day without friction',
        ],
        screenshot: {
          src: enShots[0].src,
          alt: 'Pennymint quick expense entry screen',
          caption: 'Fast expense entry',
        },
      },
      {
        eyebrow: 'Categories',
        title: 'Organize expenses in your own structure',
        description:
          'Start with a sensible default set, then tailor categories with a parent-child structure that stays easy to browse.',
        bullets: [
          'Rename categories and tune colors or icons to fit your habits',
          'Keep browsing fast with a clear two-level hierarchy',
          'Create a cleaner picture of repeat spending patterns',
        ],
        screenshot: {
          src: enShots[1].src,
          alt: 'Pennymint category management screen',
          caption: 'Custom category management',
        },
      },
      {
        eyebrow: 'Calendar Review',
        title: 'Review a month at a glance',
        description:
          'The calendar view makes it easy to revisit past days, spot spending rhythms, and reopen older records when needed.',
        bullets: [
          'A month-level review screen built around the calendar',
          'See active and quiet days as part of the same pattern',
          'Revisit past records quickly without digging through lists',
        ],
        screenshot: {
          src: enShots[2].src,
          alt: 'Pennymint monthly calendar history screen',
          caption: 'Monthly calendar review',
        },
      },
      {
        eyebrow: 'Analytics',
        title: 'Understand where your money goes',
        description:
          'Charts summarize category spending so you can see patterns quickly without turning the app into a full finance dashboard.',
        bullets: [
          'Readable category charts for quick reflection',
          'Enough insight for daily spending awareness without extra overhead',
          'A lightweight summary that supports better everyday decisions',
        ],
        screenshot: {
          src: enShots[3].src,
          alt: 'Pennymint spending analytics chart screen',
          caption: 'Category analytics',
        },
      },
    ],
    flow: {
      title: 'A simple path from logging to insight',
      description:
        'Log quickly, organize with categories, review by month, and use charts to understand the pattern behind the numbers.',
      screenshots: [
        {
          src: enShots[0].src,
          alt: 'Pennymint expense entry screen',
          caption: '1. Log',
        },
        {
          src: enShots[1].src,
          alt: 'Pennymint category management screen',
          caption: '2. Organize',
        },
        {
          src: enShots[2].src,
          alt: 'Pennymint calendar view',
          caption: '3. Review',
        },
        {
          src: enShots[3].src,
          alt: 'Pennymint analytics chart screen',
          caption: '4. Understand',
        },
      ],
    },
    footer: {
      availability: 'The App Store link will be added at launch.',
      support: `Support: ${supportEmail}`,
      privacyLabel: 'Privacy Policy',
    },
  },
  ja: {
    metaTitle: 'Pennymint | シンプルな支出記録',
    metaDescription:
      'すばやい記録、カスタムカテゴリ、月次カレンダーの振り返り、シンプルなチャート分析に対応した個人向け支出記録アプリ。',
    brandLine: 'シンプルな支出記録',
    nav: {
      features: '機能',
      flow: 'アプリの流れ',
    },
    hero: {
      eyebrow: 'Pennymint',
      title: '小さな記録が、よりよい支出につながります。',
      description:
        'Pennymintは、複雑な資産管理ツールではなく、毎日の支出をすばやく記録してあとから見返しやすい個人向け家計簿アプリです。',
      availability: 'App Storeで近日公開',
      availabilityNote: 'App Storeリンクは公開準備が整い次第、このページに追加されます。',
      highlights: ['すばやい支出記録', '2階層カテゴリ', '月次カレンダー確認', 'カテゴリ分析チャート'],
      metrics: [
        {
          value: '10秒',
          label: '毎日の入力をすばやく終えられる記録フロー',
        },
        {
          value: '2階層',
          label: '親子構造で整理できるカスタムカテゴリ',
        },
        {
          value: '端末内',
          label: '個人の記録を自分の端末内に保持',
        },
      ],
    },
    sectionTitles: {
      features: '主な機能',
      flow: 'アプリの流れ',
    },
    featureIntro:
      '記録、カレンダー、チャートへとつながる3つのタブで、日々の支出を気軽に残して振り返れます。',
    features: [
      {
        eyebrow: 'クイック入力',
        title: '今日使ったお金をすぐ残す',
        description:
          '金額、メモ、カテゴリを選ぶだけで記録が完了します。複雑な設定なしで、一日の中で何度でも自然に使えます。',
        bullets: [
          '短い入力ステップで片手操作にもなじむ',
          '記録そのものに集中できるシンプルな画面構成',
          '毎日何度使っても負担が少ない個人向け家計簿',
        ],
        screenshot: {
          src: jaShots[0].src,
          alt: 'Pennymintのすばやい支出記録画面',
          caption: 'すばやい支出記録',
        },
      },
      {
        eyebrow: 'カテゴリ',
        title: '自分に合った分類で整理する',
        description:
          '基本カテゴリからすぐ始められ、必要に応じて親子2階層の構造で自由にカスタマイズできます。',
        bullets: [
          '名前、色、アイコンを自分の使い方に合わせて調整',
          '深くなりすぎない2階層で探しやすさを維持',
          '繰り返す支出パターンをより分かりやすく整理',
        ],
        screenshot: {
          src: jaShots[1].src,
          alt: 'Pennymintのカテゴリ管理画面',
          caption: 'カスタムカテゴリ管理',
        },
      },
      {
        eyebrow: 'カレンダー確認',
        title: '月の記録をまとめて見返す',
        description:
          'カレンダーを中心に、どの日にどれくらい使ったかをすばやく確認でき、過去の記録もすぐ開き直せます。',
        bullets: [
          '月全体の流れが分かるカレンダー中心の確認画面',
          '記録した日と空いている日のパターンを把握',
          '過去の支出をあとから見つけて確認しやすい構造',
        ],
        screenshot: {
          src: jaShots[2].src,
          alt: 'Pennymintの月間カレンダー画面',
          caption: '月間カレンダー確認',
        },
      },
      {
        eyebrow: '分析',
        title: 'チャートで支出の傾向を理解する',
        description:
          'カテゴリごとの支出を視覚的に確認し、どこにお金が多く使われているかをすばやく把握できます。',
        bullets: [
          'カテゴリ比率を直感的に読めるチャート',
          '複雑な予算機能がなくても十分な振り返り情報',
          '日々の支出習慣を理解しやすくする要約画面',
        ],
        screenshot: {
          src: jaShots[3].src,
          alt: 'Pennymintのカテゴリ分析画面',
          caption: 'カテゴリ分析',
        },
      },
    ],
    flow: {
      title: '記録から理解まで自然につながる流れ',
      description:
        'すばやく記録し、カテゴリで整理し、月単位で振り返り、チャートで支出パターンを理解できる流れをひとつのアプリにまとめました。',
      screenshots: [
        {
          src: jaShots[0].src,
          alt: 'Pennymintの記録画面',
          caption: '1. 記録',
        },
        {
          src: jaShots[1].src,
          alt: 'Pennymintのカテゴリ画面',
          caption: '2. 整理',
        },
        {
          src: jaShots[2].src,
          alt: 'Pennymintのカレンダー画面',
          caption: '3. 確認',
        },
        {
          src: jaShots[3].src,
          alt: 'Pennymintの分析画面',
          caption: '4. 理解',
        },
      ],
    },
    footer: {
      availability: 'App Storeリンクは公開時に追加されます。',
      support: `お問い合わせ: ${supportEmail}`,
      privacyLabel: 'プライバシーポリシー',
    },
  },
  'zh-cn': {
    metaTitle: 'Pennymint | 简单记账应用',
    metaDescription: '一款适合个人使用的支出记录应用，支持快速记账、自定义分类、月历回顾和简洁图表分析。',
    brandLine: '简单记账应用',
    nav: {
      features: '功能',
      flow: '使用流程',
    },
    hero: {
      eyebrow: 'Pennymint',
      title: '小小的记录，帮助你做出更好的消费选择。',
      description:
        'Pennymint 不是复杂的资产管理工具，而是一款帮助你快速记录日常支出并轻松回顾的个人记账应用。',
      availability: '即将登陆 App Store',
      availabilityNote: 'App Store 链接将在发布准备完成后添加到此页面。',
      highlights: ['快速记账', '两级分类', '月历回顾', '分类图表分析'],
      metrics: [
        {
          value: '10秒',
          label: '围绕日常快速记录设计的精简流程',
        },
        {
          value: '2级',
          label: '用父级和子级整理的自定义分类结构',
        },
        {
          value: '本地',
          label: '个人记录默认保留在你的设备中',
        },
      ],
    },
    sectionTitles: {
      features: '核心功能',
      flow: '产品流程',
    },
    featureIntro:
      '通过记录、日历和图表三个重点标签页，把日常支出轻松记下并随时回顾。',
    features: [
      {
        eyebrow: '快速记录',
        title: '把今天花的钱立刻记下来',
        description:
          '只需输入金额、备注和分类就能完成记录。没有复杂设置，一天中使用多次也很自然。',
        bullets: [
          '输入步骤简短，适合单手快速记录',
          '界面简单，让注意力回到记录本身',
          '每天多次使用也不会有负担的个人记账体验',
        ],
        screenshot: {
          src: zhCnShots[0].src,
          alt: 'Pennymint 快速记账界面',
          caption: '快速记账',
        },
      },
      {
        eyebrow: '分类管理',
        title: '用适合自己的分类方式整理支出',
        description:
          '你可以直接从默认分类开始，也可以在需要时用父级和子级两层结构自由定制。',
        bullets: [
          '名称、颜色和图标都可以按自己的习惯调整',
          '两级结构足够清晰，同时保持查找速度',
          '更容易看清重复出现的消费模式',
        ],
        screenshot: {
          src: zhCnShots[1].src,
          alt: 'Pennymint 分类管理界面',
          caption: '自定义分类',
        },
      },
      {
        eyebrow: '日历回顾',
        title: '在一个月历视图中回看整月记录',
        description:
          '通过日历视图，你可以快速查看某一天花了多少，也能轻松重新打开过去的记录。',
        bullets: [
          '以月为单位查看消费节奏的日历界面',
          '识别有记录和空白日期的使用模式',
          '回看过去支出时更容易找到对应记录',
        ],
        screenshot: {
          src: zhCnShots[2].src,
          alt: 'Pennymint 月历记录界面',
          caption: '月历回顾',
        },
      },
      {
        eyebrow: '数据分析',
        title: '用图表理解你的消费模式',
        description:
          '通过分类图表直观查看支出占比，快速了解钱主要花在了哪里。',
        bullets: [
          '可以直观读取分类占比的图表展示',
          '没有复杂预算功能也能完成有效回顾',
          '帮助你更好理解日常消费习惯的总结页面',
        ],
        screenshot: {
          src: zhCnShots[3].src,
          alt: 'Pennymint 分类分析图表界面',
          caption: '分类分析',
        },
      },
    ],
    flow: {
      title: '从记录到理解的自然流程',
      description:
        '快速记录、按分类整理、通过月历回顾，再用图表看清消费模式，整个过程都在一个应用里完成。',
      screenshots: [
        {
          src: zhCnShots[0].src,
          alt: 'Pennymint 记录界面',
          caption: '1. 记录',
        },
        {
          src: zhCnShots[1].src,
          alt: 'Pennymint 分类界面',
          caption: '2. 整理',
        },
        {
          src: zhCnShots[2].src,
          alt: 'Pennymint 日历界面',
          caption: '3. 回顾',
        },
        {
          src: zhCnShots[3].src,
          alt: 'Pennymint 图表界面',
          caption: '4. 理解',
        },
      ],
    },
    footer: {
      availability: 'App Store 链接将在发布时添加。',
      support: `联系邮箱：${supportEmail}`,
      privacyLabel: '隐私政策',
    },
  },
  fr: {
    metaTitle: 'Pennymint | Suivi des dépenses simple',
    metaDescription:
      'Une application personnelle pour enregistrer rapidement ses dépenses, organiser ses catégories, revoir le mois et lire des graphiques simples.',
    brandLine: 'Suivi des dépenses simple',
    nav: {
      features: 'Fonctionnalités',
      flow: 'Parcours',
    },
    hero: {
      eyebrow: 'Pennymint',
      title: 'De petites notes mènent à de meilleures décisions de dépense.',
      description:
        'Pennymint n’est pas un outil financier complexe. C’est une application personnelle pour enregistrer rapidement vos dépenses quotidiennes et les revoir facilement plus tard.',
      availability: 'Bientôt sur l’App Store',
      availabilityNote: 'Le lien App Store sera ajouté ici dès que la sortie sera prête.',
      highlights: ['Saisie rapide', 'Catégories à deux niveaux', 'Revue mensuelle', 'Graphiques par catégorie'],
      metrics: [
        {
          value: '10 sec',
          label: 'Un flux léger pensé pour la saisie quotidienne',
        },
        {
          value: '2 niveaux',
          label: 'Des catégories parent-enfant sans profondeur inutile',
        },
        {
          value: 'Sur l’appareil',
          label: 'Des enregistrements personnels gardés sur votre appareil',
        },
      ],
    },
    sectionTitles: {
      features: 'Fonctions clés',
      flow: 'Parcours produit',
    },
    featureIntro:
      'Trois onglets relient la saisie, le calendrier et les graphiques pour garder le suivi léger au quotidien.',
    features: [
      {
        eyebrow: 'Saisie rapide',
        title: 'Notez immédiatement ce que vous venez de dépenser',
        description:
          'Montant, note et catégorie suffisent pour enregistrer une dépense. Vous pouvez l’utiliser naturellement plusieurs fois par jour, sans réglages compliqués.',
        bullets: [
          'Un flux court adapté à une saisie rapide d’une seule main',
          'Une interface simple qui garde l’attention sur l’enregistrement',
          'Assez léger pour être utilisé plusieurs fois par jour',
        ],
        screenshot: {
          src: frShots[0].src,
          alt: 'Écran de saisie rapide Pennymint',
          caption: 'Saisie rapide',
        },
      },
      {
        eyebrow: 'Catégories',
        title: 'Organisez vos dépenses avec votre propre structure',
        description:
          'Commencez avec un ensemble par défaut, puis adaptez vos catégories avec une structure parent-enfant qui reste facile à parcourir.',
        bullets: [
          'Noms, couleurs et icônes ajustés à vos habitudes',
          'Une hiérarchie à deux niveaux claire et rapide à parcourir',
          'Une meilleure lecture des dépenses récurrentes',
        ],
        screenshot: {
          src: frShots[1].src,
          alt: 'Écran de gestion des catégories Pennymint',
          caption: 'Catégories personnalisées',
        },
      },
      {
        eyebrow: 'Calendrier',
        title: 'Revenez sur tout un mois d’un seul coup d’œil',
        description:
          'La vue calendrier permet de revoir rapidement combien vous avez dépensé chaque jour et de rouvrir facilement les anciennes notes.',
        bullets: [
          'Une revue mensuelle centrée sur le calendrier',
          'Une lecture claire des jours actifs et des jours vides',
          'Un accès rapide aux anciennes dépenses',
        ],
        screenshot: {
          src: frShots[2].src,
          alt: 'Écran calendrier mensuel Pennymint',
          caption: 'Revue mensuelle',
        },
      },
      {
        eyebrow: 'Analyses',
        title: 'Comprenez vos habitudes de dépense avec des graphiques',
        description:
          'Des graphiques simples résument les dépenses par catégorie pour montrer rapidement où va votre argent.',
        bullets: [
          'Des graphiques lisibles pour une lecture rapide',
          'Assez d’informations pour réfléchir sans tableau complexe',
          'Un résumé léger pour mieux comprendre vos habitudes',
        ],
        screenshot: {
          src: frShots[3].src,
          alt: 'Écran d’analyse des dépenses Pennymint',
          caption: 'Analyses par catégorie',
        },
      },
    ],
    flow: {
      title: 'Un parcours simple de la saisie à la compréhension',
      description:
        'Enregistrez vite, organisez avec les catégories, relisez le mois dans le calendrier et utilisez les graphiques pour comprendre la tendance.',
      screenshots: [
        {
          src: frShots[0].src,
          alt: 'Écran de saisie Pennymint',
          caption: '1. Saisir',
        },
        {
          src: frShots[1].src,
          alt: 'Écran catégories Pennymint',
          caption: '2. Organiser',
        },
        {
          src: frShots[2].src,
          alt: 'Écran calendrier Pennymint',
          caption: '3. Revoir',
        },
        {
          src: frShots[3].src,
          alt: 'Écran graphique Pennymint',
          caption: '4. Comprendre',
        },
      ],
    },
    footer: {
      availability: 'Le lien App Store sera ajouté au lancement.',
      support: `Contact : ${supportEmail}`,
      privacyLabel: 'Politique de confidentialité',
    },
  },
  es: {
    metaTitle: 'Pennymint | Registro de gastos simple',
    metaDescription:
      'Una app personal para registrar gastos rápidamente, ordenar categorías, revisar el mes y entender patrones con gráficos simples.',
    brandLine: 'Registro de gastos simple',
    nav: {
      features: 'Funciones',
      flow: 'Recorrido',
    },
    hero: {
      eyebrow: 'Pennymint',
      title: 'Los pequeños registros ayudan a tomar mejores decisiones de gasto.',
      description:
        'Pennymint no es una herramienta financiera compleja. Es una app personal para anotar gastos diarios con rapidez y revisarlos con facilidad más tarde.',
      availability: 'Próximamente en App Store',
      availabilityNote: 'El enlace de App Store se añadirá a esta página cuando el lanzamiento esté listo.',
      highlights: ['Registro rápido', 'Categorías en dos niveles', 'Revisión mensual', 'Gráficos por categoría'],
      metrics: [
        {
          value: '10 s',
          label: 'Un flujo ligero pensado para registrar a diario',
        },
        {
          value: '2 niveles',
          label: 'Categorías padre e hijo sin profundidad innecesaria',
        },
        {
          value: 'En el dispositivo',
          label: 'Tus registros personales permanecen en tu teléfono',
        },
      ],
    },
    sectionTitles: {
      features: 'Funciones clave',
      flow: 'Flujo del producto',
    },
    featureIntro:
      'Tres pestañas conectan el registro, el calendario y los gráficos para que el seguimiento siga siendo ligero cada día.',
    features: [
      {
        eyebrow: 'Registro rápido',
        title: 'Guarda enseguida lo que acabas de gastar',
        description:
          'Monto, nota y categoría bastan para registrar un gasto. Puedes usarlo varias veces al día sin configuraciones complicadas.',
        bullets: [
          'Un flujo corto pensado para registrar con una sola mano',
          'Una pantalla simple que mantiene el foco en el registro',
          'Lo bastante ligero como para usarlo varias veces al día',
        ],
        screenshot: {
          src: esShots[0].src,
          alt: 'Pantalla de registro rápido de Pennymint',
          caption: 'Registro rápido',
        },
      },
      {
        eyebrow: 'Categorías',
        title: 'Organiza tus gastos con tu propia estructura',
        description:
          'Empieza con un conjunto predeterminado y, cuando lo necesites, adapta tus categorías con una estructura padre-hijo de dos niveles.',
        bullets: [
          'Nombres, colores e iconos ajustados a tu forma de uso',
          'Una jerarquía clara de dos niveles y navegación rápida',
          'Una visión más clara de los gastos repetidos',
        ],
        screenshot: {
          src: esShots[1].src,
          alt: 'Pantalla de categorías de Pennymint',
          caption: 'Categorías personalizadas',
        },
      },
      {
        eyebrow: 'Calendario',
        title: 'Revisa todo un mes de un vistazo',
        description:
          'La vista de calendario te permite ver rápidamente cuánto gastaste en cada día y volver a abrir registros anteriores con facilidad.',
        bullets: [
          'Una revisión mensual centrada en el calendario',
          'Lectura clara de días con actividad y días vacíos',
          'Acceso rápido a gastos pasados cuando quieras revisarlos',
        ],
        screenshot: {
          src: esShots[2].src,
          alt: 'Pantalla de calendario mensual de Pennymint',
          caption: 'Revisión mensual',
        },
      },
      {
        eyebrow: 'Análisis',
        title: 'Entiende tus patrones de gasto con gráficos',
        description:
          'Los gráficos por categoría muestran de forma visual dónde se va tu dinero sin convertir la app en un panel financiero complejo.',
        bullets: [
          'Gráficos fáciles de leer para reflexionar rápido',
          'Información suficiente sin funciones pesadas de presupuesto',
          'Un resumen ligero para entender mejor tus hábitos',
        ],
        screenshot: {
          src: esShots[3].src,
          alt: 'Pantalla de análisis de Pennymint',
          caption: 'Análisis por categoría',
        },
      },
    ],
    flow: {
      title: 'Un recorrido simple desde el registro hasta la comprensión',
      description:
        'Registra rápido, organiza con categorías, revisa el mes y usa gráficos para entender el patrón detrás de los números.',
      screenshots: [
        {
          src: esShots[0].src,
          alt: 'Pantalla de registro de Pennymint',
          caption: '1. Registrar',
        },
        {
          src: esShots[1].src,
          alt: 'Pantalla de categorías de Pennymint',
          caption: '2. Organizar',
        },
        {
          src: esShots[2].src,
          alt: 'Pantalla de calendario de Pennymint',
          caption: '3. Revisar',
        },
        {
          src: esShots[3].src,
          alt: 'Pantalla de gráficos de Pennymint',
          caption: '4. Entender',
        },
      ],
    },
    footer: {
      availability: 'El enlace de App Store se añadirá en el lanzamiento.',
      support: `Contacto: ${supportEmail}`,
      privacyLabel: 'Política de privacidad',
    },
  },
  de: {
    metaTitle: 'Pennymint | Einfacher Ausgaben-Tracker',
    metaDescription:
      'Eine persönliche App zum schnellen Erfassen von Ausgaben, zum Ordnen von Kategorien, zum Monatsrückblick und zum Verstehen von Mustern mit einfachen Diagrammen.',
    brandLine: 'Einfacher Ausgaben-Tracker',
    nav: {
      features: 'Funktionen',
      flow: 'Ablauf',
    },
    hero: {
      eyebrow: 'Pennymint',
      title: 'Kleine Einträge führen zu besseren Ausgabenentscheidungen.',
      description:
        'Pennymint ist kein komplexes Finanzwerkzeug, sondern eine persönliche App, mit der du tägliche Ausgaben schnell festhältst und später leicht wieder ansehen kannst.',
      availability: 'Bald im App Store',
      availabilityNote: 'Der App Store-Link wird hier ergänzt, sobald die Veröffentlichung bereit ist.',
      highlights: ['Schnelle Erfassung', 'Kategorien auf zwei Ebenen', 'Monatsrückblick', 'Kategorie-Diagramme'],
      metrics: [
        {
          value: '10 Sek.',
          label: 'Ein schlanker Ablauf für schnelle tägliche Einträge',
        },
        {
          value: '2 Ebenen',
          label: 'Eltern- und Unterkategorien ohne unnötige Tiefe',
        },
        {
          value: 'Auf dem Gerät',
          label: 'Persönliche Einträge bleiben auf deinem Gerät',
        },
      ],
    },
    sectionTitles: {
      features: 'Kernfunktionen',
      flow: 'Produktfluss',
    },
    featureIntro:
      'Drei fokussierte Tabs verbinden Erfassung, Kalender und Diagramme, damit die App im Alltag leicht bleibt.',
    features: [
      {
        eyebrow: 'Schnelleingabe',
        title: 'Heute ausgegebenes Geld sofort festhalten',
        description:
          'Betrag, Notiz und Kategorie reichen aus, um eine Ausgabe zu speichern. So kannst du die App mehrmals am Tag nutzen, ohne komplizierte Schritte.',
        bullets: [
          'Kurzer Ablauf für schnelle Eingaben mit einer Hand',
          'Schlichte Oberfläche mit Fokus auf dem Eintrag selbst',
          'Leicht genug für den täglichen Einsatz ohne Reibung',
        ],
        screenshot: {
          src: deShots[0].src,
          alt: 'Pennymint Bildschirm für schnelle Eingabe',
          caption: 'Schnelle Erfassung',
        },
      },
      {
        eyebrow: 'Kategorien',
        title: 'Ausgaben in deiner eigenen Struktur ordnen',
        description:
          'Starte mit sinnvollen Standardkategorien und passe sie bei Bedarf mit einer Eltern-Kind-Struktur auf zwei Ebenen an.',
        bullets: [
          'Namen, Farben und Symbole an deine Gewohnheiten anpassen',
          'Klare Zwei-Ebenen-Struktur für schnelle Navigation',
          'Wiederkehrende Ausgabenmuster leichter erkennen',
        ],
        screenshot: {
          src: deShots[1].src,
          alt: 'Pennymint Bildschirm für Kategorien',
          caption: 'Eigene Kategorien',
        },
      },
      {
        eyebrow: 'Kalender',
        title: 'Einen ganzen Monat auf einen Blick prüfen',
        description:
          'Die Kalenderansicht zeigt schnell, wie viel an welchem Tag ausgegeben wurde, und macht ältere Einträge leicht wieder auffindbar.',
        bullets: [
          'Monatsrückblick mit Fokus auf die Kalenderansicht',
          'Aktive und leere Tage als Teil eines Musters erkennen',
          'Vergangene Ausgaben schnell wiederfinden und prüfen',
        ],
        screenshot: {
          src: deShots[2].src,
          alt: 'Pennymint Monatskalender',
          caption: 'Monatsrückblick',
        },
      },
      {
        eyebrow: 'Analyse',
        title: 'Ausgabenmuster mit Diagrammen verstehen',
        description:
          'Kategorie-Diagramme zeigen auf einen Blick, wohin dein Geld geht, ohne die App in ein kompliziertes Finanz-Dashboard zu verwandeln.',
        bullets: [
          'Gut lesbare Diagramme für schnelle Rückblicke',
          'Genug Einsicht ohne schwere Budgetfunktionen',
          'Ein leichtes Fazit für bessere Alltagsentscheidungen',
        ],
        screenshot: {
          src: deShots[3].src,
          alt: 'Pennymint Analysebildschirm',
          caption: 'Kategorie-Analyse',
        },
      },
    ],
    flow: {
      title: 'Ein einfacher Weg von der Erfassung zur Einsicht',
      description:
        'Schnell erfassen, mit Kategorien ordnen, den Monat prüfen und mit Diagrammen verstehen, was hinter den Zahlen steckt.',
      screenshots: [
        {
          src: deShots[0].src,
          alt: 'Pennymint Erfassungsbildschirm',
          caption: '1. Erfassen',
        },
        {
          src: deShots[1].src,
          alt: 'Pennymint Kategorienbildschirm',
          caption: '2. Ordnen',
        },
        {
          src: deShots[2].src,
          alt: 'Pennymint Kalenderbildschirm',
          caption: '3. Prüfen',
        },
        {
          src: deShots[3].src,
          alt: 'Pennymint Analysebildschirm',
          caption: '4. Verstehen',
        },
      ],
    },
    footer: {
      availability: 'Der App Store-Link wird zum Start hinzugefügt.',
      support: `Kontakt: ${supportEmail}`,
      privacyLabel: 'Datenschutzerklärung',
    },
  },
  'pt-br': {
    metaTitle: 'Pennymint | Controle de gastos simples',
    metaDescription:
      'Um app pessoal para registrar gastos rapidamente, organizar categorias, revisar o mês e entender padrões com gráficos simples.',
    brandLine: 'Controle de gastos simples',
    nav: {
      features: 'Recursos',
      flow: 'Fluxo',
    },
    hero: {
      eyebrow: 'Pennymint',
      title: 'Pequenos registros ajudam voce a gastar melhor.',
      description:
        'Pennymint nao e uma ferramenta financeira pesada. E um app pessoal para registrar gastos do dia a dia com rapidez e revisar tudo depois com facilidade.',
      availability: 'Em breve na App Store',
      availabilityNote: 'O link da App Store sera adicionado a esta pagina assim que o lancamento estiver pronto.',
      highlights: ['Registro rapido', 'Categorias em dois niveis', 'Revisao mensal', 'Graficos por categoria'],
      metrics: [
        {
          value: '10 s',
          label: 'Um fluxo leve pensado para registros diarios',
        },
        {
          value: '2 niveis',
          label: 'Categorias pai e filho sem profundidade desnecessaria',
        },
        {
          value: 'No dispositivo',
          label: 'Seus registros pessoais ficam no proprio aparelho',
        },
      ],
    },
    sectionTitles: {
      features: 'Recursos principais',
      flow: 'Fluxo do produto',
    },
    featureIntro:
      'Tres abas conectam registro, calendario e graficos para manter o acompanhamento leve no uso diario.',
    features: [
      {
        eyebrow: 'Registro rapido',
        title: 'Guarde na hora o que voce acabou de gastar',
        description:
          'Valor, observacao e categoria bastam para registrar um gasto. Assim fica natural usar o app varias vezes ao longo do dia.',
        bullets: [
          'Fluxo curto pensado para registrar com uma mao',
          'Tela simples que deixa o foco no registro em si',
          'Leve o bastante para usar varias vezes por dia',
        ],
        screenshot: {
          src: ptBrShots[0].src,
          alt: 'Tela de registro rapido do Pennymint',
          caption: 'Registro rapido',
        },
      },
      {
        eyebrow: 'Categorias',
        title: 'Organize seus gastos com a sua propria estrutura',
        description:
          'Comece com categorias padrao e ajuste tudo quando precisar com uma estrutura de dois niveis, facil de navegar.',
        bullets: [
          'Nomes, cores e icones ajustados ao seu jeito de usar',
          'Hierarquia clara em dois niveis sem excesso de profundidade',
          'Uma visao mais limpa dos gastos que se repetem',
        ],
        screenshot: {
          src: ptBrShots[1].src,
          alt: 'Tela de categorias do Pennymint',
          caption: 'Categorias personalizadas',
        },
      },
      {
        eyebrow: 'Calendario',
        title: 'Revise o mes inteiro de uma vez',
        description:
          'A visao de calendario mostra rapidamente quanto foi gasto em cada dia e facilita abrir registros antigos de novo.',
        bullets: [
          'Revisao mensal centrada no calendario',
          'Leitura clara de dias com atividade e dias vazios',
          'Acesso rapido aos gastos anteriores quando necessario',
        ],
        screenshot: {
          src: ptBrShots[2].src,
          alt: 'Tela de calendario mensal do Pennymint',
          caption: 'Revisao mensal',
        },
      },
      {
        eyebrow: 'Analises',
        title: 'Entenda seus padroes de gasto com graficos',
        description:
          'Os graficos por categoria mostram para onde o dinheiro esta indo sem transformar o app em um painel financeiro pesado.',
        bullets: [
          'Graficos simples para leitura e reflexao rapida',
          'Informacao suficiente sem recursos complexos de orcamento',
          'Um resumo leve para entender melhor os seus habitos',
        ],
        screenshot: {
          src: ptBrShots[3].src,
          alt: 'Tela de analises do Pennymint',
          caption: 'Analises por categoria',
        },
      },
    ],
    flow: {
      title: 'Um caminho simples do registro ao entendimento',
      description:
        'Registre rapido, organize com categorias, revise o mes e use graficos para entender o que esta por tras dos numeros.',
      screenshots: [
        {
          src: ptBrShots[0].src,
          alt: 'Tela de registro do Pennymint',
          caption: '1. Registrar',
        },
        {
          src: ptBrShots[1].src,
          alt: 'Tela de categorias do Pennymint',
          caption: '2. Organizar',
        },
        {
          src: ptBrShots[2].src,
          alt: 'Tela de calendario do Pennymint',
          caption: '3. Revisar',
        },
        {
          src: ptBrShots[3].src,
          alt: 'Tela de graficos do Pennymint',
          caption: '4. Entender',
        },
      ],
    },
    footer: {
      availability: 'O link da App Store sera adicionado no lancamento.',
      support: `Contato: ${supportEmail}`,
      privacyLabel: 'Politica de Privacidade',
    },
  },
};
