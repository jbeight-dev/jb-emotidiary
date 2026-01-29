import type { ReactNode } from 'react';
import { ThemeToggle } from './ThemeToggle';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  showBackButton?: boolean;
  onBack?: () => void;
}

export function Layout({
  children,
  title,
  showBackButton = false,
  onBack,
}: LayoutProps) {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-[var(--color-bg-header)] backdrop-blur-md border-b border-[var(--color-border)] shadow-sm">
        <div className="max-w-lg mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            {showBackButton && (
              <button
                onClick={onBack}
                className="mr-3 p-2 -ml-2 rounded-full hover:bg-[var(--color-bg-card)] transition-colors"
                aria-label="뒤로 가기"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
            )}
            {title ? (
              <h1 className="text-xl font-bold text-[var(--color-text-primary)]">
                {title}
              </h1>
            ) : (
              <h1 className="text-xl font-bold text-[var(--color-text-primary)]">
                EmotiDiary
              </h1>
            )}
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-lg mx-auto px-4 py-6">{children}</main>
    </div>
  );
}
