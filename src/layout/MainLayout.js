import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function MainLayout(props) {
  const { footerCourseName, footerCourseLink, navItems, logo } = props;

  return (
    <>
      <Header logo={logo} navItems={navItems} />
      <main>{props.children}</main>
      <Footer
        courseName={footerCourseName}
        courseLink={footerCourseLink}
        navItems={navItems}
      />
    </>
  );
}

export default MainLayout;
