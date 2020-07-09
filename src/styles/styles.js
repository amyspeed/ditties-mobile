import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 8,
        backgroundColor: '#FFFFFF',
    },
    header: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20
    },
    label: {
        color: 'black',
        fontSize: 15,
        marginTop: 20,
        marginBottom: 10,
        marginLeft: 0,
        textAlign: 'center'
    },
    button: {
        marginTop: 40,
        color: 'white',
        height: 40,
        backgroundColor: 'black',
        borderRadius: 4,
    },
    buttonInner: {

    },
    input: {
        backgroundColor: 'white',
        color: 'black',
        borderColor: 'black',
        borderWidth: 1,
        height: 40,
        padding: 10,
        borderRadius: 4,
    },
    link: {
        textAlign: 'center',
        margin: 30
    },
    linkText: {
        textAlign: 'center',
        color: '#09dcdc',
        fontSize: 20,
        fontWeight: 'bold'
    },
    songButton: {
        marginTop: 40,
        color: 'white',
        height: 40,
        backgroundColor: '#09dcdc',
        borderRadius: 4,
    },
});