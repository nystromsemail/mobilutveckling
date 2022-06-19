import { useNavigation } from "@react-navigation/native";
import { DeviceEventEmitter, Pressable, StyleSheet, Text, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useCallback, useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import ItemStates from "../models/ItemStates";
import SongInput from "../components/SongInput";
import { findAll, insert } from "../database/localdb";
import Song from "../models/Song";


const AddSongScreen = () => {
    
/*     const availableSuffixesList = [
        {label: 'none', value: 'none'},
        {label: 'ess', value: 'ess'},
        {label: 'iss', value: 'iss'}
    ];

    const availableTonesList = [
        {label: 'b\'', value: 'b\''},
        {label: 'a\'', value: 'a\''},
        {label: 'g\'', value: 'g\''},
        {label: 'f\'', value: 'f\''},
        {label: 'e\'', value: 'e\''},
        {label: 'd\'', value: 'd\''},
        {label: 'c\'', value: 'c\''},
        {label: 'b', value: 'b'},
        {label: 'a', value: 'a'},
        {label: 'g', value: 'g'},
        {label: 'f', value: 'f'},
        {label: 'e', value: 'e'},
        {label: 'd', value: 'd'},
        {label: 'c', value: 'c'},
        {label: 'B', value: 'B'},
        {label: 'A', value: 'A'},
        {label: 'G', value: 'G'},
        {label: 'F', value: 'F'},
        {label: 'E', value: 'E'},
        {label: 'D', value: 'D'},
        {label: 'C', value: 'C'}
    ];

    const [openT1Suffix, setOpenT1Suffix] = useState(false);
    const [valueT1Suffix, setValueT1Suffix] = useState(null);
    const [itemsT1Suffix, setItemsT1Suffix] = useState(availableSuffixesList)

    const [openT1Tone, setOpenT1Tone] = useState(false);
    const [valueT1Tone, setValueT1Tone] = useState(null);
    const [itemsT1Tone, setItemsT1Tone] = useState(availableTonesList);
 */

    /* console.log(availableSuffixesList); */
    /* const T1Suffix = new ItemStates({id: 1, items: availableSuffixesList}); */

    const [songTitle, setSongTitle] = useState();
    const [altSongTitle, setAltSongTitle] = useState();
    const [tones, setTones] = useState();

    const nav = useNavigation();

    const handleNavigate = () => {
        nav.goBack();
    }

    const handleAddSongButton = () => {
        const song = new Song(0, songTitle, tones, altSongTitle);
        insert(song)
            .then(() => {
                DeviceEventEmitter.emit('updateSongsListEvent')
            })
        nav.goBack();
    }

    return (
        <>
            <View style={styles.header}>
                <Pressable onPress={handleNavigate}>
                    <Text style={styles.goBack}><AntDesign name="back" size={24} color="#f8f9fa" /></Text>
                </Pressable>
                <Text style={styles.addSongText}>Lägg till ny sång</Text>
            </View>
            <Text style={styles.instructionTitle}>Ange sångens titel:</Text>
            <View style={styles.inputContainer}>
                <SongInput
                    placeholder={'Titel'}
                    inputText={songTitle}
                    setInputText={setSongTitle}
                />
            </View>
            <Text style={styles.instructionTitle}>Ange sångens ev. alternativtitel:</Text>
            <View style={styles.inputContainer}>
                <SongInput
                    placeholder={'Alternativtitel'}
                    inputText={altSongTitle}
                    setInputText={setAltSongTitle}
                />
            </View>
            <Text style={styles.instructionTitle}>Ange sångens starttoner,</Text>
            <Text style={{marginLeft: 50, fontSize: 18}}>separerade med kommatecken</Text>
            <View style={styles.inputContainer}>
                <SongInput
                    placeholder={'Starttoner'}
                    inputText={tones}
                    setInputText={setTones}
                />
            </View>
            

            {/* <Text style={styles.title}>Ange starttonerna för stämmorna!</Text>
            <View style={styles.container}>
                <Text style={styles.part}>T1</Text>
                <View style={styles.selectablesContainer}>
                    <View style={styles.selectable}>
                        <Text style={styles.specText}>suffix:</Text>
                        <DropDownPicker 
                            open={openT1Suffix}
                            value={valueT1Suffix}
                            items={itemsT1Suffix}
                            setOpen={setOpenT1Suffix}
                            setValue={setValueT1Suffix}
                            setItems={setItemsT1Suffix}
                            placeholder={"Select"}
                            style={styles.picker}
                            containerStyle={{width: 100}}
                        />
                    </View>
                    <View style={styles.selectable}>
                        <Text style={styles.specText}>ton:</Text>
                        <DropDownPicker 
                            open={openT1Tone}
                            value={valueT1Tone}
                            items={itemsT1Tone}
                            setOpen={setOpenT1Tone}
                            setValue={setValueT1Tone}
                            setItems={setItemsT1Tone}
                            placeholder={"Select"}
                            style={styles.picker}
                            containerStyle={{width: 100}}
                        />
                    </View>
                </View>
            </View> */}
            {/* T1Suffix.render() */}
            <View style={styles.bottomButtonContainer}>
                <Pressable onPress={handleAddSongButton} style={styles.addButton}>
                    <Text>Lägg till sången!</Text>
                </Pressable>
            </View>  
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
    goBack: {
        paddingTop: 4
    },
    addSongText: {
        marginLeft: 20,
        color: '#f8f9fa',
        fontSize: 24,
    },
    /* title: {
        marginTop: 40,
        marginBottom: 40,
        textAlign: 'center',
        fontSize: 20,
        color: '#343a40',
    },
    container: {
        padding: 20,
    },
    part: {
        fontSize: 20,
    },
    selectablesContainer: {
        marginTop: 10,
        flexDirection: "row",
    }, 
    specText: {
        marginHorizontal: 10,
    },
    selectable: {
        flexDirection: "row",
        alignItems: 'center',
    },
    picker: {
        width: 100,
    },*/
    inputContainer: {
        marginTop: 2,
        marginLeft: 40,
        padding: 8,
        backgroundColor: 'white',
        width: '75%'
        },
    instructionTitle: {
        marginLeft: 50,
        marginTop: '6%',
        fontSize: 18,
    },
    bottomButtonContainer: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    addButton: {
        marginHorizontal: 40,
        marginBottom: 30,
        paddingVertical: 10,
        backgroundColor: '#d3d3d3',
        alignItems: 'center',
        borderRadius: 10,
    }
})

export default AddSongScreen;