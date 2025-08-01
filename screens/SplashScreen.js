import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
 useEffect(() => {
  const timeout = setTimeout(() => {
    navigation.replace('Login');
  }, 2000);

  return () => clearTimeout(timeout); // good practice to clean up timeout
}, [navigation]);


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to LazyCheck</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' },
  text: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
});

export default SplashScreen;
