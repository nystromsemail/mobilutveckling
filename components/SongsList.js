import { useNavigation } from "@react-navigation/native";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";


const SongsList = ({songsList}) => {

    const nav = useNavigation();
    const handleNavigate = (song) => {
        nav.navigate('SelectedSongScreen', {song: song})
    }

    const _renderItem = ({item}) => {
        return(
            <Pressable onPress={() => handleNavigate(item)}>
                <View style={styles.songCard}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.altTitle}>{item.altTitle}</Text>
                </View>
            </Pressable>
        )
    }

    return (
        <>
            <FlatList 
                data={songsList}
                renderItem={_renderItem}
                keyExtractor={(song, index) => index}
            />
        </>
    )
}

const styles = StyleSheet.create({
    songCard: {
        backgroundColor: '#f8f9fa',
        borderColor: '#6c757d',
        borderWidth: 0.5,
    },
    title: {
        color: '#343a40',
        fontSize: 18,
        marginTop: 10,
        marginLeft: 20,
    },
    altTitle: {
        color: '#6c757d',
        fontSize: 14,
        marginLeft: 20,
        marginBottom: 10,
    }
})

export default SongsList;