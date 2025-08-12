import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useTranslation } from "react-i18next";
import { ScrollView, Text, View } from "react-native";
import { StyleSheet, UnistylesRuntime } from "react-native-unistyles";

export default function HomeScreen() {
  const { t } = useTranslation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.homeCard}>
        <View style={styles.balanceHeader}>
          <Text style={styles.totalBalanceText}>{t("home.totalBalance")}</Text>
          <FontAwesome5 name="exchange-alt" size={26} color="white" />
        </View>
        <Text style={styles.balance}>RpXX.XXX.XXX</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={styles.chipWrapper}>
            <View style={styles.chip}>
              <Text>Cash</Text>
            </View>
            <View style={styles.chip}>
              <Text>BCA</Text>
            </View>
            <View style={styles.chip}>
              <Text>BCA</Text>
            </View>
            <View style={styles.chip}>
              <Text>+2</Text>
            </View>
          </View>
          <View style={styles.dateRangeButton}>
            <Text style={{ color: "white" }}>{t("home.thisMonth")}</Text>
            <FontAwesome5 name="caret-down" color="white" />
          </View>
        </View>
        <View style={{ flexDirection: "row", gap: 8 }}>
          <View style={styles.incomeCard}>
            <Feather name="arrow-down-right" size={36} color="white" />
            <View style={{}}>
              <Text style={{ color: "white", fontSize: 12 }}>
                {t("home.expense")}
              </Text>
              <Text style={{ color: "white" }}>RpX.XXX.XXX</Text>
            </View>
          </View>
          <View style={styles.incomeCard}>
            <Feather name="arrow-up-right" size={36} color="white" />
            <View style={{}}>
              <Text style={{ color: "white", fontSize: 12 }}>
                {t("home.income")}
              </Text>
              <Text style={{ color: "white" }}>RpXX.XXX.XXX</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    paddingVertical: theme.dimension.lg,
    paddingTop: UnistylesRuntime.insets.top + theme.dimension.lg,
    gap: theme.dimension.lg,
  },
  balanceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  totalBalanceText: {
    color: "white",
  },
  homeCard: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    marginHorizontal: theme.dimension.lg,
    borderRadius: theme.dimension.sm,
    padding: theme.dimension.lg,
    gap: theme.dimension.md,
  },
  chip: {
    paddingHorizontal: 8,
    backgroundColor: "white",
    borderRadius: 50,
    borderColor: "#799EFF",
    borderWidth: 1,
  },
  balance: { color: "white", fontSize: 30, fontWeight: "900" },
  chipWrapper: {
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  dateRangeButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    borderRadius: theme.dimension.br1,
    padding: theme.dimension.sm,
    paddingVertical: theme.dimension.xs,
    borderWidth: 1,
    borderColor: "white",
  },
  incomeCard: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    gap: 4,
    backgroundColor: "#5072CA",
    padding: theme.dimension.xs,
    borderRadius: theme.dimension.br1,
  },
}));
