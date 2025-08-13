import DTouchableOpacity from "@/common/components/DTouchableOpacity";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import React from "react";
import { Text } from "react-native";
import { StyleSheet } from "react-native-unistyles";

type DOutlineButtonProps = {
  onPress?: () => void;
  isDropdown?: boolean;
  text?: string;
  isDark?: boolean;
};

const DOutlineButton = ({
  onPress,
  text,
  isDropdown,
  isDark,
}: DOutlineButtonProps) => {
  const color = isDark ? "black" : "white";
  return (
    <DTouchableOpacity
      activeOpacity={0.5}
      style={styles.dateRangeButton(color)}
      onPress={onPress}
    >
      <Text style={{ color: color, fontSize: 10 }}>{text}</Text>
      {isDropdown ? (
        <FontAwesome5 name="caret-down" color={color} />
      ) : (
        <FontAwesome5 name="caret-right" color={color} />
      )}
    </DTouchableOpacity>
  );
};

export default DOutlineButton;

const styles = StyleSheet.create((theme) => ({
  dateRangeButton: (color: string) => ({
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "baseline",
    gap: 6,
    borderRadius: theme.dimension.br1,
    padding: theme.dimension.sm,
    paddingVertical: theme.dimension.xs,
    borderWidth: 0.5,
    borderColor: color,
  }),
}));
