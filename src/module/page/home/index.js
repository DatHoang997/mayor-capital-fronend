import React, { useEffect, useState } from 'react'
import StandardPage from '../StandardPage'
import { Input, Row, Col, Button } from 'antd'
import 'antd/dist/antd.css'
import './style.scss'

const home = () => {
  const [srmAddress, setSrmAddress] = useState('')

  return (
    <StandardPage>
      <div className="content">
        <Row>
          <Col xs={24} lg={3}>
            <p className="text-purple text-label padding-top-label">Address:</p>
          </Col>
          <Col className="padding-top-label" xs={24} lg={10}>
            <input className="input" type="text"/>
          </Col>
          <Col xs={0} lg={1}/>
          <Col className="align-right padding-top-label" xs={0} lg={5}>
            <button className="standard-button home-button">Invite Friend</button>
          </Col>
        </Row>
        <Row className="padding-top-label">
          <Col className="align-right" xs={0} lg={3}/>
          <Col xs={14}>
            <p className="text-purple copy-noti">Referral link is now copied!</p>
          </Col>
          <Col className="align-right" xs={10} lg={0}>
            <button className="standard-button home-button">Invite Friend</button>
          </Col>
        </Row>
        <Row className="padding-top-group">
          <Col xs={24} lg={3}>
            <p className="text-purple text-label padding-top-label">BNB Staked</p>
          </Col>
          <Col className="padding-top-label" xs={24} lg={10}>
            <input className="input" type="text"/>
          </Col>
          <Col xs={0} lg={1}/>
          <Col className="padding-top-label align-right" xs={24} lg={5}>
            <span>
              <button className="add-more-button">
              <img className="icon-button-add-more" src="../../../assets/images/plus.svg"/>
                Add more
              </button>
            </span>
            <span className="align-right">
              <button className="withdraw-button">
                Withdraw
                <img className="icon-button-withdraw" src="../../../assets/images/arrow.svg"/>
                </button>
            </span>
          </Col>
        </Row>

        <Row className="padding-top-group-card">
          <Col className="padding-top-card" xs={24} sm={12} md={8} lg={8} xl={6}>
            <div className="home-card">
              <Row>
                <Col xs={24} className="center">
                  <p className="text-purple card-header">Pending Reward</p>
                </Col>
              </Row>
              <Row className="padding-top-card-element">
                <Col xs={8}>
                  <p className="text-purple card-label">Start:</p>
                </Col>
                <Col xs={16} className="right-align">
                  <p className="text-white home-value">10-25-2020</p>
                </Col>
              </Row>
              <Row className="padding-top-card-element">
                <Col xs={8}>
                  <p className="text-purple card-label">End time:</p>
                </Col>
                <Col xs={16} className="right-align">
                  <p className="text-white home-value">10-24-2020</p>
                </Col>
              </Row>
            </div>
          </Col>

          <Col className="padding-top-card" xs={24} sm={12} md={8} lg={8} xl={6}>
            <div className="home-card">
              <Row>
                <Col xs={2}/>
                <Col xs={20} className="center">
                  <p className="text-purple card-header">Unclaimed Reward</p>
                </Col>
                <Col className="align-right" xs={2}>
                  <p className="text-purple card-header">#1</p>
                </Col>
              </Row>
              <Row className="padding-top-card-element">
                <Col xs={8}>
                  <p className="text-purple card-label">Start:</p>
                </Col>
                <Col xs={16} className="right-align">
                  <p className="text-white home-value">10-25-2020</p>
                </Col>
              </Row>
              <Row className="padding-top-card-element">
                <Col xs={8}>
                  <p className="text-purple card-label">Endtime:</p>
                </Col>
                <Col xs={16} className="right-align">
                  <p className="text-white home-value">10-24-2020</p>
                </Col>
              </Row>
              <Row className="padding-top-card-element">
                <Col xs={8}>
                  <p className="text-purple card-label">Reward:</p>
                </Col>
                <Col xs={16} className="right-align">
                  <a className="text-white home-reward">11,000,000 </a>
                  <a className="text-purple card-header">ZD</a>
                </Col>
              </Row>
              <Row className="padding-top-card-element">
                <Col className="center" xs={24}>
                  <button className="standard-button claim-button">Claim</button>
                </Col>
              </Row>
            </div>
          </Col>

          <Col className="padding-top-card" xs={24} sm={12} md={8} lg={8} xl={6}>
            <div className="home-card">
              <Row>
                <Col xs={2}/>
                <Col xs={20} className="center">
                  <p className="text-purple card-header">Unclaimed Reward</p>
                </Col>
                <Col className="align-right" xs={2}>
                  <p className="text-purple card-header">#1</p>
                </Col>
              </Row>
              <Row className="padding-top-card-element">
                <Col xs={8}>
                  <p className="text-purple card-label">Start:</p>
                </Col>
                <Col xs={16} className="right-align">
                  <p className="text-white home-value">10-25-2020</p>
                </Col>
              </Row>
              <Row className="padding-top-card-element">
                <Col xs={8}>
                  <p className="text-purple card-label">Endtime:</p>
                </Col>
                <Col xs={16} className="right-align">
                  <p className="text-white home-value">10-24-2020</p>
                </Col>
              </Row>
              <Row className="padding-top-card-element">
                <Col xs={8}>
                  <p className="text-purple card-label">Reward:</p>
                </Col>
                <Col xs={16} className="right-align">
                  <a className="text-white home-reward">11,000,000 </a>
                  <a className="text-purple card-header">ZD</a>
                </Col>
              </Row>
              <Row className="padding-top-card-element">
                <Col className="center" xs={24}>
                  <button className="standard-button claim-button">Claim</button>
                </Col>
              </Row>
            </div>
          </Col>

          <Col className="padding-top-card" xs={24} sm={12} md={8} lg={8} xl={6}>
            <div className="home-card">
              <Row>
                <Col xs={2}/>
                <Col xs={20} className="center">
                  <p className="text-purple card-header">Unclaimed Reward</p>
                </Col>
                <Col className="align-right" xs={2}>
                  <p className="text-purple card-header">#1</p>
                </Col>
              </Row>
              <Row className="padding-top-card-element">
                <Col xs={8}>
                  <p className="text-purple card-label">Start:</p>
                </Col>
                <Col xs={16} className="right-align">
                  <p className="text-white home-value">10-25-2020</p>
                </Col>
              </Row>
              <Row className="padding-top-card-element">
                <Col xs={8}>
                  <p className="text-purple card-label">Endtime:</p>
                </Col>
                <Col xs={16} className="right-align">
                  <p className="text-white home-value">10-24-2020</p>
                </Col>
              </Row>
              <Row className="padding-top-card-element">
                <Col xs={8}>
                  <p className="text-purple card-label">Reward:</p>
                </Col>
                <Col xs={16} className="right-align">
                  <a className="text-white home-reward">11,000,000 </a>
                  <a className="text-purple card-header">ZD</a>
                </Col>
              </Row>
              <Row className="padding-top-card-element">
                <Col className="center" xs={24}>
                  <button className="standard-button claim-button">Claim</button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </StandardPage>
  )
}

export default home
