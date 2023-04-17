import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { RootStackParamList } from '../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Colors from "../constants/Colors";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Font from "../constants/Font";
import AppTextInput from "../components/AppTextInput";



type Props = NativeStackScreenProps<RootStackParamList, "MakeClaim">;

const MakeClaim: React.FC<Props> = ({  navigation: { navigate } }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <ScrollView>
    <View>
      <Text               
                style={{
                fontFamily: Font["poppins-semiBold"],
                color: Colors.text,
                textAlign: "center",
                fontSize: FontSize.small,
                margin:100,
              }}>Make a Claim</Text>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
}
export default MakeClaim;
