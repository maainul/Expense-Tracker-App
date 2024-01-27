import { TextInput, View, Text, StyleSheet } from "react-native";

export const TextInputComp = ({
  state,
  setState,
  labelTitle,
  placeholder,
  fieldName,
  autoComplete,
  keyboardType,
  label = true,
  autoCorrect = false,
  secureTextEntry = false,
  errorState,
  placeholderTextColor = "#E7EAED",
}) => {


  return (
    <View>
      {label && <Text style={styles.labelTitle}>{labelTitle}</Text>}
      <TextInput
        style={styles.inputBox}
        keyboardType={keyboardType}
        autoComplete={autoComplete}
        autoCorrect={autoCorrect}
        secureTextEntry={secureTextEntry}
        value={state}
        onChangeText={(text) => setState(text)}
        placeholderTextColor={placeholderTextColor}
        placeholder={placeholder}
      />
      {errorState &&
        errorState
          .filter((error) => error.field === fieldName)
          .map((filteredError) => (
            <Text key={filteredError.error} style={{ color: 'red' }}>
              {filteredError.error}
            </Text>
          ))}
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    height: 40,
    fontSize: 14,
    marginTop: 5,
    marginBottom: 5,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 15,
    color: "#576B80",
    borderColor: "#d9dee3",
    backgroundColor: "#FFFFFF",
  },
  labelTitle: {
    color: "#576B80",
    fontSize: 12,
    fontWeight: "500",
  },
});
