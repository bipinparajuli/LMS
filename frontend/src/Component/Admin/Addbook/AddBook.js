import React from 'react'
import Layout from '../../Layout/Layout'
import Form from '../../UI/Form/Form'

const AddBook = () => {
    return (

<Layout>
    
<div>
            <h1>Add Book</h1>
<Form labelone="Book Name"  labelthree="Department" labelfour="Publication"  labelsix="Author" labelseven="Stocks"  />
        </div>
        </Layout>
    )
}

export default AddBook
