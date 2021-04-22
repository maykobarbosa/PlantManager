import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList
} from 'react-native';
import { color } from 'react-native-reanimated';
import api from '../assets/api';
import { EnviromentButton } from '../components/EnviromentButton';



import {Header} from '../components/Header';
import { PlantCardPrimary } from '../components/PlantCardPrimary';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface EnviromentProps {
    key: string;
    title: string;
}
interface PlantsProps {
    id: string;
    name: string;
    about: string;
    water_tips: string;
    photo: string;
    environments: [string];
    frequency: {
      times: number;
      repeat_every: string;
}
export function PlantSelect(){

    const [enviroments, setEnviroments] = useState<EnviromentProps[]>([]);
    const [plants, setPlants] = useState<PlantProps[]>([]);

    useEffect(() => {
        async function fetchEnviroment() {
            const { data } = await api.get('plants_environments');
            setEnviroments([
                {
                key: 'all',
                title: 'Todos',
            },
                ...data   
        ]);
        }

        fetchEnviroment();
    },[]);

    useEffect(() => {
        async function fetchPlants() {
          const { data } = await api.get(`plants?_sort=name&_order=asc`);
      
          setPlants(data)
          setFilteredPlants(data)
        }
        
        fetchPlants()
      }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Header />

                <Text style={styles.title} >Em qual ambiente</Text>
                <Text style={styles.subtitle} >você que sua planta</Text>
            </View>
            <View>
            <FlatList
                data={enviroments}
                renderItem={({ item }) => (
                    <EnviromentButton title={item.title} />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.enviromentList}
                />
            </View>
            <View style={styles.plants}>
                <FlatList 
                    data={plants}
                    renderItem={({ item }) => (
                        <PlantCardPrimary data={item} />
                    )}
                    showsHorizontalScrollIndicator={false}
                    numColumns={2}
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.background
    },
    header:{
        paddingHorizontal: 20
    },
    title:{
        fontSize: 17,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 20,
        marginTop: 15
    },
    subtitle:{
        fontSize: 17,
        color: colors.heading,
        fontFamily: fonts.text,
        lineHeight: 20,
    },
    enviromentList:{
        height: 40,
        justifyContent: 'center',
        paddingBottom: 5,
        marginLeft: 32,
        marginVertical: 32

    },
    plants:{
        flex: 1,
        paddingHorizontal: 32,
        justifyContent: 'center'
    }
});