import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, Image, AsyncStorage } from 'react-native';

import SpotList from '../components/SpotList';

import logo from '../assets/logo.png'; 

export default function List(){
    const [techs, setTechs] = useState('');

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storagedTechs => {
            const techsArrays = storagedTechs.split(',').map(tech => tech.trim());

            setTechs(techsArrays);
        })
    }, []);


    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={logo} />
            <ScrollView>
            { techs ?  techs.map(tech => <SpotList key={tech} tech={tech}/>) : null}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    logo: {
        height: 32,
        resizeMode: "contain",
        alignSelf: "center",
        marginTop: 40
    }
})