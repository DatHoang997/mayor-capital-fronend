import React, { useEffect, useState } from 'react'
import { Row, Col } from 'antd'
import I18N from '@/I18N'
import './style.scss'
import 'antd/dist/antd.css'

const HeaderComponent = () => {
  return (
    <header className="header">
      <Row className="main-header">
        <Col xs={12}>
          <img className="logo" src="../../../assets/images/logo.svg"/>
        </Col>
        <Col className="header-button-container" xs={12}>
          <button className="standard-button header-button">Connect Wallet</button>
        </Col>
      </Row>
    </header>
  )
}

export default HeaderComponent
