import { useRouteError } from "react-router-dom"

const ErrorPage = () => {

  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <h1 className="text-3xl font-bold">Opps...!</h1>
      <h1 className="my-5 font-bold text-9xl">404</h1>
      <p className="text-xl">{error.statusText || error.message}</p>
    </div>
  )
}

export default ErrorPage