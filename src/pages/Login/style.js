import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    loginTexto: {
        fontSize: 50,
        color: '#013eb0',
        fontWeight: "bold",
        marginTop: 128,
        marginBottom: 50,
    },
    input: {
        backgroundColor: '#e6e6e6',
        width: '75%',
        textAlign: 'center',
        margin: 10,
        padding: 12,
        borderRadius: 10,
        shadowColor: '#000', 
        shadowOffset: { height: 0 }, 
        shadowOpacity: 0.3
    },
    input2: {
        marginTop: 16,
        backgroundColor: '#e6e6e6',
        width: '75%',
        textAlign: 'center',
        margin: 10,
        padding: 12,
        borderRadius: 10,
        shadowColor: '#000', 
        shadowOffset: { height: 0 }, 
        shadowOpacity: 0.3
    },
    esqueciTexto: {
        marginTop: 10,
        color: '#A9A9A9',
        fontSize: 14,
        textDecorationLine: "underline",
    },
    button: {
        backgroundColor: '#013eb0',
        width: 115,
        padding: 10,
        borderRadius: 20,
        marginTop: 110,
        marginBottom: 20
    },
    cadastroTexto: {
        marginTop: 10,
        color: '#A9A9A9',
        fontSize: 18,
    },
    cadastro: {
        color: '#000000',
        fontWeight: "400",
        textDecorationLine: "underline",
    }
});

export default styles;
