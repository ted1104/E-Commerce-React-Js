import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

const WithSipinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...othersProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer></SpinnerContainer>
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...othersProps} />
    );
  };

  return Spinner;
};

export default WithSipinner;
