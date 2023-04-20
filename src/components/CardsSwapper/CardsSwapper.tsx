import * as React from 'react'
import styled from 'styled-components'

import useWidth from "../../hooks/useWidth";

import { HidableComponent } from "../HidableComponent";

import Button from './Button'
import Card from './Card'

import {
    AutomatizationOne,
    AutomatizationTwo,
    AutomatizationThree,
    LoansOne,
    LoansTwo,
    LoansThree,
    CustomerServiceOne,
    CustomerServiceTwo,
    CustomerServiceThree
} from './images'

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1200px) and (max-width: 1300px) {
    transform: scale(0.9);
  }
  
  .custom--gap {
    gap: 78px;
    
    @media (max-width: 425px) {
      gap: 52px;
    }
  }
  
  .custom--width {
    width: 100%;

    @media (min-width: 425px) and (max-width: 1200px) {
      margin: 70px 0 0 0;
    }
  }
`

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  
  @media (max-width: 1200px) {
    flex-direction: column;
  }
  
  &.custom--gap {
    @media (max-width: 1200px) {
      gap: 20px;
    }
  }
`

const desktopData = {
    customerService: [
        {
            src: AutomatizationOne,
            alt: 'Customer service bot',
            title: <div>Customer service bot</div>,
            content: <div>DITA is an automated WhatsApp bot<br/>without human intermediaries that<br/>allows customers to get a loan<br/>through Whatsapp.</div>
        },
        {
            src: AutomatizationTwo,
            alt: 'Mastercard prepaid card',
            title: <div>Mastercard<br/>prepaid card.</div> ,
            content: <div>A prepaid card for anything<br/>you want to buy.</div>
        },
        {
            src: AutomatizationThree,
            alt: 'Ecommerce',
            title: <div>Ecommerce</div>,
            content: <div>All the things a dealership<br/>needs, in one place.</div>
        },
    ],
    loans: [
        {
            src: LoansOne,
            alt: 'Agencies website',
            title: <div>Agencies website</div>,
            content: <div>It allows agents to ask for a loan in a few <br/> steps and 100% online: integrated with <br/> several services including KYC and more <br/> financial data that automatically help to<br/> decide whether or not to grant the loan.</div>
        },
        {
            src: LoansTwo,
            alt: 'Personal Loans',
            title: <div>Personal Loans</div>,
            content: <div>Get an instant personal loan for anything <br/> you need in 5 minutes.</div>
        },
        {
            src: LoansThree,
            alt: 'Online Insurance',
            title: <div>Online Insurance</div>,
            content: <div>Not only can the agents sell a loan, but <br/> they can also work as insurance brokers. <br/> They can sell insurance to their customers <br/> and get their agent's commission.</div>
        },
    ],
    automatization: [
        {
            src: CustomerServiceOne,
            alt: 'Onboarding',
            title: <div>Onboarding</div>,
            content: <div>The onboarding platform allows car <br/> dealerships to create their business by <br/> using advanced techniques of identity <br/> validation.</div>
        },
        {
            src: CustomerServiceTwo,
            alt: 'Hubspot',
            title: <div>Hubspot</div>,
            content: <div>We integrated with Hubspot to let <br/> Decreditos cross-reference all the <br/> historical, present and forecast data of <br/> its agencies.</div>
        },
        {
            src: CustomerServiceThree,
            alt: 'Multi-publisher',
            title: <div>Multi-publisher</div>,
            content: <div>It provides the agency with a powerful <br/> omnichannel tool to manage all their <br/> publications in the different sales <br/> channels (Mercado Libre, OLX, etc).</div>
        },
    ]
}

const mobileData = {
    customerService: [
        {
            src: AutomatizationOne,
            alt: 'Customer service bot',
            title: <div>Customer service bot</div>,
            content: <div>DITA is an automated WhatsApp bot without <br/> human intermediaries that allows customers to <br/> get a loan through Whatsapp.</div>
        },
        {
            src: AutomatizationTwo,
            alt: 'Mastercard prepaid card',
            title: <div>Mastercard<br/>prepaid card.</div> ,
            content: <div>A prepaid card for anything <br/> you want to buy.</div>
        },
        {
            src: AutomatizationThree,
            alt: 'Ecommerce',
            title: <div>Ecommerce</div>,
            content: <div>All the things a dealership needs, in one place.</div>
        }
    ],
    loans: [
        {
            src: LoansOne,
            alt: 'Agencies website',
            title: <div>Agencies website</div>,
            content: <div>It allows agents for ask for a loan in a few steps and 100% online: Integrated with several services including KYC and more financial data that automatically help whether to grant <br/> or not the loan.</div>
        },
        {
            src: LoansTwo,
            alt: 'Personal Loans',
            title: <div>Personal Loans</div>,
            content: <div>Get an instant personal loan for anything <br/> you need in 5 minutes.</div>
        },
        {
            src: LoansThree,
            alt: 'Online Insurance',
            title: <div>Online Insurance</div>,
            content: <div>Not only can the agents sell a loan, but they can also work as insurance brokers. They can sell insurance to their customers and get their agent's commission.</div>
        },
    ],
    automatization: [
        {
            src: CustomerServiceOne,
            alt: 'Onboarding',
            title: <div>Onboarding</div> ,
            content: <div>The onboarding platform allows car dealerships <br/> to create their business by using advanced techniques of identity validation.</div>
        },
        {
            src: CustomerServiceTwo,
            alt: 'Hubspot',
            title: <div>Hubspot</div>,
            content: <div>We integrated with Hubspot to let Decreditos <br/> cross-reference all the historical, present and <br/> forecast data of its agencies.</div>
        },
        {
            src: CustomerServiceThree,
            alt: 'Multi-publisher',
            title: <div>Multi-publisher</div>,
            content: <div>It provides the agency with a powerful omnichannel tool to manage all their publications in the different sales channels (Mercado Libre, OLX, etc).</div>
        }
    ]
}

const values = [
    {
        automatization: true,
        loans: false,
        customerService: false
    },
    {
        automatization: false,
        loans: true,
        customerService: false
    },
    {
        automatization: false,
        loans: false,
        customerService: true
    }
]

const CardsSwapper = () => {
    const [selected, setSelected] = React.useState(values[0])
    const { isMobile } = useWidth()

    const data = isMobile ? mobileData : desktopData

    return (
        <StyledMain>
            <StyledRow className='custom--gap'>
                <Button onClick={() => setSelected(values[0])} active={selected['automatization']} content='Automatization' />
                <Button onClick={() => setSelected(values[1])} active={selected['loans']} content='Loans' />
                <Button onClick={() => setSelected(values[2])} active={selected['customerService']} content='Customer Service' />
            </StyledRow>
            <StyledRow className='custom--width'>
                <StyledRow className='custom--gap'>
                    <HidableComponent isVisible={selected['automatization']}>
                        {
                            data['automatization'].map(card => {
                                return (
                                    <Card src={card.src} alt={card.alt} title={card.title} content={card.content} />
                                )
                            })
                        }
                    </HidableComponent>
                    <HidableComponent isVisible={selected['loans']}>
                        {
                            data['loans'].map(card => {
                                return (
                                    <Card src={card.src} alt={card.alt} title={card.title} content={card.content} />
                                )
                            })
                        }
                    </HidableComponent>
                    <HidableComponent isVisible={selected['customerService']}>
                        {
                            data['customerService'].map(card => {
                                return (
                                    <Card src={card.src} alt={card.alt} title={card.title} content={card.content} />
                                )
                            })
                        }
                    </HidableComponent>
                </StyledRow>
            </StyledRow>
        </StyledMain>
    )
}

export default CardsSwapper
