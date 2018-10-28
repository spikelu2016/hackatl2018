import React from 'react';
import ReactDOM from "react-dom";
import { Card, Image, Rating } from 'semantic-ui-react'
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const GoogleMapConstructor = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyA7c9CX1ee4zDqmvlsiCYRgFUl1DbmBlq8&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `500px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={4}
    defaultCenter={{ lat: 25.0330, lng: 121.5654 }}>
    {props.isMarkerShown && props.location.map(loc => {
      return <Marker position={{ lat: loc.lat, lng: loc.lng }} />
    })}
  </GoogleMap>
));


class AllTempleInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tempInfo: [{
        name: "White Horse Temple",
        location: "Luoyang, Henan, China",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f5/%E6%B4%9B%E9%98%B3%E7%99%BD%E9%A9%AC%E5%AF%BA%E9%BD%90%E4%BA%91%E5%A1%94.jpg",
        description: "White Horse Temple is, according to tradition, the first Buddhist temple in China, established in 68 AD under the patronage of Emperor Ming in the Eastern Han dynasty capital Luoyang."
      }]
    }
  }

  render() {
    return (<div>
      <div style={{height: "500px", marginTop: "80px", marginRight: "30px", marginLeft: "30px"}}>
    <GoogleMapConstructor
      style={{margin: "15px"}}
      isMarkerShown
      location={[{ lat: 34.6202, lng: 112.4539 },
                 { lat: 30.2741, lng: 120.1551 },
                 { lat: 31.2990, lng: 120.5853 },
                 { lat: 35.6895, lng: 139.6917 },
                 { lat: 35.6895, lng: 139.6917 },
                 { lat: 9.9252, lng: 78.1198 },
                 { lat: 13.7560, lng: 100.4987 },
                 { lat: 21.0119, lng: 70.7168 }]}
    />
    </div>
    <div style={{display: "flex", margin: "15px 120px"}}>
      <div style={{display: "inline-block", width: "33.3%"}}>
          <Card style={{margin: "5px auto"}}>
            <Image src="https://upload.wikimedia.org/wikipedia/commons/f/f5/%E6%B4%9B%E9%98%B3%E7%99%BD%E9%A9%AC%E5%AF%BA%E9%BD%90%E4%BA%91%E5%A1%94.jpg" />
            <Card.Content>
            <Card.Header>White Horse Temple</Card.Header>
            <Card.Meta>Luoyang, Henan, China</Card.Meta>
            <Card.Description>White Horse Temple is, according to tradition, the first Buddhist temple in China, established in 68 AD under the patronage of Emperor Ming in the Eastern Han dynasty capital Luoyang.</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Rating icon='star' defaultRating={5} maxRating={5} />
            </Card.Content>
          </Card>
          <Card style={{margin: "5px auto"}}>
            <Image src="https://i.ytimg.com/vi/aLce1JxllGE/hqdefault.jpg" />
            <Card.Content>
            <Card.Header>Hanshan Temple</Card.Header>
            <Card.Meta>Suzhou, Jiangsu, China</Card.Meta>
            <Card.Description>Hanshan Temple is believed to have been founded during the Tianjian era (502–519) of the reign of Emperor Wu of Liang, in the Southern and Northern Dynasties period. The current name of the monastery derives from Hanshan, the legendary monk and poet. Hanshan and his disciple Shide are said to have come to the monastery during the reign of Emperor Taizong of Tang (627–649), where Hanshan became the abbot.</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Rating icon='star' defaultRating={5} maxRating={5} />
            </Card.Content>
          </Card>
      </div>
      <div style={{display: "inline-block", width: "33.3%"}}>
        <Card style={{margin: "5px auto"}}>
          <Image src="https://upload.wikimedia.org/wikipedia/commons/6/66/Lingyin_Temple%2C_Hangzhou_20161003.jpg" />
          <Card.Content>
          <Card.Header>Lingyin Temple</Card.Header>
          <Card.Meta>Hangzhou, Zhejiang, China</Card.Meta>
          <Card.Description>The temple's name is commonly literally translated as Temple of the Soul's Retreat. It is one of the largest and wealthiest Buddhist temples in China, and contains numerous pagodas and Buddhist grottoes.</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Rating icon='star' defaultRating={4} maxRating={5} />
          </Card.Content>
        </Card>
        <Card style={{margin: "5px auto"}}>
          <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Kiyomizu.jpg/1024px-Kiyomizu.jpg" />
          <Card.Content>
          <Card.Header>Kiyomizu-dera</Card.Header>
          <Card.Meta>Kyoto, Japan</Card.Meta>
          <Card.Description>The place is not to be confused with Kiyomizu-dera in Yasugi, Shimane, which is part of the 33-temple route of the Chūgoku 33 Kannon Pilgrimage through western Japan, or the Kiyozumi-dera temple associated with the Buddhist priest Nichiren.</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Rating icon='star' defaultRating={5} maxRating={5} />
          </Card.Content>
        </Card>
        <Card style={{margin: "5px auto"}}>
          <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Temple_de_M%C3%AEn%C3%A2ksh%C3%AE01.jpg/800px-Temple_de_M%C3%AEn%C3%A2ksh%C3%AE01.jpg" />
          <Card.Content>
          <Card.Header>Meenakshi Temple</Card.Header>
          <Card.Meta>Madurai, Tamil Nadu, India</Card.Meta>
          <Card.Description>It is dedicated to Meenakshi, a form of Parvati, and her consort, Sundareshwar, a form of Shiva. The temple is at the center of the ancient temple city of Madurai mentioned in the Tamil Sangam literature, with the goddess temple mentioned in 6th century CE texts.</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Rating icon='star' defaultRating={5} maxRating={5} />
          </Card.Content>
        </Card>
      </div>
      <div style={{display: "inline-block", width: "33.3%"}}>
        <Card style={{margin: "5px auto"}}>
          <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Kinkaku-ji_the_Golden_Temple_in_Kyoto_overlooking_the_lake_-_high_rez.JPG/800px-Kinkaku-ji_the_Golden_Temple_in_Kyoto_overlooking_the_lake_-_high_rez.JPG" />
          <Card.Content>
          <Card.Header>Kinkaku-ji(Rokuon-ji)</Card.Header>
          <Card.Meta>Tokyo, Japan</Card.Meta>
          <Card.Description>It is one of the most popular buildings in Japan, attracting a large number of visitors annually.[3] It is designated as a National Special Historic Site, a National Special Landscape and is one of 17 locations making up the Historic Monuments of Ancient Kyoto which are World Heritage Sites</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Rating icon='star' defaultRating={5} maxRating={5} />
          </Card.Content>
        </Card>
        <Card style={{margin: "5px auto"}}>
          <Image src="http://static.asiawebdirect.com/m/bangkok/portals/bangkok-com/homepage/attraction-temple/wat-prakaeo/placeInfoParagraphs/03/image/bangkok-wat-pra-keaw.jpg" />
          <Card.Content>
          <Card.Header>Wat Phra Kaew</Card.Header>
          <Card.Meta>‎Phra Nakhon District‎, ‎Bangkok, Thailand</Card.Meta>
          <Card.Description>Wat Phra Kaew is regarded as the most sacred Buddhist temple (wat) in Thailand. The Emerald Buddha housed in the temple is a potent religio-political symbol and the palladium (protective image) of Thai society. It is located in Phra Nakhon District, the historic centre of Bangkok, within the precincts of the Grand Palace.</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Rating icon='star' defaultRating={4} maxRating={5} />
          </Card.Content>
        </Card>
        <Card style={{margin: "5px auto"}}>
          <Image src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Somnath-current.jpg" />
          <Card.Content>
          <Card.Header>Somnath Temple</Card.Header>
          <Card.Meta>‎Gir Somnath District, Gujarat, India</Card.Meta>
          <Card.Description>The Somnath temple located in Prabhas Patan near Veraval in Saurashtra on the western coast of Gujarat, is believed to be the first among the twelve jyotirlinga shrines of Shiva</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Rating icon='star' defaultRating={4} maxRating={5} />
          </Card.Content>
        </Card>
      </div>
    </div>
  </div>)
  }
}

export default AllTempleInfo;
