import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from "react-native";
  import React, { useState } from "react";
  import Spacing from "../constants/Spacing";
  import FontSize from "../constants/FontSize";
  import Colors from "../constants/Colors";
  import Font from "../constants/Font";
  import { Ionicons } from "@expo/vector-icons";
  import { NativeStackScreenProps } from "@react-navigation/native-stack";
  import { RootStackParamList } from "../types";
  import AppTextInput from "../components/AppTextInput";
  
  type Props = NativeStackScreenProps<RootStackParamList, "Register">;

  
  const RegisterScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
  
    const validateEmail = (text: string) => {
      // basic email validation
      const emailRegex = /^\S+@\S+\.\S+$/;
      if (!emailRegex.test(text)) {
        setEmailError("Invalid email");
      } else {
        setEmailError("");
      }
      setEmail(text);
    };
  
    const validatePassword = (text: string) => {
      // password must contain at least one number, and be at least 8 characters long
      const passwordRegex = /^(?=.*\d)[a-zA-Z\d]{8,}$/;
      if (!passwordRegex.test(text)) {
        setPasswordError("password must contain at least one number, and be at least 8 characters long");
      } else {
        setPasswordError("");
      }
      setPassword(text);
    };
  
    const validateConfirmPassword = (text: string) => {
      if (text !== password) {
        setConfirmPasswordError("Passwords do not match");
      } else {
        setConfirmPasswordError("");
      }
      setConfirmPassword(text);
    };
  
    const handleRegister = () => {
      if (!emailError && !passwordError && !confirmPasswordError) {
        // submit registration data
      }
    };
    
    return (
      <SafeAreaView>
        <ScrollView>
          <View
            style={{
              padding: Spacing * 1.5,
              marginTop: 10,
            }}
          >
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: FontSize.xLarge,
                  color: Colors.primary,
                  fontFamily: Font["poppins-bold"],
                  marginVertical: Spacing * 2,
                }}
              >
                Create account
              </Text>
              <Text
                style={{
                  fontFamily: Font["poppins-regular"],
                  fontSize: FontSize.small,
                  maxWidth: "80%",
                  textAlign: "center",
                }}
              >
                Create your account today and gain access to all the benefits and features of our platform!
              </Text>
            </View>


            
          <View
              style={{
                marginVertical: Spacing * 2,
              }}
          >
                <AppTextInput
                  placeholder="Email"
                  onChangeText={validateEmail}
                  error={emailError}
                />
                <AppTextInput
                  placeholder="Password"
                  onChangeText={validatePassword}
                  error={passwordError}
                  secureTextEntry
                />
                <AppTextInput
                  placeholder="Confirm Password"
                  onChangeText={validateConfirmPassword}
                  error={confirmPasswordError}
                  secureTextEntry
                />
          </View>

    
            <TouchableOpacity

              style={{
                padding: Spacing * 2,
                backgroundColor: Colors.primary,
                marginVertical: Spacing * 2,
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
                  textAlign: "center",
                  fontSize: FontSize.large,
                }}
              >
                Sign up
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate("Login")}
              style={{
                padding: Spacing ,
              }}
            >
              <Text
                style={{
                  fontFamily: Font["poppins-semiBold"],
                  color: Colors.text,
                  textAlign: "center",
                  fontSize: FontSize.small,
                }}
              >
                Already have an account
              </Text>
            </TouchableOpacity>
    
            <View
              style={{
                marginVertical: Spacing * 3,
              }}
            >
              <Text
                style={{
                  fontFamily: Font["poppins-semiBold"],
                  color: Colors.primary,
                  textAlign: "center",
                  fontSize: FontSize.small,
                }}
              >
                Or continue with
              </Text>
    
              <View
                style={{
                  marginTop: Spacing,
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <TouchableOpacity
                  style={{
                    padding: Spacing,
                    backgroundColor: Colors.gray,
                    borderRadius: Spacing / 2,
                    marginHorizontal: Spacing,
                  }}
                >
                  <Ionicons
                    name="logo-google"
                    color={Colors.text}
                    size={Spacing * 2}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    padding: Spacing,
                    backgroundColor: Colors.gray,
                    borderRadius: Spacing / 2,
                    marginHorizontal: Spacing,
                  }}
                >
                  <Ionicons
                    name="logo-apple"
                    color={Colors.text}
                    size={Spacing * 2}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    padding: Spacing,
                    backgroundColor: Colors.gray,
                    borderRadius: Spacing / 2,
                    marginHorizontal: Spacing,
                  }}
                >
                  <Ionicons
                    name="logo-facebook"
                    color={Colors.text}
                    size={Spacing * 2}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default RegisterScreen;