/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Child from "./Child";

export default function App(props) {
    const listGift = useSelector((store) => store.itemReducer.items);

    return (
        <View style={{ padding: 50, flex: 1 }}>
            <Text style={{ marginTop: 10 }}>Name from Child:</Text>
            {listGift.map((e, i) => (
                <Text key={i}>Full name: {e}</Text>
            ))}
            <Child />
        </View>
    );
}



