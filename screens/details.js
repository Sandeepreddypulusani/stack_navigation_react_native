import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Details({navigation, route}) {
    const itemid = route.params.itemId
    const name = route.params.name
  return (
<View style={styles.container}>
    <Text>Details</Text>
  <Text>{itemid}</Text>
  <Text>{name}</Text>
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
