import { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";
import LinearGradient from 'react-native-linear-gradient';
import { backgroundPrimaryDefault, backgroundSecondaryDefault, backgroundTertiaryDefault, foregroundPrimaryDefault, foregroundSecondaryDefault, foregroundTertiaryDefault } from "../lib/colors";

export default SecondaryButton = props => {
    const [expanded, setExpanded] = useState(false);
    const [option, setOption] = useState(props.defaultOption);
    props.onChange(option)

    const selectOption = (option) => {
        setOption(option)
        setExpanded(false)
    }

    return (
        <TouchableOpacity
        // style={styles.button}
        onPress={() => setExpanded(!expanded)}
        style={styles.dropdown}
        >
                <View style={styles.dropdownLabelContainer}>
                    <Text style={styles.dropdownLabel}>{option}</Text>
                    {
                        expanded?
                            <Ionicon size={20} name="chevron-up-outline" color={foregroundSecondaryDefault}/>
                        :
                            <Ionicon size={20} name="chevron-down-outline" color={foregroundSecondaryDefault}/>
                    }

                </View>
                <View style={[styles.expand, {display: expanded ? "" : "none"}]}>
                    {
                        props.options.map((o, i) => 
                            <Text key={i} onPress={() => selectOption(o)} style={styles.expandText}>{o}</Text>
                        )
                    }
                    {/* <Text onPress={() => selectOption("poop2")} style={styles.expandText}>Grand Canyon</Text> */}
                    {/* <Text onPress={() => selectOption("poop3")} style={styles.expandText}>Grand Canyon</Text> */}
                </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    dropdown: {
        backgroundColor: backgroundSecondaryDefault,
        // padding: 12,
        // paddingHorizontal: 34,
        borderRadius: 16    ,
        marginTop: 16,
        borderColor: foregroundTertiaryDefault,
        borderWidth: 2,
        paddingVertical: 12
        // width: "100%"
    },
    dropdownLabelContainer: {
        paddingHorizontal: 16,
        // paddingTop: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    dropdownLabel: {   
        color: foregroundSecondaryDefault,
        fontSize: 16,    
        fontFamily: "400"
    },
    expand: {
        width: "100%",
        marginTop: 16,
        paddingHorizontal: 16,
        // display: "none"
        // paddingBottom: 12
    },
    expandText: {
        color: foregroundPrimaryDefault,
        fontSize: 16,
        paddingBottom: 8
    }
});