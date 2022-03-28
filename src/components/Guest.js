import React from "react";
import { useParams } from "react-router-dom";
import "./../App.css"
import { Rate } from "antd";
import { Field, useFormik } from "formik"
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
      rating: Yup.number().required("Required"),
      phone: Yup.string(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[\s/0-9]*$/,
      "incorrect phone number format").min(3, "min length is 3").max(10, "max length is 10"
      ).required("Required"),
      comment: Yup.string()
    }),
    onSubmit: (values) => {
      //dispatch to store
    }
  })
  //console.log(props.commonState[guestIdx])
  return (
    <>
      {
        props.commonState[guestIdx].formInfo.rating === 0
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
            <Field
              as="input"
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
            <Field
              as="textarea"
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
    </>
  )
}

export default Guest