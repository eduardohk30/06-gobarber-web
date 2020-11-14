import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

/*
 * Quando não precisamos informar nada alem de associar
 * as props de um componente, ao invés de criarmos a interface
 * utilizamos o type mesmo, assim o componente vai assumir todas
 * as funções do objeto informado
 */

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container type="button" {...rest}>
    {children}
  </Container>
);

export default Button;
