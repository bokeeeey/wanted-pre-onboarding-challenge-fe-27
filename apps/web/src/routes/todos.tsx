import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RequestTodoType } from "@/types"
import { SubmitHandler, useForm } from "react-hook-form"

// const mock = {
//   data: [
//     {
//       title: "hi",
//       content: "hello",
//       id: "z3FGrcRL55qDCFnP4KRtn",
//       createdAt: "2022-07-24T14:15:55.537Z",
//       updatedAt: "2022-07-24T14:15:55.537Z",
//       priority: "urgent",
//     },
//     {
//       title: "hi",
//       content: "hello",
//       id: "z3FGrcRL55qDCFnP4KRtn",
//       createdAt: "2022-07-24T14:15:55.537Z",
//       updatedAt: "2022-07-24T14:15:55.537Z",
//       priority: "normal",
//     },
//   ],
// }

export default function Todos() {
  // TODO : token 유효하지 않을경우 로그인으로
  // TODO : Todo Details Empty case 추가하기

  const form = useForm({
    defaultValues: {
      title: "",
      content: "",
    },
    mode: "onSubmit",
  })

  const onSubmit: SubmitHandler<RequestTodoType> = (payload) => {
    console.log(payload)
  }

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold">Todo Dashboard</h1>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Todo List</CardTitle>
            <CardDescription>Manage your tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-6">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                          <Input id="title" type="text" placeholder="Enter todo title" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea id="content" placeholder="Enter todo description" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <Button type="submit">+ Add Todo</Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Todo Details</CardTitle>
            <CardDescription>View and edit todo details</CardDescription>
            <CardContent>Select a todo to view details</CardContent>
          </CardHeader>
        </Card>
      </div>
    </div>
  )
}
