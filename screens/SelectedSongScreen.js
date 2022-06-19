import { useNavigation } from "@react-navigation/native";
import { DeviceEventEmitter, FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { deleteById } from "../database/localdb";

class StartTone {
    constructor(part, tone) {
        this.part = part;
        this.tone = tone;
    }
}

const SelectedSongScreen = ({route}) => {

    const { song: {id, title, altTitle, tones}} = route.params;

    // removes all empty spaces and splits into different elements at commas
    const tonesList = tones.replace(/ /g,'').split(",")

    const startToneList = [
        new StartTone("T1", tonesList[0]),
        new StartTone("T2", tonesList[1]),
        new StartTone("B1", tonesList[2]),
        new StartTone("B2", tonesList[3]),
    ];

    // if two or more Parts share the same Tone, merge them to the same line
    let j = 0;
    for (let i = 0; i < startToneList.length - 1; i++) {
        if (startToneList[j].tone === startToneList[j+1].tone) {
            startToneList[j+1].part = startToneList[j].part + " + " + startToneList[j+1].part;
            startToneList.splice(j, 1)
        } else {
            j++;
        }
    }

    const nav = useNavigation();

    const handleNavigate = () => {
        nav.goBack();
    }

    const handlePress = () => {
        //pling plong pianoljud enligt tones
    }

    const handleDelete = () => {
        deleteById(id)
        DeviceEventEmitter.emit("updateSongsListEvent");
        nav.goBack();
    }

    const _renderItem = ({item}) => {
        return (
            <Pressable onPress={() => handlePress(item)}>
                <View style={styles.toneCard}>
                    <Text style={styles.toneText}>{item.part}:  {item.tone}</Text>
                </View>
            </Pressable>
        )
    }

    return (
        <>
            <View style={styles.header}>
                <Pressable onPress={handleNavigate}>
                    <Text style={styles.goBack}><AntDesign name="back" size={24} color="#f8f9fa" /></Text>
                </Pressable>
                <Text style={styles.titleText}>{title}</Text>
            </View>
            <FlatList
                data={startToneList}
                renderItem={_renderItem}
                keyExtractor={(tone, index) => index}
            />
            <Pressable onPress={handleDelete} style={styles.deleteButton}>
                <View>
                    <Text style={{color: 'black'}}>Delete song</Text>
                </View>
            </Pressable>
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#1D7AC3'
    },
    titleText: {
        marginLeft: 20,
        color: '#f8f9fa',
        fontSize: 24,
    },
    goBack: {
        paddingTop: 4
    },
    toneCard: {
        backgroundColor: '#f8f9fa',
        borderColor: '#6c757d',
        borderWidth: 0.5,
    },
    toneText: {
        color: '#343a40',
        fontSize: 18,
        marginVertical: 10,
        marginLeft: 20,
    },
    deleteButton: {
        marginHorizontal: 40,
        marginBottom: 20,
        paddingVertical: 10,
        backgroundColor: '#d3d3d3',
        alignItems: 'center',
        borderRadius: 10,
    }
})



export default SelectedSongScreen;