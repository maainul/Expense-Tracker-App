import { TouchableOpacity, StyleSheet, Text } from "react-native";

export const SubmitBtnComp = ({ btnTitle, loading,handleSubmit }) => {
  return (
    <TouchableOpacity 
      style={styles.submitBtn}
      onPress={handleSubmit}
    >
      <Text style={styles.btnText}>
        {loading ? "Please Wait..." : btnTitle}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  submitBtn: {
    height: 36,
    borderRadius: 20,
    justifyContent: "center",
    backgroundColor: "#696cff",
    borderColor: "#696cff",
    marginTop: 10,
    marginBottom: 10,
  },

  btnText: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 12,
    fontWeight: "500",
  },
});
