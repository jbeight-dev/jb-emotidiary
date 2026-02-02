import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/common/Layout';

export function AboutPage() {
  const navigate = useNavigate();

  return (
    <Layout title="서비스 소개" showBackButton onBack={() => navigate(-1)}>
      <div className="prose prose-sm max-w-none text-[var(--color-text-primary)]">
        {/* Hero Section */}
        <section className="text-center mb-10">
          <h2 className="text-2xl font-bold mb-4">
            EmotiDiary
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)]">
            아이들을 위한 감정 일기장
          </p>
        </section>

        {/* 서비스 소개 */}
        <section className="mb-8">
          <h3 className="text-lg font-bold mb-3">EmotiDiary란?</h3>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
            EmotiDiary는 아이들이 매일 자신의 감정을 쉽고 재미있게 표현하고 기록할 수 있도록
            도와주는 감정 일기 서비스입니다. 아이들은 다양한 감정 이모티콘 중에서 오늘의 기분을
            선택하고, 그 감정에 대한 이야기를 일기로 작성할 수 있습니다.
          </p>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            감정을 표현하고 기록하는 습관은 아이들의 정서 발달과 자기 이해에 큰 도움이 됩니다.
            EmotiDiary는 이러한 과정을 즐겁고 의미 있는 경험으로 만들어 드립니다.
          </p>
        </section>

        {/* 주요 기능 */}
        <section className="mb-8">
          <h3 className="text-lg font-bold mb-4">주요 기능</h3>

          <div className="space-y-4">
            <div className="p-4 bg-[var(--color-bg-card)] rounded-lg">
              <h4 className="font-semibold mb-2">다양한 감정 선택</h4>
              <p className="text-sm text-[var(--color-text-secondary)]">
                행복, 감사, 설렘, 평온, 피곤, 슬픔, 불안, 화남, 외로움, 혼란 등
                10가지 다양한 감정 중에서 오늘의 기분을 선택할 수 있습니다.
                각 감정은 아이들이 쉽게 이해할 수 있는 귀여운 이모티콘으로 표현됩니다.
              </p>
            </div>

            <div className="p-4 bg-[var(--color-bg-card)] rounded-lg">
              <h4 className="font-semibold mb-2">간편한 일기 작성</h4>
              <p className="text-sm text-[var(--color-text-secondary)]">
                선택한 감정에 맞는 질문과 함께 일기를 작성할 수 있습니다.
                "오늘 왜 이런 기분이 들었나요?", "무슨 일이 있었나요?" 등의 질문이
                아이들이 자신의 감정을 더 깊이 생각하고 표현하도록 도와줍니다.
              </p>
            </div>

            <div className="p-4 bg-[var(--color-bg-card)] rounded-lg">
              <h4 className="font-semibold mb-2">일기 카드 저장</h4>
              <p className="text-sm text-[var(--color-text-secondary)]">
                작성한 일기는 예쁜 카드 형태의 이미지로 저장할 수 있습니다.
                저장된 일기 카드는 가족과 함께 보거나, 나중에 다시 꺼내보며
                그 날의 감정과 이야기를 추억할 수 있습니다.
              </p>
            </div>

            <div className="p-4 bg-[var(--color-bg-card)] rounded-lg">
              <h4 className="font-semibold mb-2">다크 모드 지원</h4>
              <p className="text-sm text-[var(--color-text-secondary)]">
                밝은 모드와 어두운 모드를 선택할 수 있어,
                사용 환경에 따라 편안하게 일기를 작성할 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 감정 교육의 중요성 */}
        <section className="mb-8">
          <h3 className="text-lg font-bold mb-3">감정 교육의 중요성</h3>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
            감정을 인식하고 표현하는 능력은 아이들의 사회성 발달과 정신 건강에 매우 중요합니다.
            자신의 감정을 이해하는 아이들은 다른 사람의 감정도 더 잘 이해하고 공감할 수 있으며,
            스트레스 상황에서도 더 효과적으로 대처할 수 있습니다.
          </p>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
            일기를 통해 감정을 기록하는 습관은 아이들에게 다음과 같은 도움을 줍니다:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[var(--color-text-secondary)]">
            <li>자기 감정을 인식하고 이름 붙이는 능력 향상</li>
            <li>감정 표현력과 의사소통 능력 발달</li>
            <li>스트레스와 불안 감소</li>
            <li>자기 이해와 자존감 향상</li>
            <li>문제 해결 능력 및 회복탄력성 강화</li>
          </ul>
        </section>

        {/* 사용 방법 */}
        <section className="mb-8">
          <h3 className="text-lg font-bold mb-4">사용 방법</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-7 h-7 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
              <p className="text-[var(--color-text-secondary)]">
                홈 화면에서 오늘의 감정을 선택합니다.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-7 h-7 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
              <p className="text-[var(--color-text-secondary)]">
                선택한 감정에 대한 오늘의 이야기를 일기로 작성합니다.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-7 h-7 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
              <p className="text-[var(--color-text-secondary)]">
                작성한 일기를 카드 이미지로 저장하여 간직합니다.
              </p>
            </div>
          </div>
        </section>

        {/* 마무리 */}
        <section className="mb-8 p-4 bg-[var(--color-bg-card)] rounded-lg text-center">
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            EmotiDiary와 함께 매일 감정을 기록하며,<br />
            아이들의 마음이 건강하게 성장하도록 도와주세요.
          </p>
        </section>
      </div>
    </Layout>
  );
}
