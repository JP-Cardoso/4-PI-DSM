import React, { useEffect, useState } from 'react';
import { LineChart } from 'react-native-charts-wrapper';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';


const Dashboard = () => {
    const [temperature, setTemperature] = useState([]);
    const [humidity, setHumidity] = useState([]);

    const navigation = useNavigation();

    useEffect(() => {
        fetchData();
        const interval = setInterval(fetchData, 5000);
        return () => clearInterval(interval);
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                'https://api.thingspeak.com/channels/2068822/feeds.json?api_key=O4UO2E3ETQILY3RJ&results=20'
            );
            const feeds = response.data.feeds;
            const temperatureData = feeds.map((feed) => ({
                x: feed.entry_id,
                y: parseFloat(feed.field1),
            }));
            const humidityData = feeds.map((feed) => ({
                x: feed.entry_id,
                y: parseFloat(feed.field2),
            }));
            setTemperature(temperatureData);
            setHumidity(humidityData);
        } catch (error) {
            console.error(error);
        }
    };

    const voltar = () => {
        navigation.navigate('login')
    };

    return (
        <View style={styles.container}>

            <Text style={styles.chartTitle}>Temperatura</Text>
            <LineChart
                style={styles.chart}
                data={{
                    dataSets: [
                        {
                            label: 'Temperatura',
                            values: temperature,
                        },
                    ],
                }}
                chartDescription={{ text: '' }}
                xLabels={temperature.map((data) => data.x)}
                yAxisSuffix="°C"
                showLegend={true}
                showAxis
                showGrid
                xAxis={{
                    labelRotationAngle: 45, // Definindo a rotação dos rótulos em 45 graus
                }}
                yAxis={{
                    left: { enabled: true },
                    right: { enabled: false },
                }}
            />
            <Text style={styles.chartTitle}>Umidade</Text>
            <LineChart
                style={styles.chart}
                data={{
                    dataSets: [
                        {
                            label: 'Umidade',
                            values: humidity,
                        },
                    ],
                }}
                chartDescription={{ text: '' }}
                xLabels={humidity.map((data) => data.x)}
                yAxisSuffix="%"
                showLegend={false}
                showAxis
                showGrid
                xAxis={{
                    labelRotationAngle: 45, // Definindo a rotação dos rótulos em 45 graus
                }}
                yAxis={{
                    left: { enabled: true },
                    right: { enabled: false },
                }}
            />


            <TouchableOpacity style={styles.button} onPress={voltar}>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 300,
        height: 42,
        backgroundColor: '#3498db',
        marginTop: 10,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#753979',
        paddingHorizontal: 1,
    },
    chartContainer: {
        marginTop: 10,
        width: '90%',
    },
    chartTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 5,
    },
    chart: {
        width: '100%',
        height: 240,
        marginVertical: 5,
    },
})

export default Dashboard;