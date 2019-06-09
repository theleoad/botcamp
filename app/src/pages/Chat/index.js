import React, { useState } from "react";
import { Link } from "react-router-dom";

import HeaderWrapper from "../../components/HeaderWrapper";
import LogoBotcamp from "../../components/LogoBotcamp";
import LogoutBotcamp from "../../components/LogoutBotcamp";
import InputMessage from "../../components/InputMessage";
import MessageBotcamp from "../../components/MessageBotcamp";
import BotMessage from "../../components/BotMessage";
import FormMessage from "../../components/FormMessage";
import MessageWrapper from "../../components/MessageWrapper";

const Chat = () => {
  const [typing, setTyping] = useState("");
  const [messages, setMessages] = useState([]);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setMessages(old => [...old, typing]);
    setTyping("");
  }

  const handleChange = (event) => setTyping(event.target.value);
  
  return (
    <div>
      <HeaderWrapper>
        <LogoBotcamp small />
        <Link to="/">
          <LogoutBotcamp />
        </Link>
      </HeaderWrapper>

      <MessageWrapper>
        {messages.map((message, key) => <MessageBotcamp key={key}>{message}</MessageBotcamp>)}
        <BotMessage />
        <MessageBotcamp>!cpf</MessageBotcamp>
      </MessageWrapper>
      
      <FormMessage onSubmit={handleSubmit}>
        <InputMessage value={typing} onChange={handleChange}/>
      </FormMessage>
    </div>
  )
  
  };

export default Chat;
