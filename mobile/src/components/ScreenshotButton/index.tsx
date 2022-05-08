import React from "react";
import { View, Image, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import { theme } from "../../theme";
import { Camera, Trash } from "phosphor-react-native";

interface Props {
    screenshot: string | null;
    onTakeShot: () => void;
    onRemoveShot: () => void;
}


export function ScreenshotButton({ screenshot, onTakeShot, onRemoveShot }: Props) {

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={screenshot ? onRemoveShot : onTakeShot}
        >
            {
                screenshot
                    ?
                    <View>
                        <Image style={styles.image} source={{ uri: screenshot }} />
                        <Trash size={22} color={theme.colors.text_secondary} weight="fill" style={styles.removeIcon} />
                    </View>
                    :
                    <Camera size={22} color={theme.colors.text_secondary} weight="bold" />

            }

        </TouchableOpacity>
    )
}