import { StyleSheet, TextInput } from "react-native";


const SongInput = ({placeholder, inputText, setInputText}) => {

    const handleTextChange = (text) => {
        setInputText(text)
    }

    return (
        <TextInput
            style={styles.text}
            onChangeText={handleTextChange}
            value={inputText}
            placeholder={placeholder}
        />
    )
}

const styles = StyleSheet.create({
    text: {
        marginLeft: 10,
        fontSize: 16,
    }
})

export default SongInput;