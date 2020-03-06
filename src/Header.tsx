import * as React from "react";

type HeaderProps = {
  msg: string;
};

function Header(props: HeaderProps) {
  return <h1 className="primary-header">{props.msg}</h1>;
}

export default Header;
