import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Theme from '../../themes/LabKeyTheme';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
        <Text>Tela home</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.BackgroundColor,
  },
});