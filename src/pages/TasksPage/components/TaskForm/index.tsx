import React, { useRef, useContext } from 'react'
import { TaskDispatchContext } from '../../../../context/taskContext'
import { ActionType } from '../../../../reducers/tasks_reducer'

// interface TaskFormProps {
//   onAdd: (text: string) => void
// }

export function TaskForm() {
  const dispatch = useContext(TaskDispatchContext)

  const descriptionInputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const text = descriptionInputRef.current!.value

    const form = (event.target as HTMLFormElement)
    form.reset()
    descriptionInputRef.current!.focus()

    dispatch({ type: ActionType.Added, payload: { text } })
  }


  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={descriptionInputRef} placeholder="Descrição da Task" />
      <input type="submit" value="Adicionar Tarefa" />
    </form>
  )
}