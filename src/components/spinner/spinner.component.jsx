import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./spinner.styles";

const WithSpinner = (WrrappedComponent) => ({ isLoading, ...otherProps }) => {
    if(isLoading){
        return (
            <SpinnerOverlay>
              <SpinnerContainer />
            </SpinnerOverlay>
          )
    } 
    return (
    <WrrappedComponent {...otherProps} />
  );
};

export default WithSpinner;
