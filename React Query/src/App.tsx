import { Suspense } from 'react';
import UseQuery from './components/UseQuery';
import { ErrorBoundary } from 'react-error-boundary';
import UseSuspenseQuery from './components/UseSuspenseQuery';

function App() {
  return (
    <div>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<div>UseQuery Loading...</div>}>
          <UseQuery />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<div>UseSuspenseQuery Loading...</div>}>
          <UseSuspenseQuery />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

function ErrorFallback() {
  return <div>Error!!</div>;
}

export default App;
