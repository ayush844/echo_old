import React from 'react'

const GenderCheckbox = ({onCheckboxChange, selectedGender}) => {
  return (
    <div className='flex gap-2 my-3'>

        <div className="form-control">
        <label className={`cursor-pointer label flex gap-1 ${selectedGender==="male" ? "selected":""}`}>
            <span className="label-text">male</span>
            <input type="checkbox" defaultChecked className="checkbox checkbox-error" checked={selectedGender==="male"} onChange={()=>onCheckboxChange("male")}/>
        </label>
        </div>

        <div className="form-control">
        <label className={`cursor-pointer label flex gap-1 ${selectedGender==="female" ? "selected":""}`}>
            <span className="label-text">female</span>
            <input type="checkbox" className="checkbox checkbox-error" checked={selectedGender==="female"} onChange={()=>onCheckboxChange("female")}  />
        </label>
        </div>

    </div>
  )
}

export default GenderCheckbox