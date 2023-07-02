import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Button,
  SafeAreaView,
  FlatList,
  Alert,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {RoutesName} from '../../navigation';
import {NavigationController} from '../../navigation/NavigationController';
import {URL_IMAGE} from '../../helper/constant';
import Images from '../../assets/Home';
import {moderateScale, getWidth, getHeight} from '../../helper';
import {useEffect, useState} from 'react';
// import React, {useState} from 'react';

const listName = [
  {
    id: '1',
    name: 'Buy pears',
    image: Image.delete,
  },
  {
    id: '2',
    name: 'Buy milk',
    image: Image.delete,
  },
  {
    id: '3',
    name: 'Buy orange',
    image: Image.delete,
  },
  {
    id: '4',
    name: 'Buy mangos',
    image: Image.delete,
  },
  {
    id: '5',
    name: 'Buy Apple',
    image: Image.delete,
  },
  {
    id: '7',
    name: 'Buy Banana',
    image: Image.delete,
  },
];

const Detail = ({navigation}) => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState('');
  const [id, setId] = useState('');

  console.log({data});

  function makeid(length) {
    let result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

  const getItem = (name, id) => {
    setInput(name);
    setId(id);
  };

  const onDelete = id => {
    const filterData = data.filter(item => item.id !== id);
    setData(filterData);
  };

  const onCreate = () => {
    if (input) {
      //  makeid(8) la tu cho 8 ky tu cua lenght
      setData([...data, {id: makeid(8), name: input, image: Images.delete}]);
      setInput('');
    }
  };

  const onEdit = () => {
    setData([...data, {id: 1, name: input, image: Images.delete}]);
  };

  const ItemRender = ({namee, id}) => (
    <View style={styles.item}>
      <Text style={styles.itemText} onPress={() => getItem(namee, id)}>
        {namee}
      </Text>
      <TouchableOpacity onPress={() => onDelete(id)}>
        <Image style={styles.delete} source={Images.delete} />
      </TouchableOpacity>
    </View>
  );

  useEffect(() => {
    setData(listName);
  }, []);

  return (
    <SafeAreaView style={styles.MainContainer}>
      {/* <Button title="go to Home" onPress={() => navigation.navigate('Home')} /> */}
      <Text onPress={() => NavigationController.goBack()}>Detail</Text>
      <View style={styles.todo}>
        <Text style={styles.text}>TODO</Text>
        {/* <Image style={styles.plus} source={Images.plus} /> */}
      </View>
      <View
        style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <TextInput
          style={{
            marginHorizontal: 10,
            marginVertical: 10,
            padding: 8,
            borderWidth: 1,
            display: 'flex',
            flex: 1,
          }}
          placeholder="Enter name"
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity style={{paddingHorizontal: 10}} onPress={onCreate}>
          <Image style={styles.plus} source={Images.plus} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <ItemRender namee={item.name} image={item.image} id={item.id} />
        )}
      />
    </SafeAreaView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  todo: {
    backgroundColor: 'lightgreen',
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
    color: 'black',
  },
  plus: {
    width: 25,
    height: 25,
  },
  delete: {
    height: 30,
    width: 30,
  },
});
