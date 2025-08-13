import { Text, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import DOutlineButton from "./DOutlineButton";
interface IDHeaderSection {
  textHeader: string;
  textButton: string;
  onPress?: () => void;
}

const DHeaderSection = ({
  textHeader,
  textButton,
  onPress,
}: IDHeaderSection) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{textHeader}</Text>
      <DOutlineButton text={textButton} isDark onPress={onPress} />
    </View>
  );
};

export default DHeaderSection;

const styles = StyleSheet.create((theme) => ({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  title: { fontSize: 16, fontWeight: "500" },
}));
