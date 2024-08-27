import React, {useEffect, useState} from 'react'
import { useOutletContext } from 'react-router-dom';
import GestaoConteudo from '../../gestao-conteudo/GestaoConteudo';
import Filtros from '../../../components/input/Filtros';
import './FilaDemandas.scss';

function FilaDemandas() {

  const [subSecao, setSubSecao, modoEdicao, setModoEdicao] = useOutletContext();

  useEffect(() => {
    setSubSecao('Fila de Demandas');
    setModoEdicao(["Fila de Demandas",'','']);
  }, [setSubSecao, setModoEdicao]);

  const [input0Focused, setInput0Focused] = useState(false);
  const [input0Value, setInput0Value] = useState('');
  const [input1Focused, setInput1Focused] = useState(false);
  const [input1Value, setInput1Value] = useState('');
  const [input2Focused, setInput2Focused] = useState(false);
  const [input2Value, setInput2Value] = useState('');

  const LimpaCampos = () => {
    setInput0Value("");
    setInput1Value("");
    setInput2Value("");
  }

  const ListaFiltros = [
    { 
      tipo: 'textbox',
      label: 'Código Cliente',
      tamanho: '',
      tipoInput: "numero",
      inputFocused: input0Focused,
      setInputFocused: setInput0Focused,
      inputValue: input0Value,
      setInputValue: setInput0Value,

    },
    
    { 
      tipo: 'textbox',
      label: 'Código Produto',
      tamanho: '',
      tipoInput: "numero",
      inputFocused: input1Focused,
      setInputFocused: setInput1Focused,
      inputValue: input1Value,
      setInputValue: setInput1Value,

    },
    { 
      tipo: 'textbox',
      label: 'Descrição Produto',
      tipoInput: "texto",
      tamanho: '',
      inputFocused: input2Focused,
      setInputFocused: setInput2Focused,
      inputValue: input2Value,
      setInputValue: setInput2Value,

    },
    { 
      tipo: 'selectbox',
      options: ["teste","teste1"],
      placeholder: 'Origem',
      tamanho: '',
    },
    {
      tipo: 'button',
      className: 'search-button',
      dataTooltip: '',
      onClick: () => {},
      path: '/gestaoparametros/gestaocampos',
    },
    {
      tipo: 'button',
      className: 'delete-button',
      dataTooltip: 'Limpar Filtros',
      onClick: () => {LimpaCampos()},

    },
    {
      tipo: 'extra-button',
      className: 'demand-button',
      dataTooltip: 'Exportar Tabelas',
      onClick: () => {LimpaCampos()},

    },
    {
      tipo: 'extra-button',
      className: 'export-button',
      dataTooltip: 'Exportar Tabelas',
      onClick: () => {LimpaCampos()},

    },
  ]

  return (
    <>
      <div className="area-superior-demanda">
        <Filtros ListaComponentes={ListaFiltros}/>
      </div>
      <GestaoConteudo view="sistema-demanda"/>
    </>
  )
}

export default FilaDemandas