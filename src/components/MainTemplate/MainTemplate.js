import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function MainTemplate(props) {
  const { footerCourseName, footerCourseLink, navItems, logo } = props;

  return (
    <div>
      <Header logo={logo} navItems={navItems} />
      {props.children}
      <Footer
        courseName={footerCourseName}
        courseLink={footerCourseLink}
        navItems={navItems}
      />
    </div>
  );
}

export default MainTemplate;
