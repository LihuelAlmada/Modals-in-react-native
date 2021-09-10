import { StyleSheet } from "react-native";
import Colors from './Colores'

const styles = StyleSheet.create({
  
  //General
  container:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.backgroundPage,
    paddingHorizontal: 15,
  },
  title:{
    fontSize: 24,
    color: Colors.fonts,
  },
  titleModal:{
    fontSize: 24,
    marginBottom: 15,
    color: Colors.fonts,
  },
  fonts:{
    fontFamily: 'Gotham-Book',
    fontSize: 14,
    color: Colors.fonts,
    marginBottom: 15,
  },
  image:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 100,
    width: '100%'
  },
  item: {
    paddingTop: 15,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    marginHorizontal: 20,
    borderRadius: 20
  },

  //Formularios
  input:{
    height: 40,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    alignSelf: 'stretch',
    marginBottom: 10,
    paddingHorizontal: 5,
    textAlign: 'center'
  },
  containerForm:{
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },

  containerFormModal:{
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },

  //Buttons
  button:{
    height: 40,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 25,
    backgroundColor: Colors.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonMenu:{
    height: 50,
    width: '100%',
    borderRadius: 25,
    backgroundColor: Colors.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fontButton:{
    fontSize: 14,
    color: Colors.globalFonts
  },
  fontButtonRegister:{
    fontSize: 14,
    paddingBottom: 10,
    color: Colors.primaryColor
  },
  containerButtonMenu:{
    flex: 1,
    width: '75%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  //Header
  header:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15
  },
  iconsRight:{
    paddingLeft: 15
  },
  iconsLeft:{
    paddingRight: 15
  },
  textHeader: {
    color: Colors.globalFonts,
    fontSize: 20,
    paddingLeft: 15,
    fontFamily: 'Gotham-Book',
  },
  
  //Reports
  row:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
		maxHeight: 120,
  },
  rowText:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
		maxHeight: 120,
  },
	box:{
		flex: 2,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
		height: 100,
		maxWidth: 100,
		borderRadius: 25,
		backgroundColor: 'gainsboro',
		padding: 15,
		margin: 15
	},
	textBox:{
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
		color: Colors.fonts,
		fontSize: 30,
		textAlign: 'center'
	},
	descriptionBox:{
		flex: 2,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
		textAlign: 'center',
		maxWidth: 130,
		fontSize: 14,
    fontFamily: 'Gotham-Book',
	},

  //Modals
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
})

export default styles;