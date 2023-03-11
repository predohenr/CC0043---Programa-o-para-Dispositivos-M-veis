import React from 'react';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#999999',
    backgroundColor: '#FFFFFF',
  },
  touch:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
  },
  header:{
    fontSize: 18,
    fontWeight: 'bold'
  }
});

const CustomRow = ({ nome, chave, horario, devolvida }) => (
  <View style={styles.container}>
    <TouchableOpacity
      style={styles.touch}
      onLongPress={() => {
        if (!devolvida) {
          Alert.alert((nome));
        }}}
      delayLongPress={500}>
      <View>
        <Text style={styles.header}>{nome} - Chave: {chave}</Text>
        <Text>horário: {horario}</Text>
      </View>
      <Icon name={devolvida ? 'check-circle-outline' : 'alert-circle'}
        color={devolvida ? 'green' : 'red'}
        size={30}
      />
    </TouchableOpacity>
  </View>
);

export default CustomRow;