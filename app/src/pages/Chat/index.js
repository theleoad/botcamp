import React from "react";
import { Link } from "react-router-dom";

import HeaderWrapper from "../../components/HeaderWrapper";
import LogoBotcamp from "../../components/LogoBotcamp";
import LogoutBotcamp from "../../components/LogoutBotcamp";
import InputMessage from "../../components/InputMessage";

const Chat = () => (
  <>
    <HeaderWrapper.SuperHeaderWrapper>
      <HeaderWrapper.HeaderWrapper>
        <LogoBotcamp small />
        <Link to="/">
          <LogoutBotcamp />
        </Link>
      </HeaderWrapper.HeaderWrapper>
    </HeaderWrapper.SuperHeaderWrapper>
    <InputMessage />
  </>
);

export default Chat;
