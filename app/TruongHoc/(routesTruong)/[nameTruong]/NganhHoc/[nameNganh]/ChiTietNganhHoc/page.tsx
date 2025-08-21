import React from "react";
import { Header } from "./components/header";
import { Body } from "./components/body";
import { Body2 } from "./components/body2";
import { Logo } from "./components/logo";
import getProgram from "../../../../../../../action/get-program";
import getSchool from "../../../../../../../action/get-school";
import NavbarTruong from "../../../../../../../components/navbar/navbar";
import getSchools from "../../../../../../../action/get-schools";

const Page = async (
  {
    params,
  }:
    {
      params: { nameTruong: string, nameNganh: string };
    }) => {
  const program = await getProgram(params.nameTruong, params.nameNganh);
  const school = await getSchool(params.nameTruong);
  const schools = await getSchools();

  return (
    <div className="bg-[#FFF6E0]">
      <NavbarTruong school={school} schools={schools} />
      <Header />
      <Body program={program} />
      <Body2 program={program} />
      <Logo school={school} />
    </div>
  );
}
export default Page;
