import React, { useState } from 'react';
import { SafeAreaView, Alert, AsyncStorage,TouchableOpacity, TextInput, Text, StyleSheet } from 'react-native';
import api from '../service/api';


export default function Book({ navigation }){
    const id = navigation.getParam('id');
    const [date, setDate] = useState('');

    async function handleSubmit(){
        const user_id = await AsyncStorage.getItem('user');

        await api.post(`/spots/${id}/booking`, {
            date
        }, {
            headers: { user_id }
        })    

        Alert.alert('Solicitação de reserva enviada.');

        navigation.navigate('List');
    }

    function handleCancel() {
        navigation.navigate('List');
    }

    return <SafeAreaView style={styles.container}>
                <Text style={styles.label}>DATA DE INTERESSE *</Text> 
                <TextInput 
                style={styles.input} 
                placeholder="Qual a data da reserva?"
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="words"
                autoCorrect={false}
                value={date}
                onChangeText={setDate}
                /> 
                <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                    <Text style={styles.buttonText}>Solicitar reserva</Text> 
                </TouchableOpacity>
                <TouchableOpacity onPress={handleCancel} style={[styles.button, styles.cancel]}>
                    <Text style={styles.buttonText}>Cancelar reserva</Text> 
                </TouchableOpacity>
            </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        margin: 50,
    },

    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8,
        marginTop: 40
    },

    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 2
    },

    form: {
        alignSelf: 'stretch', // largura inteira
        paddingHorizontal: 30,
        marginTop: 30
    },

    button: {
        height: 42,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2
    },

    cancel: {
        backgroundColor: '#ccc',
        marginTop: 10
    },

    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    }
});