import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Dimensions } from "react-native";
import React from "react";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";

type Props = NativeStackScreenProps<RootStackParamList, "HomePage">;
const { height } = Dimensions.get("window");

const HomePage: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView  style={{
      padding: Spacing * 2,
      flex:1,
      marginTop: 20,
    }}>
        <ImageBackground
          style={{
            height: height / 2.8,
            marginRight: 30,
            marginTop : 15,
          }}
          resizeMode="contain"
          source={require("../assets/images/welcome-img.png")}
        />
    <View style={styles.container}>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ManageBooking')}
      >
        <Text style={styles.text}>Manage Booking</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AccountManagement')}
      >
        <Text style={styles.text}>Account Management</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('VisualizePositions')}
      >
        <Text style={styles.text}>Visualize Positions</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('MakeClaim')}
      >
        <Text style={styles.text}>Make a Claim</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: '80%',
     
  },
  text:{
    fontFamily: Font["poppins-bold"],
    color: Colors.onPrimary ,
    textAlign: "center",
    fontSize: 16,
  }
});

export default HomePage;
