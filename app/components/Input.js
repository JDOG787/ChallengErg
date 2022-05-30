import { TextInput, StyleSheet, View } from "react-native";
import { foregroundPrimaryDefault, foregroundSecondaryDefault, foregroundTertiaryDefault, backgroundSecondaryDefault, accentNegativeDefault } from "../lib/colors";
import Error from "./Error";

export default Input = (props) => {

    return (
        <View>
            <TextInput
                {...props}
                placeholder={props.placeholder}
                placeholderTextColor={foregroundSecondaryDefault}   
                style={[styles.input, {borderColor: props.errorState ? accentNegativeDefault : foregroundTertiaryDefault}]}
                textBreakStrategy="simple"
            />
            {
                props.errorState ?
                    <Error error={props.error}/>
                :
                    null
            }
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        // height: 40,
        width: "100%",
        backgroundColor: backgroundSecondaryDefault,
        borderColor: foregroundTertiaryDefault,
        borderWidth: 2,
        marginVertical: 8,
        fontSize: 16,
        // textAlignVertical: 'top',  
        paddingHorizontal: 14,
        paddingVertical: 12,
        // paddingLeft: 14,
        color: foregroundPrimaryDefault,
        borderRadius: 16,
        // backgroundColor: "red"
    }
});
