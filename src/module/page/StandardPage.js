import React from 'react'
import { Layout, Row, Col } from 'antd'
import Header from '../layout/Header'
import Footer from '../layout/Footer'

const BasePage = (props) => {
  return (
    <Layout className="p_standardPage">
      <Row className="background">
        <Col xs={{span: 24}} sm={{span: 24}} lg={{span: 24}} xl={{span: 24}} xxl={{span: 24}}>
          {
            props.noHeader ? '' : <Header/>
          }
        </Col>
        <Col className="main" xs={{span: 24}} sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}} xxl={{span: 24}}>
          <Layout.Content>
          <div className="main-content">
              {props.children}
          </div>
          </Layout.Content>
        </Col>
        <Col xs={0} md={24}>
          <Footer />
        </Col>
      </Row>
    </Layout>
  )
}

export default BasePage
