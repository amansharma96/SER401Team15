import * as React from "react";
import { useState } from "react";
import { Text, View, TextInput } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

import styles from "./styles";
import { personal } from "../../components/dataLists";

function PeoplePage() {
  const [valueGreen, setValueGreen] = useState(null);
  const [valueYello, setValueYello] = useState(null);
  const [valueRed, setValueRed] = useState(null);
  const [valueBlack, setValueBlack] = useState(null);
  const [valueTrapped, setValueTrapped] = useState(null);
  const [valueShelter, setValueShelter] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [blackLocation, onChangeText] = React.useState("");

  const handleValueBlackChange = (item) => {
    setValueBlack(item.value);
    setShowLocation(item.value > 0);
  };

  return (
    <View>
      <View style={styles.CONTAINER}>
        <Text style={styles.HEADER1TEXT}>People Information</Text>
        <View>
          <Text>*How many people rescued GREEN status: </Text>
          <Dropdown
            style={[styles.dropdown]}
            data={personal}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "" : ""}
            searchPlaceholder="Search..."
            value={valueGreen}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setValueGreen(item.value);
              setIsFocus(false);
            }}
          />
        </View>
        <View>
          <Text>*How many people rescued YELLOW status: </Text>
          <Dropdown
            style={[styles.dropdown]}
            data={personal}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "" : ""}
            searchPlaceholder="Search..."
            value={valueYello}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setValueYello(item.value);
              setIsFocus(false);
            }}
          />
        </View>
        <View>
          <Text>*How many people rescued RED status: </Text>
          <Dropdown
            style={[styles.dropdown]}
            data={personal}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "" : ""}
            searchPlaceholder="Search..."
            value={valueRed}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setValueRed(item.value);
              setIsFocus(false);
            }}
          />
        </View>
        <View>
          <Text>*How many people rescued DECEASED status:</Text>
          <Dropdown
            style={[styles.dropdown]}
            data={personal}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "" : ""}
            searchPlaceholder="Search..."
            value={valueBlack}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={handleValueBlackChange}
          />
          {showLocation && (
            <View style={styles.locationContainer}>
              <Text>Where is the location of the deceased?*</Text>
              <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={blackLocation}
              />
            </View>
          )}
        </View>
        <View>
          <Text>*How many people TRAPPED: </Text>
          <Dropdown
            style={[styles.dropdown]}
            data={personal}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "" : ""}
            searchPlaceholder="Search..."
            value={valueTrapped}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setValueTrapped(item.value);
              setIsFocus(false);
            }}
          />
        </View>
        <View>
          <Text>*How many people needing SHELTER: </Text>
          <Dropdown
            style={[styles.dropdown]}
            data={personal}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "" : ""}
            searchPlaceholder="Search..."
            value={valueShelter}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setValueShelter(item.value);
              setIsFocus(false);
            }}
          />
        </View>
        <View>
          <Text>
            *How many people from other neighborhoods require first aid:{" "}
          </Text>
          <Dropdown
            style={[styles.dropdown]}
            data={personal}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "" : ""}
            searchPlaceholder="Search..."
            value={valueShelter}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setValueShelter(item.value);
              setIsFocus(false);
            }}
          />
        </View>
        <View>
          <Text>
            *How many people from other neighborhoods require shelter:{" "}
          </Text>
          <Dropdown
            style={[styles.dropdown]}
            data={personal}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "" : ""}
            searchPlaceholder="Search..."
            value={valueShelter}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setValueShelter(item.value);
              setIsFocus(false);
            }}
          />
        </View>
      </View>
    </View>
  );
}
export default PeoplePage;
