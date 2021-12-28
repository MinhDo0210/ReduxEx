/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";

export default function Child(props) {
    const dispatch = useDispatch();

    const [text, setText] = useState("");

    const onSend = () => {
        // gui action qua reducer
        dispatch({ type: "SEND_FROM_FATHER", data: text });
    };

    return (
        <View
            style={{ 
                borderWidth: 1, 
                height: 150, 
                marginTop: 50, 
                padding: 10,
            }}
        >
            <Text>{text}</Text>
            <TextInput
                style={{ borderWidth: 1, width: "80%", margin: 10, marginLeft: 0 }}
                placeholder="Nhập Text"
                onChangeText={setText}
                type="text"
            />
            <TouchableOpacity onPress={onSend}>
                <Text>Send</Text>
            </TouchableOpacity>
        </View>
    );
}

