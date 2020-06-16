import React from 'react';
import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete,
} from 'react-icons/md';
import { Container, ProductTable, Total } from './styles';

export default function Cart() {
    return (
        <Container>
            <ProductTable>
                <thead>
                    <tr>
                        <th />
                        <th>Produto</th>
                        <th>Quantidade</th>
                        <th>SubTotal</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img
                                src="https://static.netshoes.com.br/produtos/tenis-mizuno-mirai-3-masculino/20/D16-5542-120/D16-5542-120_detalhe1.jpg?ts=1580228536?ims=280x280"
                                alt="Tênis"
                            />
                        </td>
                        <td>
                            <strong>Tenis muito massa</strong>
                            <span>R$ 129,90</span>
                        </td>
                        <td>
                            <div>
                                <button type="button">
                                    <MdRemoveCircleOutline
                                        size={20}
                                        color="#069"
                                    />
                                </button>
                                <input type="number" value={1} />
                                <button type="button">
                                    <MdAddCircleOutline
                                        size={20}
                                        color="#069"
                                    />
                                </button>
                            </div>
                        </td>
                        <td>
                            <strong>R$ 259,80</strong>
                        </td>
                        <td>
                            <button type="button">
                                <MdDelete size={20} color="#069" />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </ProductTable>

            <footer>
                <button type="button">Finalizar pedido</button>

                <Total>
                    <span>Total</span>
                    <strong>R$ 1920,88</strong>
                </Total>
            </footer>
        </Container>
    );
}
