import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import { Context as LocationContext } from "../context/LocationContext";
import Locacion from "../hooks/locacion";
import Spacer from "../Componentes/Spacer";
import Spinner from "../Componentes/spinner";
import MapView, { Marker } from "react-native-maps";

const LATITUDE = 8.5904345;
const LONGITUDE = -71.211679;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA;
let id = 0;

const Location = ({ animalId, provider, location }) => {
    const {
        state: { locationId, loading },
        add_name,
        startLoading,
        stopLoading,
    } = useContext(LocationContext);
    console.log("LOCATION", location)
    const [saveList] = Locacion();
    const [markers, setMarkers] = useState([]);
    const [region] = useState({
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    });

    const Screen = () => {
        startLoading();
        try {
            saveList(animalId, markers.map(marker => marker.coordinate));
        } catch (error) {
            stopLoading();
        }
    };

    const randomColor = () => {
        return `#${Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, 0)}`;
    };

    const onMapPress = (e) => {
        setMarkers([
            ...markers,
            {
                coordinate: e.nativeEvent.coordinate,
                key: id++,
                color: randomColor(),
            },
        ]);
    };

    useEffect(() => {
        if (location) {
            add_name(location.name)
            setMarkers(location.markers.map(marker => ({
                color: randomColor(),
                key: marker._id, coordinate: marker
            })))
        }
    }, [location])

    /* useEffect(() => {
        if (item.id == puntoSeleccionado.id)
            return index
        console.log(puntos);
    }), [location] */

    /*  useEffect(() => {
         if (location) {
             setMarkers(location.markers.map(marker => ({
                 key: marker._id, delete: marker
             })))
         }
     }
     ) */

    return (
        <View>
            <Spacer>
                <TextInput style={styles.TextInput}
                    value={locationId}
                    onChangeText={add_name}
                    placeholder="Ingrese locación"
                />
            </Spacer>
            <Spacer>
                {loading ? (
                    <Spinner />
                ) : (
                        <Button
                            buttonStyle={{
                                backgroundColor: "orange", height: 50,
                                borderRadius: 10
                            }}
                            title="Guardar locación"
                            onPress={Screen}
                        />
                    )}
            </Spacer>
            <View style={styles.container}>
                <MapView
                    provider={provider}
                    style={styles.map}
                    initialRegion={region}
                    onPress={onMapPress}
                >
                    {markers.map((marker) => (

                        <Marker
                            key={marker.id}
                            coordinate={marker.coordinate}
                            pinColor={marker.color}
                        />
                    ))}
                </MapView>
                <View style={styles.buttonContainer}>
                    <Spacer>
                        <TouchableOpacity
                            onPress={() => setMarkers([])}
                            style={styles.bubble}
                        >
                            <Text>Toque para crear un marcador</Text>

                        </TouchableOpacity>
                    </Spacer>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-end",
        alignItems: "center",
        marginTop: 10,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    bubble: {
        backgroundColor: "rgba(255,255,255,0.7)",
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20,
    },
    buttonContainer: {
        marginVertical: 570,
        marginTop: 20,
    },
    TextInput: {
        fontSize: 25,
        textAlign: "center",
    }
});
export default Location;