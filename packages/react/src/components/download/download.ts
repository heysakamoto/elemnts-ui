import { DownloadTrigger } from "@ark-ui/react";
import { styled } from "../../styled-system/jsx";
import { downloadRecipe } from "../../styled-system/recipes";

export const Download = styled(DownloadTrigger, downloadRecipe);
Download.displayName = "Download";
