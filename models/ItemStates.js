import { Component } from "react";
import { DropDownPicker } from "react-native-dropdown-picker";


class ItemStates extends Component {
// ------- Class not in use currently --------

    constructor(props) {
        super(props);

        this.id = props.id;
        this.state = {
            open: false,
            value: null,
            items: props.items
        };
        this.setValue = this.setValue.bind(this);
        
    }

    setOpen(callback) {
        this.setState(state => ({
            open: callback(state.open)
        }));
    }

    setValue(callback) {
        this.setState(state => ({
            value: callback(state.value)
        }));
    }

    setItems(callback) {
        this.setState(state => ({
            items: callback(state.items)
        }));
    }

    render() {
        const { open, value, items } = this.state;
        return(
            <DropDownPicker 
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                style={{width: 100}}
                containerStyle={{width: 100}}
            />
        )
    }
    
}

export default ItemStates;