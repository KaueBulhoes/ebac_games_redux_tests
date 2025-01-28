import { fireEvent, screen } from '@testing-library/react'
import Produto from '..'
import { renderizaComProvider } from '../../../utils/tests'

const jogo = {
  id: 2,
  categoria: 'RPG',
  imagem: '',
  plataformas: ['Windows', 'PS5', 'Xbox Seris S/X'],
  preco: 199.9,
  precoAntigo: 299.9,
  titulo: 'Hogwarts Legacy'
}

describe('Teste para Produto', () => {
  test('Deve renderizar', () => {
    renderizaComProvider(<Produto game={jogo} />)
    expect(screen.getByText('Hogwarts Legacy')).toBeInTheDocument()
  })

  test('Deve add um item ao carrinho', () => {
    const { store } = renderizaComProvider(<Produto game={jogo} />)
    const botao = screen.getByTestId('btn-add-produto')
    fireEvent.click(botao)

    expect(store.getState().carrinho.itens).toHaveLength(1)
  })
})
