import React from 'react'
import { Link } from "@reach/router"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
  } from "@chakra-ui/react"

function PageNav() {
    return (
        <Breadcrumb>
  <BreadcrumbItem>
    <BreadcrumbLink as={Link} to="/">
           Log in
    </BreadcrumbLink>
  </BreadcrumbItem>
  </Breadcrumb>
    )
}

export default PageNav
