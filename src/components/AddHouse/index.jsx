import React, { useEffect } from "react";
import { Wrapper, MenuWrapper, Section, SelectAnt, IconDel } from "./style";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Input } from "../Generic";
import { Checkbox } from "antd";

import { useFormik } from "formik";

import { Button } from "../Generic/Button";
import TextArea from "antd/es/input/TextArea";
import useRequest from "../../hooks/useRequest";

export const AddNewHouse = () => {
  const [imgs, setImgs] = useState([]);
  const [category /*, setCategory*/] = useState([]);
  const [img, setImg] = useState("");
  const navigate = useNavigate();
  const request = useRequest();

  const { id } = useParams();

  const [initial, setInitial] = useState({
    houseDetails: {},
    homeAmenitiesDto: {},
    componentsDto: {},
    status: true,
    locations: {
      lattitude: 0,
      longitude: 0,
    },
  });

  // single house
  useEffect(() => {
    id &&
      request({ url: `/houses/id/${id}`, token: true }).then((res) => {
        setImgs(res?.data?.attachments);
        setInitial({ ...res?.data });
      });
  }, []); // eslint-disable-line

  //category
  // useEffect(() => {
  //   request({ url: `/categories/list` }).then((res) => {
  //     setCategory(res?.data || []);
  //   });
  // }, []); // eslint-disable-line

  const mockDataCategory = [
    { id: 1, name: "Dom" },
    { id: 2, name: "Villa" },
    { id: 3, name: "House" },
    { id: 4, name: "Cottage" },
    { id: 5, name: "Elegant" },
    { id: 6, name: "VIP" },
  ];

  const formik = useFormik({
    initialValues: initial,
    enableReinitialize: true,
    onSubmit: (values) => {
      request({
        url: id ? `/houses/${id}` : `/houses`,
        method: id ? "PUT" : "POST",
        token: true,
        body: { ...values, categoryId: 1, name: "Sardor", attachments: imgs },
      }).then((res) => {
        if (res?.success) navigate("/myprofile");
      });
    },
  });

  const addImg = () => {
    setImgs([...imgs, { imgPath: img, id: `${img.length * Math.random()}$` }]);
    setImg("");
  };

  return (
    <Wrapper>
      <form onSubmit={formik.handleSubmit}>
        <MenuWrapper>
          <h1 className="subTitle">Address</h1>
          <Section>
            <Input
              onChange={formik.handleChange}
              name="country"
              value={formik.values.country}
              placeholder={"Country"}
            />
            <Input
              onChange={formik.handleChange}
              name="region"
              value={formik.values.region}
              placeholder={"Region"}
            />
            <Input
              onChange={formik.handleChange}
              name="city"
              value={formik.values.city}
              placeholder={"City"}
            />
            <Input
              onChange={formik.handleChange}
              name="address"
              value={formik.values.address}
              placeholder={"Address"}
            />
          </Section>
          <h1 className="subTitle">Apartment info</h1>
          <Section>
            <Input
              type="number"
              name="houseDetails.area"
              value={formik.values.houseDetails.area}
              onChange={formik.handleChange}
              placeholder={"area"}
            />
            <Input
              type="number"
              name="houseDetails.bath"
              value={formik.values.houseDetails.bath}
              onChange={formik.handleChange}
              placeholder={"bath"}
            />
            <Input
              type="number"
              name="houseDetails.beds"
              value={formik.values.houseDetails.beds}
              onChange={formik.handleChange}
              placeholder={"beds"}
            />
            <Input
              type="number"
              name="houseDetails.garage"
              value={formik.values.houseDetails.garage}
              onChange={formik.handleChange}
              placeholder={"garage"}
            />
            <Input
              type="number"
              name="houseDetails.yearBuilt"
              onChange={formik.handleChange}
              value={formik.values.houseDetails.yearBuilt}
              placeholder={"yearBuilt"}
            />
            <Input
              type="number"
              name="houseDetails.room"
              onChange={formik.handleChange}
              value={formik.values.houseDetails.room}
              placeholder={"room"}
            />

            <SelectAnt
              defaultValue={"Select Category"}
              value={formik?.values?.categoryId}
              // onChange={formik.handleChange}
            >
              <SelectAnt.Option value={""}>Select category</SelectAnt.Option>
              {category.length
                ? category.map((v) => {
                    return (
                      <SelectAnt.Option key={v?.id} value={v?.id}>
                        {v?.name}
                      </SelectAnt.Option>
                    );
                  })
                : mockDataCategory.map((v) => {
                    return (
                      <SelectAnt.Option
                        // onChange={formik.handleChange}
                        key={v?.id}
                        value={v?.id}
                      >
                        {v?.name}
                      </SelectAnt.Option>
                    );
                  })}
            </SelectAnt>
          </Section>
          <h1 className="subTitle">Price</h1>
          <Section>
            <Input
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              placeholder={"Name"}
            />
            <Input
              name="zipCode"
              onChange={formik.handleChange}
              value={formik.values.zipCode}
              placeholder={"Zip code"}
            />
            <Input
              type="number"
              onChange={formik.handleChange}
              name="price"
              value={formik.values.price}
              placeholder={"Price"}
            />
            <Input
              type="number"
              name="salePrice"
              onChange={formik.handleChange}
              value={formik.values.salePrice}
              placeholder={"Sale price"}
            />
          </Section>
          <Section>
            <Input
              onChange={({ target: { value } }) => setImg(value)}
              value={img}
              placeholder="Add Image URL"
            />
            <Button type={"button"} onClick={addImg}>
              Add Image URL
            </Button>
          </Section>
          <Section flex>
            {imgs.map((v, i) => {
              return (
                <pre>
                  {v?.imgPath}{" "}
                  <IconDel
                    key={v.id}
                    onClick={() => {
                      let res = imgs.filter((c) => c !== v);
                      setImgs(res);
                    }}
                  />
                </pre>
              );
            })}
          </Section>
          <Section>
            <TextArea
              onChange={formik.handleChange}
              rows={6}
              placeholder="description"
              name="description"
            />
          </Section>
          <h1 className="subTitle">Additional</h1>
          <Section>
            <Section style={{ width: "100%", justifyContent: "space-around" }}>
              <Section
                style={{ flexDirection: "column", alignItems: "flex-start" }}
              >
                <Checkbox
                  onChange={formik.handleChange}
                  name="homeAmenitiesDto.busStop"
                >
                  BusStop
                </Checkbox>
                <Checkbox
                  onChange={formik.handleChange}
                  name="homeAmenitiesDto.garden"
                >
                  Garden
                </Checkbox>
                <Checkbox
                  onChange={formik.handleChange}
                  name="homeAmenitiesDto.market"
                >
                  Market
                </Checkbox>
                <Checkbox
                  onChange={formik.handleChange}
                  name="homeAmenitiesDto.park"
                >
                  Park
                </Checkbox>
                <Checkbox
                  onChange={formik.handleChange}
                  name="homeAmenitiesDto.parking"
                >
                  Parking
                </Checkbox>
              </Section>
              <Section
                style={{ flexDirection: "column", alignItems: "flex-start" }}
              >
                <Checkbox
                  onChange={formik.handleChange}
                  name="homeAmenitiesDto.school"
                >
                  School
                </Checkbox>
                <Checkbox
                  onChange={formik.handleChange}
                  name="homeAmenitiesDto.stadium"
                >
                  Stadium
                </Checkbox>
                <Checkbox
                  onChange={formik.handleChange}
                  name="homeAmenitiesDto.subway"
                >
                  Subway
                </Checkbox>
                <Checkbox
                  onChange={formik.handleChange}
                  name="homeAmenitiesDto.superMarket"
                >
                  Super Market
                </Checkbox>
                <Checkbox
                  onChange={formik.handleChange}
                  name="componentsDto.tv"
                >
                  TV
                </Checkbox>
              </Section>
              <Section
                style={{ flexDirection: "column", alignItems: "flex-start" }}
              >
                <Checkbox
                  onChange={formik.handleChange}
                  name="componentsDto.airConditioner"
                >
                  Air Condition
                </Checkbox>
                <Checkbox
                  onChange={formik.handleChange}
                  name="componentsDto.courtYard"
                >
                  Court Yard
                </Checkbox>
                <Checkbox
                  onChange={formik.handleChange}
                  name="componentsDto.furniture"
                >
                  Furniture
                </Checkbox>
                <Checkbox
                  onChange={formik.handleChange}
                  name="componentsDto.gasStove"
                >
                  Gas Stove
                </Checkbox>
                <Checkbox
                  onChange={formik.handleChange}
                  name="componentsDto.internet"
                >
                  Internet
                </Checkbox>
              </Section>
            </Section>
          </Section>
          <Button type={"submit"}>{id ? "Update" : "Save"}</Button>
        </MenuWrapper>
      </form>
    </Wrapper>
  );
};

export default AddNewHouse;
