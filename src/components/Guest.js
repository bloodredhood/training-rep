import React from "react";
import { useParams } from "react-router-dom";
import "./../App.css"
import { Rate } from "antd";
import { useFormik } from "formik"
import * as Yup from "yup"

//value={props.commonState[guestIdx].formInfo.rating}

const Guest = (props) => {
  const { guestIdx } = useParams()
  const formik = useFormik({
    inintialValues: {
      rating: 0,
      phone: "",
      comment: ""
    },
    validationSchema: Yup.object({
      rating: Yup.number().min(1, "minimal is 1").max(5, "max is 5").required("Required"),
      phone: Yup.string(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[\s/0-9]*$/,
      "incorrect phone number format").min(3, "min length is 3").max(10, "max length is 10"
      ).required("Required"),
      comment: Yup.string()
    }),
    onSubmit: (values) => {
      //need dispatch to store (contains stringified values and submitted flag)
      console.log(JSON.stringify(values, null, 2))
    }
    
  })
  //formik.values.rating
  //formik.values.phone
  //formik.values.comment
  return (
    <div>
      {
        props.commonState[guestIdx].isSubmitted === false
          ? < form className="forma" onSubmit={formik.handleSubmit}>
            <label>NAME</label>
            <div className="formTextGray">{props.commonState[guestIdx].name}</div>
            <Rate
              value={formik.values.rating}
              onChange={formik.handleChange}
            />
            <div>
              <label htmlFor="phone">PHONE</label>
            </div>
            <input
              id="phone"
              name="phone"
              type="text"
              placeholder="phone"
              onChange={formik.handleChange}
              value={formik.values.phone}
            />
            <div>
              <label htmlFor="comment">COMMENT</label>
            </div>
            <textarea
              id="comment"
              name="comment"
              placeholder="comment"
              onChange={formik.handleChange}
              value={formik.values.comment}
            />
            <div>
              <button className="formButton">SAVE</button>
            </div>
          </form>
          : <div className="forma">
            <label>NAME</label>
            <div className="formTextGray">{props.commonState[guestIdx].name}</div>
            <Rate value={props.commonState[guestIdx].formInfo.rating} />
            <div>
              <label>PHONE</label>
            </div>
            <div className="formTextGray">
              {props.commonState[guestIdx].phone}
            </div>
            <div>
              <label>COMMENT</label>
            </div>
            <div className="formTextGray">
              {props.commonState[guestIdx].comment}
            </div>
          </div>
      }
    </div>
  )
}

export default Guest