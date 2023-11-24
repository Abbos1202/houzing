import { Dropdown } from "antd";
import React, { useRef } from "react";
import { Button, Input } from "../Generic";
import { Container, Icons, MenuWrapper, Section, SelectAnt } from "./style";
import { uzeReplace } from "../../hooks/useReplace";

import { useNavigate, useLocation } from "react-router-dom";
import useSearch from "../../hooks/useSearch";
// import { useEffect } from "react";
import { useState } from "react";

export const Filter = () => {
  // const { REACT_APP_BASE_URL: url } = process.env;
  const [data/*, setData*/] = useState([]);
const [value/*, setValue*/] = useState("Select Category");

  const navigate = useNavigate();
  const location = useLocation();
  const query = useSearch();

  const countryRef = useRef();
  const regionRef = useRef();
  const addressRef = useRef();
  const zipRef = useRef();

  const roomsRef = useRef();

  const minPriceRef = useRef();
  const maxPriceRef = useRef();

  // categoiy
  // useEffect(() => {
  //   fetch(`${url}/categories/list`)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setData(res?.data || []);
  //     });
  // }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // useEffect(() => {
  //   let [d] = data?.filter((v) => v.id === Number(query.get("category")));
  //   d?.name && setValue(`${d?.name}`);
  //   !query.get("category_id") && setValue("Select category");
  // }, [location?.search, data]); // eslint-disable-line react-hooks/exhaustive-deps

  const mockDataCategory = [
    { id: 1, name: "Dom" },
    { id: 2, name: "Villa" },
    { id: 3, name: "House" },
    { id: 4, name: "Cottage" },
    { id: 5, name: "Elegant" },
    { id: 6, name: "VIP" },
  ];

  const onChange = ({ target: { name, value } }) => {
    navigate(`${location.pathname}${uzeReplace(name, value)}`);
  };

  const onChangeCategory = (category_id) => {
    navigate(`properties/${uzeReplace(`category_id`, category_id)}`);
  };

  const onChangeSort = (sort) => {
    navigate(`properties/${uzeReplace(`sort`, sort)}`);
  };

  const menu = (
    <MenuWrapper>
      <h1 className="subTitle">Address</h1>
      <Section>
        <Input
          defaultValue={query.get("country")}
          onChange={onChange}
          name="country"
          ref={countryRef}
          placeholder={"Country"}
        />
        <Input
          onChange={onChange}
          name="region"
          defaultValue={query.get("region")}
          ref={regionRef}
          placeholder={"Region"}
        />
        <Input
          onChange={onChange}
          name="address"
          defaultValue={query.get("address")}
          ref={addressRef}
          placeholder={"Address"}
        />
        <Input
          onChange={onChange}
          defaultValue={query.get("zip_code")}
          name="zip_code"
          ref={zipRef}
          placeholder={"Zip code"}
        />
      </Section>
      <h1 className="subTitle">Apartment info</h1>
      <Section>
        <Input
          name="room"
          onChange={onChange}
          ref={roomsRef}
          placeholder={"Rooms"}
        />

        <SelectAnt
          defaultValue={query.get("sort") || "Select sort"}
          onChange={onChangeSort}
        >
          <SelectAnt.Option value={""}>Select sort</SelectAnt.Option>
          <SelectAnt.Option value={"asc"}>O'suvchi</SelectAnt.Option>
          <SelectAnt.Option value={"desc"}>Kamayuvchi</SelectAnt.Option>
        </SelectAnt>

        <SelectAnt defaultValue={value} onChange={onChangeCategory}>
          <SelectAnt.Option value={""}>Select category</SelectAnt.Option>
          {data?.length
            ? data.map((v) => {
                return (
                  <SelectAnt.Option key={v.id} value={v?.id}>
                    {v?.name}
                  </SelectAnt.Option>
                );
              })
            : mockDataCategory.map((v) => {
                return (
                  <SelectAnt.Option key={v.id} value={v?.id}>
                    {v?.name}
                  </SelectAnt.Option>
                );
              })}
        </SelectAnt>
      </Section>
      <h1 className="subTitle">Price</h1>
      <Section>
        <Input
          onChange={onChange}
          name="min_price"
          ref={minPriceRef}
          placeholder={"Min price"}
        />
        <Input
          onChange={onChange}
          name="max_price"
          ref={maxPriceRef}
          placeholder={"Max price"}
        />
      </Section>
    </MenuWrapper>
  );

  return (
    <Container>
      <Input
        icon={<Icons.Houses />}
        placeholder={"Enter an address, neighborhood, city, or ZIP code"}
      />

      <Dropdown
        overlay={menu}
        placement="bottomRight"
        arrow={{
          pointAtCenter: true,
        }}
        trigger="click"
      >
        <div>
          <Button type={"light"}>
            <Icons.Filter /> Advanced
          </Button>
        </div>
      </Dropdown>
      <Button>
        <Icons.Search /> Search
      </Button>
    </Container>
  );
};
export default Filter;
