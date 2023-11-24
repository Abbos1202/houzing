import React, { useContext } from "react";
import { Container } from "./style";
import { HouseCard } from "../HouseCard";
// import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { PropertiesContext } from "../../context/properties";
// import useRequest from "../../hooks/useRequest";
const { REACT_APP_BASE_URL: url } = process.env;

export const Favourite = () => {
  // const [data, setData] = useState([]);
  const { search } = useLocation();

  const [, dispatch] = useContext(PropertiesContext);

  const navigate = useNavigate();
  // const request = useRequest()

  const { refetch, data } = useQuery(
    [search],
    async () => {
      const res = await fetch(`${url}/houses/getAll/favouriteList`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return await res.json();
    },

    {
      onSuccess: (res) => {
        // setData(res?.data || []);
        dispatch({ type: "refetch", payload: refetch });
      },
    }
  );

  // const { refetch } = useQuery(
  //   [search],
  //   async () => {
  //     return fetch(`${url}/houses/getAll/favouriteList`, {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("token")}`,
  //       },
  //     }).then((res) => res.json());
  //   },

  //   {
  //     onSuccess: (res) => {
  //       setData(res?.data || []);
  //       dispatch({ type: "refetch", payload: refetch });
  //     },
  //   }
  // );

  // request({url: `/houses/list${search}`})

  // .then((res) => res.json())
  // .then((res) => {
  //   setData(res?.data || []);
  //   dispatch({type:'refetch', payload: refetch})
  // });

  const onSelect = (id) => {
    navigate(`/properties/${id}`);
  };

  return (
    <>
      <div className="title">Favourite</div>
      <div className="info" style={{ textAlign: "center" }}>
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </div>
      <Container>
        {data?.data?.length ? (
          data?.data.map((v) => {
            return (
              <HouseCard onClick={() => onSelect(v.id)} key={v.id} data={v} />
            );
          })
        ) : (
          <h1>No liked homes</h1>
        )}
      </Container>
    </>
  );
};
