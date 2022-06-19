import { Pressable, StyleSheet, Text, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const Header = ({setSongsList}) => {

    const nav = useNavigation();

    const handleAdd = () => {
        nav.navigate("AddSongScreen")
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Tag Ton</Text>
            <View style={styles.icons}>
                <Pressable onPress={handleAdd}>
                    <Feather name="plus" size={26} color="white" />
                </Pressable>
                <Text style={styles.search}><Feather name="search" size={24} color="#f8f9fa" /></Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#1D7AC3'
    },
    text: {
        color: '#f8f9fa',
        fontSize: 24,
    },
    icons: {
        marginTop: 4,
        flexDirection: 'row',
    },
    search: {
        marginTop: 2,
        paddingLeft: 20,
    }
})

export default Header;