import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

/*
 * precisamos de algumas variáveis para utilizar o unform:
 * registerField: é o registro que precisamos fazer no input
 * que é feito assim que o registro é exibido
 * em tela, que usamos em conjunto com o useEffect,
 * a função registerField precisa de algumas
 * informações:
 *
 * fieldName: É o nome do campo do input
 * ref: uma referencia para o input, que são formas de acessar
 * o elemento de forma direta sem precisar usar algum estado,
 * para isso usaremos em conjunto uma das funções do react chamada useRef
 *
 * defaultValue: Permine definir um valor inicial no input
 * para isso no componente form ficaria assim:
 * <Form initialData={{ email: 'teste@teste.com.br '}} />
 * no exemplo acima o input que fica dentro do form com o nome
 * email vai iniciar com o valor padrão 'test@teste.com.br'
 *
 * error: É uma mensagem padrão que será apresentada caso
 * o input em questão apresente algum erro
 */

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  // o HTMLInputElement abaixo informa que o useRef vai receber um
  // input como parametro, fazemos isso pois o typescript precisa saber
  // qual a tipagem
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  /*
   * Quando há uma função dentro de outra função, como é o caso agora
   * com const Input lá em cima e essa handleInputBlur, toda a vez
   * que a função Input for chamada ela irá recriar na memória a função
   *
   * function handleInputBlur() {
   *   setIsFocused(false);
   * }
   *
   * o hook useCallback, para isso, mudaremos transformaremos a função acima
   * numa arrow function e incluiremos o useCallback dentro dela:
   */
  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    // a ? indica que esse if só será executado
    // caso houver algum conteúdo em inputRef
    setIsFilled(!!inputRef.current?.value);
  }, []);
  /* o array acima indica quando essa função será criada novamente
   * de deixarmos ela em branco, quer dizer que ela nunca será criada
   * novamente */

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current, // a opção current é onde fica a referencia do input
      path: 'value', // onde o unform vai buscar o valor do input
    });
  }, [fieldName, registerField]);
  /*
   *  acima é onde precisamos informar quais são os métodos / variáveis
   * que devem ser observadas quando houver alteração
   */

  return (
    <Container isFocused={isFocused} isFilled={isFilled}>
      {Icon && <Icon size={20} />}
      <input
        onFocus={handleInputFocus} // Quando o input recebe o foco
        onBlur={handleInputBlur} // Quando o input perde o foco
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />
    </Container>
  );
};

export default Input;
