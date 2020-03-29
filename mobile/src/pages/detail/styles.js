import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 24,
      paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
    },

    headerText: {
        fontSize: 15,
        color: '#737380',
    },

    headerTextBold: {
        fontWeight:'bold',
    },
  
    title: {
      color: '#13131a',
      fontSize: 30,
      fontWeight: 'bold',
      marginTop: 5,
    },

    description: {
        fontSize: 16,
        color: '#737380',
        marginTop:16,
    },


    incident: {
        padding:24,
        borderRadius:8,
        backgroundColor:'#fff',
        marginBottom:16,
        marginTop:24,
    },

    incidentProperty: {
        fontSize:14,
        color:'#737380',
    },

    incidentValue: {
        fontWeight:'bold',
        marginTop:8,
        fontSize:15,
        color:'#41414d',
        marginBottom:24,
    },


    incidentContactBox: {
        padding:24,
        borderRadius:8,
        backgroundColor:'#fff',
        marginBottom:16,
    },


    actions: {
        flexDirection:'row',
        justifyContent: 'space-between',
        marginTop:6,
    },

    action: {
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',

        borderRadius:8,
        padding:15,
        width:'48%',

    },

    actionTextWhatsapp: {
        color:'white',
        fontWeight:'bold',
    },

    actionTextEmail: {
        color:'white',
        fontWeight:'bold',  
    },
});