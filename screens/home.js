import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


export default function Home ({navigation}) {
  return (
<View style={styles.container}>
    <Text>Home</Text>
    <Button title="Go to details" onPress={()=> navigation.navigate('Details',{

itemId: 86,
name: "San",
    })} />
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
