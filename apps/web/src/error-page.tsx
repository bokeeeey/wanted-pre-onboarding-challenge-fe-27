import { isRouteErrorResponse, useRouteError } from "react-router-dom"

export default function ErrorPage() {
  const error = useRouteError()
  let errorMessage: string

  if (isRouteErrorResponse(error)) {
    errorMessage = error.data?.message || error.statusText
  } else if (error instanceof Error) {
    errorMessage = error.message
  } else if (typeof error === "string") {
    errorMessage = error
  } else {
    errorMessage = "Unknown error"
  }

  console.error(error)

  return (
    <div>
      <h1>문제가 생겼어요!</h1>
      <p>죄송하지만 현재 발생한 문제로 인해서 해당 페이지로 접근이 어렵습니다.</p>
      <p>
        <i>{errorMessage}</i>
      </p>
    </div>
  )
}
