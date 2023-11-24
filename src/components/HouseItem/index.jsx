import React, { useEffect, useState } from "react";
import {
  Blur,
  Container,
  Content,
  Description,
  Details,
  Icons,
  ImgContainer,
  MiniImgsContainer,
  Section,
  User,
  Wrapper,
} from "./style";
import { useParams } from "react-router-dom";
import Input from "../Generic/Input";
import Button from "../Generic/Button";
import { Checkbox } from "antd";

import nouser from "../../assets/img/nouser.jpeg";
// import { Yandex } from "../Generic/Yandex";
import { Recent } from "../Recent";

export const HouseItem = () => {
  const [data, setData] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(
      `http://ec2-3-140-188-131.us-east-2.compute.amazonaws.com:8081/api/v1/houses/id/${params?.id}`
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data);
        window.scrollTo(0, 0);
      });
  }, [params?.id]);

  return (
    <>
      <ImgContainer>
        <ImgContainer.Main
          src={(data?.attachments && data?.attachments[0]?.imgPath) || nouser}
          alt="img"
        />
        <MiniImgsContainer>
          {data?.attachments?.slice(1, 5).map((v, i) => {
            return data?.attachments?.length > 5 && i === 3 ? (
              <Blur.Container key={v.id}>
                <ImgContainer.SubImg key={v.id} src={v.imgPath} alt="img" />
                <Blur>+{data?.attachments.length - 5}</Blur>
              </Blur.Container>
            ) : (
              <ImgContainer.SubImg key={v.id} src={v.imgPath} alt="img" />
            );
          })}
        </MiniImgsContainer>
      </ImgContainer>
      <Wrapper>
        <Container flex={3}>
          <Section>
            <Content style={{ alignItems: "flex-start" }}>
              <div>
                <Content.Title large>{data.name}</Content.Title>
              </div>
              <div>
                <div className="info">
                  {data?.city} {data?.address}
                </div>
              </div>
            </Content>
            <Content flex>
              <Icons.Share /> <Icons.Text>Share</Icons.Text>
              <Icons.Like /> <Icons.Text>Save</Icons.Text>
            </Content>
          </Section>
          <Section>
            <Details>
              <Icons.Bed />
              <Details.Title>Bed {data?.houseDetails?.beds || 0}</Details.Title>

              <Icons.Bath />
              <Details.Title>
                Bath {data?.houseDetails?.bath || 0}
              </Details.Title>

              <Icons.Garage />
              <Details.Title>
                Garage {data?.houseDetails?.garage || 0}
              </Details.Title>

              <Icons.Ruler />
              <Details.Title>
                Ruler {data?.houseDetails?.area || 0}kv
              </Details.Title>
            </Details>
            <Content>
              <Content flex>
                <del>
                  <Details.Title> ${data?.price || 0}</Details.Title>
                </del>
                <h2 className="title">${data?.salePrice || 0}</h2>
              </Content>
              <div className="info" style={{ textAlign: "end" }}>
                {data?.user?.firstname}
              </div>
            </Content>
          </Section>
          <Content.Title>Description</Content.Title>
          <Description>{data?.description}</Description>
          <Content.Title>Feature</Content.Title>
          <Section>
            <Container gap={25}>
              <Content flex>
                <Icons.Bed />
                <Details.Title>
                  Air Conditioning {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Garage />
                <Details.Title>
                  Barbeque {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Bed />
                <Details.Title>
                  Dryer {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Ruler />
                <Details.Title>
                  Gym {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
            </Container>
            <Container gap={25}>
              <Content flex>
                <Icons.Bed />
                <Details.Title>
                  Air Conditioning {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Garage />
                <Details.Title>
                  Barbeque {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Bed />
                <Details.Title>
                  Dryer {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Ruler />
                <Details.Title>
                  Gym {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
            </Container>
            <Container gap={25}>
              <Content flex>
                <Icons.Bed />
                <Details.Title>
                  Air Conditioning {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Garage />
                <Details.Title>
                  Barbeque {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Bed />
                <Details.Title>
                  Dryer {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Ruler />
                <Details.Title>
                  Gym {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
            </Container>
            <Container gap={25}>
              <Content flex>
                <Icons.Bed />
                <Details.Title>
                  Air Conditioning {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Garage />
                <Details.Title>
                  Barbeque {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Bed />
                <Details.Title>
                  Dryer {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Ruler />
                <Details.Title>
                  Gym {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
            </Container>
          </Section>
          <Content.Title mt={48} mb>
            Location
          </Content.Title>
        </Container>

        <Container className="user" flex={1}>
          <Section style={{ justifyContent: "flex-start" }}>
            <User.Img src={nouser} alt="img" />
            <Content>
              <div className="subtitle">Web Brain</div>
              <div className="info">998 33 5762020</div>
            </Content>
          </Section>
          <Input placeholder="Name" />
          <Input placeholder="Phone" />
          <Input placeholder="Email" />
          <Input placeholder="Message" />
          <Checkbox>By submitting this form I agree to Terms of Use</Checkbox>
          <Button width="%">Send Request</Button>
        </Container>
      </Wrapper>
      <Wrapper>
        {/* <Yandex /> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191884.8413117063!2d69.11421069176203!3d41.282737456445076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1681357504114!5m2!1sen!2s"
          title="googleMap"
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Wrapper>
      <Recent style={{ marginTop: "24px" }} />
    </>
  );
};
