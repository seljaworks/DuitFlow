import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
interface DTouchableOpacityProps extends TouchableOpacityProps {}

const DTouchableOpacity = (props: DTouchableOpacityProps) => {
  return (
    <TouchableOpacity {...props} activeOpacity={0.5}>
      {props.children}
    </TouchableOpacity>
  );
};

export default DTouchableOpacity;
