import { Link } from 'react-router-dom';
import { Layout } from '../components/common/Layout';

export function NotFoundPage() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div className="text-6xl mb-4">
          😢
        </div>
        <h1 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">
          페이지를 찾을 수 없어요
        </h1>
        <p className="text-[var(--color-text-secondary)] mb-6">
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있어요.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-[var(--color-primary)] text-white rounded-full font-medium hover:opacity-90 transition-opacity"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </Layout>
  );
}
