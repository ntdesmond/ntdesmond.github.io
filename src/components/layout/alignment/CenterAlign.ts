import styled from "styled-components";
import { FlexColumn, FlexRow } from "./Flex";

export const YCentered = styled(FlexRow).attrs(() => ({
  align: "center",
}))``;

export const XCentered = styled(FlexColumn).attrs(() => ({
  align: "center",
}))``;

export const XYCentered = styled(FlexColumn).attrs(() => ({
  justify: "center",
  align: "center",
}))``;
