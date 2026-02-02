import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/common/Layout';

export function PrivacyPolicyPage() {
  const navigate = useNavigate();

  return (
    <Layout title="개인정보처리방침" showBackButton onBack={() => navigate(-1)}>
      <div className="prose prose-sm max-w-none text-[var(--color-text-primary)]">
        <p className="text-sm text-[var(--color-text-secondary)] mb-6">
          시행일: 2026년 2월 3일
        </p>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">1. 개인정보의 처리 목적</h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            EmotiDiary(이하 "서비스")는 다음의 목적을 위하여 개인정보를 처리합니다.
            처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며,
            이용 목적이 변경되는 경우에는 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
          </p>
          <ul className="list-disc list-inside mt-3 space-y-2 text-[var(--color-text-secondary)]">
            <li>감정 일기 서비스 제공 및 운영</li>
            <li>서비스 이용 기록 분석 및 서비스 개선</li>
            <li>사용자 맞춤형 콘텐츠 제공</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">2. 처리하는 개인정보의 항목</h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            서비스는 다음의 개인정보 항목을 처리하고 있습니다.
          </p>
          <ul className="list-disc list-inside mt-3 space-y-2 text-[var(--color-text-secondary)]">
            <li>필수항목: 감정 선택 정보, 일기 내용, 서비스 이용 기록</li>
            <li>자동 수집 항목: 접속 로그, 쿠키, 접속 IP 정보, 브라우저 종류</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">3. 개인정보의 처리 및 보유 기간</h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            서비스는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터
            개인정보를 수집 시에 동의 받은 개인정보 보유·이용기간 내에서
            개인정보를 처리·보유합니다.
          </p>
          <ul className="list-disc list-inside mt-3 space-y-2 text-[var(--color-text-secondary)]">
            <li>일기 데이터: 사용자가 직접 삭제하거나 서비스 탈퇴 시까지</li>
            <li>서비스 이용 기록: 1년</li>
            <li>접속 로그: 3개월</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">4. 개인정보의 제3자 제공</h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            서비스는 원칙적으로 이용자의 개인정보를 제3자에게 제공하지 않습니다.
            다만, 아래의 경우에는 예외로 합니다.
          </p>
          <ul className="list-disc list-inside mt-3 space-y-2 text-[var(--color-text-secondary)]">
            <li>이용자가 사전에 동의한 경우</li>
            <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">5. 개인정보의 파기</h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            서비스는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가
            불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.
          </p>
          <ul className="list-disc list-inside mt-3 space-y-2 text-[var(--color-text-secondary)]">
            <li>전자적 파일 형태: 복구 및 재생되지 않도록 안전하게 삭제</li>
            <li>기타 기록물: 분쇄하거나 소각하여 파기</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">6. 정보주체의 권리·의무 및 행사방법</h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            이용자는 개인정보주체로서 다음과 같은 권리를 행사할 수 있습니다.
          </p>
          <ul className="list-disc list-inside mt-3 space-y-2 text-[var(--color-text-secondary)]">
            <li>개인정보 열람 요구</li>
            <li>오류 등이 있을 경우 정정 요구</li>
            <li>삭제 요구</li>
            <li>처리 정지 요구</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">7. 개인정보의 안전성 확보 조치</h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            서비스는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.
          </p>
          <ul className="list-disc list-inside mt-3 space-y-2 text-[var(--color-text-secondary)]">
            <li>개인정보의 암호화</li>
            <li>해킹 등에 대비한 기술적 대책</li>
            <li>접속 기록의 보관 및 위·변조 방지</li>
            <li>개인정보에 대한 접근 제한</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">8. 쿠키의 사용</h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            서비스는 이용자에게 개별적인 맞춤서비스를 제공하기 위해 '쿠키(cookie)'를
            사용합니다. 쿠키는 웹사이트가 이용자의 컴퓨터 브라우저로 전송하는
            소량의 정보입니다. 이용자는 웹 브라우저의 옵션을 설정함으로써
            모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나,
            모든 쿠키의 저장을 거부할 수 있습니다.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">9. 광고성 정보 전송</h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            서비스는 Google AdSense를 통해 광고를 게재할 수 있습니다.
            Google AdSense는 쿠키를 사용하여 이용자의 관심사에 기반한
            광고를 표시합니다. 이용자는 Google 광고 설정에서
            맞춤 광고를 비활성화할 수 있습니다.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">10. 개인정보 보호책임자</h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            서비스는 개인정보 처리에 관한 업무를 총괄해서 책임지고,
            개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여
            아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
          </p>
          <div className="mt-3 p-4 bg-[var(--color-bg-card)] rounded-lg text-[var(--color-text-secondary)]">
            <p><strong>개인정보 보호책임자</strong></p>
            <p>이메일: jungbyung8@gmail.com</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">11. 개인정보처리방침 변경</h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            이 개인정보처리방침은 2026년 2월 3일부터 적용됩니다.
            이전의 개인정보처리방침은 아래에서 확인하실 수 있습니다.
          </p>
        </section>
      </div>
    </Layout>
  );
}
