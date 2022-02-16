import React from 'react'
import { Servicescard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from './ServicesElements'
import Icon1 from "../../images/svg-2.svg"
import Icon2 from "../../images/svg-3.svg"
import Icon3 from "../../images/svg-6.svg"


export const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <Servicescard>
                <ServicesIcon src={Icon1} />
                <ServicesH2>Reduce Expences</ServicesH2>
                <ServicesP>We help  reduce your fees and increase
                    your overall revenue.
                </ServicesP>
            </Servicescard>
            <Servicescard>
                <ServicesIcon src={Icon2} />
                <ServicesH2>Virtual Offices</ServicesH2>
                <ServicesP>You can access our 
                    platform online anywhere in the world.
                </ServicesP>
            </Servicescard>
            <Servicescard>
                <ServicesIcon src={Icon3} />
                <ServicesH2>Premium Benefits</ServicesH2>
                <ServicesP>Unlock our special membership 
                    card that returns 5% cash back.
                </ServicesP>
            </Servicescard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}
