import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { View } from '../components/Themed';
import ChatListItem from '../components/ContactListItem';

import Users from '../data/Users';
import { FlatList } from 'react-native-gesture-handler';

export default function Contacts() {
  return (
    <View style={styles.container}>
      <FlatList
        style={{width: '100%'}} 
        data={Users}
        renderItem={({item}) => <ChatListItem user={item} />}
        keyExtractor={(item) => item.id} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
