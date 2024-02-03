import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../../components/footer/Footer'
import Navigation from '../../components/navigation/Navigation'
import Banner from '../../components/banner/banner';
import IconCardStyle from '../../components/icon-card-style/icon-card-style';
import { BLOCKCHAIN,SMART,FRAMEWORK,WALLET,CRYPTO,PRIVATE,ICO, BLOCKBG } from './../../assets/images/index'

const Blockchain = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const  blockchains= [
       
    {
        title :'Smart Contract Development & Integration',
        content : "Technology- Ethereum, EOS, Multichain Solidity",
        image: SMART
    },
    {
        title :'Wallet & Cryptocurrency Development',
        content : "Ownership, Mining, Accounts, Private keys",
        image: WALLET
    },
    {
        title: "Crypto Trade Exchange Development",
        content : "Exchanges, Traders, Institution",
        image: CRYPTO
    }, 
    {
        title : "Private Blockchain",
        content : "Ethereum, Multichain, R3-Corda, Hyperledger, EOS, OpenChain, Ripple",
        image: PRIVATE
    },
    {
      title : "Ico / Sto Development And Support",
      content : "ERC20, ERC721, ERC1400",
      image: ICO
  },
  {
    title : "Framework Specific Development",
    content : "Ethereum, Multichain, R3-Corda, Hyperledger, EOS, OpenChain, Ripple",
    image: FRAMEWORK
}




]
  return (
    <>
      <div>
        <Navigation show={show} onClose={handleClose} onShow={handleShow} />
        <Banner title="Blockchain" bg={BLOCKBG} />
        <Container className='mt-75 mb-75'>
       
      
        <div >
          <Row>
            <Col lg='11'>
        <h1 className='main-title'>Trusted, Secure, and Best Blockchain Technology innovation to your business needs and maximize business opportunities and be inspired as disruptive innovation across all sectors from Banking & Finance, Logistics, Healthcare, Retail, and Government</h1>

            </Col>

          </Row>

        <div className='m-auto text-center'>
        <img  src={BLOCKCHAIN} alt="blockchain" width="80%" className='my-5'/>

        </div>

        </div>
        
          <div>
          <Row >
               {
                                blockchains.map((item, index)=>{
                                    return(
                                        <Col key={index} lg='4' sm='6' xs='12' md='4'>
                                    <IconCardStyle title={item.title} content={item.content} image={item.image} height="225px"/>
                                    </Col>

                                    )
                                })
                            }
</Row>
          </div>
        </Container>
        <Footer />
      </div>
    </>
  )
}

export default Blockchain
