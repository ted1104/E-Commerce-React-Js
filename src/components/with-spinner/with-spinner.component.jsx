import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

const WithSipinner = (WrappedComponent) => ({ isLoading, ...othersProps }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer></SpinnerContainer>
    </SpinnerOverlay>
  ) : (
    WrappedComponent
  );
};

export default WithSipinner;
