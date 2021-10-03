import React from "react";
import ErrorBoundary from "../../components/ErrorTab/ErrorBoundary";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Snackbar from "../../components/Snackbar/Snackbar";
import "./AdminPage.scss";

const AdminPage: React.FC = ({ children }) => {
  return (
    <div className="admin-page">
      <Sidebar />
      <div className="admin-page__content">
        <ErrorBoundary>
          <Header />
          <Snackbar snackbarId="admin" />
          <div className="admin-page__tab">{children}</div>
          <Footer />
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default AdminPage;