import styled from "styled-components";
import { FlexColumn } from "./Flex";

export const YCentered = styled(FlexColumn).attrs(() => ({
  justify: "center",
}))``;

export const XCentered = styled(FlexColumn).attrs(() => ({
  align: "center",
}))``;

export const XYCentered = styled(FlexColumn).attrs(() => ({
  justify: "center",
  align: "center",
}))``;
