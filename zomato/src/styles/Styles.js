import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({

    PRIMARY_COLOR: "#e23844",
    SECONDARY_COLOR: "#f1f5fc",
    BLACK_COLOR: "#313257",
    WHITE_COLOR: "#ffffff",
    GRAY_COLOR: "#9c9c9c",
    BORDER_GRAY: "#dddddd",
    FIXED_MARGIN: 15,

    title: {
        color: "#313257",
        fontWeight: "bold",
        letterSpacing: 0.8,
        fontSize: 21,
    },

    shadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 10
    }
});