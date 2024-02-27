import React from 'react'

const GenderCheckbox = () => {
  return (
    <div className='flex gap-2 my-3'>

        <div className="form-control">
        <label className="cursor-pointer label flex gap-1">
            <span className="label-text">male</span>
            <input type="radio" name="option" defaultChecked className="checkbox checkbox-error" />
        </label>
        </div>

        <div className="form-control">
        <label className="cursor-pointer label flex gap-1">
            <span className="label-text">female</span>
            <input type="radio" name="option" className="checkbox checkbox-error" />
        </label>
        </div>

    </div>
  )
}

export default GenderCheckbox