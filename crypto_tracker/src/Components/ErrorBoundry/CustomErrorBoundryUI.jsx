import { ErrorBoundary } from "react-error-boundary";

function CustomErrorBoundryUI({ error, resetErrorBoundary }) {
  return (
    <div className="h-lvh flex justify-center items-center px-6">

      <div role="alert" className="alert alert-error">
        <p>Something went wrong</p>
        <div>{error?.message}</div>
        <button onClick={resetErrorBoundary} className="border-2 rounded-md px-2 cursor-pointer">Try again</button>
      </div>
    </div>
  )
}

export default function CustomErrorBoundry({ children }) {
  return (
    <ErrorBoundary fallbackRender={CustomErrorBoundryUI}
      onReset={() => {
        console.log("Try again clicked");
        window.location.reload()
      }}
    >
      {children}
    </ErrorBoundary>
  )
}