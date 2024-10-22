import React from 'react'
import { Textarea } from "@/components/ui/textarea"

function TextAreaField({item}) {
  return (
    <div>
      <Textarea name={item.name}/>
    </div>
  )
}

export default TextAreaField