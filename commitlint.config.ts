import { RuleConfigCondition, RuleConfigSeverity } from '@commitlint/types';

export default {
  parserPreset: 'conventional-changelog-conventionalcommits',
  rules: {
    'body-leading-blank': [RuleConfigSeverity.Warning, 'always'] as const,
    'body-max-line-length': [RuleConfigSeverity.Error, 'always', 72] as const,
    'footer-leading-blank': [RuleConfigSeverity.Warning, 'always'] as const,
    'footer-max-line-length': [
      RuleConfigSeverity.Error,
      'always',
      100,
    ] as const,
    'header-max-length': [RuleConfigSeverity.Error, 'always', 100] as const,
    'header-trim': [RuleConfigSeverity.Error, 'always'] as const,
    'subject-max-length': [RuleConfigSeverity.Error, 'always', 50] as const,
    'subject-empty': [RuleConfigSeverity.Error, 'never'] as const,
    'subject-full-stop': [RuleConfigSeverity.Error, 'never', '.'] as const,
    'type-case': [RuleConfigSeverity.Error, 'always', 'lower-case'] as const,
    'type-empty': [RuleConfigSeverity.Error, 'never'] as const,
    'type-enum': [
      RuleConfigSeverity.Error,
      'always',
      [
        '🎉 begin',
        '✨ feat',
        '♻️ refactor',
        '🔥 remove',
        '⚡ improve',
        '🐛 fix',
        '🚑 Hotfix',
        '📝 doc',
        '💄 style',
        '💚 design',
        '✅ test',
        '🗝️ security',
        '🔖 release',
        '📌 pin',
        '👷🏼 build',
        '📈 track',
        '➕ depend',
        '➖ depend',
        '🔧 config',
        '🔨 script',
        '🌐 local',
        '💩 bad',
        '⏪ revert',
        '🔀 merge',
        '📦 package',
        '🚚 move',
        '📄 license',
        '💡 comment',
        '🔊 log',
        '🙈 gitignore',
        '🗃️ database',
      ],
    ] as [RuleConfigSeverity, RuleConfigCondition, string[]],
  },
  prompt: {
    messages: {
      skip: '(건너뛰려면 enter를 누르세요)',
      max: '(영문 기준 최대 %d자 까지 가능)',
      min: '최소 %d자를 입력하세요',
      emptyWarning: '빈 값을 입력할 수 없습니다!',
      upperLimitWarning: '글자 제한 초과',
      lowerLimitWarning: '최소 글자 수 충족하지 않음',
    },
    questions: {
      type: {
        description: '커밋할 타입을 선택하세요',
        enum: {
          '✨ feat': {
            description: '새 기능',
            title: 'Features',
            emoji: '✨',
          },
          '🐛 fix': {
            description: '버그 수정',
            title: 'Bug Fixes',
            emoji: '🐛',
          },
          '📝 doc': {
            description: '문서 추가/수정',
            title: 'Documentation',
            emoji: '🗒️',
          },
          '💄 style': {
            description:
              '코드 포맷팅, 세미콜론 누락, 코드 자체의 변경 없이 코드 스타일 수정',
            title: 'Styles',
            emoji: '💎',
          },
          '♻️ refactor': {
            description: '코드의 구조/ 형태 개선 / 코드 리팩토링',
            title: 'Code Refactoring',
            emoji: '📦',
          },
          '⚡ improve': {
            description: '성능 개선',
            title: 'Performance Improvements',
            emoji: '⚡',
          },
          '✅ test': {
            description: '테스트 추가/수정',
            title: 'Tests',
            emoji: '✅',
          },
          '👷🏼 build': {
            description: 'CI 빌드 시스템 추가/수정',
            title: 'Builds',
            emoji: '👷🏼',
          },
          '⏪ revert': {
            description: '변경 내용 되돌리기',
            title: 'Reverts',
            emoji: '🗑',
          },
          '🔥 remove': {
            description: '코드/파일 삭제',
          },
          '🎉 begin': {
            description: '프로젝트 시작',
          },
          '🚑 Hotfix': {
            description: '긴급 수정',
          },
          '💚 design': {
            description: 'UI/스타일 파일 추가/수정 ',
          },
          '🗝️ security': {
            description: '보안과 관련한 내용이 추가, 수정, 삭제가 되었을 경우',
          },
          '🔖 release': {
            description: '릴리즈/버전 태그',
          },
          '📌 pin': {
            description: '특정 버전 의존성 고정',
          },
          '📈 track': {
            description: '분석, 추적 코드 추가/수정',
          },
          '➕ depend': {
            description: '의존성 추가',
          },
          '➖ depend': {
            description: '의존성 제거',
          },
          '🔧 config': {
            description: '구성 파일 추가/수정',
          },
          '🔨 script': {
            description: '개발 스크립트 추가/수정',
          },
          '🌐 local': {
            description: '국제화/현지화',
          },
          '💩 bad': {
            description: '똥 싼 코드',
          },
          '🔀 merge': {
            description: '브랜치 머지',
          },
          '📦 package': {
            description: '컴파일된 파일 추가/수정',
          },
          '🚚 move': {
            description: '리소스 이동 / 이름 변경',
          },
          '📄 license': {
            description: '라이센스 추가/수정',
          },
          '💡 comment': {
            description: '주석 추가/수정',
          },
          '🔊 log': {
            description: '로그 추가/수정',
          },
          '🙈 gitignore': {
            description: '.gitignore 추가/수정',
          },
          '🗃️ database': {
            description: '데이버베이스 관련 수정',
          },
        },
      },
      subject: {
        description:
          '제목(subject)을 작성하세요 ex) 클래스의 구조 변경 및 엔티티 관리 기능 강화',
      },
      body: {
        description:
          '본문(body)을 작성하세요. 왜 이 커밋을 작성하게 되었는지, 왜 그렇게 했는지',
      },
    },
  },
};
