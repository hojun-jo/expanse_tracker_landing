export type Locale = 'ko' | 'en';

export const supportEmail = 'etialmoon@gmail.com';

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
  locale: Locale;
  htmlLang: string;
  metaTitle: string;
  metaDescription: string;
  brandLine: string;
  nav: {
    features: string;
    flow: string;
    language: string;
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
  };
}

function screenshots(prefix: 'kr' | 'us') {
  return [1, 2, 3, 4].map((index) => ({
    src: `screenshot/${prefix}${index}.png`,
    index,
  }));
}

const koShots = screenshots('kr');
const enShots = screenshots('us');

export const pages: Record<Locale, PageContent> = {
  ko: {
    locale: 'ko',
    htmlLang: 'ko-KR',
    metaTitle: 'Pennymint | 매일 쉽게 쓰는 지출 가계부',
    metaDescription:
      '빠르게 기록하고, 나만의 카테고리로 정리하고, 달력과 차트로 다시 확인하는 개인용 지출 기록 앱.',
    brandLine: 'Simple Expense Tracker',
    nav: {
      features: '기능',
      flow: '화면 흐름',
      language: 'English',
    },
    hero: {
      eyebrow: 'Pennymint',
      title: '작은 기록이,\n좋은\n소비를 만듭니다.',
      description:
        'Pennymint는 복잡한 자산 관리 도구가 아니라, 매일 빠르게 지출을 기록하고 다시 돌아보기 쉬운 개인용 가계부입니다.',
      availability: 'App Store 출시 예정',
      availabilityNote:
        '앱스토어 링크는 공개 준비가 끝나는 대로 이 페이지에 추가됩니다.',
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
          value: 'On-device',
          label: '로그인 없이 내 기기에 머무는 개인 기록',
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
        eyebrow: 'Quick Entry',
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
        eyebrow: 'Categories',
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
        eyebrow: 'Calendar Review',
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
        eyebrow: 'Analytics',
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
    },
  },
  en: {
    locale: 'en',
    htmlLang: 'en-US',
    metaTitle: 'Pennymint | Simple Expense Tracker',
    metaDescription:
      'A personal expense tracker built for quick daily entries, custom categories, monthly review, and simple spending charts.',
    brandLine: 'Simple Expense Tracker',
    nav: {
      features: 'Features',
      flow: 'Flow',
      language: '한국어',
    },
    hero: {
      eyebrow: 'Pennymint',
      title: 'Small records make better spending decisions.',
      description:
        'Pennymint is a personal expense tracker for people who want to log spending quickly and look back without dealing with heavyweight finance tools.',
      availability: 'Coming Soon to the App Store',
      availabilityNote:
        'The App Store link will be added here before public release.',
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
    },
  },
};
