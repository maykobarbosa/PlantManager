import AsyncStorage from '@react-native-async-storage/async-storage';
import { format } from 'date-fns';

export interface PlantProps {
    id: string;
    name: string;
    about: string;
    water_tips: string;
    photo: string;
    environments: [string];
    frequency: {
      times: number;
      repeat_every: string; 
    },
    dateTimeNotification: Date;
}

interface StoragePlantProps{
    [id: string]: {
        data: PlantProps;
    }
}

export async function savePlant(plant: PlantProps ) : Promise<void> {
    try{
        
    }catch (error){
        throw new Error(error);
    }
}