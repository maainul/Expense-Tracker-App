import { StyleSheet } from "react-native";

export const base = StyleSheet.create({
  authImage: {
    height: 200,
    width: 200,
    borderRadius: 500
  },
  cards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20

  },

  privacyPolicyBox: {
    flexDirection: "row",
  },

  titleSubHeading: {
    fontSize: 12,
    color: "#576B80",
    marginBottom: 15,
  },

  privacyPolicyLink: {
    color: "#696cff",
    fontSize: 12,
    paddingLeft: 5,

  },
  createAccountLink: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  titleSubHeadingColor: {
    fontSize: 12,
    color: "#696cff",
    marginBottom: 15,
  },

})