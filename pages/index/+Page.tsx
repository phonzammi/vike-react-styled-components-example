import React from "react";
import { Counter } from "./Counter.js";
import { styled } from "styled-components";

const Title = styled.h1`
  color: #BF4F74;
`;

export default function Page() {
  return (
    <>
      <Title>My Vike app</Title>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
    </>
  );
}
