import React from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {RoutesName} from '../../navigation';
import {NavigationController} from '../../navigation/NavigationController';

import {moderateScale, getWidth, getHeight} from '../../helper';

const Home = () => {
  const [name, setName] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [note, setNote] = React.useState('');
  const [list, setList] = React.useState([]);

  const handleInput = val => {
    setNote(val);
  };

  const handleClear = () => {
    setName('');
    setPrice('');
    setNote('');
    setList([]);
  };
  const addItem = () => {
    // tao 1 array moi = array cu
    const currentList = [...list];

    // name abc
    // price 12
    // note nmnb
    // newItem = { name: 'abc', price: 12, note: 'nmnb'}
    const newItem = {
      name,
      price,
      note,
    };
    // day la viet tat
    // const newItem = {
    //   name: name,
    //   price: price,
    //   note: note,
    // };

    //them newItem vao cuoi array
    currentList.push(newItem);

    // sau khi chay se setList lai voi gia tri cua currentList
    setList(currentList);
  };

  const ItemList = ({item}) => (
    <View style={styles.item}>
      <Text
        style={
          styles.title
        }>{`Name: ${item.name}- Price: ${item.price}- Note: ${item.note}`}</Text>
    </View>
  );

  return (
    <SafeAreaView>
      <Button
        title="Go to Detail"
        textColor={'#4F4F4F'}
        width={moderateScale(100)}
        onPress={() => NavigationController.navigate(RoutesName.Detail)}
      />

      <View style={styles.todo}>
        <Text style={styles.text}>Home Profile</Text>
      </View>

      <TextInput
        style={styles.input}
        onChangeText={text => {
          setName(text);
        }}
        placeholder="name"
        value={name}
      />
      <TextInput
        style={styles.input}
        keyboardType={'numeric'}
        onChangeText={v => {
          setPrice(v);
        }}
        placeholder="price"
        value={price}
      />
      <TextInput
        style={styles.input}
        onChangeText={e => handleInput(e)}
        value={note}
        placeholder="note"
      />
      <TouchableOpacity
        style={styles.TouchableOpacity}
        onPress={() => addItem()}>
        <Text style={styles.itemText}>submit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.TouchableOpacity}>
        <Text style={styles.itemText} onPress={() => handleClear()}>
          clear
        </Text>
      </TouchableOpacity>
      <FlatList
        data={list}
        renderItem={({item}) => <ItemList item={item} />}
        keyExtractor={item => item.name}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  todo: {
    backgroundColor: 'red',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  text: {
    color: 'white',
  },
  item: {
    paddingLeft: 15,
    paddingTop: 8,
    paddingBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  itemText: {
    fontSize: 15,
    color: 'white',
  },
  plus: {
    width: 25,
    height: 25,
  },
  delete: {
    height: 30,
    width: 30,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  TouchableOpacity: {
    backgroundColor: 'red',
    height: 30,
    alignItems: 'center',
    width: 100,
    justifyContent: 'center',
    marginTop: 10,
  },
  searchIcon: {
    height: moderateScale(30),
    width: moderateScale(30),
    left: moderateScale(110),
  },
  filterIcon: {
    height: 30,
    width: 30,
  },
});
