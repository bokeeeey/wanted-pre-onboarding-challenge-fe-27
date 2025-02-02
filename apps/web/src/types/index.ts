export type ResponseAuthType = {
  message: string
  token: string
}

export type RequestTodoType = {
  title: string
  content: string
}

export type ResponseTodoType = RequestTodoType & {
  id: string
  createdAt: string
  updatedAt: string
  priority: string
}
