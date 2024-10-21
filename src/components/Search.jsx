import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { Separator } from "@/components/ui/separator"
  import { CiSearch } from "react-icons/ci";

function search() {
  return (
    <div className='p-2 md:p-5 bg-white rounded-md md:rounded-full flex-col md:flex md:flex-row gap-10 px-5 items-center w-[60%]  '>
    <Select>
  <SelectTrigger className="outline-none md:border-none w-full shadow-none"  >
    <SelectValue placeholder="Cars" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">New</SelectItem>
    <SelectItem value="dark">Old</SelectItem>
  </SelectContent>
</Select>

<Separator orientation="vertical"className="hidden md:block" />

<Select>
  <SelectTrigger className=" outline-none md:border-none w-full shadow-none">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>

<Separator orientation="vertical "className="hidden md:block" />

<Select>
  <SelectTrigger className=" outline-none md:border-none w-full shadow-none">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>
<div>
<CiSearch className='text-[50px]  bg-primary rounded-full p-3 text-white hover:scale-105 transition-all cursor-pointer' />
</div>

    </div>
  )
}

export default search
