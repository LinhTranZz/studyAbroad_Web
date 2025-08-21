"use client";

import { TruongHocCombobox } from "../ui/truonghoc-combobox";
import HomeMenu from "./home-menu";
import React from "react";
import { School } from "@prisma/client";
import Link from "next/link";

interface Props {
  schools: School[];
}

const NavItem = ({ schools }: Props) => {
  return (
    <>
      <div className="lg:flex md:flex items-center justify-normal relative h-[72px] md:text-lg text-base gap-3">
        <Link href="/" className="md:visible hidden text-white font-semibold transition hover:cursor-pointer hover:bg-white hover:text-red-900 md:min-h-full md:flex justify-center text-center items-center px-8">
          Trang chủ
        </Link>
        <div className="flex flex-row items-center justify-center">
          <HomeMenu />
          <TruongHocCombobox schools={schools} />
        </div>
        <Link className="md:visible hidden text-white md:text-lg text-base font-semibold transition hover:cursor-pointer hover:bg-white hover:text-red-900 min-h-full md:flex justify-center text-center items-center px-8" href="/LienHe">Liên Hệ</Link>
        <Link className="md:visible hidden text-white font-semibold transition hover:cursor-pointer hover:bg-white hover:text-red-900 min-h-full md:flex justify-center text-center items-center px-8" href="/SoSanh">So Sánh</Link>
        <Link className="md:visible hidden text-white font-semibold transition hover:cursor-pointer hover:bg-white hover:text-red-900 min-h-full md:flex justify-center text-center items-center px-8" href="/HocPhi">Học Phí</Link>
        <Link className="md:visible hidden text-white font-semibold transition hover:cursor-pointer hover:bg-white hover:text-red-900 min-h-full md:flex justify-center text-center items-center px-8" href="/DoiTac2">E-Sport</Link>
      </div>
    </>
  );
};

export default NavItem;
