import React, { useState } from 'react';
import { Alert, Button, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';
import Theme from '../themes/LabKeyTheme';

export default function LoginScreen() {

  const navigation = useNavigation();

  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const logar = () => {
    if (usuario.toLocaleLowerCase() === 'admin' && senha.toLocaleLowerCase() === 'admin'){
      navigation.dispatch(
        StackActions.replace('HomeNavigator')
      );
    } else {
      Alert.alert('Usuário ou Senha Incorreto(s)');
    }
  }

  return (
    <ScrollView style={styles.container}>
        <View style={styles.logoView}>
          <Image
            style={styles.logo}
            source={require('../assets/logo.png')}
          />
          <Text style={styles.textLogo}>Faça seu Login:</Text>
        </View>
        <View style={styles.formView}>
          <TextInput
            style={styles.input} 
            placeholder="Digite seu Usuário"
            onChangeText={(usuario) => setUsuario(usuario)}
            value={usuario}
          />
          <TextInput
            secureTextEntry={true} 
            style={styles.input}  
            placeholder="Digite sua Senha"
            onChangeText={(senha) => setSenha(senha)}
            value={senha}
          />
          <Button title='Entrar' onPress={logar} />
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.BackgroundColor,
  },
  logoView:{
    marginBottom: 25,
  },
  logo:{
    height: 250,
    width: 250,
    marginTop: 25,
    alignSelf:'center',
  },
  textLogo:{
    alignSelf:'center',
    fontSize: 24
  },
  formView:{
    flex: 1,
    alignItems:'center',
    marginBottom: 50,
  },
  input: {
    borderWidth: 1,
    paddingHorizontal: 5,
    height: 40,
    width: 300,
    marginBottom: 10,
    marginHorizontal: '10%',
    borderRadius: 10,
  },
});
