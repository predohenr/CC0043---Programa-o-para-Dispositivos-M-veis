import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomListView from '../../components/home/CustomListView';
import FilterPopUpMenu from '../../components/home/FilterPopUpMenu';
import Theme from '../../themes/LabKeyTheme';
import Card from '../../components/home/Card';

function getData(){
  let data = { 
    todos_emprestimos:[
      {nome: 'Fulano', contato:'fulano@email.com', chave: 'k01', horario: '09:34 de 10/03/2023', devolvida: true},
      {nome: 'Jose', contato:'jose@email.com', chave: 'k02', horario: '08:43 de 10/03/2023', devolvida: true},
      {nome: 'Paulo', contato:'paulo@email.com', chave: 'k01', horario: '12:21 de 10/03/2023', devolvida: true},
      {nome: 'Pedro', contato:'pedro@email.com', chave: 'k04', horario: '11:22 de 10/03/2023', devolvida:true},
      {nome: 'Artur', contato:'artur@email.com', chave: 'k04', horario: '13:56 de 11/03/2023', devolvida:true},
      {nome: 'Kevin', contato:'kevin@email.com', chave: 'k03', horario: '08:22 de 11/03/2023', devolvida:true},
      {nome: 'Julia', contato:'julia@email.com', chave: 'k03', horario: '14:23 de 11/03/2023', devolvida:true},
      {nome: 'Silvia', contato:'silvia@email.com', chave: 'k02', horario: '16:44 de 11/03/2023', devolvida:true},
      {nome: 'Marcos', contato:'marcos@email.com', chave: 'k02', horario: '10:15 de 12/03/2023', devolvida:false},
      {nome: 'Maria', contato:'maria@email.com', chave: 'k04', horario: '09:11 de 12/03/2023', devolvida:false}
    ],
    todas_chaves:[
      {chave: 'k01', statusEmprestada: false},
      {chave: 'k01', statusEmprestada: false},
      {chave: 'k01', statusEmprestada: false},
      {chave: 'k02', statusEmprestada: false},
      {chave: 'k02', statusEmprestada: false},
      {chave: 'k02', statusEmprestada: false},
      {chave: 'k03', statusEmprestada: false},
      {chave: 'k03', statusEmprestada: false},
      {chave: 'k03', statusEmprestada: false},
      {chave: 'k04', statusEmprestada: false},
      {chave: 'k04', statusEmprestada: true},
      {chave: 'k04', statusEmprestada: true}
    ]
  };
  let dataJason = JSON.stringify(data);
  return JSON.parse(dataJason);
}

export default function HomeScreen() {

  const [filter, setFilter] = useState({
    tableFilter: 2,
    label: 'Esse M??s'
  });

  const emprestimos = filter.tableFilter == 1 && {
    data: getData()['todos_emprestimos'].filter(e => e['devolvida']),
    total: getData()['todos_emprestimos'].filter(e => e['devolvida']).length
  } || filter.tableFilter == 2 && {
    data: getData()['todos_emprestimos'],
    total: getData()['todos_emprestimos'].length
  } || filter.tableFilter == 3 && {
    data: getData()['todos_emprestimos'].filter(e => !e['devolvida']),
    total: getData()['todos_emprestimos'].filter(e => !e['devolvida']).length
  };
  const chaves = {
    total: getData()['todas_chaves'].filter(chave => !chave['statusEmprestada']).length
  };

  return (
    <View style={styles.container}>
      <View style={styles.cards}>
        <Card
          titulo='Chaves Emprestadas'
          label={filter.label}
          quantidade={emprestimos.total}
          bgColor={Theme.PrimaryColor}
        />
        <Card
          titulo='Chaves Dispon??veis'
          label={null}
          quantidade={chaves.total}
          bgColor={Theme.PrimaryVariantColor}
        />
      </View>
      <View style={styles.lista}>
        <View style={{flexDirection: 'row', alignItems:'center', justifyContent:'space-between'}}>
          <Text style={styles.tituloLista}>Lista de Empr??stimos:</Text>
          <FilterPopUpMenu filter={setFilter} />
        </View>
        <CustomListView
          itemList={emprestimos.data}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.BackgroundColor,
  },
  cards: {
    flexDirection: 'row',
    justifyContent:'center',
  },
  lista: {
    flex: 1,
    paddingTop: 10,
    marginHorizontal: 10,
  },
  tituloLista:{
    fontSize: 22
  },
});
