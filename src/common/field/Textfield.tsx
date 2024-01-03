import { Box, Input, InputProps, colors } from "@mui/joy";
import { FC } from "react";
import { Text } from "../text/TextStyle";

type TextfieldProps = {
    label: string;
    errorMessage?: string;
} & InputProps;

const Textfield: FC<TextfieldProps> = ({ label, errorMessage, ...rest }) => {
    return (
        <Box>
            <Text size="sm" textcolor={colors.grey[500]}>
                {label}
            </Text>
            <Input size="lg" error={!!errorMessage} {...rest} />
            {errorMessage && (
                <Text textcolor={colors.red[500]} size="xs">
                    {errorMessage}
                </Text>
            )}
        </Box>
    );
};

export default Textfield;
