import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/common/Layout';

export function TermsOfServicePage() {
  const navigate = useNavigate();

  return (
    <Layout title="이용약관" showBackButton onBack={() => navigate(-1)}>
      <div className="prose prose-sm max-w-none text-[var(--color-text-primary)]">
        <p className="text-sm text-[var(--color-text-secondary)] mb-6">
          시행일: 2026년 2월 3일
        </p>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">제1조 (목적)</h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            이 약관은 EmotiDiary(이하 "서비스")가 제공하는 감정 일기 서비스의
            이용조건 및 절차, 이용자와 서비스의 권리, 의무, 책임사항과
            기타 필요한 사항을 규정함을 목적으로 합니다.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">제2조 (정의)</h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            이 약관에서 사용하는 용어의 정의는 다음과 같습니다.
          </p>
          <ul className="list-disc list-inside mt-3 space-y-2 text-[var(--color-text-secondary)]">
            <li>"서비스"란 EmotiDiary가 제공하는 감정 일기 작성 및 관련 서비스를 말합니다.</li>
            <li>"이용자"란 서비스에 접속하여 이 약관에 따라 서비스를 이용하는 자를 말합니다.</li>
            <li>"콘텐츠"란 이용자가 서비스를 통해 작성한 일기, 감정 기록 등을 말합니다.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">제3조 (약관의 효력 및 변경)</h2>
          <ul className="list-decimal list-inside space-y-2 text-[var(--color-text-secondary)]">
            <li>이 약관은 서비스를 이용하고자 하는 모든 이용자에게 그 효력이 발생합니다.</li>
            <li>서비스는 필요한 경우 약관을 변경할 수 있으며, 변경된 약관은 서비스 내 공지사항을 통해 공지합니다.</li>
            <li>이용자가 변경된 약관에 동의하지 않는 경우, 서비스 이용을 중단할 수 있습니다.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">제4조 (서비스의 제공)</h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            서비스는 다음과 같은 기능을 제공합니다.
          </p>
          <ul className="list-disc list-inside mt-3 space-y-2 text-[var(--color-text-secondary)]">
            <li>감정 선택 및 기록 기능</li>
            <li>일기 작성 및 저장 기능</li>
            <li>일기 이미지 저장 기능</li>
            <li>기타 서비스가 정하는 부가 기능</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">제5조 (서비스의 변경 및 중단)</h2>
          <ul className="list-decimal list-inside space-y-2 text-[var(--color-text-secondary)]">
            <li>서비스는 운영상, 기술상의 필요에 따라 서비스의 전부 또는 일부를 변경할 수 있습니다.</li>
            <li>서비스는 다음 각 호에 해당하는 경우 서비스의 전부 또는 일부를 제한하거나 중단할 수 있습니다.
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>시스템 정기점검, 증설 및 교체를 위해 필요한 경우</li>
                <li>천재지변, 정전, 장애 등으로 정상적인 서비스 제공이 불가능한 경우</li>
                <li>기타 불가피한 사유가 있는 경우</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">제6조 (이용자의 의무)</h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            이용자는 다음 각 호의 행위를 하여서는 안 됩니다.
          </p>
          <ul className="list-disc list-inside mt-3 space-y-2 text-[var(--color-text-secondary)]">
            <li>타인의 개인정보를 도용하는 행위</li>
            <li>서비스의 운영을 고의로 방해하는 행위</li>
            <li>서비스를 이용하여 법령 또는 공서양속에 위반되는 행위</li>
            <li>타인의 명예를 손상시키거나 불이익을 주는 행위</li>
            <li>서비스의 저작권, 제3자의 저작권 등 기타 권리를 침해하는 행위</li>
            <li>기타 관계 법령에 위배되는 행위</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">제7조 (콘텐츠의 저작권)</h2>
          <ul className="list-decimal list-inside space-y-2 text-[var(--color-text-secondary)]">
            <li>이용자가 작성한 콘텐츠의 저작권은 해당 이용자에게 귀속됩니다.</li>
            <li>서비스는 이용자가 작성한 콘텐츠를 서비스 운영, 개선, 홍보 등의 목적으로 사용할 수 있습니다.</li>
            <li>서비스가 제공하는 서비스, 디자인, 로고 등에 대한 저작권은 서비스에 귀속됩니다.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">제8조 (광고 게재)</h2>
          <ul className="list-decimal list-inside space-y-2 text-[var(--color-text-secondary)]">
            <li>서비스는 서비스 운영과 관련하여 서비스 화면에 광고를 게재할 수 있습니다.</li>
            <li>서비스는 Google AdSense 등 제3자 광고 서비스를 이용할 수 있습니다.</li>
            <li>광고 게재로 인해 발생하는 손해에 대해 서비스는 책임지지 않습니다.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">제9조 (면책조항)</h2>
          <ul className="list-decimal list-inside space-y-2 text-[var(--color-text-secondary)]">
            <li>서비스는 천재지변, 전쟁 등 불가항력으로 인하여 서비스를 제공할 수 없는 경우 책임이 면제됩니다.</li>
            <li>서비스는 이용자의 귀책사유로 인한 서비스 이용의 장애에 대하여 책임을 지지 않습니다.</li>
            <li>서비스는 이용자가 서비스를 통해 기대하는 수익을 얻지 못하거나 상실한 것에 대하여 책임을 지지 않습니다.</li>
            <li>서비스는 이용자가 작성한 콘텐츠의 신뢰도, 정확성 등에 대하여 책임을 지지 않습니다.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">제10조 (분쟁 해결)</h2>
          <ul className="list-decimal list-inside space-y-2 text-[var(--color-text-secondary)]">
            <li>서비스와 이용자 간에 발생한 분쟁에 관한 소송은 대한민국 법률에 따릅니다.</li>
            <li>서비스와 이용자 간에 발생한 분쟁에 관한 소송의 관할법원은 민사소송법상의 관할법원으로 합니다.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">부칙</h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            이 약관은 2026년 2월 3일부터 시행합니다.
          </p>
        </section>
      </div>
    </Layout>
  );
}
