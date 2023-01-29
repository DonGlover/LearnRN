import * as React from 'react';
import { forwardRef, useRef, useState } from 'react';
import { RecyclerViewBackedScrollView, StyleSheet, Text, TouchableOpacity, ViewProps } from 'react-native';


export interface CardProps extends ViewProps {
    txt: string;
    width?: number;
    height?: number;
    onBlur?: () => void;
    onFocus?: () => void;
    onPress?: () => void;
    nextFocusUp?: number | null;
    nextFocusDown?: number | null;
    nextFocusRight?: number | null;
    nextFocusLeft?: number | null;
}

const Card = forwardRef(
    (props: CardProps, ref: React.ForwardedRef<TouchableOpacity>) => {
        const defWidth = 100;
        const defHeight = 40;
        const [ focused, setFocused ] = useState(false);
        const { width, height, txt, ...rest } = props;
        return (
                <TouchableOpacity
                    {...rest}
                    style={[styles.item,
                        {backgroundColor: focused ? 'aliceblue' : 'dimgray',
                        width: width ?? defWidth, height: height ?? defHeight}]}
                    ref={ref}
                    onPress={() => {
                        if (props.onPress) {props.onPress();}
                    }}
                    onFocus={() => {
                        if (props.onFocus) {props.onFocus();}
                        setFocused(true);
                    }}
                    onBlur={() => {
                        if (props.onBlur) {props.onBlur();}
                        setFocused(false);
                    }}
                >
                    <Text style={styles.itemText}> {txt} </Text>
                </TouchableOpacity>
        );
    }
);

const styles = StyleSheet.create({
    item: {
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemText: {
        color: 'yellow',
        fontSize: 14,
        fontWeight: 'bold',
    },  
});

export default Card;
