import React from 'react';
import { 
    StyleSheet,
    Text, 
    SafeAreaView,
    View
} from 'react-native';
import { Button } from '../components/Button';
import { useNavigation } from '@react-navigation/core';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Confirmation(){

    const navigation = useNavigation();

    function handleMoveOn(){
        navigation.navigate('PlantSelect')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.emoji}>
                    😊
                </Text>
                <Text style={styles.title}>
                    Prontinho
                </Text> 
                <Text style={styles.subtitle}>
                    Agora vamos começar a cuidar das suas
                    plantinhas com muito cuidado.
                </Text> 
                <View style={styles.footer}>
                    <Button 
                        title="Começar"
                        onPress={handleMoveOn}
                    />
                </View>
            </View>
            
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    title:{
        fontSize: 22,
        fontFamily: fonts.heading,
        textAlign: 'center',
        color: colors.heading,
        lineHeight:38,
        marginTop: 15,
    },
    subtitle:{
        fontSize: 17,
        fontFamily: fonts.text,
        textAlign: 'center',
        color: colors.heading,
        paddingVertical: 10
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 30
    },
    emoji:{
        fontSize: 78
    },
    footer:{
        width: '100%',
        paddingHorizontal: 50,
        marginTop: 20
    }
});