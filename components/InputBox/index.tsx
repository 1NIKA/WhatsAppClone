import { FontAwesome5, MaterialCommunityIcons, Entypo, Fontisto, MaterialIcons } from '@expo/vector-icons';
import React from 'react'
import { useState } from 'react';
import { View, Text } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

const InputBox = () => {

    const [message, setMessage] = useState('');

    const onMicrophonePress = () => {
        console.warn("Microphone");
    }

    const onSendPress = () => {
        console.warn(`Sending: ${message}`);

        // Send message to the Backend

        setMessage('');
    }

    const onPress = () => {
        if (!message) {
            onMicrophonePress();
        }
        else {
            onSendPress();
        }
    }

    return (
        <View>
            <View style={styles.container}>
                <View style={styles.mainContainer}>
                    <FontAwesome5 name="laugh-beam" size={24} color="grey" />
                    <TextInput
                       placeholder="Type a message" 
                       style={styles.textInput} 
                       multiline
                       value={message}
                       onChangeText={setMessage}                   
                    />
                    <Entypo name="attachment" size={24} color="grey" style={styles.icon} />
                    {!message && <Fontisto name="camera" size={24} color="grey" style={styles.icon} /> }
                </View>
                <TouchableOpacity onPress={onPress}>
                    <View style={styles.buttonContainer}>
                        {!message
                        ? <MaterialCommunityIcons name="microphone" size={28} color="white" />
                        : <MaterialIcons name="send" size={28} color="#fff"/>
                        }
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default InputBox;