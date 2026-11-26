import React, {useState} from 'react';
import {datasource} from './Data';
import {Picker} from '@react-native-picker/picker';
import {View, Text, Button, TextInput} from 'react-native';

const Add = ( {navigation} ) => {
    const [letter, setLetter] = useState('');
    const [type, setType] = useState('');

    return (
        <View style={{marginTop: 30}}>
            <Text>Letter: </Text>
            <TextInput maxLength={1}
                       style={{borderWidth: 1}}
                       onChangeText={(text) => setLetter(text)}
            />
            <Picker onValueChange={(text) => setType(text)}>
                <Picker.Item label="Vowels" value="Vowels"/>
                <Picker.Item label="Consonants" value="Consonants"/>
            </Picker>
            <Button title="Add" onPress={() => {
                let item = {key: letter};
                let indexnum = 1;
                if (type == "Vowels") {
                    indexnum = 0;
                }
                datasource[indexnum].data.push(item);
                navigation.navigate("Home")
            }}
            />
        </View>
    );
};

export default Add;