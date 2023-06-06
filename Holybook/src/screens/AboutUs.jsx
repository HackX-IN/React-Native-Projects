import { SafeAreaView, View } from "react-native";
import { useSelector } from "react-redux";
import CustomText from "../components/CustomText";
import useGoToBackHandler from "../hooks/useGoToBackHandler";
import { banglaFont, englishFont } from "../utils/fonts";

const AboutUs = ({ route }) => {
  useGoToBackHandler(route.params.fromWhichScreen);
  const { color } = useSelector((state) => state.nobleQuran);
  return (
    <>
      <SafeAreaView
        style={{ backgroundColor: color.bgColor1 }}
        className="py-2 flex justify-center items-center"
      >
        <View className="flex flex-row items-center justify-center">
          <CustomText
            style={[{ color: color.activeIconColor }, englishFont.englishR]}
            className="text-lg font-bold"
          >
            About Us
          </CustomText>
        </View>
      </SafeAreaView>
      <SafeAreaView
        style={{ flex: 1, backgroundColor: color.bgColor2 }}
        className="flex items-center justify-center"
      >
        <View>
          <View className="flex flex-row items-center justify-center gap-1">
            <CustomText
              style={[banglaFont.banglaSemi, { color: color.activeIconColor }]}
              className="text-sm"
            >
              Name:
            </CustomText>
            <CustomText style={[banglaFont.banglaSemi]} className="text-sm">
             Inamul Hasan
            </CustomText>
          </View>
          <View className="flex flex-row items-center justify-center gap-1">
            <CustomText
              style={[banglaFont.banglaSemi, { color: color.activeIconColor }]}
              className="text-sm"
            >
             Location:
            </CustomText>
            <CustomText style={[banglaFont.banglaSemi]} className="text-sm">
              Chennai,TamilNadu
            </CustomText>
          </View>
          <View className="flex flex-row items-center justify-center gap-1">
            <CustomText
              style={[banglaFont.banglaSemi, { color: color.activeIconColor }]}
              className="text-sm"
            >
             
Profession:
            </CustomText>
            <CustomText style={[banglaFont.banglaSemi]} className="text-sm">
              Full Stack Developer
            </CustomText>
          </View>
          <View className="flex flex-row items-center justify-center gap-1">
            <CustomText
              style={[banglaFont.banglaSemi, { color: color.activeIconColor }]}
              className="text-sm"
            >
              Contact Us:
            </CustomText>
            <CustomText style={[banglaFont.banglaSemi]} className="text-sm">
             inamul2002@gmail.com
            </CustomText>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default AboutUs;
