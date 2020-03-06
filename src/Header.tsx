import * as React from "react";

type HeaderProps = {
  msg: string;
};

const Header = (props: HeaderProps) => {
  // useEffect hook is fired off when the element in question
  React.useEffect(() => {
    // alert(document.querySelector("#myHeader"));
  });
  return (
    <h1 id="myHeader" className="primary-header">
      {props.msg}
    </h1>
  );
};

Header.displayName = "Header";

export default Header;
