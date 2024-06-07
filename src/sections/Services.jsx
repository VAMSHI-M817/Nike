import ServiceCards from '../components/ServiceCards'
import {services} from '../constants/index'


const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9  ">
      {services.map((service)=>(
        <ServiceCards key={service.label} {...service}/>
      ))}
    </section>
  )
}

export default Services