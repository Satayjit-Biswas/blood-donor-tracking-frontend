import Form from '../components/Contact/Form'
import Become from '../components/Home_components/Become'
import Slider from '../components/Home_components/Slider'
import Volunteer from '../components/Home_components/Volunteer'
import Who from '../components/Home_components/Who'

export default function Home() {
  return (
    <>
      <Slider></Slider>
      <Who></Who>      
      <Volunteer></Volunteer>
      <Become></Become>
      <Form></Form>
    </>
  )
}
