import React from "react";
import Button from "../button/button";
import { useTelegram } from "../../hooks/useTelegram";
import './header.css'

export default function Header() {

 const {onClose, user} = useTelegram();


  return(
    <div className="header">
      <Button onClick={onClose}>Закрыть</Button>
      <span className="username">
      {user?.username}
      </span>
    </div>
  )
}