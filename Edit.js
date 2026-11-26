import React, {useState} from 'react';
import {datasource} from './Data';
import {Picker} from '@react-native-picker/picker';
import {View, Text, Button, TextInput, Alert} from 'react-native';

const Edit = ( {navigation, route} ) => {
    const [letter, setLetter] = useState(route.params.key);
    const [type, setType] = useState(route.params.type);

    return (
        <View style={{marginTop: 30}}>
            <Text>Letter: </Text>
            <TextInput
                value={letter}
                maxLength={1}
                       style={{borderWidth: 1}}
                       onChangeText={(text) => setLetter(text)}
            />
            <Picker onValueChange={(text) => setType(text)}>
                <Picker.Item label="Vowels" value="Vowels"/>
                <Picker.Item label="Consonants" value="Consonants"/>
            </Picker>
            <Button title="Save" onPress={() => {
                let item = {key: letter};
                let indexnum = 1;
                if (type == "Vowels") {
                    indexnum = 0;
                }
                datasource[indexnum].data[route.params.index].key = letter;
                navigation.navigate("Home")
            }}
            />
            <Button title="Delete" onPress={() => {
                let indexnum = 1;
                if (route.params.type == "Vowels") {
                    indexnum = 0;
                }
                Alert.alert("Are you sure?", '',
                    [{text: 'Yes', onPress: () => {
                        datasource[indexnum].data.splice(route.params.index, 1);
                        navigation.navigate("Home")
                        }},
                        {text: 'No'}])
            }}
            />
        </View>
    );
};

export default Edit;