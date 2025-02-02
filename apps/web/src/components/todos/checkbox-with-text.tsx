import { Checkbox } from "../ui/checkbox"

interface CheckboxWithTextProps {
  id: string
  title: string
  description: string
}

export default function CheckboxWithText({ id, title, description }: CheckboxWithTextProps) {
  return (
    <div className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
      <Checkbox id={id} />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor={id}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {title}
        </label>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
