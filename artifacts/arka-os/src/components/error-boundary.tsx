import {
  Component,
  type ComponentType,
  type ErrorInfo,
  type ReactNode,
} from 'react';

export interface ErrorFallbackProps {
  error: Error;
  resetError: () => void;
}

interface ErrorBoundaryProps {
  children: ReactNode;
  FallbackComponent?: ComponentType<ErrorFallbackProps>;
  /** Changing this clears a caught error. Pass the route to recover on navigation. */
  resetKey?: unknown;
}

interface ErrorBoundaryState {
  error: Error | null;
  componentStack?: string | null;
}

function toError(value: unknown): Error {
  if (value instanceof Error) {
    return value;
  }
  if (typeof value === 'string') {
    return new Error(value);
  }
  try {
    return new Error(JSON.stringify(value));
  } catch {
    return new Error(String(value));
  }
}

function DefaultFallback({ error, resetError }: ErrorFallbackProps) {
  const handleClearSession = () => {
    try {
      localStorage.clear();
      sessionStorage.clear();
    } catch {}
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-6">
      <div className="max-w-xl w-full text-center bg-white p-8 rounded-3xl shadow-xl border border-slate-200">
        <div className="size-12 mx-auto rounded-2xl bg-red-100 text-red-600 flex items-center justify-center text-xl font-black mb-4">
          ⚠️
        </div>
        <h1 className="text-xl font-black text-gray-900">
          Something went wrong
        </h1>
        <p className="mt-2 text-xs text-gray-500">
          This part of the app hit an error. Click below to recover or reset your session.
        </p>

        {error && (
          <pre className="mt-4 overflow-x-auto rounded-xl bg-red-50 border border-red-200 p-3 text-left text-xs text-red-700 font-mono font-bold leading-relaxed">
            {error.message || String(error)}
          </pre>
        )}

        {error?.stack && (
          <details className="mt-3 text-left">
            <summary className="text-[11px] font-bold text-slate-500 cursor-pointer hover:text-slate-800">
              Show Component Stack & Line Info
            </summary>
            <pre className="mt-2 max-h-48 overflow-auto rounded-lg bg-slate-900 p-3 text-[10px] text-slate-200 font-mono whitespace-pre-wrap leading-normal">
              {error.stack}
            </pre>
          </details>
        )}

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={resetError}
            className="rounded-xl bg-gray-900 px-5 py-2.5 text-xs font-bold text-white hover:bg-gray-700 transition cursor-pointer"
          >
            Try again
          </button>
          <button
            type="button"
            onClick={handleClearSession}
            className="rounded-xl bg-[#f8c329] px-5 py-2.5 text-xs font-bold text-black hover:bg-amber-400 transition cursor-pointer shadow-xs"
          >
            Clear Session & Re-login
          </button>
        </div>
      </div>
    </div>
  );
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { error: null, componentStack: null };

  static getDerivedStateFromError(error: unknown): ErrorBoundaryState {
    return { error: toError(error) };
  }

  componentDidCatch(error: unknown, info: ErrorInfo): void {
    const err = toError(error);
    console.error(
      'ErrorBoundary caught an error:',
      err,
      info.componentStack,
    );
    this.setState({ error: err, componentStack: info.componentStack });
  }

  componentDidUpdate(prevProps: ErrorBoundaryProps): void {
    if (
      this.state.error !== null &&
      prevProps.resetKey !== this.props.resetKey
    ) {
      this.resetError();
    }
  }

  resetError = (): void => {
    this.setState({ error: null, componentStack: null });
  };

  render(): ReactNode {
    const { error } = this.state;
    if (error === null) {
      return this.props.children;
    }
    const Fallback = this.props.FallbackComponent ?? DefaultFallback;
    return <Fallback error={error} resetError={this.resetError} />;
  }
}
