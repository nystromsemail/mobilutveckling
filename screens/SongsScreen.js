import { DeviceEventEmitter, StatusBar } from "react-native";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "../components/Header";
import SongsList from "../components/SongsList";
import { findAll } from "../database/localdb";

const SongsScreen = () => {
const [songsList, setSongsList] = useState([]);

    useEffect(() => {

        DeviceEventEmitter.addListener("updateSongsListEvent", () => {
            findAll()
                .then(res => setSongsList(res));
        })
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar barStyle='light-content'/>
            <Header setSongsList={setSongsList}/>
            <SongsList songsList={songsList}></SongsList>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        backgroundColor: 'black',
    },
})

export default SongsScreen;