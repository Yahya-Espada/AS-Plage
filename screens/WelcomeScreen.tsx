import {
    Dimensions,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
  import React from "react";
  import Spacing from "../constants/Spacing";
  import FontSize from "../constants/FontSize";
  import Colors from "../constants/Colors";
  import Font from "../constants/Font";
  import { NativeStackScreenProps } from "@react-navigation/native-stack";
  import { RootStackParamList } from "../types";
 


  const { height } = Dimensions.get("window");
  
  type Props = NativeStackScreenProps<RootStackParamList, "Welcome">;
  
  const WelcomeScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
    return (
      <SafeAreaView  style={{
        padding: Spacing * 2,
        flex:1,
        marginTop: 20,
      }}>
        <ScrollView>
        <View>
          <ImageBackground
            style={{
              height: height / 2.8,
              marginRight: 30,
              marginTop : 15,
            }}
            resizeMode="contain"
            source={require("../assets/images/welcome-img.png")}
          />
          <View
            style={{
              paddingHorizontal: Spacing * 3,
              paddingTop: Spacing * 1.3,
            }}
          >
            <Text
              style={{
                fontSize: 25,
                color: Colors.primary,
                fontFamily: Font["poppins-bold"],
                textAlign: "center",
              }}
            >
              Découvrez les meilleurs parkings et plages autour de vous.
            </Text>
  
            <Text
              style={{
                fontSize: 12,
                color: Colors.text,
                fontFamily: Font["poppins-regular"],
                textAlign: "center",
                marginTop: Spacing * 3,
              }}
            >
              
              Éliminez le stress de la visite de la plage avec notre application, réservez des places sans tracas et restez à jour en temps réel pour sécuriser votre emplacement préféré.
            </Text>
          </View>
          <View
            style={{
              paddingHorizontal: Spacing * 3,
              paddingTop: Spacing * 8,
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              onPress={() => navigate("Login")}
              style={{
                backgroundColor: Colors.primary,
                paddingVertical: Spacing * 1.5,
                paddingHorizontal: Spacing * 2,
                width: "48%",
                borderRadius: Spacing,
                shadowColor: Colors.primary,
                shadowOffset: {
                  width: 0,
                  height: Spacing,
                },
                shadowOpacity: 0.3,
                shadowRadius: Spacing,
              }}
            >
              <Text
                style={{
                  fontFamily: Font["poppins-bold"],
                  color: Colors.onPrimary,
                  fontSize: FontSize.large,
                  textAlign: "center",
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate("Register")}
              style={{
                backgroundColor: '#FBC252',
                paddingVertical: Spacing * 1.5,
                paddingHorizontal: Spacing * 2,
                width: "48%",
                borderRadius: Spacing,
              }}
            >
              <Text
                style={{
                  fontFamily: Font["poppins-bold"],
                  color: Colors.text,
                  fontSize: FontSize.large,
                  textAlign: "center",
                }}
              >
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default WelcomeScreen;
  
  const styles = StyleSheet.create({});