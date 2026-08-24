import { Format } from "@ark-ui/react";
import { ark } from "@ark-ui/react/factory";

import { styled } from "../../../styled-system/jsx";

export const FormatByte = styled(Format.Byte);
FormatByte.displayName = "FormatByte";

export const FormatNumber = styled(Format.Number);
FormatNumber.displayName = "FormatNumber";

export const FormatRelativeTime = styled(Format.RelativeTime);
FormatRelativeTime.displayName = "FormatRelativeTime";

export const FormatRoot = styled(ark.div);
FormatRoot.displayName = "FormatRoot";
