import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Todo from './Todo'

describe('Todo component', () => {
  const todo = {
    text: 'Test todo',
    done: false
  }

  it('renders todo text', () => {
    render(
      <Todo
        todo={todo}
        onClickComplete={vi.fn()}
        onClickDelete={vi.fn()}
      />
    )

    expect(screen.getByText('Test todo')).toBeDefined()
  })
})
