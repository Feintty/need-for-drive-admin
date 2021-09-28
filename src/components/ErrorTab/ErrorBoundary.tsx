import React, { Component, ReactNode } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ErrorTab from "./ErrorTab";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public render() {
    if (this.state.hasError) {
      return (
        <>
          <Header />
          <div className="admin-page__tab">
            <ErrorTab />
          </div>
          <Footer />
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
