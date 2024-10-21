import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { CiSearch } from "react-icons/ci";
import Data from '@/Shared/Data';

function Search() {
  return (
    <div className='p-2 md:p-5 bg-white rounded-md md:rounded-full flex-col md:flex md:flex-row gap-10 px-5 items-center w-[60%]'>
      
      {/* Car Selection */}
      <Select>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none">
          <SelectValue placeholder="Cars" />
        </SelectTrigger>
        <SelectContent>
          {/* Assuming you will map categories for car types */}
          {Data.Category.map((category) => (
            <SelectItem key={category.id} value={category.name}>
              {category.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Separator orientation="vertical" className="hidden md:block" />

      {/* Car Makes Selection */}
      <Select>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none">
          <SelectValue placeholder="Car Makes" />
        </SelectTrigger>
        <SelectContent>
          {Data.CarMakes.map((maker) => (
            <SelectItem key={maker.id} value={maker.name}>
              {maker.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Separator orientation="vertical" className="hidden md:block" />

      {/* Pricing Selection */}
      <Select>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none">
          <SelectValue placeholder="Pricing" />
        </SelectTrigger>
        <SelectContent>
          {Data.Pricing.map((price) => (
            <SelectItem key={price.id} value={price.amount}>
              ${price.amount}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Search Icon */}
      <div>
        <CiSearch className='text-[50px] bg-primary rounded-full p-3 text-white hover:scale-105 transition-all cursor-pointer' />
      </div>

    </div>
  );
}

export default Search;
