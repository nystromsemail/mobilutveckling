import { StyleSheet, Text, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";


const DropDown = ({part, }) => {
    // ------- Component not in use currently --------
    return(
    <>
        <View style={styles.container}>
                <Text style={styles.part}>T1</Text>
                <View style={styles.selectablesContainer}>
                    <View style={styles.selectable}>
                        <Text style={styles.specText}>suffix:</Text>
                        <DropDownPicker 
                            open={open}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                            placeholder={"Select"}
                            style={styles.picker}
                            containerStyle={{width: 100}}
                        />
                    </View>
                    <Text style={styles.specText}>ton:</Text>
                </View>
            </View>
    </>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    part: {
        fontSize: 20,
    },
    selectablesContainer: {
        margin: 10,
        flexDirection: "row",
    },
    specText: {
        marginHorizontal: 20,
    },
    selectable: {
        flexDirection: "row",
        alignItems: 'center',
    },
    picker: {
        width: 100,
    }
})

export default DropDown;