import { useField } from "formik";
import React from "react";
import { FormField, Input } from "semantic-ui-react";

export default function JobAdInput({...props}) {
    const [field, meta] = useField(props);
    return (
        <div>
            <FormField fluid error={meta.touched && !!meta.error} {...field} {...props} control={Input}/>
        </div>
    )
}
